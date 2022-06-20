import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Layout from './components/Layout';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormOne from "./components/FormOne";

import './i18/config';
import Multistepform from './components/Multistepform';
import Tablefilter from './components/Tablefilter';

function App() {
  return (
    
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Tablefilter />}/>
        <Route path="/FormOne" element={<FormOne />} />
    </Routes>
    </Router>
    {/* <Layout /> 
    <Multistepform />
    <Footer /> */}
    </>
  );
}

export default App;
