export const IdeaCard = ({
  judul,
  deskripsi,
  kategori,
  likes = 0,
  comments = 0,
  cta,
  onClick,
}) => {
  return (
    <div className="bg-white border border-primary rounded-xl p-5 flex flex-col justify-between">
      <div>
        <span className="text-sm text-blue-600 font-semibold px-5 py-1 bg-blue-600/20 rounded-full">
          {kategori?.label}
        </span>

        <h3 className="text-lg font-bold mt-2">
          {judul}
        </h3>

        <p className="text-gray-700 text-sm mt-2 line-clamp-2">
          {deskripsi}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          👍 {likes} · 💬 {comments}
        </span>

        <button
          onClick={onClick}
          className="text-sm text-white font-semibold px-5 py-1 bg-blue-600 rounded-xl hover:bg-primary-dark"
        >
          {cta}
        </button>
      </div>
    </div>
  );
};
