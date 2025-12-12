// Language Context
import React, { createContext, useState, useContext } from 'react';


const translations = {
  en: {
    nav: { home: 'Home', about: 'Our Story', services: 'Services', fleet: 'Our Fleet', contact: 'Get Help', quote: 'Quick Quote' },
    hero: { title: 'Zimbabwe\'s Most Trusted Roadside Partner', subtitle: '24/7 Emergency Response', cta: 'Get Assistance Now', phone: '078 057 9261' },
    services: { title: 'Services We Offer', towing: 'Professional Towing', recovery: 'Vehicle Recovery', roadside: '24/7 Roadside Help', emergency: 'Emergency Response' },
    about: { title: 'About Drive Zimbabwe', subtitle: 'Your trusted partner on every journey' },
    contact: { title: 'We\'re Here to Help', subtitle: 'Reach out anytime, day or night' }
  },
  nd: {
    nav: { home: 'Ikhaya', about: 'Indaba Yethu', services: 'Izinsizakalo', fleet: 'Izimoto Zethu', contact: 'Thola Usizo', quote: 'Inani Elisheshayo' },
    hero: { title: 'Umlingane Othembekileyo WeZimbabwe', subtitle: 'Ukuphendula Okuphuthumayo 24/7', cta: 'Thola Usizo Manje', phone: '078 057 9261' },
    services: { title: 'Izinsizakalo Esizihlinzekayo', towing: 'Ukuhudula Ochwepheshe', recovery: 'Ukubuyiswa Kwezimoto', roadside: 'Usizo Emgwaqeni 24/7', emergency: 'Ukuphendula Okuphuthumayo' },
    about: { title: 'Nge Drive Zimbabwe', subtitle: 'Umlingane wakho othembekileyo kuzo zonke izingendo' },
    contact: { title: 'Silapha Ukusiza', subtitle: 'Sithinte noma kunini, emini noma ebusuku' }
  },
  fr: {
    nav: { home: 'Accueil', about: 'Notre Histoire', services: 'Services', fleet: 'Notre Flotte', contact: 'Assistance', quote: 'Devis Rapide' },
    hero: { title: 'Partenaire Routier Le Plus Fiable Du Zimbabwe', subtitle: 'Intervention D\'urgence 24/7', cta: 'Obtenir De L\'aide', phone: '078 057 9261' },
    services: { title: 'Nos Services', towing: 'Remorquage Professionnel', recovery: 'Récupération De Véhicules', roadside: 'Assistance Routière 24/7', emergency: 'Intervention D\'urgence' },
    about: { title: 'À Propos De Drive Zimbabwe', subtitle: 'Votre partenaire de confiance pour chaque voyage' },
    contact: { title: 'Nous Sommes Là Pour Vous Aider', subtitle: 'Contactez-nous à tout moment' }
  }
};

const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

// Language Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const t = translations[language];
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
