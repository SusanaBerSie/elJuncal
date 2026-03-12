import "./Volunteering.css";
import volunteerImage from "../../src/images/volunteerImage.jpg";
import { useState } from "react";
import buttonLogo from "../../src/images/buttonLogo.png";
import { openWhatsapp } from "../../utils/whatsapp";

function Volunteering() {
  const [language, setLanguage] = useState("esp");

  const toggleLanguage = () => {
    setLanguage(language === "esp" ? "eng" : "esp");
    //lógica para cambiar el idioma de toda la página
  };

  return (
    <div className="volunteering" id="voluntariado">
      <div className="volunteering__container">
        <div className="volunteering__image-container">
          <img className="volunteering__image-photo" src={volunteerImage}></img>
          {/* <img className="volunteering__image-decoration" src={grass}></img>*/}
        </div>
        <div className="volunteering__text-container">
          <h2 className="volunteering__text-title">
            ¿Te gustaría ser voluntaria/o en el Juncal?
          </h2>
          <p className="volunteering__text-paragraph">
            Abrimos nuestras puertas a voluntarios de todo el mundo que quieran
            sumergirse en nuestra cultura y compartir sus habilidades. Has parte
            de la familia El Juncal y contribuye con las labores del campo
            mientras vives una experiencia que transformará tu manera de ver el
            mundo.
          </p>
          <button type="button" className="volunteering__button" onClick={()=> openWhatsapp("Hola, quisiera ser voluntario en el Juncal. ¿Podrían brindarme más información?")} aria-label="Reservar ahora">
            <img
              src={buttonLogo}
              alt="Button Icon"
              className="volunteering__button-icon"
            />
            <span className="volunteering__button-text">
              {language === "esp" ? "Mayor información" : "More information"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Volunteering;
