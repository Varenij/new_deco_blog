import React from 'react';

import image10 from "../../common/image/10.png"
import image11 from "../../common/image/11.png"

import "./Footer.css"



const Footer = () => {
 
    return ( 
        <div className="footer">
            <div className="container">
                <div className="footerContainer">
                    <div className="footer-info">
                        <div className="about-blog">
                            <h1>ABOUT BLOG</h1>
                            <p>Lorem ipsum dolor sit amet, conser adipisicing  esse cillum dolore nulla pariatur. </p>
                            <div className="footer-pic">
                            <img src={image10} alt=""/>
                            </div>
                        </div>
                        <div className="latest-tweets">  
                            <h1>LAREST TWEETS</h1>
                            <h2><i className="fab fa-twitter"></i> @Twitter@magicalrebekah</h2>
                            <p>Developer Advocate @heyval isaiyou knows the very well is about things .</p>
                            <h2><i className="fab fa-twitter"></i> @Twitter@magicalrebekah</h2>
                            <p>Developer Advocate hav a great work this knows the very well is about things.</p>
                        </div>
                        <div className="follow-me-instagram">
                            <h1>FOLLOW ME INSTAGRAM</h1>
                            <div className="insta-pic">
                            <img src={image11} alt=""/>
                            <img src={image11} alt=""/>
                            <img src={image11} alt=""/>
                            <img src={image11} alt=""/>
                            <img src={image11} alt=""/>
                            <img src={image11} alt=""/>
                            </div>  
                        </div>
                        <div className="latest-comments">
                            <h1>LATEST COMMENT</h1>
                            <h2>From Alex :</h2>
                            <p>Developer Advocate @heyval isaiyou know the very well is talking about things.</p>
                            <h2>From Jhon Doe :</h2>
                            <p>Developer Advocate @heyval isaiyou know the very well is talking about things.</p>
                        </div>
                    </div>
                    <div className="copyright">
                        @2015 COPYRIGHT .ALL RIGHT RESERVED BY AWESOME THEME   |   TERMS POLICY   |   DISCLAIMER
                        
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Footer