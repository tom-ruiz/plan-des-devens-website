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
          <p>Venez découvrir les différents styles et univers dans nos logements où tout est réuni pour que vous puissiez passer le meilleur des séjours au sein de notre Provence bien-aimée.</p>
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
              <h3>
                A partir de <span>110€ la nuit</span>
              </h3>
              <p>
                Moderne et accueillante, Tendresse se présente en maitre des
                âmes voyageuses. Simple, chaleureux et intime, voilà un bon
                compromis pour un séjour de douceur
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
                  Moderne et accueillante, Tendresse se présente en maitre des
                  âmes voyageuses. Simple, chaleureux et intime, voilà un bon
                  compromis pour un séjour de douceur
                  <br />
                  <br />
                  <b>Dans votre cuisine privative :</b>
                  <br />
                  Bouilloire électrique
                  <br />
                  Réfrigérateur
                  <br />
                  Espace repas extérieur
                  <br />
                  Cuisine
                  <br />
                  Grille-pain
                  <br />
                  Plateau / bouilloire
                  <br />
                  Lave-vaisselle
                  <br />
                  Machine à café
                  <br />
                  Four
                  <br />
                  Plaque de cuisson
                  <br />
                  Coin repas
                  <br />
                  Micro-ondes
                  <br />
                  Barbecue
                  <br />
                  Mobilier d’extérieur
                  <br />
                  Chaise haute pour enfants
                  <br />
                  Table à manger
                  <br />
                  Ustensiles de cuisine
                  <br />
                  <br />
                  <b>Dans votre salle de bains privative :</b>
                  <br />
                  Sèche-cheveux
                  <br />
                  Baignoire
                  <br />
                  Articles de toilette gratuits
                  <br />
                  Papier toilette
                  <br />
                  Salle de bains privative
                  <br />
                  Toilettes
                  <br />
                  <br />
                  <b>Vue : </b>
                  <br />
                  Terrasse
                  <br />
                  Vue sur le jardin
                  <br />
                  Patio
                  <br />
                  <b>Fumeurs: non-fumeurs</b>
                  <br />
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
              <h3>
                A partir de <span>110€ la nuit</span>
              </h3>
              <p>
                Volupté vous accueille dans le
                confort d'un studio spacieux, intime et amoureux. Tout équipé,
                ses 36m² vous offrent toutes les commodités essentielles à un
                bon séjour.
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
                  Fort de ses couleurs apaisantes, Volupté vous accueille dans
                  le confort d'un studio spacieux, intime et amoureux. Tout
                  équipé, ses 36m² vous offrent toutes les commodités
                  essentielles à un bon séjour.
                  <br />
                  <br />
                  <b>Dans votre cuisine privative :</b>
                  <br />
                  Bouilloire électrique
                  <br />
                  Réfrigérateur
                  <br />
                  Espace repas extérieur
                  <br />
                  Cuisine
                  <br />
                  Grille-pain
                  <br />
                  Plateau / bouilloire
                  <br />
                  Lave-vaisselle
                  <br />
                  Machine à café
                  <br />
                  Four
                  <br />
                  Plaque de cuisson
                  <br />
                  Coin repas
                  <br />
                  Micro-ondes
                  <br />
                  Barbecue
                  <br />
                  Mobilier d’extérieur
                  <br />
                  Chaise haute pour enfants
                  <br />
                  Table à manger
                  <br />
                  Ustensiles de cuisine
                  <br />
                  <br />
                  <b>Dans votre salle de bains privative :</b>
                  <br />
                  Sèche-cheveux
                  <br />
                  Baignoire
                  <br />
                  Articles de toilette gratuits
                  <br />
                  Papier toilette
                  <br />
                  Salle de bains privative
                  <br />
                  Toilettes
                  <br />
                  <br />
                  <b>Vue : </b>
                  <br />
                  Terrasse
                  <br />
                  Vue sur le jardin
                  <br />
                  Patio
                  <br />
                  <b>Fumeurs: non-fumeurs</b>
                  <br />
                </p>
              </div>
              <div className="Modal__section Modal__section-img">
              <img src={require("../../img/gites/Volupté/volupté1.jpg")} alt="" />
<img src={require("../../img/gites/Volupté/volupté2.jpg")} alt="" />
<img src={require("../../img/gites/Volupté/volupté3.jpg")} alt="" />
<img src={require("../../img/gites/Volupté/volupté4.jpg")} alt="" />
<img src={require("../../img/gites/Volupté/volupté5.jpg")} alt="" />
<img src={require("../../img/gites/Volupté/volupté6.jpg")} alt="" />
<img src={require("../../img/gites/Volupté/volupté7.jpg")} alt="" />
<img src={require("../../img/gites/Volupté/volupté8.jpg")} alt="" />
<img src={require("../../img/gites/Volupté/volupté9.jpg")} alt="" />
<img src={require("../../img/gites/Volupté/volupté10.jpg")} alt="" />
<img src={require("../../img/gites/Volupté/volupté11.jpg")} alt="" />
<img src={require("../../img/gites/Volupté/volupté12.jpg")} alt="" />
<img src={require("../../img/gites/Volupté/volupté13.jpg")} alt="" />
<img src={require("../../img/gites/Volupté/volupté14.jpg")} alt="" />
<img src={require("../../img/gites/Volupté/volupté15.jpg")} alt="" />
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
              <h3>
                A partir de <span>165€ la nuit</span>
              </h3>
              <p>
                En quête de quiétude ? Elle vous attend dans ce splendide
                logement aux aspects modernes et industriels
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
                  En quête de quiétude ? Elle vous attend dans ce splendide
                  logement aux aspects modernes et industriels
                  <br />
                  <br />
                  <b>Dans votre cuisine privative :</b>
                  <br />
                  Bouilloire électrique
                  <br />
                  Réfrigérateur
                  <br />
                  Espace repas extérieur
                  <br />
                  Cuisine
                  <br />
                  Grille-pain
                  <br />
                  Plateau / bouilloire
                  <br />
                  Lave-vaisselle
                  <br />
                  Machine à café
                  <br />
                  Four
                  <br />
                  Plaque de cuisson
                  <br />
                  Coin repas
                  <br />
                  Micro-ondes
                  <br />
                  Barbecue
                  <br />
                  Mobilier d’extérieur
                  <br />
                  Chaise haute pour enfants
                  <br />
                  Table à manger
                  <br />
                  Ustensiles de cuisine
                  <br />
                  <br />
                  <b>Dans votre salle de bains privative :</b>
                  <br />
                  Sèche-cheveux
                  <br />
                  Baignoire
                  <br />
                  Articles de toilette gratuits
                  <br />
                  Papier toilette
                  <br />
                  Salle de bains privative
                  <br />
                  Toilettes
                  <br />
                  <br />
                  <b>Vue : </b>
                  <br />
                  Terrasse
                  <br />
                  Vue sur le jardin
                  <br />
                  Patio
                  <br />
                  <b>Fumeurs: non-fumeurs</b>
                  <br />
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
              <h3>
                A partir de <span>165€ la nuit</span>
              </h3>
              <p>
                Sérénité, quoi de plus agréable que la sérénité. Cet appartement
                accueillant et chaleureux donnera un confort tout particulier à
                votre séjour
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
                  Sérénité, quoi de plus agréable que la sérénité. Cet
                  appartement accueillant et chaleureux donnera un confort tout
                  particulier à votre séjour
                  <br />
                  <br />
                  <b>Dans votre cuisine privative :</b>
                  <br />
                  Bouilloire électrique
                  <br />
                  Réfrigérateur
                  <br />
                  Espace repas extérieur
                  <br />
                  Cuisine
                  <br />
                  Grille-pain
                  <br />
                  Plateau / bouilloire
                  <br />
                  Lave-vaisselle
                  <br />
                  Machine à café
                  <br />
                  Four
                  <br />
                  Plaque de cuisson
                  <br />
                  Coin repas
                  <br />
                  Micro-ondes
                  <br />
                  Barbecue
                  <br />
                  Mobilier d’extérieur
                  <br />
                  Chaise haute pour enfants
                  <br />
                  Table à manger
                  <br />
                  Ustensiles de cuisine
                  <br />
                  <br />
                  <b>Dans votre salle de bains privative :</b>
                  <br />
                  Sèche-cheveux
                  <br />
                  Baignoire
                  <br />
                  Articles de toilette gratuits
                  <br />
                  Papier toilette
                  <br />
                  Salle de bains privative
                  <br />
                  Toilettes
                  <br />
                  <br />
                  <b>Vue : </b>
                  <br />
                  Terrasse
                  <br />
                  Vue sur le jardin
                  <br />
                  Patio
                  <br />
                  <b>Fumeurs: non-fumeurs</b>
                  <br />
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
              <h3>
                A partir de <span>165€ la nuit</span>
              </h3>
              <p>
                Donnez un sens particulièrement reposant à votre séjour en
                optant pour le logement bien-être, ses couleurs de nature et son
                atmosphère détendue
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
                  Donnez un sens particulièrement reposant à votre séjour en
                  optant pour le logement bien-être, ses couleurs de nature et
                  son atmosphère détendue
                  <br />
                  <br />
                  <b>Dans votre cuisine privative :</b>
                  <br />
                  Bouilloire électrique
                  <br />
                  Réfrigérateur
                  <br />
                  Espace repas extérieur
                  <br />
                  Cuisine
                  <br />
                  Grille-pain
                  <br />
                  Plateau / bouilloire
                  <br />
                  Lave-vaisselle
                  <br />
                  Machine à café
                  <br />
                  Four
                  <br />
                  Plaque de cuisson
                  <br />
                  Coin repas
                  <br />
                  Micro-ondes
                  <br />
                  Barbecue
                  <br />
                  Mobilier d’extérieur
                  <br />
                  Chaise haute pour enfants
                  <br />
                  Table à manger
                  <br />
                  Ustensiles de cuisine
                  <br />
                  <br />
                  <b>Dans votre salle de bains privative :</b>
                  <br />
                  Sèche-cheveux
                  <br />
                  Baignoire
                  <br />
                  Articles de toilette gratuits
                  <br />
                  Papier toilette
                  <br />
                  Salle de bains privative
                  <br />
                  Toilettes
                  <br />
                  <br />
                  <b>Vue : </b>
                  <br />
                  Terrasse
                  <br />
                  Vue sur le jardin
                  <br />
                  Patio
                  <br />
                  <b>Fumeurs: non-fumeurs</b>
                  <br />
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
