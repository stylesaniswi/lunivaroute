import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: localStorage.getItem('lng'),
  resources: {
    en: {
      translations: require('./locales/en/translates.json')
    },
    np: {
      translations: require('./locales/np/translates.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'np'];

export default i18n;