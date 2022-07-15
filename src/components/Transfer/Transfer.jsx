import React from 'react'
import Container from '@mui/material/Container';
import './Transfer.css'
import Mockup from "../../assets/Mockup.png"

import Heptagon from "../../assets/Heptagon.png"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import {Link} from "react-scroll"

const Transfer = () => {
  return (
    <div style = {{position:"relative"}} id = "transfer">
     <Link to = "crypto" className = "scroll_down_arrow" smooth = {true}>
        <ExpandCircleDownIcon style = {{fontSize : "50px" , color: "#3C53F4"}}/>
      </Link>
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
            <img src={Mockup} alt="" width="250"/>
        </div>
    </Container>
    </div>
  )
}

export default Transfer