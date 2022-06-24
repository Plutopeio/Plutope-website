import React from 'react'
import Container from '@mui/material/Container';
import './Landing.css'
import Phone from "../../assets/hero_phone.png"
import { Button } from '@mui/material';

const Landing = () => {
  return (
    <Container className='container landing_container'>
      <div className="left_hero">
        <h1>Spend your crypto 
        <span style={{color: "#844AFF"}}> anywhere in the world </span>
        with a Plutope debit card.</h1>
        <p className = "landing_para">Say hello👋 to financial freedom.</p>
        <Button variant='contained' href="" className="join_waitlist_btn">Join The Waitlist</Button>
      </div>

      <div className="right_hero">
        <img src={Phone} alt="" width="300"/>
      </div>
    </Container>
  )
}

export default Landing