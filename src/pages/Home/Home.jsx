import React from "react";
import Navbar from "../../components/Navbar"

import Landing from "../../components/Landing/Landing";
import Features from "../../components/Features/Features";
import Transfer from "../../components/Transfer/Transfer";
import Scan from "../../components/Scan/Scan";
import Crypto from "../../components/Crypto/Crypto";
import Portfolio from "../../components/Portfolio/Portfolio";
import Upi from "../../components/Upi/Upi";
import Secure from "../../components/Secure/Secure";
import Disclaimer from "../../components/Disclaimer/Disclaimer";

import Stake from "../../components/Stake/Stake";
import Footer from "../../components/Footer/Footer"
import Keys from "../../assets/not_your.png"



const Home = () => {
  return (
    <div className = "homeContainer">
      <div>
        <Navbar/>
      </div>
      <div style={{ background: "#3C53F4" }}>
        <Landing />
        <Features />
      </div>
      <div>
        <Transfer />
      </div>
      <div>
        <Scan />
      </div>
      <div>
        <Crypto />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <img src={Keys} alt="" style = {{width:"100vw"}} id="not_your"/>
      </div>
      <div>
        <Upi />
      </div>
      <div>
        <Stake />
      </div>
      <div>
        <Secure />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <Disclaimer />
      </div>
    </div>
  );
};

export default Home;
