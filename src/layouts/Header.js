import React from "react";
import { Link } from 'react-router-dom';

export default function Header(){
    return (
    <div className="header-area">
        <div className="container">
            <div className="top-header">
                <ul className="left-item">
                    <li>
                        <span><i className="flaticon-telephone"></i></span>
                        <Link to="tel:+123-4562-4256">+123-4562-4256</Link>
                    </li>
                    <li>
                        <span className="email"><i className="flaticon-email"></i></span>
                        <Link className="maile" to="mailto:larning.driving@example.com">larning.driving@example.com</Link>
                    </li>
                </ul>
                <ul className="right-item">
                    <li><Link to="https://www.facebook.com"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="https://www.twitter.com"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></Link></li>
                    <li><Link to="https://www.googleplus.com"><i className="fab fa-google-plus-g"></i></Link></li>
                    <li> <Link to="https://www.instagram.com"><i className="fab fa-instagram"></i> </Link></li>
                </ul>
            </div>
        </div>
    </div>
    );
}