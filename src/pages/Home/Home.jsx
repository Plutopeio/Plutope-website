import React from 'react'
import Landing from "../../components/Landing/Landing"
import Features from "../../components/Features/Features"
import Transfer from "../../components/Transfer/Transfer"
import Crypto from "../../components/Crypto/Crypto"
import Portfolio from "../../components/Portfolio/Portfolio"
import Upi from "../../components/Upi/Upi"
import Secure from "../../components/Secure/Secure"





import Stake from "../../components/Stake/Stake"

const Home = () => {
  return (
    <div>
        <div style={{background: "#3C53F4"}}>
          <Landing/>
          <Features/>
        </div>
        <Transfer/>
        <Crypto/>
        <Portfolio/>
        <Upi/>
        <Stake/>
        <Secure/>
    </div>
  )
}

export default Home