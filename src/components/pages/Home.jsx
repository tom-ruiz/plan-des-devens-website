import React, { useEffect } from "react";
import "../../style/home.scss";
import home1 from "../../img/home/home1.jpg";
import telephone from "../../img/home/telephone.jpg";
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
          <h1>Le domaine</h1>
          <p>
            Situé sur la commune de Roussillon, bien connue pour ses couleurs
            extraordinaires et ses falaises d'ocres, le Domaine vous invite au
            repos et à la détente.<br/> <b>Notre signature:</b> calme et confort, respect et
            convivialité.<br/> <br/>  Le grand parc arboré de 2 hectares vous permettra de
            profiter de la fraicheur apportée par l'ombre de ses différentes
            essences d'arbres. Vous pourrez vous y promener, vous y reposer,
            vous y faire chouchouter, vous y amuser, et cela sans vous gêner les
            uns les autres, comme le disent Laurent et Sophie "<i>c'est un lieu
            paisible où il fait bon se ressourcer, il y a beaucoup d'espace et
            la piscine est bien agréable</i>" (août 2023).<br/><br/> Son emplacement au cœur
            du triangle d'or du Luberon (les communes de Roussillon, Bonnieux et
            Gordes) vous donnera tout le loisir de rayonner vers les plus beaux
            villages du Luberon. D'avis d'hôtes "<i>le domaine est idéalement situé
            pour profiter de tous les magnifiques villages aux alentours en
            moins de 15 minutes</i>" Carine M (août 2023).<br/><br/>

Concernant notre démarche écologique, outre un petit étang qui récupère les eaux de pluie, un composteur, le choix de produits de toilette bio,  nous nous sommes équipés d'une station de <b>panneaux photovoltaïques de 18 kw</b> pour limiter notre impact carbone, et avons remplacé les climatisations des deux studios par deux pompes à chaleur dernière génération.<br/><br/>
Nous serons donc heureux de vous accueillir dès 2 nuits en basse et moyenne saison et à partir d'une semaine en haute saison, pour vous offrir une véritable expérience de repos et de confort, de découverte et de balades.
          </p>
        
        </div>
        <div className="home__container-infos__content-carousel">
          <CarouselComponent />
        </div>
      </div>
      <div className="home__container-plus">
        <h1 className="home__container-plus-title">En savoir plus</h1>
        <p className="home__container-plus-p">
          Découvrez nos logements uniques et consulter notre liste de
          partenaires locaux, créateurs des richesses tu terroir Vauclusien.
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
            <h1 className="home__container-plus__pictures__text">Les gîtes</h1>
          </a>
          <a
            className="home__container-plus__pictures"
            href="./contact"
            data-aos="fade-up"
          >
            <img
              className="home__container-plus__pictures__img"
              src={telephone}
              alt="home"
            />
            <h1 className="home__container-plus__pictures__text">
              Nous contacter
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}
