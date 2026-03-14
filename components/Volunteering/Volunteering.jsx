import "./Volunteering.css";
import volunteerImage from "../../src/images/volunteerImage.jpg";
import { useState } from "react";
import buttonLogo from "../../src/images/buttonLogo.svg";
import { openWhatsapp } from "../../utils/whatsapp";
import { useTranslation } from "react-i18next";

function Volunteering() {
  const { t } = useTranslation();

  return (
    <div className="volunteering" id="voluntariado">
      <div className="volunteering__container">
        <div className="volunteering__image-container">
          <img className="volunteering__image-photo" src={volunteerImage}></img>
        </div>
        <div className="volunteering__text-container">
          <h2 className="volunteering__text-title">
            {t("teGustariaSerVoluntario")}
          </h2>
          <p className="volunteering__text-paragraph">
            {t("voluntariadoDescripcion")}
          </p>
          <button type="button" className="volunteering__button" onClick={()=> openWhatsapp("Hola, quisiera ser voluntario en el Juncal. ¿Podrían brindarme más información?")} aria-label="Reservar ahora">
            <img
              src={buttonLogo}
              alt="Button Icon"
              className="volunteering__button-icon"
            />{t("mayorInformacion")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Volunteering;
