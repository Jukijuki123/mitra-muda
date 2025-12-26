const IdeaCard = ({ judul, deskripsi, kategori, cta, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white p-4 rounded-xl shadow hover:shadow-md transition"
    >
      <span className="text-sm text-blue-600">{kategori.label}</span>
      <h3 className="text-lg font-bold mt-2">{judul}</h3>
      <p className="text-gray-600 mt-1 line-clamp-3">{deskripsi}</p>

      <button className="mt-4 text-blue-600 font-semibold">
        {cta}
      </button>
    </div>
  );
};

export { IdeaCard };
