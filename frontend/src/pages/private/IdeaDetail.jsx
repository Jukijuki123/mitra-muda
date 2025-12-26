import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";

const IdeaDetail = () => {
    const { id } = useParams();
    const [idea, setIdea] = useState(null);

    useEffect(() => {
        api.get(`/ideas/${id}`)
        .then(res => setIdea(res.data));
    }, [id]);

    if (!idea) return <div className="p-8">Memuat detail ide...</div>;

    return (
        <div className="p-8 max-w-3xl">
        <h1 className="text-2xl font-bold mb-2">{idea.judul}</h1>
        <p className="text-gray-600 mb-4">
            Kategori: {idea.kategori}
        </p>
        <p className="mb-6">{idea.deskripsi}</p>

        <p className="text-sm text-gray-500">
            Oleh: {idea.user?.name}
        </p>
        </div>
    );
};

export default IdeaDetail;
