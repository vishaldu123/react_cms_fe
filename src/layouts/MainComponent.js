import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";

function MainComponent() {
    const [Page, setPage]=useState([]);
    const location = useLocation();
    
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
      const url = "/api/pages/p"+location.pathname;
      
      fetch(url, requestOptions).then(response => response.json())
      .then(result => setPage(result))
      .catch(error => console.log('error', error));
    
    }return()=> { let flag= false;}
  })

    return (
    <>
        <Header/>
        {Page.map(m=>
        <section key={m.id} className="h2-courses-area inarea-courses-area px-4">
        <div dangerouslySetInnerHTML={{ __html: m.content}} />
        </section>
        )}
        

        <Footer/>   
    </>
    );
}

export default MainComponent;