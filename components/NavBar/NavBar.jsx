import "./NavBar.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../src/images/logoVector.png";
import buttonLogo from "../../src/images/buttonLogo.png";
import hamburguerIcon from "../../src/images/hamburguer-icon.png";
import closeIcon from "../../src/images/close-icon.png";
import { useTranslation } from "react-i18next";
import { openWhatsapp } from "../../utils/whatsapp";

const menuItems = [
  { label: "Sobre nosotros", labelEng: "About us", href: "#sobre-nosotros" },
  { label: "Habitaciones y servicios", labelEng: "Rooms & services", href: "#habitaciones" },
  { label: "Eventos", labelEng: "Events", href: "#eventos" },
  { label: "Voluntariado", labelEng: "Volunteering", href: "#voluntariado" },
  { label: "Comentarios", labelEng: "Reviews", href: "#comentarios" },
];

const experienceItems = [
  { label: "Preparación productos lácteos", labelEng: "Dairy products" },
  { label: "Camping", labelEng: "Camping" },
  { label: "Desafío campesino", labelEng: "Farmer challenge" },
  { label: "Ordeño de vacas", labelEng: "Cow milking" },
  { label: "Siembra de seres queridos", labelEng: "Memorial planting" },
  { label: "Observación astronómica", labelEng: "Stargazing" },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("esp");
  const [activeDropdown, setActiveDropdown] = useState(null); // 'menu' | 'exp' | null
  // Mobile submenu state: null | 'menu' | 'exp'
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const navigate = useNavigate();

  const menuRef = useRef(null);
  const expRef = useRef(null);

  const {i18n} = useTranslation();

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        expRef.current && !expRef.current.contains(e.target)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMobileSubmenu(null);
  };

  const toggleLanguage = () => {
    setLanguage(language === "esp" ? "eng" : "esp");
  };

  const t = (esp, eng) => language === "esp" ? esp : eng;

  const handleMobileMenuClick = (section) => {
    setMobileSubmenu(mobileSubmenu === section ? null : section);
  };

  const handleMobileNav = (href) => {
    setIsMenuOpen(false);
    setMobileSubmenu(null);
    if (href.startsWith("#")) {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      navigate(href);
    }
  };

 /*  const handleWhatsapp = () => {
    const phoneNumber = "573102873928";
    const message = encodeURIComponent("Hola, estoy interesada en los servicios del Juncal. ¿Podrían brindarme más información?");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  } */

const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {/* MOBILE OVERLAY MENU */}
      {isMenuOpen && (
        <div className="navBar__mobile-overlay">
        <div className="navBar__mobile-container">
          {/* Menú row */}
          <div className="navBar__mobile-row">
            <div
              className={`navBar__mobile-item ${mobileSubmenu === "menu" ? "navBar__mobile-item--active" : ""}`}
              onClick={() => handleMobileMenuClick("menu")}
            >
              {t("Menú", "Menu")} <span className="navBar__mobile-arrow">{mobileSubmenu === "menu" ? "↟" : "↡"}</span>
            </div>
            {mobileSubmenu === "menu" && (
              <div className="navBar__mobile-submenu">
                {menuItems.map((item, i) => (
                  <div
                    key={i}
                    className="navBar__mobile-subitem"
                    onClick={() => handleMobileNav(item.href)}
                  >
                    {t(item.label, item.labelEng)}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Experiencias row */}
          <div className="navBar__mobile-row">
            <div
              className={`navBar__mobile-item ${mobileSubmenu === "exp" ? "navBar__mobile-item--active" : ""}`}
              onClick={() => handleMobileMenuClick("exp")}
            >
              {t("Experiencias", "Experiences")} <span className="navBar__mobile-arrow">{mobileSubmenu === "exp" ? "↟" : "↡"}</span>
            </div>
            {mobileSubmenu === "exp" && (
              <div className="navBar__mobile-submenu">
                {experienceItems.map((item, i) => (
                  <div
                    key={i}
                    className="navBar__mobile-subitem"
                    onClick={() => handleMobileNav("/experiences")}
                  >
                    {t(item.label, item.labelEng)}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Galería row */}
          <div className="navBar__mobile-row">
            <div
              className="navBar__mobile-item"
              onClick={() => handleMobileNav("/gallery")}
            >
              {t("Galería", "Gallery")}
            </div>
          </div>

          <img src={logo} alt="Logo" className="navBar__hamburguer-logo" />
        </div>
        </div>
      )}

      <nav className="navBar">
        <div className="navBar__logoSection">
          <img src={logo} alt="Logo" className= "navBar__logo" style={{display: isMenuOpen ? "none" : "block"}}/>
        </div>

        {/* DESKTOP OPTIONS */}
        <nav className="navBar__options">
          {/* Menú dropdown */}
          <div
            className="navBar__option navBar__dropdown"
            ref={menuRef}
            onMouseEnter={() => setActiveDropdown("menu")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="navBar__option-label">
              {t("Menú", "Menu")} <span className="navBar__caret">↡</span>
            </span>
            {activeDropdown === "menu" && (
              <div className="navBar__submenu">
                {menuItems.map((item, i) => (
                  <span
                    key={i}
                    className="navBar__submenu-item"
                    onClick={() => {handleMobileNav(item.href); setActiveDropdown(null);}}
                  >
                    {t(item.label, item.labelEng)}
                  </span>
                ))}
              </div>
            )}
          </div>

          <span className="navBar__separator">|</span>

          {/* Experiencias dropdown */}
          <div
            className="navBar__option navBar__dropdown"
            ref={expRef}
            onMouseEnter={() => setActiveDropdown("exp")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="navBar__option-label">
              {t("Experiencias", "Experiences")} <span className="navBar__caret">↡</span>
            </span>
            {activeDropdown === "exp" && (
              <div className="navBar__submenu">
                {experienceItems.map((item, i) => (
                  <a
                    key={i}
                    className="navBar__submenu-item"
                    href="/experiences"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {t(item.label, item.labelEng)}
                  </a>
                ))}
              </div>
            )}
          </div>

          <span className="navBar__separator">|</span>

          {/* Galería */}
          <a className="navBar__option" href="/gallery">
            {t("Galería", "Gallery")}
          </a>
        </nav>

        {/* ACTIONS */}
        <div className="navBar__actionsSection">
          <button type="button" className="navBar__button" onClick={() => openWhatsapp("Hola, estoy interesada en los servicios del Juncal. ¿Podrían brindarme más información?")} aria-label="Reservar ahora" >
            <img src={buttonLogo} alt="Button Icon" className="navBar__button-icon" />
            <span className="navBar__button-text">
              {t("Reserva ahora", "Book now")}
            </span>
          </button>
          <button className="navBar__language" onClick={() => changeLanguage("en")} aria-label="Cambiar idioma">
            <span className="navBar__language-text">esp/ing</span>
            <span className="navBar__language-icon">🌐</span>
          </button>
        </div>

        {/* HAMBURGER ICON */}
        <button className="navBar__hamburguer-icon" onClick={toggleMenu} aria-label="Menú">
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
