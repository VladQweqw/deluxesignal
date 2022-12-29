import {useEffect,useState} from 'react'

import '../styles/account.css'

import { useParams } from 'react-router-dom'
import axios from 'axios';
import $ from 'jquery'

export default function Account() {

    const { id } = useParams();

    useEffect(() => {
       
        axios.post('http://localhost:8012/includes/requestUserData.inc.php', {id:id})
        .then(res=> {
            if(res.status >= 200 && res.status <= 300) {
                
                console.log(res.data);
                
              }
        })
        .catch(error => {
        console.log(error.response)
    });

    }, [])
    
    const [img, setimg] = useState('')

    return(
        <section className="account">
            <div className="wrapper">
                
                    <h1>other</h1>
            </div>
        </section>
    )
}