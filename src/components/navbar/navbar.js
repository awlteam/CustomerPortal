import './navbar.css'
import {BiTimeFive } from "react-icons/bi";
import {ImLocation2 } from "react-icons/im";
import {IoIosCall } from "react-icons/io";

import Logo from '../../image/logo.png'
function Navbar(){
    return(
        <>
          <div className="navcontainer">
              <div className="navwrapper">
                  <div className="navlogo">
                      <img src={Logo} alt="awl logo" />
                  </div>
                  <div className="navabout">
                      <div className="time">
                          <div className="icon"> <BiTimeFive /></div>
                          <div className="text">
                               <div className="text1">Working Hours</div>
                               <div className="text2">9 AM - 6:30 PM </div>
                          </div>
                      </div>
                      <div className="navlocation">
                          <div className="icon icon2"><ImLocation2 /></div>
                          <div className="text">
                               <div className="text1">Location</div>
                               <div className="text2">Our Presence </div>
                          </div>
                      </div>
                      <div className="navcall">
                          <div className="icon icon2"><IoIosCall /></div>
                          <div className="text">
                               <div className="text1">Call Center</div>
                               <div className="text2">9015-011-011</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </>
    )
}
export default Navbar;