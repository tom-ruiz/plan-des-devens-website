import React, { useEffect } from "react";
import "../../style/gites.scss";
import Modal from "react-modal";
import home1 from "../../img/home/home1.jpg";
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
          <h1 className="gites__intro__title-1">
          Nos appartements et studios
          </h1>
        
        </div>
      </div>
      <div className="gites__items-container">
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img src={require("../../img/gites/Tendresse/IMG_1083.jpg")} alt="" className="gites__items-img-content" />
          </div>
          <div className="gites__items-infos">
            {" "}
            <div>
              <h2>Tendresse</h2>
              <h3>A partir de <span>150€ la nuit</span></h3>
              <p>Moderne et accueillante, Tendresse se présente en maitre des âmes voyageuses. Simple, chaleureux et intime, voilà un bon compromis pour un séjour de douceur
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
                Moderne et accueillante, Tendresse se présente en maitre des âmes voyageuses. Simple, chaleureux et intime, voilà un bon compromis pour un séjour de douceur

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
                <img src={require("../../img/gites/Tendresse/IMG_1083.jpg")} alt="" />
                <img src={require("../../img/gites/Tendresse/IMG_1084.jpg")} alt="" />
                <img src={require("../../img/gites/Tendresse/IMG_1087.jpg")} alt="" />
                <img src={require("../../img/gites/Tendresse/IMG_1090.jpg")} alt="" />
                <img src={require("../../img/gites/Tendresse/IMG_1091.jpg")} alt="" />
                <img src={require("../../img/gites/Tendresse/IMG_1096.jpg")} alt="" />
                <img src={require("../../img/gites/Tendresse/IMG_1105.jpg")} alt="" />
                <img src={require("../../img/gites/Tendresse/IMG_4496.JPG")} alt="" />
                <img src={require("../../img/gites/Tendresse/IMG_4497.JPG")} alt="" />
                <img src={require("../../img/gites/Tendresse/IMG_4500.JPG")} alt="" />
              </div>
            </div>

            <button className="gites__items-button-close" onClick={closeModal1}>
              Fermer
            </button>
          </Modal>
        </div>
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img src={require("../../img/gites/Volupté/IMG_1065.jpg")} alt="" className="gites__items-img-content" />
          </div>
          <div className="gites__items-infos">
            {" "}
            <div>
              <h2>Volupté</h2>
              <h3>A partir de <span>250€ la nuit</span></h3>
              <p>Fort de ses couleurs appaisantes, Volupté vous accueil dans le confort d'un studio spacieux, 
                intime et amoureux. Tout équipé, ses 36m² vous offrent toutes les commodités essentielles à un bon séjour.</p>
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
                Fort de ses couleurs appaisantes, Volupté vous accueil dans le confort d'un studio spacieux, intime et amoureux. Tout équipé, ses 36m² vous offrent toutes les commodités essentielles à un bon séjour.

                </p>
              </div>
              <div className="Modal__section Modal__section-img">
              <img src={require("../../img/gites/Volupté/IMG_1065.jpg")} alt="" />
              <img src={require("../../img/gites/Volupté/IMG_1067.jpg")} alt="" />
              <img src={require("../../img/gites/Volupté/IMG_1068.jpg")} alt="" />
              <img src={require("../../img/gites/Volupté/IMG_1075.jpg")} alt="" />
              <img src={require("../../img/gites/Volupté/IMG_1079.jpg")} alt="" />
              <img src={require("../../img/gites/Volupté/IMG_4504.JPG")} alt="" />
              <img src={require("../../img/gites/Volupté/IMG_4505.JPG")} alt="" />
              <img src={require("../../img/gites/Volupté/IMG_4508.JPG")} alt="" />
              <img src={require("../../img/gites/Volupté/IMG_4509.JPG")} alt="" />
              <img src={require("../../img/gites/Volupté/IMG_4510.JPG")} alt="" />
              </div>
            </div>

            <button className="gites__items-button-close" onClick={closeModal2}>
              Fermer
            </button>
          </Modal>
        </div>
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img src={require("../../img/gites/Quiétude/IMG_1061.jpg")} alt="" className="gites__items-img-content" />
          </div>
          <div className="gites__items-infos">
            {" "}
            <div>
              <h2>Quiétude</h2>
              <h3>A partir de <span>250€ la nuit</span></h3>
              <p>En quête de quiétude ? Elle vous attend dans ce splendide logement aux aspects modernes et industriels
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
                En quête de quiétude ? Elle vous attend dans ce splendide logement aux aspects modernes et industriels
                </p>
              </div>
              <div className="Modal__section Modal__section-img">
              <img src={require("../../img/gites/Quiétude/IMG_1001.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG_1003.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG_1009.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG_1016.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG_1018.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG_1019.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG_1044.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG_1047.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG_1052.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG_1056.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG_1057.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG_1061.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG_1063.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG-20220929-WA0001.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG-20220929-WA0002.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG-20220929-WA0003.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG-20220929-WA0018.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG-20220929-WA0019.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG-20220929-WA0020.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG-20220929-WA0021.jpg")} alt="" />
              <img src={require("../../img/gites/Quiétude/IMG-20220929-WA0022.jpg")} alt="" />

              </div>
            </div>

            <button className="gites__items-button-close" onClick={closeModal3}>
              Fermer
            </button>
          </Modal>
        </div>
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img src={require("../../img/gites/Sérénité/IMG_0937.jpg")} alt="" className="gites__items-img-content" />
          </div>
          <div className="gites__items-infos">
            {" "}
            <div>
              <h2>Sérénité</h2>
              <h3>A partir de <span>250€ la nuit</span></h3>
              <p>Sérénité, quoi de plus agréable que la sérénité. Cet appartement accueillant et chaleureux donnera un confort tout particulier à votre séjour
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
              <p>Sérénité, quoi de plus agréable que la sérénité. Cet appartement accueillant et chaleureux donnera un confort tout particulier à votre séjour
</p>
              </div>
              <div className="Modal__section Modal__section-img">
              <img src={require("../../img/gites/Sérénité/IMG_0934.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_0936.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_0937.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_0942.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_0943.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_0951.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_0956.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_0958.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_0962.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_0969.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_0973.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_0980.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_0987.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_4513.JPG")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_4516.JPG")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_4519.JPG")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_4523.JPG")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_4526.JPG")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_4519.JPG")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_4530.JPG")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_4531.JPG")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_4533.JPG")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_4534.JPG")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_4537.JPG")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_4541.JPG")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_4542.JPG")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_4543.JPG")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG_4544.JPG")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG-20220929-WA0027.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG-20220929-WA0028.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG-20220929-WA0029.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG-20220929-WA0030.jpg")} alt="" />
              <img src={require("../../img/gites/Sérénité/IMG-20220929-WA0031.jpg")} alt="" />
              </div>
            </div>

            <button className="gites__items-button-close" onClick={closeModal4}>
              Fermer
            </button>
          </Modal>
        </div>
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img src={require("../../img/gites/Bien-être/IMG-20220929-WA0007.jpg")} alt="" className="gites__items-img-content" />
          </div>
          <div className="gites__items-infos">
            {" "}
            <div>
              <h2>Bien-être</h2>
              <h3>A partir de <span>250€ la nuit</span></h3>
              <p>Donnez un sens particulièrement reposant à votre séjour en optant pour le logement bien-être, ses 
              couleurs de nature et son atmosphère détendue
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
                Donnez un sens particulièrement reposant à votre séjour en optant pour le logement bien-être, ses 
              couleurs de nature et son atmosphère détendue
                </p>
              </div>
              <div className="Modal__section Modal__section-img">
              <img src={require("../../img/gites/Bien-être/IMG-20220929-WA0005.jpg")} alt="" />
              <img src={require("../../img/gites/Bien-être/IMG-20220929-WA0006.jpg")} alt="" />
              <img src={require("../../img/gites/Bien-être/IMG-20220929-WA0007.jpg")} alt="" />
              <img src={require("../../img/gites/Bien-être/IMG-20220929-WA0008.jpg")} alt="" />
              <img src={require("../../img/gites/Bien-être/IMG-20220929-WA0009.jpg")} alt="" />
              <img src={require("../../img/gites/Bien-être/IMG-20220929-WA0010.jpg")} alt="" />
              <img src={require("../../img/gites/Bien-être/IMG-20220929-WA0011.jpg")} alt="" />
              <img src={require("../../img/gites/Bien-être/IMG-20220929-WA0012.jpg")} alt="" />
              <img src={require("../../img/gites/Bien-être/IMG-20220929-WA0014.jpg")} alt="" />
              <img src={require("../../img/gites/Bien-être/IMG-20220929-WA0015.jpg")} alt="" />
              <img src={require("../../img/gites/Bien-être/IMG-20220929-WA0016.jpg")} alt="" />
              <img src={require("../../img/gites/Bien-être/IMG-20220929-WA0025.jpg")} alt="" />
              <img src={require("../../img/gites/Bien-être/IMG-20220929-WA0026.jpg")} alt="" />
              </div>
            </div>

            <button className="gites__items-button-close" onClick={closeModal5}>
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
