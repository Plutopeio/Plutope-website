import React from "react";
import Container from "@mui/material/Container";
import "./Secure.css";
import Emoji from "../../assets/emoji.png";

const Secure = () => {
  return (
    <Container className="container secure_container">
      <h1>PlutoPe is <br/><span style={{color: "#3C53F4"}}>Secure <img src={Emoji} alt="" width="50"/> </span></h1>
    <div className="secure_inner_container">
        <div className="secure_box">
        Execute transactions anytime and anywhere at  <b>lightning-fast speeds.</b> Because Time is money.
        </div>

        <div className="secure_box">
        Send Crypto to friends and family, instantly, for free. No wallet adress necessary.
Add money with the wide range of transaction options available, and exchange currencies at the portfolio in <b>one tap.</b> 

        </div>


        <div className="secure_box">
        You name it, Plutope can do it. Add money to your wallet with the <b>wide range of transaction options</b> available, and utilise it to invest in the <b>comprehensive range of cryptocurrencies</b> Plutope supports.
        </div>

        <div className="secure_box">
        Crypto transactions don’t have to be complicated. Store, transfer, or receive assets with world-class security, <b>no prior crypto knowledge required.</b>
        </div>
    </div>
    
    </Container>
  );
};

export default Secure;
