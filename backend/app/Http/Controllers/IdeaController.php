<?php

namespace App\Http\Controllers;

use App\Models\Idea;
use App\Models\Like;
use App\Models\Comment;
use Illuminate\Http\Request;

class IdeaController extends Controller
{
    public function index()
    {
        return response()->json(
            Idea::with('user')
                ->withCount(['likes', 'comments'])
                ->latest()
                ->get()
        );
    }


    public function show($id)
    {
        return response()->json(
            Idea::with(['user', 'comments.user'])
                ->withCount(['likes', 'comments'])
                ->findOrFail($id)
        );
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'kategori' => 'required|string',
        ]);

        $idea = Idea::create([
            'judul' => $validated['judul'],
            'deskripsi' => $validated['deskripsi'],
            'kategori' => $validated['kategori'],
            'user_id' => $request->user()->id,
        ]);

        return response()->json($idea, 201);
    }


}
