import {useEffect,useState,useRef} from 'react'

import '../styles/account.css'

import { useLocation } from 'react-router-dom'
import axios from 'axios';
import $ from 'jquery'

import { Link, useNavigate } from 'react-router-dom';
import anime from 'animejs';
const FormData = require('form-data');


export default function Account() {

    const [userId, setUserId] = useState(localStorage.getItem('sessionId'))
    const [userData, setUserData] = useState([])

    const account = useRef(null)

    let navigate = useNavigate()

    useEffect(() => {

        axios.post('http://localhost:8012/includes/requestUserData.inc.php', {id:userId})
        .then(res=> {
            if(res.status >= 200 && res.status <= 300) {
                    setUserData(JSON.parse(res.data.data))
              }
        })
        .catch(error => {
        console.log(error.response)
    });

    
    account.current = anime({
        targets:'.wrapper',
        scale:[.2,1],
        duration:'2000',
        opacity:[0,1]
        

    })



    }, [])
    return(
        <section className="account">
                {localStorage.getItem('sessionId') ? <Profile navigate={navigate}  data={userData} /> : <NoProfile />}

            <div className="actionsModal">
                <h1 id='modalText'></h1>
            </div>

        </section>
    )
}

const NoProfile = () => {

    

    return(
        <div className="noProfile">
            <h1>Please create an account first</h1>
            <Link to='/login' className='errorBtn'>Create an account</Link>
        </div>
    )
}

const Profile = ({data,navigate}) => {

    const { username , email , usersUid , usersPfpStatus} = data;

    const names = [usersUid,username,email]
    const imgArr= [
        '../PROFILE_PICTURES/profile1.png',
        '../PROFILE_PICTURES/profile2.png',
        '../PROFILE_PICTURES/profile3.png',
        '../PROFILE_PICTURES/profile4.png',
    
    ]
    const [idx, setIdx] = useState(0)
    const [imgIdx, setImgIdx] = useState(0)


    const usernameChanger = useRef(null)

    usernameChanger.current = anime({
        targets:'#userName',
        scale:[.2,1],
        duration:500,
        
    })  


    function ModalUpdate(text) {
        $('#modalText').text(text);
        $('.actionsModal').addClass('modalActive')
        setTimeout(() => {
            $('.actionsModal').removeClass('modalActive')
        }, 2000);
    }

    const [changeModal, setChangeModal] = useState(false)
    const [changePwdModal, setChangePwdModal] = useState(false)

    function changePwd() {

        axios.post('http://localhost:8012/includes/forgotpwd.inc.php', {email:$('#email').val(), pwd:$('#pwdChange').val(), pwdrepeat:$('#pwdChange').val() })
        .then(res=> {
            if(res.status >= 200 && res.status <= 300 && $('#pwdChange').val() !== '') {
                console.log(res.data);
                    if(res.data.status_message === 'Wrong Email') {
                        ModalUpdate(res.data.status_message)

                    }else {
                        ModalUpdate('Password changed')
                    }
            }
        })
            .catch(error => {
            console.log(error.response)
         });

    }

    function changeName() {

            
            axios.post('http://localhost:8012/includes/usernamechange.inc.php', {usernameid:localStorage.getItem('sessionId'), name:$('#changeName').val()})
            .then(res=> {
                if(res.status >= 200 && res.status <= 300 && $('#changeName').val() !== '') {
                        ModalUpdate('Name changed')
                }
            })
                .catch(error => {
                console.log(error.response)
            });
    }   

    function navigateBack() {
        navigate('/login')
    }

   
    return(
        <div className="wrapper">
        <div className="userDetails">

                <i className="fas fa-sign-out-alt logOut" onClick={() => {
                     axios.post('http://localhost:8012/includes/logout.inc.php')
                     localStorage.setItem('sessionId','')
                     navigateBack()
            
                }}></i>            
            <div className="userImg">

                    <img id='userImg' onClick={() => {
                        if(imgIdx > 2) {
                            setImgIdx(0)
                        }else if(imgIdx < 0) {
                            setImgIdx(imgArr.length)
                        }else {
                            setImgIdx(imgIdx +1)
                        }
                    
                        localStorage.setItem('pfp' ,imgIdx);
                    }} src={ localStorage.getItem('pfp') ? imgArr[ localStorage.getItem('pfp')] : imgArr[imgIdx] } alt="profileImg" />

            </div>

            <h1 id="userName" onClick={() => {
                if(idx > 1) {
                    setIdx(0)
                }else if(idx < 0) {
                    setIdx(2)
                }else {
                    setIdx(idx +1)
                }
                usernameChanger.current.restart()
                    
            }}>{names[idx]}</h1>
               <div className='forgotDetails'>
                <h3 id="changePwd" onClick={() => setChangePwdModal(!changePwdModal) }>Change password</h3>
                <h3 id="changeUid" onClick={() => setChangeModal(!changeModal)} >Change Name</h3>
            </div>
            {changeModal ? <div className="changeNameInp">
                 <input type="text" id='changeName' placeholder='New name' />  
                 <button id='changeNameBtn' onClick={() => {
                        changeName()

                 }}>Apply</button>  
            </div>: ''}
            
            {changePwdModal ? <div className="changeNameInp">
                 <input type="text" id='email' placeholder='Confirm Email' />  
                 <input type="text" id='pwdChange' placeholder='New password' />  
                 <button id='changePwdBtn' onClick={() => {
                        changePwd()

                 }}>Apply</button>  
            </div>: ''}
        </div>
        
        <div className="subscription">
            <h2 id="subscriptionType">Monthly</h2>
            <h1 id="subcriptionDaysLeft">23 days left</h1>
        </div>
         
    </div>
    )
}