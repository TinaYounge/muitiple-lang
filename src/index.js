import React from 'react';
import ReactDOM from 'react-dom';

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import './index.css';
import App from './App';
// import App from './App';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .init({

    detection:{  order: [ 'cookie', 'htmlTag','localStorage',  'path', 'subdomain'],
  caches:["cookie"]},
  backend:{
    loadPath: '/assets/locales/en/translation.json',

  },
  fallbackLng: "en",

  react:{
    useSuspense:false
  }
  });

// function App() {
//   const { t,i18n } = useTranslation();

//   return <h2>{t("welcome_to_react")}</h2>;
// }

// append app to dom

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
