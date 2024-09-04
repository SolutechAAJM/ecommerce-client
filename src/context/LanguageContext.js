'use client';

import { createContext, useContext, useState, useEffect } from "react";
import en from "../translations/en/index"
import { es } from "../translations/es/index"

const LanguageContext = createContext();

const translations = { en, es };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key) => {
    const keys = key.split(".");
    const translation = translations[language];
    if (!translation) {
      return key;
    }
    return keys.reduce((result, key) => result[key], translation);
  };


  const l = (key) => {
    const keys = key.split(".");
    const translation = translations[language].labels;
    if (!translation) {
      return key;
    }
    return keys.reduce((result, key) => result[key], translation);
  };

  const m = (key) => {
    const keys = key.split(".");
    const translation = translations[language].messages;
    if (!translation) {
      return key;
    }
    return keys.reduce((result, key) => result[key], translation);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, l, m }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);