import React from "react";
import Linkedin from "../../assets/linkedin.png";

const Card = (props) => {
  return (
    <div className="member">
      <div className="pfp_container">
        <img src={props.url} alt="profile photo" className="pfp"/>
      </div>
      <p className="member_name">{props.name}</p>
      <p className="member_position">{props.position}</p>
      {props.linkedin ? <a href={props.linkedin}><img src={Linkedin} width="30"/></a>
      : null}
    </div>
  )
};

export default Card;
