import React from "react";
import "./main.css";
import { serviceInfo, tradeInfo } from "../../libs/infoTiles";
import InfoTile from "../../components/InfoTile";

export default function Main() {
  //   const main = "container main";

  return (
    <div className="container">
      <h1 className="mainTitle">
        Auto-Części & Wulkanizacja <br></br>
        Alfred Borucki
      </h1>
      <p className="subTitle">
        Najlepsza wulkanizacja po tej stronie galaktyki!
      </p>
      <section>
        <h2>Nasze usługi</h2>
        <div className="infoTilesBox">
          {serviceInfo.map((tile) => (
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
        <h2>Asortyment</h2>
        <div className="infoTilesBox">
          {tradeInfo.map((tile) => (
            <InfoTile
              key={tile.id}
              desc={tile.desc}
              value={tile.value}
              icon={tile.icon}
            />
          ))}
        </div>
      </section>
      {/* <section>###GALERIA ZDJĘĆ KIEDYŚ BĘDZIE TU###</section> */}
    </div>
  );
}
