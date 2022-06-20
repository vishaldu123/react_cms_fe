import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    const [mainMenu, setMainMenu]=useState([]);
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
      .then(result => setMainMenu(result))
      .catch(error => console.log('error', error));

    }return()=> { let flag= false;}
    })
    return (
        <div className="header-menu main-header-area">
            <div className="container">
                  <div className="menu-flax">
                      <div className="header-logo">
                          <Link to="/"><img src="images/Logo.png" alt=""/></Link>
                      </div>
                      <div className="menu-item">
                        <ul>
                             {mainMenu.map(m=>
                                <li key={m.id}>
                                    <Link to={"/"+m.slug}>{m.title}</Link>
                                </li>
                             )}
                        </ul>
                      </div>
                      <div className="search-option">
                        {/* <!-- Search elament --> */}
                        <div className="navigation-bar">
                            <button type="submit" className="search-btn navigation-bar-btn js-search-dropdown-toggle"  >
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8625 15.7156C17.3711 15.2449 16.8928 14.7606 16.4281 14.2634C16.0378 13.8667 15.8027 13.5782 15.8027 13.5782L12.8646 12.1752C14.0409 10.8412 14.6901 9.12381 14.6905 7.34523C14.6905 3.29591 11.3956 0 7.34523 0C3.29486 0 0 3.29591 0 7.34523C0 11.3945 3.29486 14.6905 7.34523 14.6905C9.19517 14.6905 10.8814 13.9979 12.1752 12.8657L13.5782 15.8038C13.5782 15.8038 13.8667 16.0388 14.2634 16.4292C14.6695 16.8101 15.2036 17.3253 15.7156 17.8636L17.1406 19.3242L17.7744 20.0021L20 17.7765L19.3221 17.1427C18.9244 16.7524 18.3935 16.234 17.8625 15.7156ZM7.34523 12.5918C4.45226 12.5918 2.09864 10.2382 2.09864 7.34523C2.09864 4.45226 4.45226 2.09864 7.34523 2.09864C10.2382 2.09864 12.5918 4.45226 12.5918 7.34523C12.5918 10.2382 10.2382 12.5918 7.34523 12.5918Z" fill="#111A39"/>
                                </svg>
                            </button>
                        </div>

                        <div className="mnmd-search-full">
                            <form action="#action" method="get">
                                <input type="text" name="s" className="form-control" placeholder="Enter your keywords" defaultValue=""/>
                                <span id="mnmd-search-remove"><i className="fal fa-times"></i></span>
                            </form>
                        </div>
                        {/* Search elament */}
                        <Link to="/" className="theme-btn" to="courses.html">Admission Course</Link>
                         {/* sidebar-menu  */}
                        <ul className="sidebar-menu">
                            <li><Link to="/" className="menu-oparetor " id="menu-opener"><i className="fal fa-ellipsis-v"></i> </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}