import React from "react";
import Container from "@mui/material/Container";
import "./Stake.css";
import Polygon from "../../assets/polygon.png"
import Star from "../../assets/star.png"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import {Link} from "react-scroll"

const Stake = () => {
  return (
    <Container className="container stake_container" id = "stake">
       <Link to = "secure" className = "scroll_down_arrow" smooth = {true}>
        <ExpandCircleDownIcon style = {{fontSize : "50px" , color: "white"}}/>
      </Link>
      <img src={Star} alt="" className="stake_mover" width="350" />
      <div className="left_stake">
        <h1 className="border_head">Stake your favorite crypto.</h1>
        <h1 className="earn_head">Earn Rewards.</h1>
        <p>Earn up to 12% rewards on staking. Put your portfolio to work and grow it while you HODL.<br/> 
PlutoPe will find you the best returns for the lowest risk.</p>
      </div>
      <div className="right_stake">
        <img src={Polygon} alt="" width="500"/>
      </div>
    </Container>
  );
};

export default Stake;
