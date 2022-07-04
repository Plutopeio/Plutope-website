import React from 'react'
import Container from '@mui/material/Container';
import './Portfolio.css'
import WhiteHeptagon from "../../assets/white_heptagon.png"

const Portfolio = () => {
  return (
    <Container className='container portfolio_container'>
        <img src={WhiteHeptagon} alt="" className='portfolio_mover' width="400"/>
        <div className = "portfolio_left">
        <h1><span className='border_head'>Introducing <br/></span>
        Your Portfolio</h1>
        <p><b>Control your assets with<br/> one tap</b>, and have fun<br/> doing it. This is the one<br/> stop destination<br/>
for every crypto need.</p>
<b><p>No minimum capital</p>
        <p>Zero crypto knowledge required<br/> to begin</p></b>
        </div>
    </Container>
  )
}

export default Portfolio