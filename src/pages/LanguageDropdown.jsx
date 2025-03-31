import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="relative mr-4">
      <button
        onClick={() => setOpen(!open)}
        className="bg-white text-blue-600 px-4 py-2 rounded-lg"
      >
        🌐 {i18n.language === 'ja' ? '日本語' : 'English'}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white text-blue-600 rounded-md shadow-lg z-50">
          <button
            onClick={() => changeLanguage('en')}
            className="block px-4 py-2 hover:bg-blue-100 w-full text-left"
          >
            🇬🇧 English
          </button>
          <button
            onClick={() => changeLanguage('ja')}
            className="block px-4 py-2 hover:bg-blue-100 w-full text-left"
          >
            🇯🇵 日本語
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
