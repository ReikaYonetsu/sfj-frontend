import { Link } from "react-router-dom";
import solarImage from "../assets/solar.png";

function Homepage() {
  return (
    <div className="bg-blue-600 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-blue-800">
        <h1 className="text-lg font-bold">Silfine Japan</h1>
        <div>
          <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-lg">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center p-10 md:p-20">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            GET YOUR SOLAR QUOTE INSTANTLY
          </h1>
          <p className="mt-4 text-lg">Effortless solar panel pricing at your fingertips.</p>
          <Link to="/get-quotation" className="mt-6 inline-block bg-green-500 px-6 py-3 text-white font-bold text-lg rounded-lg">
            Get Your Quote Now
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={solarImage} alt="Solar Panel" className="w-80 md:w-[400px]" />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center px-6 py-12">
        <h2 className="text-3xl font-bold">WHY CHOOSE US?</h2>
        <p className="mt-2 text-lg">Discover the advantages of automated quoting.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          <FeatureCard title="Instant Pricing" description="Receive accurate solar panel quotes in seconds, not days." />
          <FeatureCard title="User-Friendly Interface" description="Our platform is designed for simplicity, making quoting a breeze." />
          <FeatureCard title="Comprehensive Options" description="Explore a variety of solar solutions tailored to your needs." />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold">HOW IT WORKS</h2>
        <div className="mt-6 space-y-8">
          <StepCard number="1" title="Step 1" description="Enter your details to get started with your quote." />
          <StepCard number="2" title="Step 2" description="Receive tailored quotes based on your specifications." />
          <StepCard number="3" title="Step 3" description="Review your options and select the best plan for you." />
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-800 p-12 text-center">
        <h2 className="text-3xl font-bold">GET IN TOUCH</h2>
        <p className="mt-2 text-lg">We're here to help you.</p>
        <div className="mt-4">
          <p>📧 <a href="mailto:contact@silfine.jp" className="underline">contact@silfine.jp</a></p>
          <p>📞 092-985-9221</p>
          <p>📍 1-1-7, Sanyo Nishi, Shingu-machi, Kasuya-gun, Fukuoka, 811-0125, Japan.</p>
        </div>
        <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg">📩 Send Email</button>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 p-6 text-center text-sm">
        <p>© 2024 Silfine Japan | Your Solar Partner</p>
      </footer>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ title, description }) {
  return (
    <div className="bg-white text-blue-900 p-6 rounded-lg w-72 shadow-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
}

// Step Card Component
function StepCard({ number, title, description }) {
  return (
    <div className="flex items-center space-x-6">
      <div className="text-5xl font-bold text-yellow-400">{number}</div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}

export default Homepage;
