import React, { useEffect, useState } from 'react'
import '../Style/landingpage.css'
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import Otp from './Otp';

function Signup() {

let [email,setEnail] =useState("")
let[name,setName]=useState("")
let[password,setPassword]=useState("")
let[confpassword,setConfpassword]=useState("")
let user={
    email:email,
    name:name,
    password:password
}

let navigate=useNavigate()
 
let flag=false;
let adduser=(e)=>{
e.preventDefault()
if(flag==true){
    axios.post('http://localhost:1000/user',user)
.then((res)=>{
    alert("user added successfullly")
})
.catch((res)=>{
    alert("registration failed")
})
}
else{
    alert("password is incorect")
}
}

  
   
    const otp=()=>{
       
        if(user !=null){
navigate('/otp')
        }
    }
  

    const passwordcheck=()=>{
//   let password=document.getElementById("password").value;
//   let confpassword=document.getElementById("confpassword").value;
  let message =document.getElementById("message")


if(password !=0){
    if(password == confpassword){
        message.textContent="Password matched"
        message.style.color="#00D757"
flag=true;
otp();
       
    }
    else{
        message.textContent="Password dont't match"
          message.style.color="red"
      
    }
}
    }
   
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
             <form onSubmit={adduser}>
             <div className="login-form">
                    <h2>Welcome to AMDDAS</h2>
                    <p>Register with Email</p>
                 
                    <div className="input-group">
                        
                        <input type="email" value={email} onChange={(e)=>{setEnail(e.target.value)}} placeholder="Email address" required/>
                    </div>
                    <div className="input-group">
                        
                        <input type="text"value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Your name" required />
                    </div>
                    <div className="input-group">
                        
                        <input id='password' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Create password"  required/>
                    </div>
                    <div className="input-group">
                        
                        <input id='confpassword' type="password" value={confpassword} onChange={(e)=>{setConfpassword(e.target.value)}} placeholder="Confirm password" required />
                    </div>
              
                 <span id='message'></span>

                 {/* <Otp/> */}
                     <button onClick={passwordcheck} className="signup-btn">Submit</button>
            
                </div>

             </form>
            </div>
        </div>
        </>
    );
}

export default Signup
