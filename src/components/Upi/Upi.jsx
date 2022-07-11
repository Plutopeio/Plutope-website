import React from "react";
import Container from "@mui/material/Container";
import "./Upi.css";
import Triangle from "../../assets/triangle.png";
import IMPS from "../../assets/imps.png"
import Debit from "../../assets/debit.png"


const Upi = () => {
  return (
    <Container className="container upi_container">
      <img src={Triangle} alt="" className="upi_mover" width="600" />
      <div className="left_upi">
        <img src={IMPS} alt="" width="450"/>
      </div>
      <div className="right_upi">
        <h1>
            <span className="border_head">
              Buy Crypto In One Tap<br />
            </span>
        </h1>
        <p>Plutope accepts</p>
        <div className="debit-div" style={{display: "flex" , justifyContent: "flex-end"}}>
          <img src={Debit} alt="" />
        </div>
        <p>Seamlessly and securely purchase Cryptocurrency from PlutoPe’s catalogue of over 130 cryptocurrencies.</p>
      </div>
    </Container>
  );
};

export default Upi;
