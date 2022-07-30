import React from 'react'
import { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import './Crypto.css'
import Card from "../../assets/Card.png"
import Vector from "../../assets/Vector.png"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import {Link} from "react-scroll"
import Right from "../../assets/right_white.png"


const Crypto = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
  };

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;

  return (
    <div style = {{position:"relative"}} id = "crypto" className="crypto_background_container">
    <Container className='container crypto_container' >
      
      <img src={Vector} alt="" className='crypto_mover' width="400"/>

        <div className="left_crypto">
            <img src={Card} alt="" width="500"/>
        </div>
        <div className="right_crypto">
            <h1 className='left_crypto_head'>Spend crypto,<br/> 
                    <span style={{color:"#3C53F4"}}>with a tap.</span>
                </h1>
                <p>Spend your crypto currencies<br/> anywhere in the world and get<br/> rewarded with Plutope debit card<br/><b>Accepted worldwide.</b></p>
          <div style={{display:"flex" , justifyContent: "center"}} className="find_out_btn_container">
                  <button  href="" className="find_out_btn">
                    <span>Find Out More</span>
                    <img src={Right} alt="" />
                  </button>
                </div>
        </div>
    </Container>
    {!isMobile ?
      <Link to = "portfolio" className = "scroll_down_arrow" smooth = {true}>
        <ExpandCircleDownIcon style = {{fontSize : "50px" ,color: "#3C53F4" ,background: "white"}}/>
      </Link>
      : null}

    </div>
  )
}

export default Crypto
