import React from "react";
import "./map.css";

const Map = () => {
  return (
    <div className="container">
      <section>
        <h2>Nasza lokalizacja</h2>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9973.940477241766!2d15.7576291!3d51.3205964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28ba1e02ce110866!2sAuto-Cz%C4%99%C5%9Bci%20i%20Wulkanizacja%20-%20Alfred%20Borucki!5e0!3m2!1spl!2spl!4v1604755556703!5m2!1spl!2spl"
          frameBorder="0"
          className="map-frame"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </section>
    </div>
  );
};

export default Map;
