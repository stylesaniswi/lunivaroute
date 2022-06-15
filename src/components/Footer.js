import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';

function Footer() {
    const { i18n } = useTranslation();

    function changeLanguage(e) {
        localStorage.setItem('lng', e.target.value);
        i18n.changeLanguage(e.target.value);
      }
  return (
    <div className='footer'>
      <button onClick={changeLanguage} value='en'>English</button>
      <button onClick={changeLanguage} value='np'>Nepali</button>
    </div>
  )
}

export default Footer