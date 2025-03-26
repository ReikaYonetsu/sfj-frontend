import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import GetQuotation from "./pages/GetQuotation";
import History from "./pages/History";
import { useTranslation } from 'react-i18next';


function App() {
  const { i18n } = useTranslation();

const toggleLanguage = () => {
  const newLang = i18n.language === 'en' ? 'ja' : 'en';
  i18n.changeLanguage(newLang);
};

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/get-quotation" element={<GetQuotation />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <div className="fixed top-4 right-4 z-50">
    <button
      onClick={toggleLanguage}
      className="bg-white text-blue-600 font-bold py-1 px-3 rounded shadow"
    >
      {i18n.language === 'en' ? '日本語' : 'English'}
    </button>
  </div>
    </Router>

    
  

    
  );
}

export default App;
