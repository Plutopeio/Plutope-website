import React from "react";
import Container from "@mui/material/Container";
import "./Upi.css";
import Triangle from "../../assets/triangle.png";
import IMPS from "../../assets/imps.png";
import Debit from "../../assets/debit.png";
import Credit from "../../assets/credit.png";
import IMP from "../../assets/imp.png";
import UPI from "../../assets/upi.png";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import {Link} from "react-scroll"


import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  {
    name : "DEBIT",
    img : Debit
  },
  {
    name : "CREDIT",
    img : Credit
  },
  {
    name : "UPI",
    img : UPI
  },
  {
    name : "IMPS",
    img : IMP
  }
];

const Upi = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <Container className="container upi_container" id = "upi">
      <Link to = "stake" className = "scroll_down_arrow" smooth = {true}>
        <ExpandCircleDownIcon style = {{fontSize : "50px"}}/>
      </Link>
      <img src={Triangle} alt="" className="upi_mover" width="600" />
      <div className="left_upi">
        <img src={IMPS} alt="" width="450" />
      </div>
      <div className="right_upi">
        <h1>
          <span className="border_head">
            Buy Crypto In One Tap
            <br />
          </span>
        </h1>
        <p>Plutope accepts</p>
        <div
          className="debit-div"
          style={{ display: "flex", justifyContent: "flex-end" , gap: "20px" , alignItems : "center" , height: "90px"}}
        >
          
          <h1>
            <TextTransition springConfig={presets.default} >
              <div style = {{display : "flex" , alignItems : "center" ,gap: "20px"}}>
                <img src={TEXTS[index % TEXTS.length].img} alt="" />
                {TEXTS[index % TEXTS.length].name}
                </div>
            </TextTransition>
          </h1>
        </div>
        <p>
          Seamlessly and securely purchase Cryptocurrency from PlutoPe’s
          catalogue of over 130 cryptocurrencies.
        </p>
      </div>
    </Container>
  );
};

export default Upi;
