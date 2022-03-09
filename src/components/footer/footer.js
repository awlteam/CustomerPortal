import React from "react";
import "./footer.css";
import Image from "../../image/logo.png";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt
} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="footercontainer">
         <div className="footerwrapper">
          <div className="footerlogo">
            <img src={Image} alt="" />
            <br />
            <p>
              MOVE WITH US TO MAKE A DIFFERENCE<sup> TM</sup> AWL is India’s fastest
              tech-based logistics and supply chain management company providing
              smart logistics solutions driven by cutting edge technology. 
            </p>
          </div>
          <div className="footerabout">
            <div className="address">
              <h2>Address</h2>
              <p>
                AWL India Private Limited Vatika Atrium, Ground Floor, Tower-B
                Golf Course Road, Sector -53, Gurgaon – 122002, India
                <br/>
                <span><FaPhoneAlt/> +91-124-427-9462 </span>
                <br/><span><AiOutlineMail/> info@awlindia.com</span>
              </p>
            </div>
            <div className="socialmedia">
              <h2>Social media</h2>
                <div className="socialicons">
                      <a href=""><FaFacebook/></a> 
                       <a href=""><FaInstagram/></a>
                       <a href=""><FaLinkedin /></a>
                       <a href=""><FaTwitter /></a>
                       <a href=""><FaYoutube /></a>
                </div>  

            </div>
          </div>
        </div> 
      </div>
    </>
  );
};

export default Footer;
