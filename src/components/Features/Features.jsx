import React from "react";
import Container from "@mui/material/Container";
import Phone from "../../assets/home.png";
import "./Features.css";
import Down from "../../assets/down.png"
import {Link} from "react-scroll"

const Features = () => {
  return (
    <Container className="container features_container" id = "feature">
      <div className="left_feature">
        <img src={Phone} alt="" />
      </div>
      <div className="right_feature">
        <h1 style={{ color: "white" }}>PlutoPe Wallet</h1>
        <p>One App.<br/> Decentralised to the core.<br/> Non Custodial.<br/>Endless possibilities.<br/><b>We mean it.</b></p>
        <Link to = "transfer" className="scroll-down" smooth = {true}> <img src={Down} alt="" style = {{cursor: "pointer"}}/> <p>Scroll To Find Out</p>  </Link>
      </div>
    </Container>
  );
};

export default Features;
