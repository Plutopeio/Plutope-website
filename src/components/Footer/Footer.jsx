import React from 'react'
import './Footer.css'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {Link} from "react-scroll"


const Footer = () => {
  return (
    <div className = "footer_container" id = "last" style = {{position: "relative"}}>
        <Link to = "landing" className = "scroll_down_arrow" smooth = {true}>
        <ArrowCircleUpIcon style = {{fontSize : "50px" ,color: "white"}}/>
      </Link>
        <h1>Even more exciting features are coming, Join the waitlist and get regular updates.</h1>
        <button variant='contained' href="" className="join_waitlist_btn">Join The Waitlist</button>
    </div>
  )
}

export default Footer