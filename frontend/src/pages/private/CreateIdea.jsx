import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

const CreateIdea = () => {
    const [form, setForm] = useState({
        judul: "",
        deskripsi: "",
        kategori: "",
    });
    const navigate = useNavigate();

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        api.post("/ideas", form)
        .then(() => navigate("/ideaboard"));
    };

    return (
        <div className="p-8 max-w-xl">
        <h1 className="text-xl font-bold mb-4">Unggah Ide</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
            <input
            name="judul"
            placeholder="Judul Ide"
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
            />

            <textarea
            name="deskripsi"
            placeholder="Deskripsi Ide"
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
            />

            <input
            name="kategori"
            placeholder="Kategori"
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Simpan Ide
            </button>
        </form>
        </div>
    );
};

export default CreateIdea;
