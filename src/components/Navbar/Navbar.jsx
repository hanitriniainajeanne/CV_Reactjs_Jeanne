import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md  navbar-dark">
        <Link className="navbar-brand" to="">JEANNE</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Toggle className="toggle"/>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Intro" spy={true} smooth={true}>Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="services" spy={true} smooth={true}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="works" spy={true} smooth={true}>Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="portfolio" spy={true} smooth={true}>Portefeuille</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="testimonial" spy={true} smooth={true}>Témoignage</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">contact</Link>
            </li>
            
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default navbar;
