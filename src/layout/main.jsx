import {useState,useEffect,useRef} from 'react'
import React from 'react'

import FaqData from '../FaqData'

import About from './about'
import FAQ from './faq'
import Pricing from './pricing'

import $ from "jquery";

import anime from 'animejs'
let ex1 = true,
    ex2 = true,
    ex3 = true

    export default function Main() {
    
    // animations
    useEffect(() => {
     
                    
    anime.timeline({
        targets:'.heroTitle h1',
        translateX:[-200,0],
        easing:'easeInOutSine',
        opacity:[0,1],
        delay:anime.stagger(500),

    }).add({
        targets:'.button',
        opacity:[0,1],
        translateX:[100,0],
    }).add({
        targets:'.heroSocial a i',
        translateY:[20,0],
        duration:'700',
        opacity:[0,1],
        delay:anime.stagger(200)
    }).add({
        targets:'.heroImg',
        translateY:[1000,0],
        opacity:[0,1],
        duration:'2000',
        
    })

    const about = anime.timeline({
        targets:'.slideshow',
        translateX:[-110+'%',0],
        easing:'easeInOutQuad',
        autoplay:false,

    }).add({
        targets:'.aboutText h1 , .aboutText p',
        delay:anime.stagger(300),
        opacity:[0,1],
    },'+=500')


    const pricing = anime({
        targets:'.priceCard , .sectionTitle' , 
        delay:anime.stagger(500),
        translateY:[500,0],
        opacity:[0,1],
        autoplay:false,

    })

    const faq = anime({
        targets:'#sectionTitle ,.faqQuestion',
        opacity:[0,1],
        delay:anime.stagger(200),
        translateX:[-100,0],
        autoplay:false,

    })

  
    $(window).scroll(function ()  {
        let v1,v2;
        v2 =Math.abs($('.about').position().top - $(window).height()/2);
        v1 = $(this).scrollTop();
        
        if((v1 > v2) &&  ex1) {
            about.play();
            ex1 = false;
        }
        
        if(v1  > Math.abs($('.pricing').position().top - $(window).height()/2) && ex2 ) {
                pricing.play()
            ex2 = false;
        }
    
        if(v1  > Math.abs($('.FAQ').position().top - $(window).height()/2)   && ex3)  {
                faq.play()
                ex3 = false
        }
        
    })

    }, [])

    // animations end
    
    const [faqData, setfaqData] = useState(FaqData)


    
    return(
        <>
        
        <header className="hero">
            <div className="heroTitle">
                <h1>Good Signal..</h1>  
                <h1>Good Money</h1>

                <div className="button">
                    <button className="heroBtn" ><a href="#about">Get Started</a></button>
                    <div className="heroSocial">
                        <a href=""><i className="fab fa-discord"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                        <a href=""><i className="fab fa-tiktok"></i></a>

                    </div>
                </div>
            </div>
            <div className="heroImg">
                <img src="./images/heroPhone.png" alt="" />
            </div>
        </header>

        
        <About />

        <Pricing />

        <FAQ data={faqData} />

        </>
    )
}





