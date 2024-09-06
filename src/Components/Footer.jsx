import "../Style/Footer.css";


import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="sec">
            <img
              src="./images/amd.png"  alt="logo"
            />
            {/* <span>SOULFIT</span> */}

            <p>
            We offer a wide range of programs that are designed to help you achieve your wellness goals and transform your life.
            </p>
            <ul className="sci">
              <li>
                <Link>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link>
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link>
                  <FaXTwitter />
                </Link>
              </li>
            </ul>
          </div>
          <div className="quicklinks">
            <h2>Quick Links <div className="underline"><span></span></div></h2>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link>Services</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h2>Contact Us <div className="underline"><span></span></div></h2>
            <ul className="info">
              <li>
                <span>
                <FaPhoneAlt />

                </span>
                <p>
                  <a href="tel:+919167222521">Call us at +91-91678086998</a>
                </p>
              </li>
              <li>
                <span>
               <MdEmail/>
                </span>
                <p>
                  <a href="mailto:info@soulfit.com">info@amddas.com</a>
                </p>
              </li>
              <li>
                <span>
                <IoLocationSharp/>
                </span>
                <p>
                  <a href="#">###### , INDIA</a>
                </p>
              </li>
            </ul>
          </div>


          <div className="quicklinks">
            <h2>Get Our App<div className="underline"><span></span></div></h2>
          <Link>
          < BiLogoPlayStore style={{fontSize:"60px",marginRight:"10px",marginTop:"20px"}}/>
          </Link>
          <Link>
          < FaAppStore style={{fontSize:"60px",marginLeft:"10px",marginTop:"20px"}}/>
          </Link>



          
          </div>

        </div>
      </footer>

      <a href="#" id="scroll">
        <span></span>
      </a>
      <div className="copyrighttext">
        <p>
          copyright & 2024 Designed by{" "}
          <a href="https://sugaam.in">Sugaam.in</a> All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
