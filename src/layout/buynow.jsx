import {useState,useEffect,useRef} from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'

import '../styles/buy.css'
import pricingData from '../pricingData';
import Anime, { anime } from 'react-anime'
export default function BuyNow() {
    
    const [cardData, setcardData] = useState([])
    const { name } = useParams();

    const checkout = useRef(null)

    useEffect(() => {
       setcardData(pricingData.find((card) => card.duration.toLowerCase() === name ))
        

        checkout.current =anime.timeline({
            targets:'.cardFront,.cardBack',
            opacity:[0,1],
            translateX:[-100+'%', 0],
            delay:anime.stagger(200),
            duration:'3000',
        }).add({
            targets:'.cart',
            translateX:[100 + '%', 0],

        }).add({
            targets:'.buyBtn',
            opacity:[0,1]
        })



    }, [])
    const {duration , price ,sale} = cardData;
    return(
        <section className="buy">
            
            <form className="cardDetails">
                <h1 className='buyTitle'>Check out</h1>
                <div className="cardFront">
                    <div className="cardNumber">
                        <input type="text" placeholder='Card Number' id='cardNumber' />
                    </div>
                    <div className="cardOwner">
                        <input type="text" placeholder='Card holder name' id='cardOwner' />
                    </div>
                    <div className="cardExp">
                        <input type="text" id='cardExp' placeholder='Expiration'  />
                    </div>
                </div>  
                <div className="cardBack">
                    <span className="cardBackLine"></span>
                        <div className="cardCVV">
                            <input type="number" maxLength={3} placeholder='CVV' id='cardCVV' />
                        </div>
                    </div>  
            
                    <button className="btn buyBtn">Confirm</button>

            </form>

            <div className="cart">
            <div className="priceCard" >
                <div className="duration">
                    <h1>{duration}</h1>
                </div>
                <div className="content">
                    <h1 id="price">${price}</h1>
                    <h3 id="sale">${sale}</h3>

                    <button id="priceBtn">Thank you!</button>

                </div>
                <p>Cancel Anytime</p>
            </div>
            </div>

        </section>
    )
}