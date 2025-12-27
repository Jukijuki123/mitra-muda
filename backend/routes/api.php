<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CollaborationController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\IdeaController;
use App\Http\Controllers\LikeController;

// Auth (PUBLIC)
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Authenticated routes
Route::middleware('auth:sanctum')->group(function () {

    // Auth
    Route::post('/logout', [AuthController::class, 'logout']);

    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index']);

    // IdeaBoard
    Route::get('/ideas', [IdeaController::class, 'index']);
    Route::get('/ideas/{id}', [IdeaController::class, 'show']);
    Route::post('/ideas', [IdeaController::class, 'store']);
    Route::post('/ideas/{id}/like', [LikeController::class, 'toggle']);
    Route::post('/ideas/{id}/comments', [CommentController::class, 'store']);

    // Kolaborasi
    Route::post('/ideas/{id}/collaborate', [CollaborationController::class, 'request']);
    Route::get('/collaborations/incoming', [CollaborationController::class, 'incoming']);
    Route::post('/collaborations/{id}/respond', [CollaborationController::class, 'respond']);


});
