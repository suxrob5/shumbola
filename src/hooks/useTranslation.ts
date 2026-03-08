"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (path: string) => {
    const keys = path.split(".");
    let result: any = translations[language];

    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return path; // Fallback to path if key not found
      }
    }

    return result;
  };

  return { t, language };
};
