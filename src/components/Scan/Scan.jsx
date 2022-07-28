import React from "react";
import Container from "@mui/material/Container";
import "./Scan.css";
import QR from "../../assets/QR.png";
import ScanStar from "../../assets/ScanStar.png";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { Link } from "react-scroll";

const Scan = () => {
  return (
    <div style={{ position: "relative" }} id="scan">
      <Link to="crypto" className="scroll_down_arrow" smooth={true}>
        <ExpandCircleDownIcon
          style={{
            fontSize: "50px",
            color: "#3C53F4",
            background: "white",
            borderRadius: "50%",
          }}
        />
      </Link>
      <Container className="container transfer_container">
        <img src={ScanStar} alt="" className="transfer_mover" width="800"/>
        <div className="left_transfer">
          <h1 className="left_transfer_head">
            Scan any UPI QR,
            <br />
            <span style={{ color: "#3C53F4" }}> Pay with Crypto.</span>
          </h1>
          <div className="transfer_para">
            <p style={{ fontWeight: "300" }}>
              Buy, sell and pay using cryptocurrency. The receiver gets paid in
              INR or crypto of their choice.<b> We supercharge your wallet and put
              your portfolio to real use.{" "}</b>
            </p>
          </div>
        </div>
        <div className="right_transfer">
          <img src={QR} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Scan;
