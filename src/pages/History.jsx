import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function History() {
  const navigate = useNavigate();

  // Sample data (Replace with actual API call later)
  const [quotations] = useState([
    {
      id: 1,
      date: "2024-03-01",
      products: [
        { name: "SFJ-100-EWH", quantity: 2, price: 20000 },
        { name: "SFJ-400-EWH", quantity: 1, price: 30000 },
      ],
      total: 50000,
      status: "Pending",
    },
    {
      id: 2,
      date: "2024-02-25",
      products: [
        { name: "SFJ-210-EWH", quantity: 1, price: 15000 },
        { name: "SFJ-300-EWH", quantity: 2, price: 36000 },
      ],
      total: 51000,
      status: "Approved",
    },
  ]);

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
      <Link to="/dashboard" className="text-lg font-bold text-white ml-6">SilfineJapan</Link>
      <button onClick={handleLogout} className="bg-white text-blue-600 px-4 py-2 rounded-lg mr-6">
          Logout
        </button>
      </nav>

      {/* Title */}
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold text-gray-900">Quotation History</h2>
        <p className="text-gray-600 mt-2">Below are the quotations officially submitted to the company.</p>
      </div>

      {/* History Table */}
      <div className="mt-6 w-[90%] md:w-[800px] bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Products</th>
              <th className="p-3 text-left">Total Price</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Download</th>
            </tr>
          </thead>
          <tbody>
            {quotations.length > 0 ? (
              quotations.map((quote) => (
                <tr key={quote.id} className="border-t">
                  <td className="p-3">{quote.date}</td>
                  <td className="p-3">
                    {quote.products.map((p) => (
                      <div key={p.name}>
                        {p.name} (x{p.quantity})
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
                      Download
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-3 text-gray-500">
                  No submitted quotations found.
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
