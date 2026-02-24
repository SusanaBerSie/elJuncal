import "./Events.css";
import eventImage from "../../src/images/eventImage.jpg";
import buttonLogo from "../../src/images/buttonLogo.png";
import { useState } from "react";

function Events() {
  const [language, setLanguage] = useState("esp");

  const toggleLanguage = () => {
    setLanguage(language === "esp" ? "eng" : "esp");
    //lógica para cambiar el idioma de toda la página
  };

  return (
    <div className="events" id="eventos">
      <img className="events__image" src={eventImage} alt="Evento" />
      <p className="events__text">
        El Juncal es el escenario perfecto para celebrar tus momentos más
        importantes rodeado de naturaleza y con la calidez que sólo el campo
        brinda. Cada detalle está pensado para que tu evento se convierta en un
        recuerdo inolvidable.
      </p>
      <button type="button" className="events__button">
          <img src={buttonLogo} alt="Button Icon" className="events__button-icon"/>
        <span className="events__button-text">
          {language === "esp" ? "Reserva tu evento" : "Book your event"}
        </span>
      </button>

      <div className="events__stats-container">
        <div className="events__circle-container events__circle--variant1">
          <div className="events__circle-outline"></div>
          <div className="events__circle-filled"></div>
          <p className="events__circle-text">
            +100
            <br />
            visitantes
          </p>
        </div>

        <div className="events__circle-container events__circle--variant2">
          <div className="events__circle-outline"></div>
          <div className="events__circle-filled"></div>
          <p className="events__circle-text">
            +50
            <br />
            huéspedes
          </p>
        </div>
        <div className="events__circle-container events__circle--variant3">
          <div className="events__circle-outline"></div>
          <div className="events__circle-filled"></div>
          <p className="events__circle-text">
            +10
            <br />
            eventos
          </p>
        </div>
      </div>
    </div>
  );
}

export default Events;
