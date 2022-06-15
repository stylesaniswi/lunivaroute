import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Layout from './components/Layout';

import './i18/config';
import Multistepform from './components/Multistepform';

function App() {
  return (
    <>
    <Layout />
    <Filter />
    <Multistepform />
    <Footer />
    </>
  );
}

export default App;
