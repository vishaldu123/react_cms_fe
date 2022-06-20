import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function HomeComponent() {
    const [homePage, setHomePage]=useState([]);
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
        const url = "/api/pages/home";
        fetch(url, requestOptions).then(response => response.json())
        .then(result => setHomePage(result))
        .catch(error => console.log('error', error));
      }
      return()=> { let flag= false;}
    })

    return (
    <>
        <Header/>
        {homePage.map(m=>
        <section key={m.id} class="h2-courses-area inarea-courses-area px-2">
            {console.log("m",m)}
            {m.position_text}
        </section>
        )}
        

        <Footer/>   
    </>
    );
}

export default HomeComponent;