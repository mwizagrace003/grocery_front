// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import '../styles/LanguageSwitcher.css'; // Importing the CSS file

// const LanguageSwitcher = () => {
//   const { t, i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div className="language-switcher-container">
//       <h1 className="language-switcher-header">{t('welcome')}</h1>
//       <div className="language-switcher-buttons">
//         <button
//           className="language-switcher-button"
//           onClick={() => changeLanguage('en')}
//         >
//           English
//         </button>
//         <button
//           className="language-switcher-button"
//           onClick={() => changeLanguage('fr')}
//         >
//           French
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LanguageSwitcher;
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css'; // Assuming you name the CSS file 'styles.css'

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation(); // Hook to access translations and i18n methods

  // Function to switch languages
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Switch language
  };

  return (
    <div className="language-switcher">
      <h1>{t('welcome')}</h1> {/* Translated text */}
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>French</button>
    </div>
  );
};

export default LanguageSwitcher;
