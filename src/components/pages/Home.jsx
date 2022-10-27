import React, { useEffect } from "react";
import "../../style/home.scss";
import home1 from "../../img/home/home1.jpg";
import fruits from "../../img/home/fruits.jpg";
import logoBlanc from "../../img/logo-blanc-full.png";
import CarouselComponent from "../Carousel";
import AOS from "aos";
export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="home">
      <div className="home__container-video">
        <img src={logoBlanc} alt="" />
      </div>
      <div className="home__container-infos p-global" data-aos="fade-up">
        <div className="home__container-infos__content">
          <h1>Le gite</h1>
          <p>
          Proche du village des Ocres de Roussillon, du majestueux village perché de Bonnieux
           et de l'emblématique vue du village de Gordes. 
          Situé dans le triangle d'or du Vaucluse, le Domaine Plan des Devens vous invite à 
          découvrir ces paysages qui abritent les plus beaux villages de France. 
          Nous serions ravis de vous accueillir dans l'un de nos logements, tous uniques, pour allier découverte, 
          dépaysement, calme et sérénité.
          </p>
        </div>
        <CarouselComponent />
      </div>
      <div className="home__container-plus">
        <h1 className="home__container-plus-title">En savoir plus</h1>
        <p className="home__container-plus-p">
        Découvrez nos logements uniques et consulter notre liste de partenaires locaux, 
        créateurs des richesses tu terroir Vauclusien.
        </p>
        <div className="home__container-plus__pictures-container">
          <a
            href="./Gites"
            className="home__container-plus__pictures"
            data-aos="fade-up"
          >
            <img
              className="home__container-plus__pictures__img"
              src={home1}
              alt="home"
            />
            <h1 className="home__container-plus__pictures__text">Nos gites</h1>
          </a>
          <a
            className="home__container-plus__pictures"
            href="./partners"
            data-aos="fade-up"
          >
            <img
              className="home__container-plus__pictures__img"
              src={fruits}
              alt="home"
            />
            <h1 className="home__container-plus__pictures__text">
              Nos partenaires
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}
