import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { IdeaCard } from "../../components/IdeaCard";

const IdeaBoard = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/ideas")
      .then(res => setIdeas(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8">Memuat ide...</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">IdeaBoard</h1>
        <button
          onClick={() => navigate("/ideas/create")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Unggah Ide
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ideas.map(idea => (
          <IdeaCard
            key={idea.id}
            judul={idea.judul}
            deskripsi={idea.deskripsi}
            kategori={{ label: idea.kategori }}
            cta="Lihat Detail"
            onClick={() => navigate(`/ideas/${idea.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default IdeaBoard;
