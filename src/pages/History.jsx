import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';


function History() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Sample data (Replace with actual API call later)
  const [quotations, setQuotations] = useState([]);

  useEffect(() => {
    const fetchQuotations = async () => {
      try {
        const userId = localStorage.getItem("userId"); // Get userId from local storage
        if (!userId) {
          console.error("No user ID found. Please log in.");
          return;
        }
        const response = await fetch(`http://localhost:5001/api/quotations/${userId}`);
        const data = await response.json();
        setQuotations(data);
      } catch (error) {
        console.error("Error fetching quotations:", error);
      }
    };

    fetchQuotations();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleDownload = (id) => {
    alert(`Downloading quotation #${id}...`); // Replace with actual download logic
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-4 bg-blue-800">
        <Link to="/dashboard" className="text-lg font-bold text-white ml-6">{t('silfine')}</Link>
        <button onClick={handleLogout} className="bg-white text-blue-600 px-4 py-2 rounded-lg mr-6">
        {t('logout')}
        </button>
      </nav>

      {/* Title */}
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold text-gray-900">{t('historyTitle')}</h2>
        <p className="text-gray-600 mt-2">{t('historyDesc')}</p>
      </div>

      {/* History Table */}
      <div className="mt-6 w-[90%] md:w-[800px] bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">{t('date')}</th>
              <th className="p-3 text-left">{t('product')}</th>
              <th className="p-3 text-left">{t('price')}</th>
              <th className="p-3 text-left">{t('status')}</th>
              <th className="p-3 text-left">{t('download')}</th>
            </tr>
          </thead>
          <tbody>
            {quotations.length > 0 ? (
              quotations.map((quote) => (
                <tr key={quote.id} className="border-t">
                  <td className="p-3">{quote.date.split("T")[0]}</td>
                  <td className="p-3">
                    {Object.entries(quote.products).map(([productName, quantity]) => (
                      <div key={productName}>
                        {productName} (x{quantity})
                      </div>
                    ))}

                  </td>
                  <td className="p-3">{quote.total}¥</td>
                  <td className="p-3">{quote.status}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDownload(quote.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      {t('download')}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-3 text-gray-500">
                {t('noQuotations')}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
