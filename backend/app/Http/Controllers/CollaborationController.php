<?php

namespace App\Http\Controllers;

use App\Models\Collaboration;
use App\Models\Idea;
use Illuminate\Http\Request;

class CollaborationController extends Controller
{
    // Kirim permintaan kolaborasi
    public function request($ideaId)
    {
        $idea = Idea::findOrFail($ideaId);
        $user = auth()->user();

        // Tidak boleh ngajak diri sendiri
        if ($idea->user_id === $user->id) {
            return response()->json([
                'message' => 'Tidak bisa mengajak kolaborasi ide sendiri'
            ], 400);
        }

        $collab = Collaboration::firstOrCreate(
            [
                'idea_id' => $idea->id,
                'requester_id' => $user->id,
            ],
            [
                'owner_id' => $idea->user_id,
                'status' => 'pending'
            ]
        );

        return response()->json([
            'message' => 'Permintaan kolaborasi dikirim',
            'data' => $collab
        ]);
    }

    // Lihat permintaan masuk (pemilik ide)
    public function incoming()
    {
        return Collaboration::with(['idea', 'requester'])
            ->where('owner_id', auth()->id())
            ->get();
    }

    // Terima / tolak kolaborasi
    public function respond(Request $request, $id)
    {
        $collab = Collaboration::where('id', $id)
            ->where('owner_id', auth()->id())
            ->firstOrFail();

        $request->validate([
            'status' => 'required|in:accepted,rejected'
        ]);

        $collab->update([
            'status' => $request->status
        ]);

        return response()->json([
            'message' => 'Status kolaborasi diperbarui',
            'data' => $collab
        ]);
    }

    public function status($ideaId)
    {
        $user = auth()->user();

        $collab = Collaboration::where('idea_id', $ideaId)
            ->where('requester_id', $user->id)
            ->first();

        return response()->json([
            'status' => $collab?->status ?? null
        ]);
    }
}
