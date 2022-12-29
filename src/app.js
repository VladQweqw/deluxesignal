import './styles/main.css';
import {useEffect} from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes
  
} from "react-router-dom";

import Main from './layout/main';

import Navbar from './layout/navbar';
import Footer from './layout/footer';
import Error from './layout/error';

import Account from './layout/account';
import Login from './layout/login';
import BuyNow from './layout/buynow';
import OtherAccount from './layout/OtherAccout'
import $ from 'jquery'

import MainRO from './layout/mainRO';
import MainDE from './layout/mainRO';
import MainFR from './layout/mainRO';

function App() {

    useEffect(() => {
    
      $(window).scroll(function ()  {
        
        if(this.scrollY > 30) {
          $('.navbar').addClass('navbarScrolled');
        }else {
          $('.navbar').removeClass('navbarScrolled');
        }
        
    })

    }, [])



  return (
    <Router>
      <Navbar />
      <Routes >

        <Route path={'/'} element={<Main />}  exact></Route>
        <Route path={'/login'} element={<Login />}  ></Route>
        <Route path={'/account'} element={<Account />}  ></Route>
        <Route path={'/fr'} element={<MainFR />}  ></Route>
        <Route path={'/de'} element={<MainDE />}  ></Route>
        <Route path={'/ro'} element={<MainRO />}  ></Route>
        <Route path={'/account/:id'} element={<OtherAccount />}  ></Route>

        <Route path={'*'} element={<Error />}  ></Route>
        <Route path={'/buynow/:name'} element={<BuyNow />} ></Route>

      </Routes>
     <Footer />
    </Router>
  )
  }
export default App;
