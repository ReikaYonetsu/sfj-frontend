import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Silfine Japan</h1>
      <p className="mt-4 text-gray-600">Get the best solar energy solutions.</p>
      <div className="mt-6">
        <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded mr-2">Login</Link>
        <Link to="/signup" className="px-4 py-2 bg-gray-600 text-white rounded">Sign Up</Link>
      </div>
    </div>
  );
}

export default Homepage;
