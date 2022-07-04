import React from 'react'
import Landing from "../../components/Landing/Landing"
import Features from "../../components/Features/Features"
import Transfer from "../../components/Transfer/Transfer"
import Crypto from "../../components/Crypto/Crypto"
import Portfolio from "../../components/Portfolio/Portfolio"



import Stake from "../../components/Stake/Stake"
import Wave from "../../assets/wave.png"

const Home = () => {
  return (
    <div>
        <div style={{background:`url(${Wave})` , backgroundSize: "contain" ,backgroundRepeat: "no-repeat"}}>
          <Landing/>
          <Features/>
        </div>
        <Transfer/>
        <Crypto/>
        <Portfolio/>
        <Stake/>
    </div>
  )
}

export default Home