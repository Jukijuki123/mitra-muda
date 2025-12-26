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
    <div className="bg-white rounded-xl shadow p-5 flex flex-col justify-between">
      <div>
        <span className="text-sm text-blue-600 font-semibold">
          {kategori?.label}
        </span>

        <h3 className="text-lg font-bold mt-2">
          {judul}
        </h3>

        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {deskripsi}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          👍 {likes} · 💬 {comments}
        </span>

        <button
          onClick={onClick}
          className="text-blue-600 font-semibold hover:underline"
        >
          {cta}
        </button>
      </div>
    </div>
  );
};
