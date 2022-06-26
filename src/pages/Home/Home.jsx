import React from 'react'
import Landing from "../../components/Landing/Landing"
import Features from "../../components/Features/Features"
import Horizontal from "../../components/Horizontal/Horizontal"
import Manage from "../../components/Manage/Manage"
import Buy from "../../components/Buy/Buy"
import Line from "../../components/Line/Line"
import Enabling from "../../components/Enabling/Enabling"
import Stake from "../../components/Stake/Stake"

const Home = () => {
  return (
    <div>
        <Landing/>
        <Features/>
        <Horizontal/>
        <Manage/>
        <Buy/>
        <Line/>
        <Enabling/>
        <marquee>• Exchange. Anytime. Anywhere at a lightning-fast speed because Time is money.</marquee>
        <Stake/>
    </div>
  )
}

export default Home