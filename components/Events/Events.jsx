import "./Events.css";
import eventImage from "../../src/images/eventImage.jpg";
import buttonLogo from "../../src/images/buttonLogo.png";
import { useTranslation } from "react-i18next";
import { openWhatsapp } from "../../utils/whatsapp";

function Events() {
  const { t } = useTranslation();

  return (
    <div className="events" id="eventos">
      <img className="events__image" src={eventImage} alt="Celebración de cumpleaños en el Juncal" />
      <p className="events__text">
        {t("eventsText")}
      </p>
      <button type="button" className="events__button" onClick={()=> openWhatsapp(t('holaQuisieraRealizarEvento'))} aria-label={t('reservaAhora')}>
          <img src={buttonLogo} alt="Icono cabeza de toro" className="events__button-icon"/>
        <span className="events__button-text">
          {t("reservaTuEvento")}
        </span>
      </button>

      <div className="events__stats-container">
        <div className="events__circle-container events__circle--variant1">
          <div className="events__circle-outline"></div>
          <div className="events__circle-filled"></div>
          <p className="events__circle-text">
            +100
            <br />
            {t("visitantes")}
          </p>
        </div>

        <div className="events__circle-container events__circle--variant2">
          <div className="events__circle-outline"></div>
          <div className="events__circle-filled"></div>
          <p className="events__circle-text">
            +50
            <br />
            {t("huespedes")}
          </p>
        </div>
        <div className="events__circle-container events__circle--variant3">
          <div className="events__circle-outline"></div>
          <div className="events__circle-filled"></div>
          <p className="events__circle-text">
            +10
            <br />
            {t("eventosCount")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Events;
