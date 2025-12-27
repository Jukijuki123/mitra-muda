import { HandFist  , MessageCircle, ArrowRight } from "lucide-react";

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
    <div className="bg-white border rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition">
      <div>
        <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
          {kategori?.label}
        </span>

        <h3 className="text-lg font-bold text-gray-900 mt-3">
          {judul}
        </h3>

        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {deskripsi}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <HandFist   size={16} />
            {likes}
          </span>

          <span className="flex items-center gap-1">
            <MessageCircle size={16} />
            {comments}
          </span>
        </div>

        <button
          onClick={onClick}
          className="flex items-center gap-1 px-4 py-1 rounded-md text-sm font-semibold text-white bg-primary hover:bg-primary-dark"
        >
          {cta}
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
