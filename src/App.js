import React, { useEffect, useState } from "react";
import MainComponent from "./layouts/MainComponent";
import HomeComponent from "./layouts/HomeComponent";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import './App.css';
// Admin Routes
import Login from "./admin/Login";
import Register from "./admin/Register"
// Admin Routes

const App=()=> {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/home"  element={<HomeComponent />}/>
        <Route path="/:page"  element={<MainComponent />}/>
        

        {/* Admin Routes */}
        <Route path="/admin/login"  element={<Login />}/>
        <Route path="/admin/register"  element={<Register />}/>
        {/* Admin Routes */}
        <Route path="/"  element={<HomeComponent />}/>
      </Routes>
      
    </BrowserRouter> 
  );
}

export default App;
