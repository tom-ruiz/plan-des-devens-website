import React from "react";
import "../../style/home.scss";
import home1 from "../../img/home/home1.jpg";
import logoBlanc from "../../img/logo-blanc-full.png";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container-video">
        <img src={logoBlanc} alt="" />
      </div>
      <div className="home__container-infos p-global">
        <div>
          <h1>La maison d'hotes</h1>
          <p>
            Située sur la commune d’Antibes Juan-les-Pins, La Villa Topi vous
            accueille dans un cadre de verdure et de calme à seulement 4 km du
            centre historique de la vieille ville d’Antibes et à 1 km des plages
            de Juan-les-Pins.
          </p>
        </div>
        <img src={home1} alt="" />
      </div>
    </div>
  );
}
