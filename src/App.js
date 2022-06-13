import { Route, Routes } from "react-router-dom";
import React from "react";
import NavbarComponent from "./components/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Partners from "./components/pages/Partners";
import Gites from "./components/pages/Gites";

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        <Routes>
          <Route path ="/" element={<Home /> }/>
          <Route path ="/partners" element={<Partners /> }/>
          <Route path ="/gites" element={<Gites /> }/>
          <Route path ="/contact" element={ <Contact /> }/>
        </Routes>
      </div>
    </>
  );
}

export default App;
