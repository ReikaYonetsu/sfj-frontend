import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function GetQuotation() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [installationType, setInstallationType] = useState("Adhesive bonding");
    const [quantities, setQuantities] = useState({
        "SFJ-100-EWH": 0,
        "SFJ-125-EWH": 0,
        "SFJ-210-EWH": 0,
        "SFJ-300-EWH": 0,
        "SFJ-400-EWH": 0,
        "SFJ-400-EWH/F": 0,
        "SFJ-520-EWH": 0,
    });

    const productPrices = {
        "SFJ-100-EWH": 10000,
        "SFJ-125-EWH": 12000,
        "SFJ-210-EWH": 15000,
        "SFJ-300-EWH": 18000,
        "SFJ-400-EWH": 20000,
        "SFJ-400-EWH/F": 22000,
        "SFJ-520-EWH": 25000,
    };

    const handleQuantityChange = (product, change) => {
        setQuantities((prev) => ({
            ...prev,
            [product]: Math.max(0, prev[product] + change),
        }));
    };

    const handleNextStep = () => {
        if (step < 4) setStep(step + 1);
    };

    const handlePreviousStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const totalAmount = Object.keys(quantities).reduce(
        (total, product) => total + quantities[product] * productPrices[product],
        0
    );
    const handleSubmit = async () => {
        try {
            const userId = localStorage.getItem("userId"); // Get userId from local storage
            if (!userId) {
              console.error("No user ID found. Please log in.");
              return;
            }          const response = await fetch("http://localhost:5001/api/quotations/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userId,
              products: quantities,
              total: totalAmount,
            }),
          });
      
          if (!response.ok) throw new Error("Failed to submit quotation");
          
          navigate("/history");
        } catch (error) {
          console.error("Error submitting quotation:", error);
        }
      };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            {/* Navbar */}
            <nav className="absolute top-0 w-full flex justify-between items-center p-4 bg-blue-800">
                <Link to="/dashboard" className="text-lg font-bold text-white ml-6">SilfineJapan</Link>
                <button onClick={handleLogout} className="bg-white text-blue-600 px-4 py-2 rounded-lg mr-6">
                    Logout
                </button>
            </nav>

            {/* Main Content */}
            <div className="text-center mt-20">
                <h2 className="text-3xl font-bold text-gray-900">Get a project quote</h2>
                <p className="mt-2 text-gray-600">Please fill the form below to receive a quote for your project.</p>
            </div>

            {/* Step Indicator */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[600px]">
                <div className="flex justify-center space-x-4 mb-6">
                    {[1, 2, 3, 4].map((s) => (
                        <div
                            key={s}
                            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${step === s ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800"
                                }`}
                        >
                            {s}
                        </div>
                    ))}
                </div>

                {/* Step 1: Product Selection */}
                {step === 1 && (
                    <>
                        <h3 className="text-lg font-bold text-gray-900">Our products</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Please select which service you are interested in and set quantity.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {Object.keys(quantities).map((product) => (
                                <div key={product} className="flex items-center justify-between border p-3 rounded-lg text-blue-600 font-bold">
                                    <span>{product}</span>
                                    <div className="flex items-center space-x-2">
                                        <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded" onClick={() => handleQuantityChange(product, -1)}>-</button>
                                        <span className="text-gray-900">{quantities[product]}</span>
                                        <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded" onClick={() => handleQuantityChange(product, 1)}>+</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Step 2: Installation Type */}
                {step === 2 && (
                    <>
                        <h3 className="text-lg font-bold text-gray-900">Installation</h3>
                        <p className="text-sm text-gray-600 mb-4">Please choose installation.</p>
                        <div className="flex space-x-4">
                            {["Adhesive bonding", "Mounting"].map((type) => (
                                <button
                                    key={type}
                                    className={`p-4 border rounded-lg w-1/2 ${installationType === type ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
                                    onClick={() => setInstallationType(type)}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </>
                )}

                {/* Step 3: Pricing Table */}
                {step === 3 && (
                    <>
                        <h3 className="text-lg font-bold text-gray-900">Total price</h3>
                        <p className="text-sm text-gray-600 mb-4">Based on your selection, this is the approximate price:</p>
                        <table className="w-full border">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="p-2">Product</th>
                                    <th className="p-2">Quantity</th>
                                    <th className="p-2">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(quantities).map(
                                    (product) =>
                                        quantities[product] > 0 && (
                                            <tr key={product} className="border-t">
                                                <td className="p-2">{product}</td>
                                                <td className="p-2 text-center">{quantities[product]}</td>
                                                <td className="p-2">{quantities[product] * productPrices[product]}¥</td>
                                            </tr>
                                        )
                                )}
                                <tr className="bg-gray-200 font-bold">
                                    <td className="p-2">Total</td>
                                    <td className="p-2 text-center">-</td>
                                    <td className="p-2">{totalAmount}¥</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}

                {/* Step 4: Confirmation */}
                {step === 4 && (
                    <>
                        <h3 className="text-lg font-bold text-gray-900">Your quotation is successfully done!</h3>
                        <button
                            onClick={handleSubmit}
                            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                        >
                            Submit
                        </button>          </>
                )}

                {/* Navigation Buttons */}
                <div className="mt-6 flex justify-between">
                    {step > 1 && <button onClick={handlePreviousStep} className="text-blue-600">Previous step</button>}
                    {step < 4 && <button onClick={handleNextStep} className="bg-blue-600 text-white px-6 py-3 rounded-lg">Next step</button>}
                </div>
            </div>
        </div>
    );
}

export default GetQuotation;
