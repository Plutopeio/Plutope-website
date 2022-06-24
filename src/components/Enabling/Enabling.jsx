import React from 'react'
import './Enabling.css'
import Container from '@mui/material/Container';
import Crypto from '../../assets/cryptos.png'
import Lock from '../../assets/lock.png'



const Enabling = () => {
  return (
    <Container className='container enabling_container'>
        <div className="box">
            <h1>Enabling purchase of 130+ assets.</h1>
            <img src={Crypto} alt=""  width="200"/>
        </div>
        <div className="box">
            <h1>Seamless, Fast and Secure.</h1>
            <img src={Lock} alt=""  width="200"/>
        </div>
    </Container>
  )
}

export default Enabling