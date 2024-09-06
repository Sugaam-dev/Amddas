import React from 'react'
import '../Style/landingpage.css'
import { Link } from 'react-router-dom';
import Header from './Header';

function Loginoption() {
   
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
                    <p>Please select your preferred method to continue setting up your account</p>
                 
                   
                 
                    <Link to='/signup'>  <button className="signup-btn">Continue with Email</button> </Link>
            
                </div>
            </div>
        </div>
        </>
    );
}

export default Loginoption
