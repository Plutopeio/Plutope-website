import React from "react";
import Container from "@mui/material/Container";
import Phone from "../../assets/phone.png";
import "./Features.css";

const Features = () => {
  return (
    <Container className="container features_container">
      <div className="left_feature">
        <img src={Phone} alt="" width="400" />
      </div>
      <div className="right_feature">
        <h1 style={{ color: "#3C53F4" }}>The PlutoPe App</h1>
        <p>One App.<br/> Countless cool features.<br/> <b>Endless possibilities.</b></p>
      </div>
    </Container>
  );
};

export default Features;
