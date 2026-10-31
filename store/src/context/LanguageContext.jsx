import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';
import { playRetroSound } from '../utils/sound';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    // 1. Check local storage first
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('store_lang');
      if (saved === 'vi' || saved === 'en') return saved;
      // 2. Initial fallback from browser navigator
      const navLang = navigator.language || navigator.userLanguage || '';
      return navLang.toLowerCase().startsWith('vi') ? 'vi' : 'en';
    }
    return 'vi';
  });

  useEffect(() => {
    // If not previously chosen by the user, detect country by IP
    const saved = localStorage.getItem('store_lang');
    if (!saved) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      fetch('https://ipapi.co/country_code/', { signal: controller.signal })
        .then((res) => (res.ok ? res.text() : ''))
        .then((cc) => {
          clearTimeout(timeoutId);
          const country = (cc || '').trim().toUpperCase();
          if (country === 'VN') {
            setLangState('vi');
            localStorage.setItem('store_lang', 'vi');
          } else if (country) {
            setLangState('en');
            localStorage.setItem('store_lang', 'en');
          }
        })
        .catch(() => {
          // Fallback to navigator
        });
    }
  }, []);

  const setLang = (newLang) => {
    if (newLang === 'vi' || newLang === 'en') {
      setLangState(newLang);
      localStorage.setItem('store_lang', newLang);
      playRetroSound('select');
    }
  };

  const toggleLang = () => {
    const next = lang === 'vi' ? 'en' : 'vi';
    setLang(next);
  };

  const t = TRANSLATIONS[lang] || TRANSLATIONS.vi;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
