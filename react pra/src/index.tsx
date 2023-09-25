import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'


import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
       resources: {
      en: {
        translation: {
          "Welcome": "Welcome to React and react-i18next"
        }
      },
      fr: {
        translation: {
          "Welcome": "Welcome to This is French"
        }
      }
    },
    lng: "en", 
    fallbackLng: "en",

  });

  // function App(){
  //   const {t} = useTranslation();
  //   return <h2>{t('Welcome')}</h2>
  // }

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
