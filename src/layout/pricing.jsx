import React from 'react'

import { Link } from 'react-router-dom'

import pricingData from '../pricingData'

export default function Pricing() {

    
    return(
       <>
        <section className="pricing" id='pricing'>

                <h1 className="sectionTitle">Pricing</h1>

            <div className="cards">

            {pricingData.map(({duration , price, sale}, index) => {
                return  <div className="priceCard" key={index}>
                <div className="duration">
                    <h1>{duration}</h1>
                </div>
                <div className="content">
                    <h1 id="price">${price}</h1>
                    <h3 id="sale">${sale}</h3>

                    <button id="priceBtn"><Link to={`/buynow/${duration.toLowerCase()}`}>Subscribe</Link></button>

                </div>
                <p>Cancel Anytime</p>
            </div>
            })}

           

        
            </div>

        </section>
       
       </>
    )

}