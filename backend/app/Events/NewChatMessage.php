<?php

namespace App\Events;

use App\Models\Chat;
use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;

class NewChatMessage implements ShouldBroadcast
{
    use SerializesModels;

    public $chat;

    public function __construct(Chat $chat)
    {
        $this->chat = $chat->load('user');
    }

    public function broadcastOn()
    {
        // GROUP CHAT BERDASARKAN KOLABORASI
        return new Channel('collaboration.' . $this->chat->collaboration_id);
    }

    public function broadcastAs()
    {
        return 'chat.message';
    }
}
