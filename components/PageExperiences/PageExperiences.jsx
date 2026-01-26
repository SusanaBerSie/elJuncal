import "./PageExperiences.css";
import { useState } from "react";
import dairyProducts from "../../src/images/dairyProducts1.png";
import camping from "../../src/images/camping1.jpg";
import challenge from "../../src/images/challenge1.jpg";
import milking from "../../src/images/challenge1.jpg";
import planting from "../../src/images/challenge1.jpg";
import stargazing from "../../src/images/challenge1.jpg";
import headerImage from "../../src/images/headerExperience.jpg";
import buttonLogo from "../../src/images/buttonLogo.png";
import clockIcon from "../../src/images/buttonLogo.png";
import peopleIcon from "../../src/images/buttonLogo.png";

function PageExperiences() {
  const experiencesTarjets = [
    {
      image: dairyProducts,
      price: "50.000 COP/persona",
      title: "Preparación de productos lácteos",
      description:
        "Aprende a elaborar queso fresco, cuajada, arequipe y otros productos lácteos con técnicas tradicionales. Llévate a casa tus propias creaciones.",
      duration: "Según producto",
      capacity: "10",
      itinerary: [
        { activity: "Introducción a los lácteos artesanales" },
        { activity: "Preparación de cuajada" },
        { activity: "Elaboración de queso campesino" },
        { activity: "Degustación y empaque" },
      ],
    },
    {
      image: camping,
      price: "20.000 COP/persona",
      title: "Camping",
      description:
        "Pasa una noche de tertulia con tu mejor compañía. Incluye fogata, masmelos y desayuno al amanecer con vistas espectaculares a las montañas.",
      duration: "1 noche",
      capacity: "Todos",
      itinerary: [
        { activity: "Instalación de carpas" },
        { activity: "Fogata con masmelos" },
        { activity: "Noche de estrellas" },
        { activity: "Desayuno campestre" },
      ],
    },
    {
      image: challenge,
      price: "30.000 COP/persona",
      title: "Desafío campesino",
      description:
        "Pon a prueba tus habilidades en actividades tradicionales del campo: cargar bultos, arar la tierra, atravezar obstáculos y más. ¡Una competencia divertida para toda la familia!",
      duration: "2 horas",
      capacity: "20",
      itinerary: [
        { activity: "Registro y formación de equipos" },
        { activity: "Primera ronda: carrera de obstáculos" },
        { activity: "Segunda ronda: pruebas de fuerza" },
        { activity: "Final y premiación" },
        { activity: "Almuerzo campestre" },
      ],
    },
    {
      image: milking,
      price: "30.000 COP/persona",
      title: "Ordeño de vacas",
      description:
        "Vive la auténtica experiencia campesina aprendiendo a ordeñar vacas de manera tradicional. Conecta con la naturaleza y descubre de dónde viene la leche fresca.",
      duration: "2 horas",
      capacity: "5",
      itinerary: [
        { activity: "Introducción al ordeño" },
        { activity: "Observación del proceso" },
        { activity: "Práctica de ordeño guiado" },
        { activity: "Degustación de leche fresca" },
      ],
    },
    {
      image: planting,
      price: "30.000 COP/persona",
      title: "Siembra de seres queridos",
      description:
        "Una experiencia conmovedora donde puedes plantar un árbol en memoria de un ser querido. El árbol crecerá en nuestra finca y podrás visitarlo siempre.",
      duration: "1 hora",
      capacity: "20",
      itinerary: [
        { activity: "Preparación del terreno" },
        { activity: "Ceremonia de siembra" },
        { activity: "Plantación del árbol" },
        { activity: "Registro y placa conmemorativa" },
      ],
    },
    {
      image: stargazing,
      price: "30.000 COP/persona",
      title: "Observación astronómica",
      description:
        "¡Que los astros te quiten el sueño! Aprende con un experto sobre el firmamento que nos rodea. Incluye guía, telescopio y fogata",
      duration: "1 noche",
      capacity: "10",
      itinerary: [
        { activity: "Introducción a la astronomía" },
        { activity: "Observación del firmamento con telescopio" },
        { activity: "Identificación de constelaciones" },
        { activity: "Fogata bajo las estrellas" },
      ],
    },
  ];

  const [language, setLanguage] = useState("esp");

  return (
    <div className="pageExperiences">
      <div className="pageExperiences__header">
        <img
          className="pageExperiences__header-image"
          src={headerImage}
          alt=""
        />
        <div className="pageExperiences__header-overlay">
          <h1 className="pageExperiences__header-title">
            Nuestras Experiencias
          </h1>
          <p className="pageExperiences__header-text">
            Vive momentos únicos en el campo, conecta con la naturaleza y crea
            recuerdos inolvidables
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
                    ⏰ {experience.duration}
                  </span>
                </div>
                <div className="pageExperiences__card-capacity">
                  {/*  <img
                    className="pageExperiences__card-icon"
                    src={peopleIcon}
                    alt="people"
                  /> */}
                  <span className="pageExperiences__card-info-text">
                    👨‍👩‍👧‍👦 Máx. {experience.capacity} personas
                  </span>
                </div>
              </div>

              <div className="pageExperiences__card-itinerary">
                <h4 className="pageExperiences__card-itinerary-title">
                  📋 Itinerario
                </h4>
                <ul className="pageExperiences__card-itinerary-list">
                  {experience.itinerary.map((item, index) => (
                    <li
                      key={index}
                      className="pageExperiences__card-itinerary-item"
                    >
                      ✔️ {item.activity}
                    </li>
                  ))}
                </ul>
              </div>

              <button type="button" className="pageExperiences__card-button">
                <div className="pageExperiences__card-button-icon">
                  🐮
                  {/* <img src={buttonLogo} alt="Button Icon" /> */}
                </div>
                <span className="pageExperiences__card-button-text">
                  {language === "esp" ? "Reservar experiencia" : "Book here"}
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
