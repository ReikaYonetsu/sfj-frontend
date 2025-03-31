import { Link, useNavigate } from "react-router-dom";
import dashboardBg from "../assets/dashboardbg.png";
import sfjLogo from "../assets/sfjlogo.png";
import { useTranslation } from 'react-i18next';


function Dashboard() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className="h-screen flex flex-col items-left justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${dashboardBg})` }}
    >
      {/* Navbar */}
      <nav className="absolute top-0 w-full flex justify-between items-center p-4 bg-blue-800">
        <Link to="/dashboard" className="text-lg font-bold text-white ml-6">{t('silfine')}</Link>
        <button onClick={handleLogout} className="bg-white text-blue-600 px-4 py-2 rounded-lg mr-6">
          {t('logout')}
        </button>
      </nav>

{/* Title + Logo Block */}
<div className="flex flex-col md:flex-row items-center justify-between px-20 mt-0 w-full max-w-7xl mx-auto mb-50">
  {/* Left: Title + Buttons */}
  <div className="text-white max-w-2xl md:text-left text-center">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
      GET YOUR <br />
      SOLAR QUOTE <br />
      INSTANTLY
    </h1>

    <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
      <Link
        to="/get-quotation"
        className="px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-700"
      >
        {t('dashboardQuoteBtn')}
      </Link>
      <Link
        to="/history"
        className="px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-700"
      >
        {t('dashboardHistoryBtn')}
      </Link>
    </div>
  </div>

  {/* Right: Logo */}
  <img
    src={sfjLogo}
    alt="SFJ Logo"
    className="w-52 md:w-72 lg:w-90 mt-10 md:mt-0 opacity-90"
  />
</div>


    </div>
  );
}

export default Dashboard;
