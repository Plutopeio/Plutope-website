import { Container } from "@mui/material";
import React from "react";
import './Manage.css'
import Laptop from "../../assets/laptop.png"

const Horizontal = () => {
  return (
    <Container className="container manage_container">
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <h1>Manage Your Portfolio</h1>
            <span>control your assets with one tap, and have fun doing it.</span>
        </div>
        <img src={Laptop} alt="" />
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <p style={{fontSize: "xx-large",fontWeight:"700",margin: "0"}}>No minimum capital 💸</p>
            <p style={{fontSize: "xx-large",fontWeight:"700",margin: "0"}}>Zero crypto knowledge to start 🔐</p>
        </div>
    </Container>
  );
};

export default Horizontal;
