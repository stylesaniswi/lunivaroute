import React from 'react'
import {Trans, useTranslation } from 'react-i18next';

function Layout() {
    const { t } = useTranslation();
  return (
    <div>
        <h1>I am writing in {t('language')}</h1>
        <h2>{t('full')} {t('name')}</h2>
        <h2>{t('owner')} {t('name')}</h2>
        <p><Trans>full</Trans></p>

    </div>
  )
}

export default Layout