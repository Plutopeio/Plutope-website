import React from "react";
import Card from "./Card";
import "./Team.css";
import Chetan from "../../assets/images/chetan-tyagi.png";
import Aarlin from "../../assets/images/aarlin-moncey.png";
import Sanya from "../../assets/images/sanya-sud.png";
import team_bg from "../../assets/team_bg.png";

const Team = () => {
  const members = [
    {
      name: "Chetan Tyagi",
      position: "Founder and CEO",
      linkedin: "https://www.linkedin.com/in/kchetantyagi/",
      url: Chetan
    },
    {
      name: "Aarlin Moncy",
      position: "Data Privacy Researcher",
      linkedin: "https://www.linkedin.com/in/i-am-aarlinmatthewmoncy/",
      url: Aarlin,
    },
    {
      name: "Sanya Sud",
      position: "Legal Executive",
      linkedin: "",
      url: Sanya
    }
  ];

  return (
    <div style={{position: "relative"}} className="team_container">
      <img src={team_bg} width="1000" className="team_bg"/>
      <div className="team_inner_container">
        <h1 style = {{fontWeight : "700",margin: "0",padding: "0"}}>The Team</h1>
        <div className="team_members">
          {members.map((member => (
            <Card name={member.name} position={member.position} linkedin={member.linkedin} url={member.url}/>
          )))}
        </div>
      </div>
    </div>
  );
};

export default Team;
