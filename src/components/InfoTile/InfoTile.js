import React from "react";
import "./infoTile.css";

const InfoTile = (props) => {
  return (
    <div className="infoTile">
      <img src={props.icon} alt="props.desc" className="svg"></img>
      <h3>{props.desc}</h3>
    </div>
  );
};

export default InfoTile;
