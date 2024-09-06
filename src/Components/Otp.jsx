import React, { useEffect, useRef, useState } from "react";
import "../Style/otp.css";
import { Link } from "react-router-dom";
import Header from "./Header";
function Otp() {
  const inputarr = ['','','','','',''];
  const ref = [useRef(), useRef(), useRef(), useRef(),useRef(),useRef()];

  const [inputs,setInputs]=useState(inputarr)
  useEffect(() => {
    ref[0].current.focus();
  }, []);



  const inputchange = (e, index) => {
    const val = e.target.value;
    console.log(val, index);
   if(!Number(val))
    return;

   if(index<inputs.length-1){
    ref[index+1].current.focus()
   }

   const copyinputs=[...inputs]
   copyinputs[index]=val
   setInputs(copyinputs)
   

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
                <div className="login-form">
                    <h2>Welcome to AMDDAS</h2>
                    <p>Verify your account</p>
                 
                    <div className="otp">
        {inputarr.map((item, i) => {
          return (
            <input id="otpinput"
           
              value={inputs[i]}
              key={i}
              ref={ref[i]}
              type="text"
              maxLength="1"
              onChange={(e) => {
                inputchange(e, i)}
              }
            />
          );
        })}
         
      </div>
      <Link style={{marginLeft:"10px",textDecoration:"none"}}>Get otp</Link>
      <Link style={{marginLeft:"10px",textDecoration:"none"}}>Re-send</Link>



            
                </div>
            </div>
        </div>




      {/* <div className="otp">
        {inputarr.map((item, i) => {
          return (
            <input
              style={{
                width: "40px",
                height: "40px",
                margin: "10px",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              value={inputs[i]}
              key={i}
              ref={ref[i]}
              type="text"
              maxLength="1"
              onChange={(e) => {
                inputchange(e, i)}
              }
            />
          );
        })}
         
      </div>
      <Link style={{marginLeft:"10px",textDecoration:"none"}}>Get otp</Link> */}
    </>
  );

};
export default Otp;
