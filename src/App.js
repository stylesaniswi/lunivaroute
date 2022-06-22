import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Layout from './components/Layout';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormOne from "./components/FormOne";

import './i18/config';
import { useSelector } from 'react-redux';
import Multistepform from './components/Multistepform';
import Tablefilter from './components/Tablefilter';
import Login from './components/LoginUser/Login';
import Signup from './components/LoginUser/Signup';


function App() {
  const myUserStats=useSelector((state)=>state.userStatus);
  const myUser=useSelector((state)=>state.user);
  console.log(myUser);
  sessionStorage.setItem("user",JSON.stringify(myUser));
  return (
    
    <div className='appBody'>
    <Router>
      <Routes>
        <Route path="/" element={!myUserStats?<Login /> : <Tablefilter />}/> 
        {/* <Route path="/tablefilter" element={<Tablefilter />}/> */}
         <Route path="/FormOne" element={<FormOne />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
    </Router>
  
      {/* <Layout /> 
    <Multistepform />
    <Footer /> */}
    </div>
  );
}

export default App;
