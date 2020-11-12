import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="container">
      <section>
        <h2>Kim jesteśmy?</h2>
        <p>
          Jesteśmy jedną z najlepszych firm w branży wulkanizacyjnej
          działających na terenie powiatu Bolesławieckiego.
        </p>
      </section>
      <section>
        <h2>Jak długo działamy?</h2>
        <p>
          Firma rozpoczęła swoją działalność już 15 lat temu, zaczyając od
          małego garażu i przechodząc do dwustanowiskowego warsztatu z
          nowoczesnymi maszynami.
        </p>
      </section>
      <section>
        <h2>W jakich godzinach pracujemy?</h2>
        <p>W tym tygodniu pracujemy w godzinach: ##przygotowac komponent##</p>
      </section>
    </div>
  );
};

export default About;
