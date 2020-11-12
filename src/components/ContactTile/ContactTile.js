import React from "react";
import "./contactTile.css";

const ContactTile = (props) => {
  console.log(props.iconPath);
  return (
    <div className="contactTile">
      <img src={props.iconPath} alt="icon tile"></img>
      {/* <p className="tileName">{props.title}</p> */}
      <p className="tileValue">{props.subtitle}</p>
    </div>
  );
};

export default ContactTile;
