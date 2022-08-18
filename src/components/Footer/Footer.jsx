import React from "react";
import "./Footer.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Link } from "react-scroll";
import Twitter from "../../assets/Twitter.png"
import Discord from "../../assets/Discord.png"
import Instagram from "../../assets/Instagram.png"
import Telegram from "../../assets/Telegram.png"
import FooterMobile from "./FooterMobile";
import useMobile from "../../hooks/UseMobile";

import {Button} from "@mui/material";


const Footer = () => {
  const isMobile = useMobile();

  const foot = (
    <div className="footer_bottom">
      <div
        className="footer_bottom_container"
      >
        <div className="column">
          <div className="header">
            Get Started
          </div>
          <div className="links">
            <a href="https://plutope.kickoffpages.com/">Waitlist</a>
            {/* <a href="">Documentation</a>
            <a href="">Installation</a> */}
          </div>
          <div className="socials">
            <a href="https://twitter.com/Plutopeio"><img src={Twitter} alt="" width = "30"/></a>
            <a href="https://discord.gg/B5gBdjHU43"><img src={Discord} alt="" width = "30"/></a>
            <a href="https://www.instagram.com/plutope/"><img src={Instagram} alt="" width = "30"/></a>
            {/* <a href=""><img src={Telegram} alt="" width = "30"/></a> */}
          </div>
        </div>

        <div className="column">
          <div className="header">
            Company
          </div>
          <div className="links">
            <a href="">Contact</a>
            {/* <a href="">News</a> */}
            <a href="">Careers</a>
          </div>

          <div className="header" style = {{marginTop: "40px"}}>
            Legal
          </div>
          <div className="links">
            <a href="">Privacy Notice</a>
            <a href="">Terms of Use</a>
            {/* <a href="">Careers</a> */}
          </div>
        </div>

        <div className="column">
          <div className="header">
            Quick Links
          </div>
          <div className="links">
            <a href="">Support Center</a>
            {/* <a href="">Service Status</a> */}
            <a href="">Security</a>
            <a href = "">Blog</a>
            {/* <a href = "">Customers</a>
            <a href = "">Reviews</a> */}
          </div>
        </div>

        <div className="column">
          <div className="header">
            Let's Chat
          </div>
          <div className="question">
            <p style = {{marginBottom: "10px"}}>Have a support question?</p>
            <Button className = "get_in_touch" variant = "contained" style = {{borderRadius: "78px",background: "#3C53F4" , marginTop : "16px"}}>GET IN TOUCH</Button>
          </div>
          <div className="header" style = {{marginTop: "62px"}}>
            Write to us at
          </div>
          <div className="question">
            <p>hey@plutope.io</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div id = "last" style={{ position: "relative" }}>
      <Link to="landing" className="scroll_down_arrow to_top" smooth={true}>
        <ArrowCircleUpIcon style={{ fontSize: "50px", color: "#3C53F4" }} />
      </Link>
      <div className="footer">
        <div
          className="footer_container"
        >
          <h1>
            Even more exciting features are coming, Join the waitlist and get
            regular updates.
          </h1>
          <a href="https://plutope.kickoffpages.com/" style={{textDecoration: 'none'}}>
            <button variant="contained" href="https://plutope.kickoffpages.com/" className="join_waitlist_btn">
              Join The Waitlist
            </button>
          </a>
        </div>
        {isMobile ? <FooterMobile /> : foot}
     </div>
    </div>
  );
};

export default Footer;
