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

      {/* Centered Content */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
        {t('dashboardHeading')}
        </h1>
        <div className="mt-6 space-x-4">
          <Link
            to="/get-quotation"
            className="px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-700"
          >
            {t('dashboardQuoteBtn')}
          </Link>
          <Link
            to="/history"
            className="px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-700"
          >
            {t('dashboardHistoryBtn')}
          </Link>
        </div>
      </div>

      {/* SFJ Logo Image Positioned on the Right */}
      <img
        src={sfjLogo}
        alt="SFJ Logo"
        className="absolute right-10 bottom-10 w-40 md:w-64 opacity-90"
      />
    </div>
  );
}

export default Dashboard;
