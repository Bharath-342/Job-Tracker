import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function MainLayout() {

  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 transition">

      <header className="bg-white shadow-sm border-b border-slate-200">

        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

          <h1 className="text-xl font-bold text-indigo-600">
            JobTracker
          </h1>

          <nav className="flex items-center gap-6">

            <NavLink
              to="/dashboard"
              className="text-slate-600 hover:text-indigo-600"
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/analytics"
              className="text-slate-600 hover:text-indigo-600"
            >
              Analytics
            </NavLink>

            <span className="text-sm text-slate-500">
              {user?.name}
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Sign Out
            </button>

          </nav>

        </div>

      </header>

      <main>
        <Outlet />
      </main>

    </div>
  );
}

export default MainLayout;