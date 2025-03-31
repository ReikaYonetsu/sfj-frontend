import { Link, useLocation } from "react-router-dom";

function HomeButton() {
  const location = useLocation();

  // Only show on /login and /signup
  const showOnRoutes = ["/login", "/signup"];
  if (!showOnRoutes.includes(location.pathname)) return null;

  return (
    <div className="absolute top-4 left-4 z-50">
      <Link
        to="/"
        className="text-2xl text-white font-bold px-4 py-2 rounded-lg  hover:bg-blue-800 transition"
      >
        Silfine Japan
      </Link>
    </div>
  );
}

export default HomeButton;
