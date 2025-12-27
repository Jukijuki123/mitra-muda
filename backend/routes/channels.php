<?php

use App\Models\Collaboration;

Broadcast::channel('collaboration.{id}', function ($user, $id) {
    return Collaboration::where('id', $id)
        ->where(function ($q) use ($user) {
            $q->where('owner_id', $user->id)
              ->orWhere('requester_id', $user->id);
        })
        ->where('status', 'accepted')
        ->exists();
});
