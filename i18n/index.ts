import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n, { LanguageDetectorAsyncModule } from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

import en from "./en.json";
import ar from "./ar.json";
import { I18nManager } from "react-native";
import { reloadAsync } from "expo-updates";

export const locales = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

export const DEFAULT_LOCALE = "en";

const isEnglish = Localization.locale.includes("en");

const defaultLang = isEnglish ? "en" : "ar";

export const currentLanguage = i18n.language || defaultLang;

const useLanguageStorage: LanguageDetectorAsyncModule = {
  type: "languageDetector",
  async: true,
  detect: (callback) => {
    AsyncStorage.getItem("lang").then((lang) => {
      if (lang) return callback(lang);
    });
  },
  init: () => null,
  cacheUserLanguage: (language: string) => {
    AsyncStorage.setItem("lang", language).then(() => {
      const isRtl = I18nManager.isRTL;

      if (language.includes("ar")) {
        I18nManager.allowRTL(true);
        I18nManager.forceRTL(true);
        if (!isRtl) reloadAsync();
      } else {
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
        if (isRtl) reloadAsync();
      }
    });
  },
};

i18n
  .use(useLanguageStorage)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    fallbackLng: defaultLang,
    resources: locales,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
