<?php

// Skrip ini membersihkan tabel personal_access_tokens jika ada
// dan menghapus entri migrasi bernama 2025_10_11_012818_create_personal_access_tokens_table
// Backup otomatis akan dibuat di folder backend/storage/backups/

$root = __DIR__ . '/..';
$envFile = $root . '/.env';
$backupDir = $root . '/storage/backups';
if (!is_dir($backupDir)) {
    mkdir($backupDir, 0755, true);
}

if (!file_exists($envFile)) {
    echo "Error: .env file not found at $envFile\n";
    exit(1);
}

// Parse .env (simple)
$env = parse_ini_file($envFile, false, INI_SCANNER_RAW);
// parse_ini_file may not parse env with quoted values correctly; fallback to manual parse
if ($env === false) {
    $env = [];
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#') continue;
        $parts = explode('=', $line, 2);
        if (count($parts) == 2) {
            $k = trim($parts[0]);
            $v = trim($parts[1]);
            $v = trim($v, "\"'");
            $env[$k] = $v;
        }
    }
}

$dbHost = $env['DB_HOST'] ?? '127.0.0.1';
$dbPort = $env['DB_PORT'] ?? '3306';
$dbName = $env['DB_DATABASE'] ?? null;
$dbUser = $env['DB_USERNAME'] ?? 'root';
$dbPass = $env['DB_PASSWORD'] ?? '';

if (!$dbName) {
    echo "Error: DB_DATABASE not found in .env\n";
    exit(1);
}

$dsn = "mysql:host={$dbHost};port={$dbPort};dbname={$dbName};charset=utf8mb4";
try {
    $pdo = new PDO($dsn, $dbUser, $dbPass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} catch (Exception $e) {
    echo "Error connecting to database: " . $e->getMessage() . "\n";
    exit(1);
}

echo "Connected to database {$dbName} at {$dbHost}:{$dbPort}\n";

// 1) Check if table personal_access_tokens exists
$stmt = $pdo->prepare("SHOW TABLES LIKE 'personal_access_tokens'");
$stmt->execute();
$exists = $stmt->fetch(PDO::FETCH_NUM) !== false;

if ($exists) {
    echo "Table personal_access_tokens exists. Creating backup and dropping it...\n";
    // Backup CREATE TABLE
    $stmt = $pdo->query("SHOW CREATE TABLE personal_access_tokens");
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $createSql = $row['Create Table'] ?? ($row['Create Table'] ?? null);
    $time = date('Ymd_His');
    $backupFile = "$backupDir/personal_access_tokens_backup_{$time}.sql";
    $fh = fopen($backupFile, 'w');
    if ($createSql) {
        fwrite($fh, "-- Backup created at $time\n");
        fwrite($fh, $createSql . ";\n\n");
    }
    // Backup table rows as INSERTs
    $rows = $pdo->query("SELECT * FROM personal_access_tokens")->fetchAll(PDO::FETCH_ASSOC);
    foreach ($rows as $r) {
        $cols = array_map(function($c){ return "`$c`"; }, array_keys($r));
        $vals = array_map(function($v) use ($pdo) { return $pdo->quote($v); }, array_values($r));
        $line = "INSERT INTO `personal_access_tokens` (" . implode(', ', $cols) . ") VALUES (" . implode(', ', $vals) . ");\n";
        fwrite($fh, $line);
    }
    fclose($fh);
    echo "Backup saved to $backupFile\n";

    // Drop the table
    $pdo->exec("DROP TABLE IF EXISTS personal_access_tokens");
    echo "Table personal_access_tokens dropped.\n";
} else {
    echo "Table personal_access_tokens does not exist, nothing to drop.\n";
}

// 2) Check migrations table for the stray migration entry
$targetMigration = '2025_10_11_012818_create_personal_access_tokens_table';
$stmt = $pdo->prepare('SELECT * FROM migrations WHERE migration = :m');
$stmt->execute([':m' => $targetMigration]);
$mrows = $stmt->fetchAll(PDO::FETCH_ASSOC);
if (count($mrows) > 0) {
    echo "Found " . count($mrows) . " migration row(s) matching $targetMigration. Backing up and deleting...\n";
    $time = date('Ymd_His');
    $migBackup = "$backupDir/migrations_backup_{$time}.csv";
    $fh = fopen($migBackup, 'w');
    // write header
    fputcsv($fh, array_keys($mrows[0]));
    foreach ($mrows as $r) fputcsv($fh, $r);
    fclose($fh);
    echo "Migration backup saved to $migBackup\n";

    // Delete the rows
    $del = $pdo->prepare('DELETE FROM migrations WHERE migration = :m');
    $del->execute([':m' => $targetMigration]);
    echo "Deleted migration row(s) for $targetMigration.\n";
} else {
    echo "No migration rows found for $targetMigration.\n";
}

echo "Done.\n";

