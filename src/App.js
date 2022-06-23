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
import Tablefilter from './components/Tablefilter';
import Login from './components/LoginUser/Login';
import Signup from './components/LoginUser/Signup';
import Formfilter from './components/Formfilter';
import Multistepform from './components/forms/Multistepform';
import RouteDetails from './components/Tables/RouteDetails';
import Dashboard from './components/Dashboard';


function App() {
  const myUserStats=useSelector((state)=>state.userStatus);
  const myUser=useSelector((state)=>state.user);
  
  console.log(myUser);
  sessionStorage.setItem("user",JSON.stringify(myUserStats));
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user);
  return (
    
    <div className='appBody'>
    {user == false? 
      <Login /> 
      :<>
      <Formfilter /> 
      
      <RouteDetails />
      </>
  }
    <Router>
      <Routes>
        <Route path="/" element={user==false ? <Dashboard />:""}/> 
        <Route path="/tablefilter" element={<Tablefilter />}/>
        {/* <Route path="/Login" element={<Login />}/>  */}
         <Route path="/FormOne" element={<FormOne />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
    </Router>

    
  
    

    </div>
  );
}

export default App;
