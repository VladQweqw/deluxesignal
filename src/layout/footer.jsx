import React from 'react'

import '../styles/footer.css';

export default function Footer() {


    return(

        <footer className="footer" id='contact'>
            
                <div className="footerWrapper">

                <div className="footerBuyNow footerSection">
                <span className="logo">
                    <h1>DeluxSignal</h1>
                </span>
            <a href="#pricing">
            <button className="buyBtn"> <span className='text'> Buy now</span></button>

            </a>
                </div>

            <div className="footerResources footerSection">
                <h4 className="footerTitle">Additional Resources</h4>
               
                    <div className="content">
                            <ul className="footerUl">
                            <li>Affiliate Program</li>
                            <li>Free indicators</li>
                            <li>Changelog</li>
                            <li>About Us</li>
                            <li>Blog</li>
                        </ul>
                        <ul className="footerUl">
                            <li>Manage Account</li>
                            <li>Terms of Service</li>
                            <li>Refund Policy</li>
                            <li>Privacy Policy</li>
                            <li>Disclaimer</li>
                        </ul>
                    </div>

            </div>

            <div className="footerContact footerSection">
                <h4 className="footerTitle">Contact</h4>

                <div className="footerSocials">
                    <a href="mailto:support@test.com" id='footerEmail' >support@test.com</a>
                    <div className="socials">
                        <li className="socialsItem"><a href=""><i className="fab fa-discord"></i></a></li>
                        <li className="socialsItem"><a href=""><i className="fab fa-instagram"></i></a></li>        
                        <li className="socialsItem"><a href=""><i className="fab fa-linkedin-in"></i></a></li>                    
                        <li className="socialsItem"><a href=""><i className="fab fa-tiktok"></i></a></li>   
                    </div>
                </div>

            </div>


                </div>
            
        </footer>
    )
}