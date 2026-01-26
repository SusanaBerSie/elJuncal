import "./NavBar.css";
import { useState } from "react";
import logo from "../../src/images/logoVector.png";
import buttonLogo from "../../src/images/buttonLogo.png";
import hamburguerIcon from "../../src/images/hamburguer-icon.png";
import closeIcon from "../../src/images/close-icon.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("esp");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "esp" ? "eng" : "esp");
    //lógica para cambiar el idioma de toda la página
  };

  return (
    <>
      {isMenuOpen && (
        <>
          <div className="navBar__overlay"></div>
          <div className="navBar__hamburguer-menu">
            <a className="navBar__hamburguer-option">Habitaciones</a>
            <a className="navBar__hamburguer-option">Experiencias</a>
            <a className="navBar__hamburguer-option">Eventos</a>
            <a className="navBar__hamburguer-option">Voluntariado</a>
            <a className="navBar__hamburguer-option">Galería</a>
          </div>
        </>
      )}
      <nav className="navBar">
        <div className="navBar__logoSection">
          <img src={logo} alt="Logo" className="navBar__logo" />
        </div>
        <nav className="navBar__options">
          <a className="navBar__option" href="#sobre-nosotros">
            {language === "esp" ? "Sobre nosotros" : "About us"}
          </a>
          <a className="navBar__option" href="#habitaciones">
            {language === "esp" ? "Habitaciones" : "Rooms"}
          </a>
          <a className="navBar__option" href="#experiencias">
            {language === "esp" ? "Experiencias" : "Experiences"}
          </a>
          <a className="navBar__option" href="#eventos">
            {language === "esp" ? "Eventos" : "Events"}
          </a>
          <a className="navBar__option" href="#voluntariado">
            {language === "esp" ? "Voluntariado" : "Volunteering"}
          </a>
          <a className="navBar__option">
            {" "}
            {language === "esp" ? "Galería" : "Gallery"}
          </a>
        </nav>
        <div className="navBar__actionsSection">
          <button type="button" className="navBar__button">
            <img
              src={buttonLogo}
              alt="Button Icon"
              className="navBar__button-icon"
            />
            <span className="navBar__button-text">
              {language === "esp" ? "Reserva ahora" : "Book now"}
            </span>
          </button>
          <button
            className="navBar__language"
            onClick={toggleLanguage}
            aria-label="Cambiar idioma"
          >
            <span className="navBar__language-text">esp/ing</span>
            <span className="navBar__language-icon">🌐</span>
          </button>
        </div>
        <button
          className="navBar__hamburguer-icon"
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <img
            className="navBar__hamburguer-closeIcon"
            src={isMenuOpen ? closeIcon : hamburguerIcon}
            alt={isMenuOpen ? "Cerrar menú" : "Menú"}
          />
        </button>
      </nav>
    </>
  );
}

export default NavBar;
