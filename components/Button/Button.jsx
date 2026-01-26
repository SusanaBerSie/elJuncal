/* import "./button.css";
import buttonLogo from "../../src/images/buttonLogo.png";
import { useState } from "react";

function Button() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <button type="button" className="button" onClick={togglePopup} aria-label="boton">
      <img src={buttonLogo} alt="Button Icon" className="button__icon" />
      <span className="button__text">
        {language === "esp" ? "Reserva ahora" : "Book now"}
      </span>
    </button>
  );
} */
