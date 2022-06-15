import React from "react";
import "../../style/home.scss";
import home1 from "../../img/home/home1.jpg";
import logoBlanc from "../../img/logo-blanc-full.png";
import CarouselComponent from "../Carousel";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container-video">
        <img src={logoBlanc} alt="" />
      </div>
      <div className="home__container-infos p-global">
        <div className="home__container-infos__content">
          <h1>La maison d'hotes</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            laoreet libero a mauris tempor sollicitudin pharetra et elit.
            Praesent vel augue non odio viverra imperdiet. Praesent maximus nisl
            eget justo accumsan eleifend. Vestibulum nec ipsum vel nunc suscipit
            iaculis in a arcu. Nam malesuada luctus lorem. Sed pharetra
            convallis mauris finibus elementum. Vestibulum erat quam, tincidunt
            ut imperdiet ut, pharetra ut augue. Mauris vitae imperdiet ligula,
            sit amet iaculis turpis. Maecenas finibus vel sem quis fringilla.
          </p>
        </div>
        <CarouselComponent />
      </div>
      <div className="home__container-plus">
        <h1 className="home__container-plus-title">En savoir plus</h1>
        <p className="home__container-plus-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ullamcorper, dui vitae tempus luctus, nibh lacus ullamcorper orci, et
          placerat augue lorem ac tellus. Donec in lacus ultricies nunc lacinia.
        </p>
        <div className="home__container-plus__pictures-container">
          <div className="home__container-plus__pictures">
            <img
              className="home__container-plus__pictures__img"
              src={home1}
              alt="home"
            />
            <h1 className="home__container-plus__pictures__text">Nos gites</h1>
          </div>
          <div className="home__container-plus__pictures">
            <img
              className="home__container-plus__pictures__img"
              src={home1}
              alt="home"
            />
            <h1 className="home__container-plus__pictures__text">
              Nos partenaires
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
