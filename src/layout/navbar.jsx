import { useRef,useState} from 'react'
import React from 'react'

import {Link} from 'react-router-dom'

import '../styles/navbar.css';


export default function Navbar() {


    const [toggle, setToggle] = useState(false)


    return(
        <>

        <nav className="navbar">
            <div className="navbarBrand">
                <Link to={'/'}>DeluxSignal</Link>
            </div>

            <ul className="navbarContent">
                <li className="navItem"><a href="#pricing">Pricing</a></li>
                <li className="navItem"><a href="#about">About us</a></li>
                <li className="navItem"><a  href="#contact">Contact</a></li>
                {/* <li className="navItem">WS Chat</li> */}
                {
                localStorage.getItem('sessionId') ? 
                    <li className="navItem"><Link to='/account'>Account</Link></li>:
                    <li className="navItem"><Link to='/login'>Log in</Link></li>
                }
                <li className="navItem">
                    <i className="fas fa-globe" onClick={() => setToggle(!toggle)}></i>
                    <ul className={`${toggle ? 'languageModal languageModalOpen':'languageModal'}`}>
                        <li className="languages"><Link to={'/ro'}>Romanian</Link></li>
                        <li className="languages"><Link to={'/'}>English</Link></li>
                        <li className="languages"><Link to={'/fr'}>French</Link></li>
                        <Link to={'/de'}>Deutsh</Link>
                    </ul>
                </li>

            </ul>
            <ul className="hamburger">
                <li className="line"></li>
                <li className="line"></li>
                <li className="line"></li>
            </ul>
        </nav>
        
        <div className="extendedNav">
            <ul className="extendedNav-">
                <li className="navItem"><a href="#pricing">Pricing</a></li>
                <li className="navItem"><a href="#about">About us</a></li>
                <li className="navItem"><a href="#contact">Contact</a></li>
                {/* <li className="navItem">WS Chat</li> */}
                {
                localStorage.getItem('sessionId') ? 
                    <li className="navItem"><Link to='/account'>Account</Link></li>:
                    <li className="navItem"><Link to='/login'>Log in</Link></li>
                }
                <li className="navItem"><i className="fas fa-globe"></i></li>
            </ul>
        </div>

        </>
    )

}