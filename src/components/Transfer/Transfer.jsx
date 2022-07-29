import React from 'react'
import Container from '@mui/material/Container';
import './Transfer.css'
import Mockup from "../../assets/Mockup.png"
import useMobile from "../../hooks/UseMobile";

import Heptagon from "../../assets/Heptagon.png"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import {Link} from "react-scroll"

const Transfer = () => {
  const isMobile = useMobile();
  return (
    <div style = {{position:"relative"}} id = "transfer" className="transfer_background_container">

    {!isMobile ?
       <Link to = "scan" className = "scroll_down_arrow" smooth = {true}>
          <ExpandCircleDownIcon style = {{fontSize : "50px" , color: "#3C53F4" , background: "white",borderRadius: "50%"}}/>
        </Link>
        : null}
    <Container className='container transfer_container'>
        <img src={Heptagon} alt="" className='transfer_mover' width="400"/>
        <div className="left_transfer">
            <h1 className='left_transfer_head'>Send or Receive<br/> crypto for  
                <span style={{color:"#3C53F4"}}>{" "} free </span><br/>
                and instantly
            </h1>
            <div className='transfer_para'>
              <p style = {{fontWeight : "300"}}>Send crypto by <b>entering Phone number, username, email or by scanning a QR code.</b> No need to enter a lengthy wallet address or network selection. </p>
              <p style = {{fontWeight : "300" }} className = "goodbye"><b>Simple and secure:</b> A user with 0 crypto knowledge can instantly store, transfer, or receive assets with world-class security.</p>
            </div>
        </div>
        <div className="right_transfer">
            <img src={Mockup} alt="" />
        </div>
    </Container>
    </div>
  )
}

export default Transfer
