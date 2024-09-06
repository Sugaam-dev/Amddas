import React from 'react'
import '../Style/landingpage.css'
import { Link } from 'react-router-dom';
import Header from './Header';

function LandingPage() {
   
    return (
        <>
        <Header/>
        <div className="login-container">
        <div className="login-image">
                    <img src="./images/amd.png" alt="SBI login illustration" />
                </div>
            <div className="login-card">
                {/* <div className="login-image">
                    <img src="./images/amd.png" alt="SBI login illustration" />
                </div> */}
                <div className="login-form">
                    <h2>Welcome to AMDDAS</h2>
                    <p>Login or Sign Up to access account</p>
                 
              <Link to="/login"><button className="login-btn">LOGIN</button></Link>
                 
                    <Link to='/loginoption'>  <button className="signup-btn">SIGN UP</button> </Link>
            
                </div>
            </div>
        </div>

        </>
    );
}

export default LandingPage
