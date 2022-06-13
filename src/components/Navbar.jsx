import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../style/navbar.scss";

export default function NavbarComponent() {
  return (
    <>
      <nav className="nav">
        <ul>
          <Link to="/">Accueil</Link>
          <CustomLink to="/gites">Nos gites</CustomLink>
          <CustomLink to="/partners">Partenaires</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </ul>
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
