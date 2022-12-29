import React, {useState,useEffect,useRef} from 'react'

import '../styles/login.css'
import $ from 'jquery';
import axios from 'axios';
import  {  useNavigate } from 'react-router-dom'

export default function LoginPanel() {

    const [changer, setChanger] = useState(false)
    
    let navigate = useNavigate();

    return(
        <section className="login">
            
            <div className="white">
                <div className="imgWrapper">
                    <img src="../images/investment.png" alt="" />

                </div>
            </div>

           <div className="second">
        
            
                {changer ? <Register navigate={navigate} changer={setChanger} /> : <Login navigate={navigate}  changer={setChanger} />}
            
           </div>

        </section>
    )
}

const Register = ({changer,navigate}) => {


    const registerHandler = () => {
     
        let data = {
            name:$('#name').val(), 
            email:$('#email').val(),
            uid:$('#uid').val(),
            pwd:$('#pwd').val(),
            pwdrepeat:$('#pwdrepeat').val(),

        
        }

        axios.post('http://localhost:8012/includes/register.inc.php', data)
            .then(res=> {
                if(res.status >= 200 && res.status <= 300) {
                        changer(false)
                  }
            })
            .catch(error => {
            console.log(error.response)
        });

    }

    return(
        <div className="register">
        <h1 id='registerTitle'>New here ?</h1>
        <form method='post' >
            <div className="input">
                <label htmlFor="name">Full Name</label>
                <input type="text" name='name'  id='name'  />
            </div>
            <div className="input">
                <label htmlFor="email">Email</label>
                <input type="email" name='email'  id='email'  />
            </div>
            <div className="input">
                <label htmlFor="uid">Username</label>
                <input type="text" name='uid'  id='uid'  />
            </div>
            <div className="input">
                <label htmlFor="pass">Password</label>
                <input type="password" name='pwd' id='pwd'  />
            </div>
            <div className="input">
                <label htmlFor="pwdrepeatpass">Repeat password</label>
                <input type="password" name='pwdrepeat' id='pwdrepeat'  />
            </div>
            <div className="btn">
                <button  onClick={(e) => {
                    e.preventDefault()
                    registerHandler()
                }} className="formBtn ">Register</button>
            </div>
            
            <div className="altOpt">
                <span className="line"></span>
                <p>OR</p>
                <span className="line"></span>
            </div>
        </form>

        <button className="registerLogInBtn" onClick={(e) => changer(false)}   >Log in</button>
    </div>

    )
}
const Login = ({changer ,navigate}) => {



    const loginHandler = () => {


        let data = {name:$('#Lname').val(), pwd:$('#Lpass').val()}

        axios.post('http://localhost:8012/includes/login.inc.php', data)
            .then(res=> {
                switch(res.data.status_message) {
                    case 'Invalid Password':
                        $('#Lpass').css("border-bottom-color",'red')

                    break;
                    case 'Invalid name':
                        $('#Lname').css("border-bottom-color",'red')
                    break;
                    case 'User login successful':
                        localStorage.setItem('sessionId',res.data.data);
                        navigate('/account', { state: res.data.data });
                        $('#Lpass').css("border-bottom-color",'#5a00e0')
                        $('#Lname').css("border-bottom-color",'#5a00e0')
                    break;
                }

            })
            .catch(error => {
            console.log(error.response)
        });

    }

    

    return(
        <div className="login-">
        <h1 id='registerTitle'>Welcome back!</h1>
        <form >
            <div className="input">
                <label htmlFor="name">Name or email</label>
                <input type="text" name='name'  id='Lname'  />
            </div>
            <div className="input">
                <label htmlFor="pass">Password</label>
                <input type="password" name='Lpwd' id='Lpass'  />
            </div>
            <div className="btn">
                <button onClick={(e) => {
                    e.preventDefault()
                    loginHandler()
                }} className="formBtn loginBtn">Login</button>
            </div>

            <div className="helpers">
                <p onClick={() => changer(true)}>Dont have an account?</p>
                <p>Forgot Details?</p>
            </div>
        </form>
            
   
    </div>

    )
}



