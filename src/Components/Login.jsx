import React, { useEffect, useState } from "react";
import "../Style/landingpage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

function Login() {
  let [email, setEnail] = useState("");

  let [password, setPassword] = useState("");
  let [userdata, setuserdata] = useState([]);
 

  let navigate = useNavigate();



  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1000/user")
  //     .then((res) => {
  //       setuserdata(res.data);
  //     })
  //     .catch((res) => {});
  // }, []);
  // console.log(userdata);
  // function login(e) {
  //   e.preventDefault();
  //   let flag = false;
  //   userdata.map((d) => {
  //     if (email==d.email && password == d.password) {
  //       alert("loged in");
       
  //       navigate("/home");
  //       flag = true;
  //     }
  //   });
  //   if (flag == false) {
  //     alert("login failed");
  //   }
  // };

  return (
    <>
      <Header />
      <div className="login-container">
      <div className="login-image">
            <img src="./images/amd.png" alt="SBI login illustration" />
          </div>
        <div className="login-card">
          {/* <div className="login-image">
            <img src="./images/amd.png" alt="SBI login illustration" />
          </div> */}
          <form>
            <div className="login-form">
              <h2>Welcome to AMDDAS</h2>
              <p>Login with Email</p>

              <div className="input-group">
                <input
                  id="userid"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEnail(e.target.value);
                  }}
                  placeholder="Email address"
                  required
                />
              </div>

              <div className="input-group">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter password"
                  required
                />
              </div>

              <Link to='/home'><button  className="signup-btn">Login</button> </Link>  {/* onClick={login} */}
             
              <button className="signup-btn">Forget Password</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
