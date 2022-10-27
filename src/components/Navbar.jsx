import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../style/navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { useTranslation } from "react-i18next";
export default function NavbarComponent() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <nav className="nav">
        {(toggleMenu || screenWidth > 805) && (
          <ul className="list">
            <Link to="/accueil" className="items" onClick={toggleMenu}>
              Accueil
            </Link>
            <CustomLink to="/gites" className="items" onClick={toggleMenu}>
              Le gite
            </CustomLink>
            <CustomLink to="/contact" className="items" onClick={toggleMenu}>
              Contact
            </CustomLink>
          </ul>
        )}
        <button onClick={toggleNav} className="btn">
          <AiOutlineMenu className="btn-svg" />
        </button>
      </nav>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""} > 
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
