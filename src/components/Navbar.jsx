import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../style/navbar.scss";
import FadeIn from "react-fade-in";

export default function NavbarComponent() {
  return (
    <FadeIn>
      <nav className="nav">
        <ul>
          <Link to="/">Accueil</Link>
          <CustomLink to="/partners">Nos gites</CustomLink>
          <CustomLink to="/partners">Partenaires</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </ul>
      </nav>
    </FadeIn>
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
