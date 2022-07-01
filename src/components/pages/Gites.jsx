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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
            finibus quam. Integer in libero nulla.
          </h1>
          <h2 className="gites__intro__title-2">
            Donec ultricies dolor eget aliquam maximus. Ut at odio felis.
          </h2>
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
              <h2>Gite de fou</h2>
              <h3>A partir de <span>150€ la nuit</span></h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
                efficitur sapien. Nunc et arcu et turpis laoreet iaculis.
                Quisque nunc felis, ultricies quis mollis vel, luctus in mi.
                Praesent scelerisque lectus turpis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Curabitur cursus congue ornare.
                Vivamus varius at lectus mattis vehicula.{" "}
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
            <h1>Le gite avec le nom "Super gite"</h1>
            <h3>Pour 2 personnes</h3>
            <div class="Modal__container">
              <div className="Modal__section Modal__section-text">
                <p>
                  Proposée depuis le printemps 2020, la suite Safran est une
                  chambre d'hôtes spacieuse de 24m2, avec salle d'eau (douche,
                  vasque, wc) séparée. Ses quatre portes-fenêtres s'ouvrent sur
                  le jardin exotique de la Villa. La suite Safran offre un
                  couchage de 160cm mais aussi un coin-salon, ouvert sur la
                  pièce, doté d'un confortable canapé-lit pour 2 personnes
                  supplémentaires (couchage 140cm). Lumineuse et claire, la
                  chambre évoque à la fois l’Orient avec quelques touches de
                  couleur safran ou de marbre mais aussi la simplicité des
                  cabanons des pêcheurs marseillais avec ses murs habillés de
                  planches de bois. La chambre d’hôtes Safran est décorée avec
                  des meubles et objets chers aux propriétaires, dans l’esprit
                  des autres chambres d’hôtes de la Villa. Elle dispose de la
                  climatisation et du Wifi gratuit. Vous avez, bien sûr, accès
                  au solarium situé sur le rooftop de la maison d'hôtes. Vous
                  pouvez également profiter de la verrière de style oriental qui
                  donne sur le jardin centenaire, avec Wifi gratuit et coin
                  tisanerie (café, thés, tisanes et réfrigérateur), en
                  libre-accès gracieux. Enfin, en sortant de la maison d'hôtes,
                  vous pourrez accéder en quelques mètres à la petite plage de
                  la calanque sauvage. Les sentiers de randonnées dans le Parc
                  National des Calanques démarrent à cent mètres de la maison.
                  Le centre-ville, notamment le Vieux Port de Marseille, est à
                  seulement 35mn en bus.
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
              <h2>Gite de fou</h2>
              <p>Coucou. </p>
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
            <h1>Le gite avec le nom "Super gite"</h1>
            <h3>Pour 2 personnes</h3>
            <div class="Modal__container">
              <div className="Modal__section Modal__section-text">
                <p>
                  Proposée depuis le printemps 2020, la suite Safran est une
                  chambre d'hôtes spacieuse de 24m2, avec salle d'eau (douche,
                  vasque, wc) séparée. Ses quatre portes-fenêtres s'ouvrent sur
                  le jardin exotique de la Villa. La suite Safran offre un
                  couchage de 160cm mais aussi un coin-salon, ouvert sur la
                  pièce, doté d'un confortable canapé-lit pour 2 personnes
                  supplémentaires (couchage 140cm). Lumineuse et claire, la
                  chambre évoque à la fois l’Orient avec quelques touches de
                  couleur safran ou de marbre mais aussi la simplicité des
                  cabanons des pêcheurs marseillais avec ses murs habillés de
                  planches de bois. La chambre d’hôtes Safran est décorée avec
                  des meubles et objets chers aux propriétaires, dans l’esprit
                  des autres chambres d’hôtes de la Villa. Elle dispose de la
                  climatisation et du Wifi gratuit. Vous avez, bien sûr, accès
                  au solarium situé sur le rooftop de la maison d'hôtes. Vous
                  pouvez également profiter de la verrière de style oriental qui
                  donne sur le jardin centenaire, avec Wifi gratuit et coin
                  tisanerie (café, thés, tisanes et réfrigérateur), en
                  libre-accès gracieux. Enfin, en sortant de la maison d'hôtes,
                  vous pourrez accéder en quelques mètres à la petite plage de
                  la calanque sauvage. Les sentiers de randonnées dans le Parc
                  National des Calanques démarrent à cent mètres de la maison.
                  Le centre-ville, notamment le Vieux Port de Marseille, est à
                  seulement 35mn en bus.
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
        <div className="gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img src={home2} alt="" className="gites__items-img-content" />
          </div>
          <div className="gites__items-infos gites__items-infos-even">
            {" "}
            <p>
              Maecenas vel ante vitae enim tincidunt vehicula. Nunc tincidunt,
              metus in volutpat gravida, odio lorem tincidunt arcu, ac
              vestibulum massa dolor in mi. Nulla iaculis odio posuere commodo
              sodales. Vestibulum arcu justo, ultricies sit amet efficitur
              luctus, fermentum eu est. Vestibulum vel elementum urna.{" "}
            </p>
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
            <h2>Hello</h2>
            <div>I am a modal</div>

            <button className="gites__items-button-close" onClick={closeModal2}>
              close
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
}
