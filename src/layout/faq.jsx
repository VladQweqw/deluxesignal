import {useState} from 'react'
import React from 'react'


export default function FAQ({data}) {

    return(
        <section className="FAQ" id='faq'>
            <h1 id='sectionTitle'>Frequently asked questions</h1>
           {data.map(({title, content},index) => {
                return <Accordion title={title} key={index} content={content}  />
            })}
        </section>
    )
}

const Accordion = ({title,content}) => {
    
    const [isActive, setIsActive] = useState(false)

    return(
        <div className='faqQuestion' >
                    
        <div className="faqTitle" onClick={() => setIsActive(!isActive)}>
            <h1 className="faqTitle-">{title}</h1>
            <i className="fas fa-times"
             style={{transform:`rotate(${isActive ? '90':'45'}deg)`}}></i>
        </div>

         <div className={`${isActive ? 'descOpen desc':'desc'}`}>
            {content.map((desc,index) => {
                return <p className="faqDesc" key={index}>{desc}</p>
            })}
        </div>  

    </div>
    )
}