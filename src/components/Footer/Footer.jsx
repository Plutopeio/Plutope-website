import React from "react";
import "./Footer.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Link } from "react-scroll";
import Twitter from "../../assets/Twitter.png"
import Discord from "../../assets/Discord.png"
import Instagram from "../../assets/Instagram.png"
import {Button} from "@mui/material";


const Footer = () => {
  return (
    <div id = "last" style={{ position: "relative" }}>
      <Link to="landing" className="scroll_down_arrow" smooth={true}>
        <ArrowCircleUpIcon style={{ fontSize: "50px", color: "#3C53F4" }} />
      </Link>
      <div
        className="footer_container"
        
      >
        <h1>
          Even more exciting features are coming, Join the waitlist and get
          regular updates.
        </h1>
        <button variant="contained" href="" className="join_waitlist_btn">
          Join The Waitlist
        </button>
      </div>
      <div
        className="footer_bottom_container"
        style={{ position: "relative" }}
      >
        <div className="column">
          <div className="header">
            Get Started
          </div>
          <div className="links">
            <a href="">Start</a>
            <a href="">Documentation</a>
            <a href="">Installation</a>
          </div>
          <div className="socials">
            <a href=""><img src={Twitter} alt="" width = "50"/></a>
            <a href=""><img src={Discord} alt="" width = "50"/></a>
            <a href=""><img src={Instagram} alt="" width = "50"/></a>
          </div>
        </div>

        <div className="column">
          <div className="header">
            Company
          </div>
          <div className="links">
            <a href="">Contact</a>
            <a href="">News</a>
            <a href="">Careers</a>
          </div>

          <div className="header" >
            Legal
          </div>
          <div className="links">
            <a href="">Privacy Notice</a>
            <a href="">Terms of Use</a>
            <a href="">Careers</a>
          </div>
        </div>

        <div className="column">
          <div className="header">
            Quick Links
          </div>
          <div className="links">
            <a href="">Support Center</a>
            <a href="">Service Status</a>
            <a href="">Security</a>
            <a href = "">Blog</a>
            <a href = "">Customers</a>
            <a href = "">Reviews</a>
          </div>
        </div>

        <div className="column">
          <div className="header">
            Let's Chat
          </div>
          <div className="question">
            <p style = {{marginBottom: "10px"}}>Have a support question?</p>
            <Button variant = "contained" style = {{borderRadius: "78px",background: "#3C53F4"}}>GET IN TOUCH</Button>
          </div>
          <div className="header">
            You Call Us
          </div>
          <div className="question">
            <p>0123-456789</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
