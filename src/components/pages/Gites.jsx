import React, { useEffect } from "react";
import "../../style/gites.scss";
import Modal from "react-modal";
import home1 from "../../img/home/home1.jpg";
import home2 from "../../img/home/home2.jpg";
import home3 from "../../img/home/home3.jpg";
import AOS from "aos";

export default function Gites() {
  const [modalIsOpen1, setIsOpen1] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);

  function openModal1() {
    setIsOpen1(true);
    document.body.style = "overflow: hidden";
  }
  function openModal2() {
    setIsOpen2(true);
    document.body.style = "overflow: hidden";
  }
  function closeModal1() {
    setIsOpen1(false);
    document.body.style = "overflow: unset";
  }
  function closeModal2() {
    setIsOpen2(false);
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
          <h1 className="gites__intro__title-1">
          Nos appartements et studios
          </h1>
        
        </div>
      </div>
      <div className="gites__items-container">
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img src={home1} alt="" className="gites__items-img-content" />
          </div>
          <div className="gites__items-infos">
            {" "}
            <div>
              <h2>Tendresse</h2>
              <h3>A partir de <span>150€ la nuit</span></h3>
              <p>
              Fort de ses couleurs appaisantes, Volupté vous accueil dans le confort d'un studio spacieux, 
                intime et amoureux. Tout équipé, ses 36m² vous offrent toutes les commodités essentielles à un bon séjour.{" "}
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
            <h1>Logement 1</h1>
            <h3>Pour 2 personnes</h3>
            <div class="Modal__container">
              <div className="Modal__section Modal__section-text">
                <p>
                Fort de ses couleurs appaisantes, Volupté vous accueil dans le confort d'un studio spacieux, intime et amoureux. Tout équipé, ses 36m² vous offrent toutes les commodités essentielles à un bon séjour.

Dans votre cuisine privative :

Bouilloire électrique
Réfrigérateur
Espace repas extérieur
Cuisine
Grille-pain
Plateau / bouilloire
Lave-vaisselle
Machine à café
Four
Plaque de cuisson
Coin repas
Micro-ondes
Barbecue
Mobilier d’extérieur
Chaise haute pour enfants
Table à manger
Ustensiles de cuisine

Dans votre salle de bains privative :
Sèche-cheveux
Baignoire
Articles de toilette gratuits
Papier toilette
Salle de bains privative
Toilettes

Vue :
Terrasse
Vue sur le jardin
Vue
Patio
Fumeurs:non-fumeurs
                </p>
              </div>
              <div className="Modal__section Modal__section-img">
                <img src="https://picsum.photos/800/600?random=1" alt="" />
                <img src="https://picsum.photos/800/600?random=2" alt="" />
                <img src="https://picsum.photos/800/600?random=3" alt="" />
                <img src="https://picsum.photos/800/600?random=4" alt="" />
                <img src="https://picsum.photos/800/600?random=1" alt="" />
                <img src="https://picsum.photos/800/600?random=1" alt="" />
                <img src="https://picsum.photos/800/600?random=1" alt="" />
              </div>
            </div>

            <button className="gites__items-button-close" onClick={closeModal1}>
              Fermer
            </button>
          </Modal>
        </div>
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img src={home1} alt="" className="gites__items-img-content" />
          </div>
          <div className="gites__items-infos">
            {" "}
            <div>
              <h2>Volupté</h2>
              <h3>A partir de <span>250€ la nuit</span></h3>
              <p>Fort de ses couleurs appaisantes, Volupté vous accueil dans le confort d'un studio spacieux, 
                intime et amoureux. Tout équipé, ses 36m² vous offrent toutes les commodités essentielles à un bon séjour.</p>
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
            <h1>Volupté</h1>
            <h3>Pour 4 personnes</h3>
            <div class="Modal__container">
              <div className="Modal__section Modal__section-text">
                <p>
                Fort de ses couleurs appaisantes, Volupté vous accueil dans le confort d'un studio spacieux, intime et amoureux. Tout équipé, ses 36m² vous offrent toutes les commodités essentielles à un bon séjour.

Dans votre cuisine privative :

Bouilloire électrique
Réfrigérateur
Espace repas extérieur
Cuisine
Grille-pain
Plateau / bouilloire
Lave-vaisselle
Machine à café
Four
Plaque de cuisson
Coin repas
Micro-ondes
Barbecue
Mobilier d’extérieur
Chaise haute pour enfants
Table à manger
Ustensiles de cuisine

Dans votre salle de bains privative :
Sèche-cheveux
Baignoire
Articles de toilette gratuits
Papier toilette
Salle de bains privative
Toilettes

Vue :
Terrasse
Vue sur le jardin
Vue
Patio
Fumeurs:non-fumeurs
                </p>
              </div>
              <div className="Modal__section Modal__section-img">
                <img src="https://picsum.photos/800/600?random=1" alt="" />
                <img src="https://picsum.photos/800/600?random=2" alt="" />
                <img src="https://picsum.photos/800/600?random=3" alt="" />
                <img src="https://picsum.photos/800/600?random=4" alt="" />
                <img src="https://picsum.photos/800/600?random=1" alt="" />
                <img src="https://picsum.photos/800/600?random=1" alt="" />
                <img src="https://picsum.photos/800/600?random=1" alt="" />
              </div>
            </div>

            <button className="gites__items-button-close" onClick={closeModal1}>
              Fermer
            </button>
          </Modal>
        </div>
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img src={home1} alt="" className="gites__items-img-content" />
          </div>
          <div className="gites__items-infos">
            {" "}
            <div>
              <h2>Quiétude</h2>
              <h3>A partir de <span>250€ la nuit</span></h3>
              <p>   Proposée depuis le printemps 2020, la suite Safran est une
                  chambre d'hôtes spacieuse de 24m2, avec salle d'eau (douche,
                  vasque, wc) séparée. Ses quatre portes-fenêtres s'ouvrent sur
                  le jardin exotique de la Villa. La suite Safran offre un
                  couchage de 160cm mais aussi un coin-salon, ouvert sur la
                  pièce, doté d'un confortable canapé-lit pour 2 personnes
                  supplémentaires .</p>
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
            <h1>Quiétude</h1>
            <h3>Pour 8 personnes</h3>
            <div class="Modal__container">
              <div className="Modal__section Modal__section-text">
                <p>
                  Proposée depuis le printemps 2020, la suite Safran est une
                  chambre d'hôtes spacieuse de 24m2, avec salle d'eau (douche,
                  vasque, wc) séparée. Ses quatre portes-fenêtres s'ouvrent sur
                  le jardin exotique de la Villa. La suite Safran offre un
                  couchage de 160cm mais aussi un coin-salon, ouvert sur la
                  pièce, doté d'un confortable canapé-lit pour 2 personnes
                  supplémentaires . Lumineuse et claire, la
                  chambre évoque à la fois l’Orient avec quelques touches de
                  couleur safran ou de marbre mais aussi la simplicité des
                  cabanons des pêcheurs marseillais avec ses murs habillés de
                  planches de bois. La chambre d’hôtes Safran est décorée avec
                  des meubles et objets chers aux propriétaires, dans l’esprit
                  des autres chambres d’hôtes de la Villa. Elle dispose de la
                  climatisation et du Wifi gratuit.
                </p>
              </div>
              <div className="Modal__section Modal__section-img">
                <img src="https://picsum.photos/800/600?random=1" alt="" />
                <img src="https://picsum.photos/800/600?random=2" alt="" />
                <img src="https://picsum.photos/800/600?random=3" alt="" />
                <img src="https://picsum.photos/800/600?random=4" alt="" />
                <img src="https://picsum.photos/800/600?random=1" alt="" />
                <img src="https://picsum.photos/800/600?random=1" alt="" />
                <img src="https://picsum.photos/800/600?random=1" alt="" />
              </div>
            </div>

            <button className="gites__items-button-close" onClick={closeModal1}>
              Fermer
            </button>
          </Modal>
        </div>
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img src={home1} alt="" className="gites__items-img-content" />
          </div>
          <div className="gites__items-infos">
            {" "}
            <div>
              <h2>Sérénité</h2>
              <h3>A partir de <span>250€ la nuit</span></h3>
              <p>   Proposée depuis le printemps 2020, la suite Safran est une
                  chambre d'hôtes spacieuse de 24m2, avec salle d'eau (douche,
                  vasque, wc) séparée. Ses quatre portes-fenêtres s'ouvrent sur
                  le jardin exotique de la Villa. La suite Safran offre un
                  couchage de 160cm mais aussi un coin-salon, ouvert sur la
                  pièce, doté d'un confortable canapé-lit pour 2 personnes
                  supplémentaires .</p>
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
            <h1>Sérénité</h1>
            <h3>Pour 8 personnes</h3>
            <div class="Modal__container">
              <div className="Modal__section Modal__section-text">
                <p>
                  Proposée depuis le printemps 2020, la suite Safran est une
                  chambre d'hôtes spacieuse de 24m2, avec salle d'eau (douche,
                  vasque, wc) séparée. Ses quatre portes-fenêtres s'ouvrent sur
                  le jardin exotique de la Villa. La suite Safran offre un
                  couchage de 160cm mais aussi un coin-salon, ouvert sur la
                  pièce, doté d'un confortable canapé-lit pour 2 personnes
                  supplémentaires . Lumineuse et claire, la
                  chambre évoque à la fois l’Orient avec quelques touches de
                  couleur safran ou de marbre mais aussi la simplicité des
                  cabanons des pêcheurs marseillais avec ses murs habillés de
                  planches de bois. La chambre d’hôtes Safran est décorée avec
                  des meubles et objets chers aux propriétaires, dans l’esprit
                  des autres chambres d’hôtes de la Villa. Elle dispose de la
                  climatisation et du Wifi gratuit.
                </p>
              </div>
              <div className="Modal__section Modal__section-img">
                <img src="https://picsum.photos/800/600?random=1" alt="" />
                <img src="https://picsum.photos/800/600?random=2" alt="" />
                <img src="https://picsum.photos/800/600?random=3" alt="" />
                <img src="https://picsum.photos/800/600?random=4" alt="" />
                <img src="https://picsum.photos/800/600?random=1" alt="" />
                <img src="https://picsum.photos/800/600?random=1" alt="" />
                <img src="https://picsum.photos/800/600?random=1" alt="" />
              </div>
            </div>

            <button className="gites__items-button-close" onClick={closeModal1}>
              Fermer
            </button>
          </Modal>
        </div>
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img src={home1} alt="" className="gites__items-img-content" />
          </div>
          <div className="gites__items-infos">
            {" "}
            <div>
              <h2>Bien-être</h2>
              <h3>A partir de <span>250€ la nuit</span></h3>
              <p>   Proposée depuis le printemps 2020, la suite Safran est une
                  chambre d'hôtes spacieuse de 24m2, avec salle d'eau (douche,
                  vasque, wc) séparée. Ses quatre portes-fenêtres s'ouvrent sur
                  le jardin exotique de la Villa. La suite Safran offre un
                  couchage de 160cm mais aussi un coin-salon, ouvert sur la
                  pièce, doté d'un confortable canapé-lit pour 2 personnes
                  supplémentaires .</p>
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
            <h1>Bien-être</h1>
            <h3>Pour 8 personnes</h3>
            <div class="Modal__container">
              <div className="Modal__section Modal__section-text">
                <p>
                Fort de ses couleurs appaisantes, Volupté vous accueil dans le confort d'un studio spacieux, 
                intime et amoureux. Tout équipé, ses 36m² vous offrent toutes les commodités essentielles à un bon séjour.<br/><br/>

Dans votre cuisine privative :<br/>

Bouilloire électrique<br/>
Réfrigérateur<br/>
Espace repas extérieur<br/>
Cuisine<br/>
Grille-pain<br/>
Plateau / bouilloire<br/>
Lave-vaisselle<br/>
Machine à café<br/>
Four<br/>
Plaque de cuisson<br/>
Coin repas<br/>
Micro-ondes<br/>
Barbecue<br/>
Mobilier d’extérieur<br/>
Chaise haute pour enfants<br/>
Table à manger<br/>
Ustensiles de cuisine<br/>

Dans votre salle de bains privative :<br/>
Sèche-cheveux<br/>
Baignoire<br/>
Articles de toilette gratuits<br/>
Papier toilette<br/>
Salle de bains privative<br/>
Toilettes<br/>

Vue :<br/>
Terrasse<br/>
Vue sur le jardin<br/>
Vue<br/>
Patio<br/>
Fumeurs:non-fumeurs<br/>
                </p>
              </div>
              <div className="Modal__section Modal__section-img">
                <img src="https://picsum.photos/800/600?random=1" alt="" />
                <img src="https://picsum.photos/800/600?random=2" alt="" />
                <img src="https://picsum.photos/800/600?random=3" alt="" />
                <img src="https://picsum.photos/800/600?random=4" alt="" />
                <img src="https://picsum.photos/800/600?random=1" alt="" />
                <img src="https://picsum.photos/800/600?random=1" alt="" />
                <img src="https://picsum.photos/800/600?random=1" alt="" />
              </div>
            </div>

            <button className="gites__items-button-close" onClick={closeModal1}>
              Fermer
            </button>
          </Modal>
        </div>
        <h2 className="gites__intro__title-2">
          Votre intimité et la qualité de votre séjours compte à nos yeux. C'est pourquoi nous avons opté pour un équipement haut de gamme, un accueil convivial et chaleureux, ainsi que des logement flexibles qui vous permettent de choisir entre le confort d'un cocon pour se reposer, ou le pied à terre idéal pour s'aventurer au cœur du Vaucluse.
          </h2>
      </div>
    </div>
  );
}
