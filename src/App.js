import React, { useEffect, useState } from "react";
import MainComponent from "./layouts/MainComponent";
import HomeComponent from "./layouts/HomeComponent";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import './App.css';

const App=()=> {

  return (
    <BrowserRouter>
      
        <Routes>

        <Route path="home"  element={<HomeComponent />}/>
        <Route path="/:page"  element={<MainComponent />}/>
        <Route path="/"  element={<HomeComponent />}/>
          
        </Routes>
      
    </BrowserRouter> 

  );
}

export default App;
