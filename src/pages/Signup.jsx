import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import signupBg from "../assets/signup.png";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5001/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Signup failed");

      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${signupBg})` }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-blue-600">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="mt-6 space-y-4" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-bold">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
