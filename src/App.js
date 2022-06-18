import React, { useEffect, useState } from "react";
import MainComponent from "./layouts/MainComponent";
import HomeComponent from "./layouts/HomeComponent";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import './App.css';

const App=()=> {
    let [routers1, setRouters1]=useState([]);
  useEffect(()=>{
    let flag= true;
    if(flag== true){
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
              'Content-Type': 'application/json'
        },
      };
      const url = "/api/menu/1";
      fetch(url, requestOptions).then(response => response.json())
      .then(result => setRouters1(result))
      .catch(error => console.log('error', error));
    }
    return()=> { let flag= false;}
  })
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
