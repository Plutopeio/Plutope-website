import React from 'react'
import './Footer.css'
import { Button } from '@mui/material';


const Footer = () => {
  return (
    <div className = "footer_container">
        <h1>Even more exciting features are coming, Join the waitlist and get regular updates.</h1>
        <Button variant='contained' href="" className="join_waitlist_btn">Join The Waitlist</Button>
    </div>
  )
}

export default Footer