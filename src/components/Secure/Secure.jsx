import React from "react";
import Container from "@mui/material/Container";
import TextTransition, { presets } from "react-text-transition";
import "./Secure.css";
import Emoji from "../../assets/emoji.png";
import Convenient from "../../assets/convenient.png";
import Instant from "../../assets/instant.png";
import Versatile from "../../assets/versatile.png";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import {Link} from "react-scroll"
import useMobile from "../../hooks/UseMobile";



const TEXTS = [
  {
    name : "Secure",
    img : Emoji
  },
  {
    name : "Convenient",
    img : Convenient
  },
  {
    name : "Versatile",
    img : Versatile
  },
  {
    name : "Instant",
    img : Instant
  }
];


const Secure = () => {
  const isMobile = useMobile();
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <Container className="container secure_container" id = "secure" style = {{position: "relative"}}>
      {!isMobile ?
        <Link to = "last" className = "scroll_down_arrow" smooth = {true}>
          <ExpandCircleDownIcon style = {{fontSize : "50px" , color: "#3C53F4"}}/>
        </Link>
        : null}
      <h1 className = "secure_center">
        PlutoPe is <br />
        <div style={{ color: "#3C53F4" ,  height: "90px" , margin : "0" , padding : "0"}}>
        <span >
            <TextTransition springConfig={presets.default} >
              <div style = {{display : "flex" , alignItems : "center" ,gap: "20px" }}>
                {TEXTS[index % TEXTS.length].name}
                <img src={TEXTS[index % TEXTS.length].img} alt="" width = "50" height = "50"/>
                </div>
            </TextTransition>
          </span>
        </div>
      </h1>
      <div className="secure_inner_container">
        <div className="secure_box">
          Execute transactions anytime and anywhere at{" "}
          <b>lightning-fast speeds.</b> Because Time is money.
        </div>

        <div className="secure_box">
          Send Crypto to friends and family, instantly, for free. No wallet
          adress necessary. Add money with the wide range of transaction options
          available, and exchange currencies at the portfolio in <b>one tap.</b>
        </div>

        <div className="secure_box">
          You name it, Plutope can do it. Add money to your wallet with the{" "}
          <b>wide range of transaction options</b> available, and utilise it to
          invest in the <b>comprehensive range of cryptocurrencies</b> Plutope
          supports.
        </div>

        <div className="secure_box">
          Crypto transactions don’t have to be complicated. Store, transfer, or
          receive assets with world-class security,{" "}
          <b>no prior crypto knowledge required.</b>
        </div>
      </div>
    </Container>
  );
};

export default Secure;
