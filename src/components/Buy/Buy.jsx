import React , {useState} from "react";
import Container from "@mui/material/Container";
import "./Buy.css";
import Phone from "../../assets/hero_phone.png";
import Sketch from "../../assets/sketch.png";

const Buy = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Container className="container buy_container">
      <h1>Buy Crypto</h1>
      <img src={Phone} alt="" width="350" />
      <div className="buy_text">
        <div className="each_buy first" 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
          <h2>Debit card</h2>
          {isHovering && <img src={Sketch} alt="" />}
        </div>
        <div className="each_buy second" 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
          <h2>Credit card</h2>
          {isHovering && <img src={Sketch} alt="" />}
        </div>
        <div className="each_buy third" 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
          <h2>UPI</h2>
          {isHovering && <img src={Sketch} alt="" />}
        </div>
        <div className="each_buy fourth" 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
          <h2>IMPS</h2>
          {isHovering && <img src={Sketch} alt="" />}
        </div>
      </div>
    </Container>
  );
};

export default Buy;
