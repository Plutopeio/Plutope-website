import React from "react";
import Phone from "../../assets/hero_phone.png"
import './Horizontal.css'

const Horizontal = () => {
  return (
    <div style={{overflow:"scroll"}} className = "horizontal_container">
      <div class="wrapper d-flex flex-nowrap">
        <section class="section section--dark section--small vw-100 vh-100 flex-shrink-0 d-flex justify-content-center align-items-center" style={{position:"relative",fontSize:"80px",textAlign:"center",backgroundColor:"#3C53F4" , color:"#fff",padding:"0 200px"}}>
          Send or Receive crypto instantly & for free.
          <img src={Phone} alt="" width="300" style={{position:"absolute",right:"-150px"}}/>
        </section>
        <section class="section section--large flex-shrink-0 vw-100 vh-100 d-flex justify-content-center align-items-center" style={{fontSize:"70px",textAlign:"center",backgroundColor:"#F7FAFD" , color:"#000",padding:"0 200px"}}>
          Send crypto to friends by inserting their phone numbers or simply scanning their QR codes. (No need to enter a lengthy wallet address or select different networks)
        </section>
        <section class="section section--small flex-shrink-0 vw-100 vh-100 d-flex justify-content-center align-items-center" style={{fontSize:"80px",textAlign:"center",backgroundColor:"#3C53F4" , color:"#fff",padding:"0 200px"}}>
          Simple and Secure- A user with zero crypto knowledge can instantly store, transfer, or receive assets with world-class security.
        </section>
      </div>
    </div>
  );
};

export default Horizontal;
