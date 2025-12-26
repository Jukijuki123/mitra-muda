import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";

const IdeaDetail = () => {
  const { id } = useParams();
  const [idea, setIdea] = useState(null);
  const [comment, setComment] = useState("");

  const fetchIdea = () => {
    api.get(`/ideas/${id}`)
      .then(res => setIdea(res.data));
  };

  useEffect(() => {
    fetchIdea();
  }, [id]);

  const handleLike = () => {
    api.post(`/ideas/${id}/like`)
      .then(fetchIdea);
  };

  const handleComment = e => {
    e.preventDefault();
    api.post(`/ideas/${id}/comments`, { content: comment })
      .then(() => {
        setComment("");
        fetchIdea();
      });
  };

  if (!idea) return <div className="p-8">Memuat...</div>;

  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-2xl font-bold">{idea.judul}</h1>
      <p className="text-gray-500 mb-2">{idea.kategori}</p>

      <p className="mb-4">{idea.deskripsi}</p>

      <button
        onClick={handleLike}
        className="mb-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        👍 Like ({idea.likes_count})
      </button>

      <h3 className="font-semibold mb-2">
        Komentar ({idea.comments_count})
      </h3>

      <form onSubmit={handleComment} className="mb-4">
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="Tulis komentar..."
          required
        />
        <button className="mt-2 bg-gray-800 text-white px-3 py-1 rounded">
          Kirim
        </button>
      </form>

      <div className="space-y-3">
        {idea.comments.map(c => (
          <div key={c.id} className="bg-gray-100 p-3 rounded">
            <p className="font-semibold text-sm">{c.user.name}</p>
            <p className="text-sm">{c.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdeaDetail;
