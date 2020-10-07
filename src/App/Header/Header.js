import React from 'react';
import { Link } from 'react-router-dom';

import Deco from "../../common/image/Deco.png"

import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className='headerContainer'>
                    <div className="navBar">
                    <ul className="list">
                        <li className='selected'>
                            <div>
                            <Link to='/'><span>HOME</span></Link>
                            </div>
                        </li>
                        <li>
                            <div>
                            <a href="/">ABOUT ME</a>
                            </div>
                        </li>
                        <li>  
                            <div>
                            <a href="/">CONTACT US</a>
                            </div>
                        </li>
                    </ul>
                    </div>
                    <div className="logo">
                        <img src={Deco} alt=""/>
                        <p>BLOG</p>
                    </div>
                    <div className="socialNet">
                        <div className="icon">
                            <i className="fas fa-rss"></i>
                        </div>
                        <div className="icon">
                            <i className="fab fa-twitter"></i>
                        </div>
                        <div className="icon">
                            <i className="fab fa-tumblr"></i>
                        </div>
                        <div className="icon">
                            <i className="fab fa-facebook-f"></i>
                        </div>
                        <div className="icon">
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
    )
}

export default Header