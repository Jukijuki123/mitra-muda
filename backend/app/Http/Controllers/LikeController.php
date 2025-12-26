<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function toggle($ideaId)
    {
        $user = auth()->user();

        $like = Like::where('user_id', $user->id)
            ->where('idea_id', $ideaId)
            ->first();

        if ($like) {
            $like->delete();
        } else {
            Like::create([
                'user_id' => $user->id,
                'idea_id' => $ideaId
            ]);
        }

        return response()->json([
            'likes' => Like::where('idea_id', $ideaId)->count()
        ]);
    }
}

