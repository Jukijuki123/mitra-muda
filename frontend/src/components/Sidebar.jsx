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
    <div className="h-full bg-white border-r p-4 flex flex-col">
      <h1 className="text-xl font-bold mb-6 text-purple-600">MitraMuda</h1>

      <nav className="flex-1 space-y-2">
        {menus.map(m => (
          <NavLink
            key={m.path}
            to={m.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
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
