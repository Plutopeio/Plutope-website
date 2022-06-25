import React from "react";
import Container from "@mui/material/Container";
import "./Stake.css";
import Polygon from "../../assets/polygon.png"

const Landing = () => {
  return (
    <Container className="container stake_container">
      <div className="left_stake">
        <h1>Stake your favorite crypto and earn rewards.</h1>
        <p>Earn up to 12% rewards on staking. Put your portfolio to work and grow it while you HODL.<br/><br/>
        Our system will find you the best returns for the lowest risk.</p>
      </div>
      <div className="right_stake">
        <img src={Polygon} alt="" width="500"/>
      </div>
    </Container>
  );
};

export default Landing;
