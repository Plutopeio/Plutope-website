import React from 'react'
import Container from '@mui/material/Container';
import Phone from '../../assets/hero_phone.png'
import './Features.css'

const Features = () => {
  return (
    <Container className='container features_container'>
        <div className="left_feature">
            <img src={Phone} alt="" width="400"/>
        </div>
        <div className="right_feature">
            <h1>
            ONE APP
            <span style={{color:"#844AFF"}}> COUNTLESS
            COOL
            FEATURES</span>
            </h1>
        </div>
    </Container>
  )
}

export default Features