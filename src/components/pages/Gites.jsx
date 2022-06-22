import React, { useEffect } from "react";
import "../../style/gites.scss";
import Modal from "react-modal";
import home1 from "../../img/home/home1.jpg";
import home2 from "../../img/home/home2.jpg";
import home3 from "../../img/home/home3.jpg";
import AOS from "aos";

export default function Gites() {
  let customStyles = {
    content: {
      margin: "10em",
      animation: "fadeInUp",
      animationDuration: ".5s",
      animationTimingFunction: "ease-out",
      backgroundColor: "#bf9075",
    },
  };
  let nav;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    nav.style.animation = "fadeInDown";
  }

  function closeModal() {
    setIsOpen(false);
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
            <p>
              Maecenas vel ante vitae enim tincidunt vehicula. Nunc tincidunt,
              metus in volutpat gravida, odio lorem tincidunt arcu, ac
              vestibulum massa dolor in mi. Nulla iaculis odio posuere commodo
              sodales. Vestibulum arcu justo, ultricies sit amet efficitur
              luctus, fermentum eu est. Vestibulum vel elementum urna.{" "}
            </p>
            <button onClick={openModal} className="gites__items-button">
              En savoir plus
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="Overlay"
            className="Modal"
          >
            <h2>Hello</h2>
            <div>I am a modal</div>

            <button className="gites__items-button-close" onClick={closeModal}>
              close
            </button>
          </Modal>
        </div>
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img src={home2} alt="" className="gites__items-img-content" />
          </div>
          <div className="gites__items-infos">
            {" "}
            <p>
              Maecenas vel ante vitae enim tincidunt vehicula. Nunc tincidunt,
              metus in volutpat gravida, odio lorem tincidunt arcu, ac
              vestibulum massa dolor in mi. Nulla iaculis odio posuere commodo
              sodales. Vestibulum arcu justo, ultricies sit amet efficitur
              luctus, fermentum eu est. Vestibulum vel elementum urna.{" "}
            </p>
            <button onClick={openModal} className="gites__items-button">
              En savoir plus
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2>Hello</h2>
            <div>I am a modal</div>

            <button className="gites__items-button-close" onClick={closeModal}>
              close
            </button>
          </Modal>
        </div>
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img">
            <img src={home3} alt="" className="gites__items-img-content" />
          </div>
          <div className="gites__items-infos">
            {" "}
            <p>
              Maecenas vel ante vitae enim tincidunt vehicula. Nunc tincidunt,
              metus in volutpat gravida, odio lorem tincidunt arcu, ac
              vestibulum massa dolor in mi. Nulla iaculis odio posuere commodo
              sodales. Vestibulum arcu justo, ultricies sit amet efficitur
              luctus, fermentum eu est. Vestibulum vel elementum urna.{" "}
            </p>
            <button onClick={openModal} className="gites__items-button">
              En savoir plus
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2>Hello</h2>
            <div>I am a modal</div>

            <button className="gites__items-button-close" onClick={closeModal}>
              close
            </button>
          </Modal>
        </div>
        <div className=" gites__items" data-aos="flip-up">
          <div className="gites__items-img"></div>
          <div className="gites__items-infos">
            {" "}
            <p>
              Maecenas vel ante vitae enim tincidunt vehicula. Nunc tincidunt,
              metus in volutpat gravida, odio lorem tincidunt arcu, ac
              vestibulum massa dolor in mi. Nulla iaculis odio posuere commodo
              sodales. Vestibulum arcu justo, ultricies sit amet efficitur
              luctus, fermentum eu est. Vestibulum vel elementum urna.{" "}
            </p>
            <button onClick={openModal} className="gites__items-button">
              En savoir plus
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2>Hello</h2>
            <div>I am a modal</div>

            <button className="gites__items-button-close" onClick={closeModal}>
              close
            </button>
          </Modal>
        </div>
        <div className=" gites__items"  data-aos="flip-up">
          <div className="gites__items-img"></div>
          <div className="gites__items-infos">
            {" "}
            <p>
              Maecenas vel ante vitae enim tincidunt vehicula. Nunc tincidunt,
              metus in volutpat gravida, odio lorem tincidunt arcu, ac
              vestibulum massa dolor in mi. Nulla iaculis odio posuere commodo
              sodales. Vestibulum arcu justo, ultricies sit amet efficitur
              luctus, fermentum eu est. Vestibulum vel elementum urna.{" "}
            </p>
            <button onClick={openModal} className="gites__items-button">
              En savoir plus
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2>Hello</h2>
            <div>I am a modal</div>

            <button className="gites__items-button-close" onClick={closeModal}>
              close
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
}
