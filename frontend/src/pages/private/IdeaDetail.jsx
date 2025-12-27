import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";
import { HandFist , MessageCircle, User } from "lucide-react";


const IdeaDetail = () => {
  const { id } = useParams();
  const [idea, setIdea] = useState(null);
  const [comment, setComment] = useState("");
  const [collabStatus, setCollabStatus] = useState(null);


  const fetchIdea = () => {
    api.get(`/ideas/${id}`)
      .then(res => setIdea(res.data));
  };

  const fetchCollabStatus = () => {
    api.get(`/ideas/${id}/collaboration-status`)
      .then(res => setCollabStatus(res.data.status));
  };

  useEffect(() => {
    fetchIdea();
    fetchCollabStatus();
  }, [id]);


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

  if (!idea) return <div className="p-8">Memuat detail ide...</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-3">
          {idea.kategori}
        </span>

        <h1 className="text-3xl font-bold text-gray-900">
          {idea.judul}
        </h1>

        <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
          <User size={16} />
          <span>Oleh {idea.user?.name}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-6">
        {idea.deskripsi}
      </p>

      {/* Action */}
      <div className="flex items-center gap-6 mb-8">
        
        <button
          onClick={handleLike}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          <HandFist size={18} />
          {idea.likes_count} Dukungan
        </button>

        {collabStatus === null && (
          <button
            onClick={() => {
              api.post(`/ideas/${idea.id}/collaborate`)
                .then(() => setCollabStatus('pending'));
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-xl"
          >
            🤝 Ajak Kolaborasi
          </button>
        )}

        {collabStatus === 'pending' && (
          <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl font-semibold">
            ⏳ Menunggu Persetujuan
          </span>
        )}

        {collabStatus === 'accepted' && (
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">
            ✅ Kolaborasi Diterima
          </span>
        )}

        {collabStatus === 'rejected' && (
          <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-xl font-semibold">
            ❌ Kolaborasi Ditolak
          </span>
        )}


        <div className="flex items-center gap-2 text-gray-500">
          <MessageCircle size={18} />
          {idea.comments_count} Komentar
        </div>
      </div>

      {/* Comments */}
      <div>
        <h3 className="font-semibold text-lg mb-3">
          Komentar
        </h3>

        <form onSubmit={handleComment} className="mb-5">
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Tulis komentar..."
            required
          />
          <button
            className="mt-2 bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800"
          >
            Kirim Komentar
          </button>
        </form>

        <div className="space-y-4">
          {idea.comments.map(c => (
            <div
              key={c.id}
              className="bg-gray-50 border rounded-xl p-4"
            >
              <p className="text-sm font-semibold text-gray-900">
                {c.user.name}
              </p>
              <p className="text-sm text-gray-700 mt-1">
                {c.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdeaDetail;
