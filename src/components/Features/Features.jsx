import React from "react";
import Container from "@mui/material/Container";
import Phone from "../../assets/phone.png";
import "./Features.css";
import Down from "../../assets/down.png"

const Features = () => {
  return (
    <Container className="container features_container">
      <div className="left_feature">
        <img src={Phone} alt="" width="400" />
      </div>
      <div className="right_feature">
        <h1 style={{ color: "white" }}>The PlutoPe App</h1>
        <p>One App.<br/> Countless cool features.<br/> <b>Endless possibilities.</b></p>
        <a className="scroll-down" href="/"> <img src={Down} alt="" /> <p>Scroll To Find Out</p>  </a>
      </div>
    </Container>
  );
};

export default Features;
