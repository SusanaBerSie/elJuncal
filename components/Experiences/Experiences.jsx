import "./Experiences.css";
import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import flowerImage from "../../src/images/logoChivito.png";
import dairyProducts from "../../src/images/dairyProducts1.jpg";
import camping from "../../src/images/camping1.jpg";
import challenge from "../../src/images/challenge.jpeg";
import { useTranslation } from "react-i18next";

function Experiences() {
  const { t } = useTranslation();
  const experiencesTarjets = [
    {
      image: dairyProducts,
      title: t("preparacionProductosLacteos"),
      price: "50.000 COP/" + t("persona"),
    },
    { image: camping, title: t("camping"), price: "20.000 COP/" + t("persona") },
    {
      image: challenge,
      title: t("desafioCampesino"),
      price: "30.000 COP/" + t("persona"),
    },
  ];

  return (
    <div className="experiences" id="experiencias">
      <SectionTitle
        title={t("ExperienciasDestacadas")}
        image={flowerImage}
        backgroundColor="#124122"
        circleColor="#ffe97f"
      />
      <div className="experiences__text-container">
        <p className="experiences__text">{t("ExperienciasDestacadasDescripcion")}</p>
        <Link to="experiences" className="experiences__button">
         {} {t("verTodas")} ↠
        </Link>
      </div>
      <div className="experiences__cards-container">
        {experiencesTarjets.map((experience, index) => (
          <div key={index} className="experiences__card">
            <img
              src={experience.image}
              alt=""
              className="experiences__card-image"
            />
            <div className="experiences__card-overlay">
              <span className="experiences__card-price">
                {experience.price}
              </span>
              <h3 className="experiences__card-title">{experience.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
