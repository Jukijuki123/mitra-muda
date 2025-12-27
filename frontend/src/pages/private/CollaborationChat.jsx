import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";
import echo from "../../utils/echo";

const CollaborationChat = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    // initial load
    api.get(`/collaborations/${id}/chat`)
      .then(res => setMessages(res.data));

    // join realtime channel
    const channel = echo.channel(`collaboration.${id}`)
      .listen(".chat.message", (e) => {
        setMessages(prev => [...prev, e.chat]);
      });

    return () => {
      echo.leave(`collaboration.${id}`);
    };
  }, [id]);

  const sendMessage = e => {
    e.preventDefault();

    api.post(`/collaborations/${id}/chat`, { message: text })
      .then(() => setText(""));
  };

  return (
    <div className="p-8 max-w-3xl mx-auto flex flex-col h-[80vh]">
      <h1 className="font-bold text-xl mb-4">
        Ruang Diskusi Kolaborasi
      </h1>

      <div className="flex-1 border rounded-xl p-4 overflow-y-auto space-y-3">
        {messages.map((m, i) => (
          <div key={i}>
            <p className="text-sm font-semibold">
              {m.user.name}
            </p>
            <p className="inline-block bg-gray-100 px-3 py-2 rounded-xl">
              {m.message}
            </p>
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="mt-4 flex gap-2">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          className="flex-1 border rounded-xl px-3 py-2"
          placeholder="Ketik pesan..."
          required
        />
        <button className="bg-blue-600 text-white px-4 rounded-xl">
          Kirim
        </button>
      </form>
    </div>
  );
};

export default CollaborationChat;
