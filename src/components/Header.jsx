import React from "react";
import logo from "../Images/Logo.png"
import logoback from "../Images/backgroundlogo.png"
import {motion} from "framer-motion"
import {useScroll} from "framer-motion"

function Header()
{

  const {scrollY} = useScroll()
    return <div className="Header">

    <div style={{backgroundImage : `url(${logoback})`}} className="Logo">
      <img src={logo} alt="" />  
    </div>

    <div className="bullets" >
        <a href="#Home"> <li>HOME</li> </a>
        <a href="#Home"> <li>ABOUT ME</li> </a>
        <a href="#Portfolio"> <li>PORTFOLIO</li> </a>
        <a href="#Services"> <li>PAGES</li> </a>
        <a href="#Team"> <li>BLOG</li>  </a>
        <a href="#Contact"> <li>CONTACT</li> </a>
    </div>
  
    <div className="social-media">
    <i class="fa-brands fa-linkedin-in"></i> 
    <i class="fa-brands fa-facebook-f"></i> 
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-dribbble"></i>
      </div>

    </div>

}


export default Header