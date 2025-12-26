<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Idea extends Model
{
    protected $fillable = [
        'judul',
        'deskripsi',
        'kategori',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}