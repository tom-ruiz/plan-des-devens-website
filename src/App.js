import { Route, Routes } from "react-router-dom";
import React from "react";
import NavbarComponent from "./components/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Partners from "./components/pages/Partners";
import Gites from "./components/pages/Gites";
import FooterComponent from "./components/Footer";
import "aos/dist/aos.css";

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        <Routes>
          <Route path ="/accueil" element={<Home /> }/>
          <Route path ="/plan-des-devens-website" element={<Home /> }/>
          <Route path ="/partners" element={<Partners /> }/>
          <Route path ="/gites" element={<Gites /> }/>
          <Route path ="/contact" element={ <Contact /> }/>
        </Routes>
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
