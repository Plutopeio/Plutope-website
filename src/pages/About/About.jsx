import React from "react";
import "./About.css";
import Laptop from '../../assets/laptop.png'

const About = () => {
  return (
    <div className="about_container">
      <h1>ABOUT US</h1>
      <p>
        Our goal is to make crypto accessible to the world and bring adoption to
        bridge the gap between the real and digital world and unite the benefit
        of both. Blockchain is a real solution for an outdated system of fees
        and slow payments that impact each consumer. By utilizing this
        cutting-edge technology, PlutoPe is changing how finance works. From
        depositing and spending your digital currencies, to send payments
        anywhere in the world, PlutoPe puts the control back in your hands,
        without the need for an intermediary.
      </p>
      <img src={Laptop} alt=""/>
    </div>
  );
};

export default About;
