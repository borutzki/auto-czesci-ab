import React from "react";
import "./contact.css";
// import ContactTile from "../ContactTile";
import InfoTile from "../InfoTile";
import { contactInfo } from "../../libs/infoTiles";

const Contact = () => {
  return (
    <section className="container">
      <h2>Informacje kontaktowe</h2>
      <div className="services">
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
  );
};

export default Contact;
