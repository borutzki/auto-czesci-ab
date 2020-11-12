import React from "react";
import "./contact.css";
// import ContactTile from "../ContactTile";
import InfoTile from "../../components/InfoTile";
import { contactInfo } from "../../libs/infoTiles";

const Contact = () => {
  return (
    <div className="container">
      <section>
        <h2>Informacje kontaktowe</h2>
        <div className="infoTilesBox">
          {contactInfo.map((tile) => (
            <InfoTile
              key={tile.id}
              desc={tile.desc}
              value={tile.value}
              icon={tile.icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
