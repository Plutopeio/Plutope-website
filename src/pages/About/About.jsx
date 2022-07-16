import React from "react";
import "./About.css";
import Navbar from "../../components/Navbar"
import Top from '../../assets/top.png'
import Bottom from '../../assets/Bottom.png'


const About = () => {
  return (
    <div className="about_container">
      <div style = {{zIndex: "1"}}>
        <Navbar/>
      </div>
      <img src={Bottom} alt="" className = "about_bottom" width = "450"/>
      <img src={Top} alt="" className = "about_top" width = "500"/>
      <div className = "about_inner_container">
      <h1 style = {{fontSize : "73px",fontWeight : "700",margin: "0",padding: "0"}}>ABOUT US</h1>
      <p style = {{width : "1141px",fontSize : "30px" , fontWeight : "500",zIndex : "1"}}>
        Our goal is to make crypto accessible to the world and bring adoption to
        bridge the gap between the real and digital world and unite the benefit
        of both.<br/><br/> Blockchain is a real solution for an outdated system of fees
        and slow payments that impact each consumer. By utilizing this
        cutting-edge technology, PlutoPe is changing how finance works.<br/><br/> From
        depositing and spending your digital currencies, to send payments
        anywhere in the world, PlutoPe puts the control back in your hands,
        without the need for an intermediary.
      </p>
      </div>
    </div>
  );
};

export default About;
