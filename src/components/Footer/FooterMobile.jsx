import "./Footer.css";
import "./FooterMobile.css";
import Twitter from "../../assets/Twitter.png"
import Discord from "../../assets/Discord.png"
import Instagram from "../../assets/Instagram.png"
import Telegram from "../../assets/Telegram.png"
import {Button} from "@mui/material";

const FooterMobile = () => {
  return (
    <div
      className="footer_mobile"
    >
      <div className="footer_column">
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
            <a href=""><img src={Twitter} alt="" width = "30"/></a>
            <a href=""><img src={Discord} alt="" width = "30"/></a>
            <a href=""><img src={Instagram} alt="" width = "30"/></a>
            <a href=""><img src={Telegram} alt="" width = "30"/></a>
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
          <div className="column">
            <div className="header">
              Let's Chat
            </div>
            <div className="question">
              <p style = {{marginBottom: "10px"}}>Have a support question?</p>
              <Button className = "get_in_touch" variant = "contained" style = {{borderRadius: "78px",background: "#3C53F4" , marginTop : "16px"}}>GET IN TOUCH</Button>
            </div>
            <div className="header" style = {{marginTop: "62px"}}>
              You Call Us
            </div>
            <div className="question">
              <p>0123-456789</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_column">
        <div className="column">
          <div className="header" style = {{marginTop: "40px"}}>
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
      </div>
   </div>
  )
};

export default FooterMobile;
