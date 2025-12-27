<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Idea;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        // Ambil ide terbaru
        $ideas = Idea::with('user')
            ->withCount(['likes', 'comments'])
            ->orderByDesc('likes_count')
            ->latest()
            ->take(4)
            ->get();

        // Statistik
        $stats = [
            'total_ideas' => Idea::count(),
            'your_ideas' => Idea::where('user_id', $user->id)->count(),
        ];

        return response()->json([
            'user' => $user,
            'stats' => $stats,
            'ideas' => $ideas
        ]);
    }
}
