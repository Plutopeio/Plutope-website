import React from 'react'
import Container from '@mui/material/Container';
import './Transfer.css'
import Payment from "../../assets/payment.png"
import Heptagon from "../../assets/Heptagon.png"

const Transfer = () => {
  return (
    <Container className='container transfer_container'>
        <img src={Heptagon} alt="" className='transfer_mover' width="400"/>
        <div className="left_transfer">
            <h1 className='left_transfer_head'>Transfers? Easy.<br/>
                <span style={{color:"#3C53F4"}}>Anytime, Anywhere.</span>
            </h1>
            <p>Send crypto to friends by entering their phone numbers or simply scanning their QR codes.
                Say goodbye to entering  lengthy wallet addresses and selecting different networks.</p>
        </div>
        <div className="right_transfer">
            <img src={Payment} alt="" width="400"/>
        </div>
    </Container>
  )
}

export default Transfer