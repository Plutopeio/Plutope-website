import React from 'react'
import Container from '@mui/material/Container';
import './Landing.css'
import Card from "../../assets/plutope.png"

const Landing = () => {
  return (
    <Container className='container landing_container'>
      <div className="left_hero">
        <h1>Spend your crypto 
        <span> anywhere in the world </span>
        with a <span style={{color: "#3C53F4" , backgroundColor: "white"}}>Plutope debit card.</span></h1>
        <p className = "landing_para">and say Hello 👋🏻 to financial freedom.</p>
        <button  href="" className="join_waitlist_btn">Join The Waitlist</button>
      </div>
      <div className="right_hero">
        <img src={Card} alt="" width="400"/>
      </div>
      {/* <img src={Wireframe} alt="" className="landing_mover" width={1200}/> */}
    </Container>
  )
}

export default Landing