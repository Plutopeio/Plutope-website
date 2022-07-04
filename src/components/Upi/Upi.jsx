import React from "react";
import Container from "@mui/material/Container";
import "./Upi.css";
import Triangle from "../../assets/triangle.png";
import IMPS from "../../assets/imps.png"

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
                By Any Means Necessary<br />
            </span>
        </h1>
        <p>PlutoPe accepts Debit Cards, Credit Cards, UPI, and IMPS, so you can seamlessly and securely purchase Cryptocurrency from PlutoPe’s catalogue of over 130 cryptocurrencies.</p>
      </div>
    </Container>
  );
};

export default Upi;
