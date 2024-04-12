import React, { useEffect } from "react";
import "../../style/gites.scss";
import Modal from "react-modal";
import AOS from "aos";

export default function Gites() {
  const [modalIsOpen1, setIsOpen1] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);
  const [modalIsOpen3, setIsOpen3] = React.useState(false);
  const [modalIsOpen4, setIsOpen4] = React.useState(false);
  const [modalIsOpen5, setIsOpen5] = React.useState(false);

  function openModal1() {
    setIsOpen1(true);
    document.body.style = "overflow: hidden";
  }
  function closeModal1() {
    setIsOpen1(false);
    document.body.style = "overflow: unset";
  }
  function openModal2() {
    setIsOpen2(true);
    document.body.style = "overflow: hidden";
  }
  function closeModal2() {
    setIsOpen2(false);
    document.body.style = "overflow: unset";
  }
  function openModal3() {
    setIsOpen3(true);
    document.body.style = "overflow: hidden";
  }
  function closeModal3() {
    setIsOpen3(false);
    document.body.style = "overflow: unset";
  }
  function openModal4() {
    setIsOpen4(true);
    document.body.style = "overflow: hidden";
  }
  function closeModal4() {
    setIsOpen4(false);
    document.body.style = "overflow: unset";
  }
  function openModal5() {
    setIsOpen5(true);
    document.body.style = "overflow: hidden";
  }
  function closeModal5() {
    setIsOpen5(false);
    document.body.style = "overflow: unset";
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="gites">
      <div className="gites__intro">
        <div className="gites__intro-container">
          <h1 className="gites__intro__title-1">Nos appartements et studios</h1>
          <p>
            Le Domaine dispose de 3 appartements avec 2 chambres, et de 2
            studios. <br />
            Chaque gîte propose sa terrasse privative équipée d'un{" "}
            <b>coin repas</b>, d'un <b>coin salon</b> et d'un{" "}
            <b>barbecue Weber électrique.</b> Chacun a sa propre décoration, son
            propre univers, et est bien sûr équipé de la <b>climatisation.</b>{" "}
            Votre confort, la qualité des équipements, ont été notre priorité
            pour vous offrir un séjour inoubliable dans notre Domaine, au cœur
            de notre beau Luberon. "
            <i>
              Chaque logement est décoré avec goût et dispose de sa propre
              ambiance moderne et cosy. Le cadre est propice au bien-être.
            </i>
            " (Charlène, juillet 2022)
            <br />
            <br /> L'été, nous vous accueillerons avec un apéritif de bienvenue
            partagé sous notre belle treille. "
            <i>
              Un accueil convivial et chaleureux avec un pot d'accueil des plus
              agréables.
            </i>
            " (Carole et Eric, août 2022) <br />
            Sur le Domaine, vous avez à disposition une table de{" "}
            <b>tennis de table</b>, un <b>terrain de badminton</b>, un{" "}
            <b>terrain de pétanque</b>, des jeux de
            <b>Mölkyy</b>, des <b>jeux de raquettes</b> pour les enfants, un{" "}
            <b>ballon de volley</b>, un <b>ballon de foot</b>, un{" "}
            <b>portique</b>, des <b>jeux de société</b>, une
            <b>bibliothèque</b>.
            <br /> Vous trouverez également un kiosque dédié aux massages en
            extérieur, avec notre partenaire "massages", ainsi que différents
            lieux de repos avec des hamacs, des fauteuils... <br />
            Vos véhicules trouveront leur place sous leur car-port, avec à
            disposition (en option) une prise de recharge pour véhicules
            électriques.
          </p>
        </div>
      </div>
      <div className="gites__items-container">
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img
              src={require("../../img/gites/Tendresse/tendresse1.jpg")}
              alt=""
              className="gites__items-img-content"
            />
          </div>
          <div className="gites__items-infos">
            {" "}
            <div>
              <h2>Tendresse</h2>
              <h3>Pour 2 personnes</h3>
              <p>
                Espace de 36 m2, aux couleurs beige et noire, où tout est mis à
                votre disposition pour vous offrir un séjour agréable. Douceur
                de vivre et repos seront votre programme. Il est bien sûr équipé
                de la climatisation.
              </p>
            </div>
            <button onClick={openModal1} className="gites__items-button">
              En savoir plus
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen1}
            onRequestClose={closeModal1}
            ariaHideApp={false}
            className="Modal"
          >
            <h1>Tendresse</h1>
            <h3>Pour 2 personnes</h3>
            <div class="Modal__container">
              <div className="Modal__section Modal__section-text">
                <p>
                  Le studio Tendresse vous accueillera dans un espace de 36 m2,
                  aux couleurs beige et noire, où tout est mis à votre
                  disposition pour vous offrir un séjour agréable. Douceur de
                  vivre et repos seront votre programme. Il est bien sûr équipé
                  de la climatisation.
                  <br />
                  <br />
                  <b>Dans votre coin cuisine :</b>
                  <br /> Réfrigérateur / congélateur vintage
                  <br />
                  Plaque à induction
                  <br />
                  Hotte aspirante
                  <br />
                  Four
                  <br />
                  Micro-ondes
                  <br />
                  Lave-vaisselle
                  <br />
                  Lave-linge
                  <br />
                  Cafetière électrique
                  <br />
                  Bouilloire électrique
                  <br />
                  Grille-pain
                  <br />
                  Ustensiles de cuisine / Vaisselle
                  <br />
                  Aspirateur
                  <br />
                  Balai, serpillère, pelle et balayette
                  <br />
                  Table à repasser
                  <br />
                  Fer à repasser
                  <br />
                  Produits d'entretien
                  <br />
                  Liquide vaisselle
                  <br />
                  Savon
                  <br />
                  Torchons
                  <br />
                  Îlot central avec 2 tabourets hauts
                  <br />
                  <br />
                  <b>Dans votre salle de bains privative :</b>
                  <br />
                  Baignoire avec rideau de douche
                  <br />
                  distributeur savon / shampoing bio
                  <br />
                  Sèche-cheveux
                  <br />
                  Poubelle
                  <br />
                  Miroir en pied
                  <br />
                  Sèche-serviettes électrique
                  <br />
                  Toilettes
                  <br />
                  Papier toilettes
                  <br />2 draps de bain et 2 serviettes Linvosges
                  <br />
                  <br />
                  <b>Côté Nuit :</b>
                  <br />
                  Lit en 160 qualité hôtelière, fait à votre arrivée
                  <br />4 oreillers Linvosges
                  <br />
                  Couette Linvosges
                  <br />
                  Linge de lit Linvosges
                  <br />
                  Tables de nuit avec lampes de chevet
                  <br />2 descentes de lit
                  <br />
                  Commode et portant
                  <br />
                  <br />
                  <b>Côté salon :</b>
                  <br />
                  Canapé fixe
                  <br />
                  Table basse
                  <br />
                  TV 4K grand écran (TNT, satellite, Netflix, chromcast,
                  Spotify)
                  <br />
                  Enceintes connectées bluetooth
                  <br />
                  <br />
                  <b>Côté terrasse:</b>
                  <br />
                  Coin repas
                  <br />
                  Coin salon
                  <br />
                  Barbecue électrique Weber
                  <br />
                  Séchoir à linge
                  <br />
                  Vue sur la cour centrale du Domaine
                </p>
              </div>
              <div className="Modal__section Modal__section-img">
                <img
                  src={require("../../img/gites/Tendresse/tendresse1.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse2.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse3.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse4.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse5.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse6.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse7.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse8.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse9.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse10.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse11.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse12.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse13.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse14.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse15.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse16.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse17.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse18.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Tendresse/tendresse19.jpg")}
                  alt=""
                />
              </div>
            </div>

            <button className="gites__items-button-close" onClick={closeModal1}>
              Fermer
            </button>
          </Modal>
        </div>
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img
              src={require("../../img/gites/Volupté/volupté3.jpg")}
              alt=""
              className="gites__items-img-content"
            />
          </div>
          <div className="gites__items-infos">
            {" "}
            <div>
              <h2>Volupté</h2>
              <h3>Pour 2 personnes</h3>
              <p>
                Le studio Volupté vous invite à la douceur de vivre avec ses
                couleurs rose et beige. Ses 36 m2 vous offriront un espace
                intime et amoureux, où le confort reste le maître-mot. Il est
                bien sûr équipé de la climatisation.
              </p>
            </div>
            <button onClick={openModal2} className="gites__items-button">
              En savoir plus
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen2}
            onRequestClose={closeModal2}
            ariaHideApp={false}
            className="Modal"
          >
            <h1>Volupté</h1>
            <h3>Pour 4 personnes</h3>
            <div class="Modal__container">
              <div className="Modal__section Modal__section-text">
                <p>
                  Le studio Volupté vous invite à la douceur de vivre avec ses
                  couleurs rose et beige. Ses 36 m2 vous offriront un espace
                  intime et amoureux, où le confort reste le maître-mot. Il est
                  bien sûr équipé de la climatisation.
                  <br />
                  <br />
                  <b>Dans votre coin cuisine :</b>
                  <br /> Réfrigérateur / congélateur vintage
                  <br />
                  Plaque à induction
                  <br />
                  Hotte aspirante
                  <br />
                  Four
                  <br />
                  Micro-ondes
                  <br />
                  Lave-vaisselle
                  <br />
                  Lave-linge
                  <br />
                  Cafetière électrique
                  <br />
                  Bouilloire électrique
                  <br />
                  Grille-pain
                  <br />
                  Ustensiles de cuisine / Vaisselle
                  <br />
                  Aspirateur
                  <br />
                  Balai, serpillère, pelle et balayette
                  <br />
                  Table à repasser
                  <br />
                  Fer à repasser
                  <br />
                  Produits d'entretien
                  <br />
                  Liquide vaisselle
                  <br />
                  Savon
                  <br />
                  Torchons
                  <br />
                  Îlot central avec 2 tabourets hauts
                  <br />
                  <br />
                  <b>Dans votre salle de bains privative :</b>
                  <br />
                  Baignoire avec rideau de douche
                  <br />
                  distributeur savon / shampoing bio
                  <br />
                  Sèche-cheveux
                  <br />
                  Poubelle
                  <br />
                  Miroir en pied
                  <br />
                  Sèche-serviettes électrique
                  <br />
                  Toilettes
                  <br />
                  Papier toilettes
                  <br />2 draps de bain et 2 serviettes Linvosges
                  <br />
                  <br />
                  <b>Côté Nuit :</b>
                  <br />
                  Lit en 160 qualité hôtelière, fait à votre arrivée
                  <br />4 oreillers Linvosges
                  <br />
                  Couette Linvosges
                  <br />
                  Linge de lit Linvosges
                  <br />
                  Tables de nuit avec lampes de chevet
                  <br />2 descentes de lit
                  <br />
                  Commode et portant
                  <br />
                  <br />
                  <b>Côté salon :</b>
                  <br />
                  Canapé fixe
                  <br />
                  Table basse
                  <br />
                  TV 4K grand écran (TNT, satellite, Netflix, chromcast,
                  Spotify)
                  <br />
                  Enceintes connectées bluetooth
                  <br />
                  <br />
                  <b>Côté terrasse:</b>
                  <br />
                  Coin repas
                  <br />
                  Coin salon
                  <br />
                  Barbecue électrique Weber
                  <br />
                  Séchoir à linge
                  <br />
                  Vue sur la cour centrale du Domaine
                </p>
              </div>
              <div className="Modal__section Modal__section-img">
                <img
                  src={require("../../img/gites/Volupté/volupté1.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Volupté/volupté2.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Volupté/volupté3.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Volupté/volupté4.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Volupté/volupté5.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Volupté/volupté6.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Volupté/volupté7.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Volupté/volupté8.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Volupté/volupté9.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Volupté/volupté10.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Volupté/volupté11.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Volupté/volupté12.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Volupté/volupté13.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Volupté/volupté14.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Volupté/volupté15.jpg")}
                  alt=""
                />
              </div>
            </div>

            <button className="gites__items-button-close" onClick={closeModal2}>
              Fermer
            </button>
          </Modal>
        </div>
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img
              src={require("../../img/gites/Quiétude/quiétude15.jpg")}
              alt=""
              className="gites__items-img-content"
            />
          </div>
          <div className="gites__items-infos">
            {" "}
            <div>
              <h2>Quiétude</h2>
              <h3>Pour 4 personnes</h3>
              <p>
                En quête de Quiétude ? Elle vous attend dans ce confortable
                logement aux aspects moderne et industriel. Sa surface de 66 m2,
                avec ses 2 chambres, vous offrira un bel espace de vie. Bien
                sûr, il est équipé de la climatisation. Sa terrasse privative de
                50 m2, avec vue sur la piscine et le jardin, vous permettra de
                prendre vos repas sous la tonnelle, de vous reposer dans le coin
                salon sous la terrasse couverte. Un barbecue Weber électrique
                est à votre disposition.
              </p>
            </div>
            <button onClick={openModal3} className="gites__items-button">
              En savoir plus
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen3}
            onRequestClose={closeModal3}
            ariaHideApp={false}
            className="Modal"
          >
            <h1>Quiétude</h1>
            <h3>Pour 8 personnes</h3>
            <div class="Modal__container">
              <div className="Modal__section Modal__section-text">
                <p>
                  En quête de Quiétude ? Elle vous attend dans ce confortable
                  logement aux aspects moderne et industriel.
                  <br /> Sa surface de 66 m2, avec ses 2 chambres, vous offrira
                  un bel espace de vie. Bien sûr, il est équipé de la
                  climatisation. Sa terrasse privative de 50 m2, avec vue sur la
                  piscine et le jardin, vous permettra de prendre vos repas sous
                  la tonnelle, de vous reposer dans le coin salon sous la
                  terrasse couverte. Un barbecue Weber électrique est à votre
                  disposition.
                  <br />
                  <br />
                  <b>Dans votre cuisine privative :</b>
                  <br /> Réfrigérateur / congélateur vintage
                  <br />
                  Plaque à induction
                  <br />
                  Hotte aspirante
                  <br />
                  Four
                  <br />
                  Micro-ondes
                  <br />
                  Lave-vaisselle
                  <br />
                  Lave-linge
                  <br />
                  Cafetière expresso
                  <br />
                  Bouilloire électrique
                  <br />
                  Grille-pain
                  <br />
                  Ustensiles de cuisine / Vaisselle
                  <br />
                  Table à manger avec ses 4 chaises
                  <br />
                  Aspirateur
                  <br />
                  Table à repasser
                  <br />
                  Fer à repasser
                  <br />
                  Balai et serpillère
                  <br />
                  Pelle et balayette
                  <br />
                  Produits d'entretien
                  <br />
                  Liquide vaisselle
                  <br />
                  Torchons
                  <br />
                  <br />
                  <b>Dans votre salon:</b>
                  <br /> Canapé d'angle
                  <br />
                  Fauteuil
                  <br />
                  Table basse
                  <br />
                  TV 4K grand écran (TNT, satellite, Netflix, chromcast,
                  Spotify)
                  <br />
                  Enceintes connectées bluetooth
                  <br />
                  <br />
                  <b>Dans votre salle de bain privative :</b>
                  <br /> Baignoire avec rideau de douche
                  <br />
                  distributeur savon / shampoing bio
                  <br />
                  Sèche-cheveux
                  <br />
                  Poubelle
                  <br />
                  Miroir en pied
                  <br />
                  <br />
                  <b>Toilettes indépendantes:</b>
                  <br /> Papier toilette
                  <br />
                  Poubelle
                  <br />
                  <br />
                  <b>Chambre 1:</b>
                  <br /> Lit en 160 qualité hôtelière, fait à votre arrivée
                  <br />4 oreillers Linvosges
                  <br />
                  Couette Linvosges
                  <br />
                  Linge de lit Linvosges
                  <br />
                  Tables de nuit avec lampes de chevet
                  <br />2 descentes de lit
                  <br />
                  Penderie
                  <br />
                  Chaise
                  <br />
                  Vue côté jardin, sur la terrasse couverte
                  <br />
                  <br />
                  <b>Chambre 2:</b>
                  <br /> Lit modulable en une fois 160 ou 2 lits en 80
                  <br />4 oreillers Linvosges
                  <br />
                  Couette Linvosges
                  <br />
                  Linge de lit Linvosges
                  <br />
                  Tables de nuit avec lampes de chevet
                  <br />2 descentes de lit
                  <br />
                  Penderie
                  <br />
                  Chaise
                  <br />
                  Vue côté cour du Domaine
                </p>
              </div>
              <div className="Modal__section Modal__section-img">
                <img
                  src={require("../../img/gites/Quiétude/quiétude1.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude2.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude3.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude4.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude5.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude6.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude7.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude8.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude9.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude10.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude11.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude12.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude13.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude14.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude15.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude16.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude17.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude18.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude19.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude20.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude21.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude22.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude23.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude24.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude25.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude26.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude27.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude28.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude29.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude30.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude31.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude32.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude33.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude34.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude35.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude36.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Quiétude/quiétude37.jpg")}
                  alt=""
                />
              </div>
            </div>

            <button className="gites__items-button-close" onClick={closeModal3}>
              Fermer
            </button>
          </Modal>
        </div>
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img
              src={require("../../img/gites/Sérénité/sérénité18.jpg")}
              alt=""
              className="gites__items-img-content"
            />
          </div>
          <div className="gites__items-infos">
            {" "}
            <div>
              <h2>Sérénité</h2>
              <h3>Pour 4 personnes</h3>
              <p>
                Sa décoration bohème, aux tons blanc, beige et gris, vous
                offrira un doux confort invitant à passer des moments sereins et
                paisibles. <br /> Ses 66 m2 lumineux sont propices à la détente
                et au repos. Sa terrasse privative de 50 m2, avec vue le jardin,
                vous permettra de prendre vos repas sous la tonnelle, de vous
                reposer dans le coin salon sous la terrasse couverte.
              </p>
            </div>
            <button onClick={openModal4} className="gites__items-button">
              En savoir plus
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen4}
            onRequestClose={closeModal4}
            ariaHideApp={false}
            className="Modal"
          >
            <h1>Sérénité</h1>
            <h3>Pour 8 personnes</h3>
            <div class="Modal__container">
              <div className="Modal__section Modal__section-text">
                <p>
                  Sa décoration bohème, aux tons blanc, beige et gris, vous
                  offrira un doux confort invitant à passer des moments sereins
                  et paisibles. Ses 66 m2 lumineux sont propices à la détente et
                  au repos. Sa terrasse privative de 50 m2, avec vue le jardin,
                  vous permettra de prendre vos repas sous la tonnelle, de vous
                  reposer dans le coin salon sous la terrasse couverte. Un
                  barbecue Weber électrique est à votre disposition.
                  <br />
                  <br />
                  <b>Dans votre cuisine privative :</b>
                  <br /> Réfrigérateur / congélateur vintage
                  <br />
                  Plaque à induction 2 feux
                  <br />
                  Plaque à gaz 2 feux
                  <br />
                  Hotte aspirante
                  <br />
                  Four
                  <br />
                  Micro-ondes
                  <br />
                  Cafetière électrique
                  <br />
                  Bouilloire électrique
                  <br />
                  Grille-pain
                  <br />
                  Lave-vaisselle
                  <br />
                  Ustensiles de cuisine / Vaisselle
                  <br />
                  Table à manger avec ses 4 chaises
                  <br />
                  Produits d'entretien
                  <br />
                  Liquide vaisselle
                  <br />
                  Torchons
                  <br />
                  <br />
                  <b>Dans le cellier :</b>
                  <br /> Lave-linge
                  <br />
                  Aspirateur
                  <br />
                  Balai et serpillère
                  <br />
                  Pelle et balayette
                  <br />
                  Table à repasser
                  <br />
                  Fer à repasser
                  <br />
                  <br />
                  <b>Dans votre salon :</b>
                  Canapé d'angle Fauteuil Table basse TV 4K grand écran (TNT,
                  satellite, Netflix, chromcast, Spotify) Enceintes connectées
                  bluetooth
                  <br />
                  <br />
                  <b>Dans votre salle de bain privative :</b>
                  <br />
                  Baignoire avec rideau de douche
                  <br />
                  distributeur savon / shampoing bio
                  <br />
                  Sèche-cheveux
                  <br />
                  Poubelle
                  <br />
                  Miroir en pied
                  <br />
                  <br />
                  <b>Toilettes indépendantes:</b>
                  <br />
                  Papier toilette
                  <br />
                  Poubelle
                  <br />
                  <br />
                  <b>Chambre 1:</b>
                  <br />
                  Lit en 160 qualité hôtelière, fait à votre arrivée
                  <br />4 oreillers Linvosges
                  <br />
                  Couette Linvosges
                  <br />
                  Linge de lit Linvosges
                  <br />
                  Tables de nuit avec lampes de chevet
                  <br />2 descentes de lit
                  <br />
                  Penderie
                  <br />
                  Chaise
                  <br />
                  Vue côté jardin, sur la terrasse couverte
                  <br />
                  <br />
                  <b>Chambre 2:</b>
                  <br />
                  Lit modulable en une fois 160 ou 2 lits en 80
                  <br />4 oreillers Linvosges
                  <br />
                  Couette Linvosges
                  <br />
                  Linge de lit Linvosges
                  <br />
                  Tables de nuit avec lampes de chevet
                  <br />2 descentes de lit
                  <br />
                  Penderie
                  <br />
                  Chaise
                  <br />
                  Vue côté cour du Domaine
                </p>
              </div>
              <div className="Modal__section Modal__section-img">
                <img
                  src={require("../../img/gites/Sérénité/sérénité1.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité2.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité3.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité4.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité5.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité6.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité7.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité8.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité9.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité10.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité11.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité12.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité13.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité14.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité15.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité16.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité17.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité18.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité20.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Sérénité/sérénité21.jpg")}
                  alt=""
                />
              </div>
            </div>

            <button className="gites__items-button-close" onClick={closeModal4}>
              Fermer
            </button>
          </Modal>
        </div>
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img
              src={require("../../img/gites/Bien-être/bien-être4.jpg")}
              alt=""
              className="gites__items-img-content"
            />
          </div>
          <div className="gites__items-infos">
            {" "}
            <div>
              <h2>Bien-être</h2>
              <h3>Pour 4 personnes</h3>
              <p>
                La décoration colorée vintage de votre logement vous apportera
                bonne humeur et dynamisme.
                <br /> Ses 80 m2 vous permettront de profiter pleinement de tous
                ses équipements, et vous inviteront à des beaux moments de
                partage en famille ou entre amis. Sa terrasse de 50 m2, moitié
                couverte pour votre coin salon, et sous une treille pour votre
                coin repas, vous invitera à la détente et à de bons moments de
                convivialité.
              </p>
            </div>
            <button onClick={openModal5} className="gites__items-button">
              En savoir plus
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen5}
            onRequestClose={closeModal5}
            ariaHideApp={false}
            className="Modal"
          >
            <h1>Bien-être</h1>
            <h3>Pour 8 personnes</h3>
            <div class="Modal__container">
              <div className="Modal__section Modal__section-text">
                <p>
                  <br />
                  <br />
                  <b> Dans votre cuisine privative :</b>
                  <br />
                  Réfrigérateur / congélateur vintage
                  <br />
                  Plaque à induction
                  <br />
                  Hotte aspirante
                  <br />
                  Four
                  <br />
                  Micro-ondes
                  <br />
                  Lave-vaisselle
                  <br />
                  Cafetière expresso
                  <br />
                  Bouilloire électrique
                  <br />
                  Grille-pain
                  <br />
                  Ustensiles de cuisine / Vaisselle
                  <br />
                  Produits d'entretien
                  <br />
                  Liquide vaisselle
                  <br />
                  Torchons
                  <br />
                  Coin repas:
                  <br />
                  Table
                  <br />4 chaises
                  <br />
                  <br />
                  <b> Dans le cellier :</b>
                  <br />
                  Lave-linge
                  <br />
                  Aspirateur
                  <br />
                  Balai et serpillère
                  <br />
                  Pelle et balayette
                  <br />
                  Table à repasser
                  <br />
                  Fer à repasser
                  <br />
                  <br />
                  <b> Dans votre salon:</b>
                  <br />
                  Canapé velours
                  <br />
                  Fauteuil
                  <br />
                  Table basse
                  <br />
                  TV 4K grand écran (TNT, satellite, Netflix, chromcast,
                  Spotify)
                  <br />
                  Enceintes connectées bluetooth
                  <br />
                  <br />
                  <b>Dans votre salle de bain privative :</b>
                  <br />
                  Baignoire avec rideau de douche
                  <br />
                  distributeur savon / shampoing bio
                  <br />
                  Sèche-cheveux
                  <br />
                  Poubelle
                  <br />
                  Miroir en pied
                  <br />
                  Toilettes semi-indépendante
                  <br />
                  Papier toilette
                  <br />
                  <br />
                  <b>Chambre 1:</b>
                  <br />
                  Lit en 160 qualité hôtelière, fait à votre arrivée
                  <br />4 oreillers Linvosges
                  <br />
                  Couette Linvosges
                  <br />
                  Linge de lit Linvosges
                  <br />
                  Tables de nuit avec lampes de chevet
                  <br />2 descentes de lit
                  <br />
                  Portant
                  <br />
                  Commode
                  <br />
                  Vue côté jardin, terrasse couverte
                  <br />
                  <br />
                  <b>Chambre 2:</b>
                  <br />
                  Lit modulable en une fois 160 ou 2 lits en 80
                  <br />4 oreillers Linvosges
                  <br />
                  Couette Linvosges
                  <br />
                  Linge de lit Linvosges
                  <br />
                  Tables de nuit avec lampes de chevet
                  <br />2 descentes de lit
                  <br />
                  Penderie
                  <br />
                  Chaise
                  <br />
                  Vue côté entrée du Domaine
                </p>
              </div>
              <div className="Modal__section Modal__section-img">
                <img
                  src={require("../../img/gites/Bien-être/bien-être1.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être2.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être3.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être4.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être5.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être6.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être7.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être8.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être9.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être10.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être11.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être12.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être13.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être14.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être15.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être16.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être17.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être18.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être19.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être20.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être21.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être22.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être23.jpg")}
                  alt=""
                />
                <img
                  src={require("../../img/gites/Bien-être/bien-être24.jpg")}
                  alt=""
                />
              </div>
            </div>

            <button className="gites__items-button-close" onClick={closeModal5}>
              Fermer
            </button>
          </Modal>
        </div>
        <h2 className="gites__intro__title-2">
          Votre intimité et la qualité de votre séjour compte à nos yeux. C'est
          pourquoi nous avons opté pour un équipement haut de gamme, un accueil
          convivial et chaleureux, ainsi que des logements flexibles qui vous
          permettent de choisir entre le confort d'un cocon pour se reposer, ou
          le pied-à-terre idéal pour s'aventurer au cœur du Vaucluse.
        </h2>
      </div>
    </div>
  );
}
