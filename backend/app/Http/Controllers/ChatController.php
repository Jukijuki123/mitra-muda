<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;
use App\Events\NewChatMessage;

class ChatController extends Controller
{
    public function index($collabId)
    {
        return Chat::with('user')
            ->where('collaboration_id', $collabId)
            ->get();
    }

    public function store(Request $request, $collabId)
    {
        $request->validate([
            'message' => 'required|string'
        ]);

        $chat = Chat::create([
            'collaboration_id' => $collabId,
            'user_id' => auth()->id(),
            'message' => $request->message
        ]);

        // 🔥 TRIGGER REALTIME EVENT
        broadcast(new NewChatMessage($chat))->toOthers();

        return response()->json($chat->load('user'));
    }
}

