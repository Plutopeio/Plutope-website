import React from "react";
import Container from "@mui/material/Container";
import "./Disclaimer.css";
import { Link } from "react-scroll";
import useMobile from "../../hooks/UseMobile";

const Disclaimer = () => {
  const isMobile = useMobile();
  return (
    <div style={{position: "relative"}}>
      <Container className="container disclaimer_container">
        <div className="disclaimer">
          <h1 className="disclaimer_head">
            Disclaimer
          </h1>
          <div className="disclaimer_para">
            <p style={{ fontWeight: "300" }}>Plutope is a software platform ONLY and does not conduct any independent diligence on or substantive review of any blockchain asset, digital currency, cryptocurrency, or associated funds. You are fully and solely responsible for evaluating your investments, for determining whether you will exchange blockchain assets based on your own, and for all your decisions as to whether to exchange blockchain assets with the PlutoPe in-app exchange feature. In many cases, blockchain assets you exchange on the basis of your research may not increase in value, and may decrease in value. Similarly, blockchain assets you exchange on the basis of your research may increase in value after your exchange.
Past performance is not indicative of future results. Any investment in blockchain assets involves the risk of loss of part or all of your investment. The value of the blockchain assets you exchange is subject to market and other investment risks. PlutoPe users are responsible for storing their own recovery phrases. If the recovery phrase is lost, the user might not be able to retrieve their private keys.</p>
          </div>
        </div>
        <div className="disclaimer_footer">
          <p style={{fontWeight: "600"}}>plutope</p>
          <p>Copyright © 2021-2022 PlutoPe Private Limited</p>
        </div>
      </Container>
    </div>
  );
};

export default Disclaimer;
