import { Link } from "react-router-dom";
import solarImage from "../assets/solar.png";
import { useTranslation } from 'react-i18next';
import LanguageDropdown from "./LanguageDropdown";


function Homepage() {
  const { t } = useTranslation();

  return (
    <div className="bg-blue-600 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-blue-800">
       <h1 className="text-lg font-bold">{t('welcome')}</h1>
       <div className="flex items-center space-x-4">
         <LanguageDropdown />
         <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-lg">{t('login')}</Link>
       </div>
      </nav>


      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center p-10 md:p-20">
        <div className="md:w-1/2 text-center md:text-left md:ml-16">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {t('getQuotation')}
          </h1>
          <p className="mt-4 text-lg">{t('getQuotationSubtitle')}</p>
          <Link to="/signup" className="mt-6 inline-block bg-green-500 px-6 py-3 text-white font-bold text-lg rounded-lg">
            {t('getQuotation')}
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={solarImage} alt="Solar Panel" className="w-80 md:w-[400px]" />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center px-6 py-12">
        <h2 className="text-3xl font-bold">{t('whyChooseUs')}</h2>
        <p className="mt-2 text-lg">{t('chooseUsDesc')}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          <FeatureCard title={t('instantPricingTitle')} description={t('instantPricingDesc')} />
          <FeatureCard title={t('userFriendlyTitle')} description={t('userFriendlyDesc')} />
          <FeatureCard title={t('comprehensiveOptionsTitle')} description={t('comprehensiveOptionsDesc')} />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="px-6 py-20 bg-blue-700 text-white text-center">
        <h2 className="text-6xl font-extrabold font-display">{t('howItWorks')}</h2>

        <div className="mt-12 flex flex-col items-center space-y-12">

          {/* StepCard 1 */}
          <div className="flex items-start w-full max-w-4xl border-t border-gray-400 pt-6">
            <div className="text-yellow-300 text-6xl font-bold w-16 text-left">1</div>
            <div className="ml-6 text-left">
              <h3 className="text-xl text-white mb-1">{t('step1Title')}</h3>
              <p className="text-white text-base">{t('step1Desc')}</p>
            </div>
          </div>

          {/* StepCard 2 */}
          <div className="flex items-start w-full max-w-4xl border-t border-gray-400 pt-6">
            <div className="text-yellow-300 text-6xl font-bold w-16 text-left">2</div>
            <div className="ml-6 text-left">
              <h3 className="text-xl text-white mb-1">{t('step2Title')}</h3>
              <p className="text-white text-base">{t('step2Desc')}</p>
            </div>
          </div>

          {/* StepCard 3 */}
          <div className="flex items-start w-full max-w-4xl border-t border-gray-400 pt-6">
            <div className="text-yellow-300 text-6xl font-bold w-16 text-left">3</div>
            <div className="ml-6 text-left">
              <h3 className="text-xl text-white mb-1">{t('step3Title')}</h3>
              <p className="text-white text-base">{t('step3Desc')}</p>
            </div>
          </div>

        </div>
      </div>


      {/* Contact Section */}
      <div className="bg-blue-800 p-12 text-center">
        <h2 className="text-3xl font-bold">{t('getInTouch')}</h2>
        <p className="mt-2 text-lg">{t('getInTouchDesc')}</p>
        <div className="mt-4">
          <p>📧 <a href="mailto:contact@silfine.jp" className="underline">contact@silfine.jp</a></p>
          <p>📞 092-985-9221</p>
          <p>📍 1-1-7, Sanyo Nishi, Shingu-machi, Kasuya-gun, Fukuoka, 811-0125, Japan.</p>
        </div>
        <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg">📩 {t('sendEmail')}</button>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 p-6 text-center text-sm">
        <p>© 2024 {t('footer')}</p>
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
