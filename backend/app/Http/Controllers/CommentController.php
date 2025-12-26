<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request, $ideaId)
    {
        $request->validate([
            'content' => 'required|string'
        ]);

        $comment = Comment::create([
            'user_id' => auth()->id(),
            'idea_id' => $ideaId,
            'content' => $request->content
        ]);

        return response()->json(
            $comment->load('user'),
            201
        );
    }
}
