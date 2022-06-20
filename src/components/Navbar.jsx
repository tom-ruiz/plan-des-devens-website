import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../style/navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";

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

  return (
    <>
      <nav className="nav">
        {(toggleMenu || screenWidth > 500) && (
          <ul className="list">
            <Link
              to="/accueil"
              className="items"
              onClick={() => {
                window.location.href = "/accueil";
              }}
            >
              Accueil
            </Link>
            <CustomLink
              to="/gites"
              className="items"
              onClick={() => {
                window.location.href = "/gites";
              }}
            >
              Nos gites
            </CustomLink>
            <CustomLink
              to="/partners"
              className="items"
              onClick={() => {
                window.location.href = "/partners";
              }}
            >
              Partenaires
            </CustomLink>
            <CustomLink
              to="/contact"
              className="items"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
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
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
