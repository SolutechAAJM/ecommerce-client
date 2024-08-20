'use client';

import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translate = (key) => {
    const translations = {
      en: { welcome: 'Welcome', labels: { register: "Registrarse"}
       },
      es: { welcome: 'Bienvenido' },
    };
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};


export const useTranslation = () => {
  return useContext(TranslationContext);
};
