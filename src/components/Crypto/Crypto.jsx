import React from 'react'
import Container from '@mui/material/Container';
import './Crypto.css'
import Card from "../../assets/Card.png"
import Vector from "../../assets/Vector.png"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import {Link} from "react-scroll"

const Crypto = () => {
  return (
    <div style = {{position:"relative"}} id = "crypto">
     <Link to = "portfolio" className = "scroll_down_arrow" smooth = {true}>
        <ExpandCircleDownIcon style = {{fontSize : "50px" , color: "#3C53F4"}}/>
      </Link>
    <Container className='container crypto_container' >
      
      <img src={Vector} alt="" className='crypto_mover' width="400"/>

        <div className="left_crypto">
            <img src={Card} alt="" width="500"/>
        </div>
        <div className="right_crypto">
            <h1 className='left_crypto_head'>Crypto,<br/> 
                    <span style={{color:"#3C53F4"}}>Instantly.</span>
                </h1>
                <p>The PlutoPe Debit card converts your<br/> crypto into cash the moment you<br/> make a transaction. It’s the debit card<br/> from the future, at your fingertips.</p>
        </div>
    </Container>
    </div>
  )
}

export default Crypto