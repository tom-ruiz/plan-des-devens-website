import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import React from "react";
import "../style/footer.scss";

export default function FooterComponent() {
  return (
    <div className="footer">
      <div className="footer__container">
        {/* <h2>A propos</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis
          nisl, consequat laoreet nibh at, volutpat semper enim. Sed rutrum
          metus et dui dictum, quis elementum mauris laoreet. Fusce congue risus
          turpis, at mattis diam feugiat non. In lacinia fringilla mi ut
          accumsan. Nam eu dui efficitur, maximus sapien ac, hendrerit ligula.
        </p> */}
        <div>
          <h2>Avis</h2>
          <div className="footer__avis">
            <script
              src="https://apps.elfsight.com/p/platform.js"
              defer
            ></script>
            <div class="elfsight-app-e81c5552-adb9-4c33-a7d7-6fcbc363696c"></div>
          </div>
        </div>
        {/* <div className="footer__cc"></div> */}
      </div>
      <div className="footer__container">
        <div>
          <h2>Contact</h2>
          <p>
            291 Chemin de Chabarette, 84220 Roussillon
            <br />
            contact@domaineplandesdevens.com<br />
            +33 6.26.96.33.29
          </p>
        </div>
        <div>
          <h2>Réseaux sociaux</h2>
          <div className="footer__rs">
          <a className="footer__rs-button" href="https://www.facebook.com/profile.php?id=100078405116794" target="_blank" rel='noreferrer'><FaFacebookSquare/></a>
          <a className="footer__rs-button" href="https://www.instagram.com/domaineplandesdevens/" target="_blank" rel='noreferrer'><FaInstagram/></a>
          </div>
        </div>
        <div>
          <h2>Plan</h2>
          <div className="footer__maps">
            <iframe
              loading="lazy"
              allowfullscreen
              title="maps"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyATnEqXjoM3RdZWbaotvrBb82jjvvLrJz4&q=Domaine+plan+des+Dévens,+291+Chemin+de+Chabarette,+84220+Roussillon"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
