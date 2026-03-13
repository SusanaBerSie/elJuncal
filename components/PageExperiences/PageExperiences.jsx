import "./PageExperiences.css";
import { useTranslation } from "react-i18next";
import dairyProducts from "../../src/images/dairyProducts1.jpg";
import camping from "../../src/images/camping1.jpg";
import challenge from "../../src/images/challenge.jpeg";
import milking from "../../src/images/milking.jpeg";
import planting from "../../src/images/planting.jpg";
import stargazing from "../../src/images/stargazing.jpg";
import headerImage from "../../src/images/headerExperience.jpg";
import buttonLogo from "../../src/images/buttonLogo.png";
import clockIcon from "../../src/images/iconClock.png";
import peopleIcon from "../../src/images/iconPeople.png";
import itineraryIcon from "../../src/images/iconClipboard.png";
import { openWhatsapp } from "../../utils/whatsapp";

function PageExperiences() {
  const { t } = useTranslation();

  const experiencesTarjets = [
    {
      image: dairyProducts,
      price: "50.000 COP/" + t("persona"),
      title: t("preparacionProductosLacteos"),
      description: t("dairyProductsDescription"),
      duration: t("segunProducto"),
      capacity: "10",
      itinerary: [
        { activity: t("introLacteos") },
        { activity: t("preparacionCuajada") },
        { activity: t("elaboracionQueso") },
        { activity: t("degustacionYempaque") },
      ],
    },
    {
      image: camping,
      price: "20.000 COP/" + t("persona"),
      title: t("camping"),
      description: t("campingDescription"),
      duration: t("unaNoche"),
      capacity: t("todos"),
      itinerary: [
        { activity: t("instalacionCarpas") },
        { activity: t("fogataConMasmelos") },
        { activity: t("nocheDeEstrellas") },
        { activity: t("desayunoCampestre") },
      ],
    },
    {
      image: challenge,
      price: "30.000 COP/"+ t("persona"),
      title: t("desafioCampesino"),
      description: t("desafioCampesinoDescription"),
      duration: t("dosHoras"),
      capacity: "20",
      itinerary: [
        { activity: t("registroEquipos") },
        { activity: t("primeraRondaObstaculos") },
        { activity: t("segundaRondaFuerza") },
        { activity: t("finalYpremiacion") },
        { activity: t("almuerzoCampestre") },
      ],
    },
    {
      image: milking,
      price: "30.000 COP/"+ t("persona"),
      title: t("ordenoDeVacas"),
      description: t("ordenoDescription"),
      duration: t("dosHoras"),
      capacity: "5",
      itinerary: [
        { activity: t("introOrdeno") },
        { activity: t("observacionProceso") },
        { activity: t("practicaOrdeno") },
        { activity: t("degustacionLeche") },
      ],
    },
    {
      image: planting,
      price: "30.000 COP/"+ t("persona"),
      title: t("siembraDeSeresQueridos"),
      description: t("siembraDescription"),
      duration: t("unaHora"),
      capacity: "20",
      itinerary: [
        { activity: t("preparacionTerreno") },
        { activity: t("ceremoniaSiembra") },
        { activity: t("plantacionArbol") },
        { activity: t("registroPlaca") },
      ],
    },
    {
      image: stargazing,
      price: "30.000 COP/"+ t("persona"),
      title: t("observacionAstronomica"),
      description: t("stargazingDescription"),
      duration: t("unaNoche"),
      capacity: "10",
      itinerary: [
        { activity: t("introAstronomia") },
        { activity: t("observacionFirmamento") },
        { activity: t("identificacionConstelaciones") },
        { activity: t("fogataBajoEstrellas") },
      ],
    },
  ];

  return (
    <div className="pageExperiences">
      <div className="pageExperiences__header">
        <img
          className="pageExperiences__header-image"
          src={headerImage}
          alt="Entrada a la finca con un camino rodeado de árboles, con un lago al lado"
        />
        <div className="pageExperiences__header-overlay">
          <h1 className="pageExperiences__header-title">
            {t("nuestrasExperiencias")}
          </h1>
          <p className="pageExperiences__header-text">
            {t("viveMomentosUnicos")}
          </p>
        </div>
      </div>

      <div className="pageExperiences__cards-container">
        {experiencesTarjets.map((experience, index) => (
          <div key={index} className="pageExperiences__card">
            <div className="pageExperiences__card-image-container">
              <img
                src={experience.image}
                alt=""
                className="pageExperiences__card-image"
              />
              <span className="pageExperiences__card-price">
                {experience.price}
              </span>
            </div>

            <div className="pageExperiences__card-content">
              <h3 className="pageExperiences__card-title">
                {experience.title}
              </h3>
              <p className="pageExperiences__card-description">
                {experience.description}
              </p>

              <div className="pageExperiences__card-info">
                <div className="pageExperiences__card-duration">
                  <span className="pageExperiences__card-info-text">
                    <img src={clockIcon} alt="icono de reloj" className="pageExperiences__icon" />{experience.duration}
                  </span>
                </div>
                <div className="pageExperiences__card-capacity">
                  <span className="pageExperiences__card-info-text">
                    <img src={peopleIcon} alt="icono de grupo de personas" className="pageExperiences__icon" /> {experience.capacity === t("todos") ? t("todos") : t("personas", { count: experience.capacity })}
                  </span>
                </div>
              </div>

              <div className="pageExperiences__card-itinerary">
                <h4 className="pageExperiences__card-itinerary-title">
                  <img src={itineraryIcon} alt="icono de itinerario" className="pageExperiences__icon" /> {t("itinerario")}
                </h4>
                <ul className="pageExperiences__card-itinerary-list">
                  {experience.itinerary.map((item, index) => (
                    <li
                      key={index}
                      className="pageExperiences__card-itinerary-item"
                    >
                      <span>↠</span>
                      <span>{item.activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button type="button" className="pageExperiences__card-button" onClick={()=>openWhatsapp(t('holaQuieroReservar'))} aria-label={t('reservarExperiencia')}>
                  <img src={buttonLogo} alt="Icono cabeza de toro" className="pageExperiences__card-button-icon"/>
                <span className="pageExperiences__card-button-text">
                  {t("reservarExperiencia")}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageExperiences;
