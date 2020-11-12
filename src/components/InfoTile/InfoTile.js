import React from "react";

const InfoTile = (props) => {
  return (
    <div className="serviceTile">
      <img src={props.icon}></img>
      <h3>{props.desc}</h3>
    </div>
  );
};

export default InfoTile;
