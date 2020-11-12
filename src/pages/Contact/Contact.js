import React from "react";
import "./contact.css";
import InfoTile from "../../components/InfoTile";
import ContactForm from "../../components/ContactForm";
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
      <section>
        <h2>Formularz kontaktowy</h2>
        <ContactForm />
      </section>
      {/* <section>
        <h2>Otrzymane wiadomości</h2>
        
      </section> */}
    </div>
  );
};

export default Contact;
