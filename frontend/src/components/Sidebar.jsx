import { NavLink } from "react-router-dom";
import { clearAuth } from "../utils/auth";

const menus = [
  { label: "Overview", path: "/dashboard" },
  { label: "IdeaBoard", path: "/ideaboard" },
  { label: "Kolaborasi", path: "/kolaborasi" },
  { label: "Tantangan", path: "/tantangan" },
];

export default function Sidebar() {
  return (
    <div className="h-full bg-white border-r-2 border-r-primary p-4 flex flex-col">
      <div className="border-b-2 border-b-primary p-6 mb-10">
      <h1 className="text-3xl font-bold text-center text-primary">Mitra<span className="text-secondary">Muda</span></h1>
      </div>

      <nav className="flex-1 space-y-2">
        {menus.map(m => (
          <NavLink
            key={m.path}
            to={m.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg bg-gray-100  ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-whiteGray"
              }`
            }
          >
            {m.label}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={() => {
          clearAuth();
          window.location.href = "/";
        }}
        className="mt-4 text-red-600 hover:underline"
      >
        Keluar
      </button>
    </div>
  );
}
