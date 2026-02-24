import "./Experiences.css";
import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import flowerImage from "../../src/images/logoChivito.png";
import dairyProducts from "../../src/images/dairyProducts1.jpg";
import camping from "../../src/images/camping1.jpg";
import challenge from "../../src/images/challenge.jpeg";

function Experiences() {
  const experiencesTarjets = [
    {
      image: dairyProducts,
      title: "Preparación de productos lácteos",
      price: "50.000 COP/persona",
    },
    { image: camping, title: "Camping", price: "20.000 COP/persona" },
    {
      image: challenge,
      title: "Desafío campesino",
      price: "30.000 COP/persona",
    },
  ];

  /* const handleVerTodas = () => {
    // Lógica para ver todas las experiencias
  }; */

  return (
    <div className="experiences" id="experiencias">
      <SectionTitle
        title="EXPERIENCIAS DESTACADAS"
        image={flowerImage}
        backgroundColor="#124122"
        circleColor="#ffe97f"
      />
      <div className="experiences__text-container">
        <p className="experiences__text">
          Descubre lo que puedes vivir con nosotros
        </p>
        <Link to="experiences" className="experiences__button">
          Ver todas →
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
