import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom'
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
        {Page.map(m=>
          <span key={m.id}>
            <Header />
            <section className="about-banner-area">
              <div className="container">
                <div className="banner-text text-center">
                    <h1 className="wow fadeInDown main_head_title" data-wow-duration="1s">{m.title}</h1>
                    <Link to="index.html">Home <span>/</span></Link>
                    <Link className="about-link" to={"/"+m.slug}>{m.title}</Link>
                </div>
              </div>
            </section>
            <section className="h2-courses-area inarea-courses-area px-4">
            <div dangerouslySetInnerHTML={{ __html: m.content}} />
            </section>
          </span>
        )}
      <Footer/>   
    </>
    );
}

export default MainComponent;