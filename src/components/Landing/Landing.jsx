import React from 'react'
import Container from '@mui/material/Container';
import './Landing.css'
import Card from "../../assets/cards.png"
import { Button } from '@mui/material';

const Landing = () => {
  return (
    <Container className='container landing_container'>
      <div className="left_hero">
        <h1>Spend your crypto 
        <span style={{color: "#3C53F4"}}> anywhere in the world </span>
        with a <span style={{color: "#3C53F4"}}>Plutope debit card.</span></h1>
        <p className = "landing_para">and say Hello 👋🏻 to financial freedom.</p>
        <Button variant='contained' href="" className="join_waitlist_btn">Join The Waitlist</Button>
      </div>

      <div className="right_hero">
        <img src={Card} alt="" width="400"/>
      </div>
    </Container>
  )
}

export default Landing