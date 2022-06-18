import React from 'react';
import PropTypes from 'prop-types';

import NavBar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

function MainComponent() {
    return (
    <>
        <Header/>
        <NavBar/>
        <section></section>
        <Footer/>   
    </>
    );
}

export default MainComponent;