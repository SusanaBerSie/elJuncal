import SectionTitle from "../SectionTitle/SectionTitle";
import "./AboutUs.css";
import React, { useState, useEffect } from "react";
import logoImage from "../../src/images/logoGato.png";
import AmorphousCircle from "../AmorphousCircle/AmorphousCircle";
import aboutUs1 from "../../src/images/aboutUs1.jpg";
import aboutUs2 from "../../src/images/aboutUs2.jpg";
import aboutUs3 from "../../src/images/aboutUs3.jpg";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const carouselImages = [aboutUs1, aboutUs2, aboutUs3];
  const [currentImage, setCurrentImage] = useState(0);
  const {t}  = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="aboutUs" id="sobre-nosotros">
      <SectionTitle
        title={t("sobreNosotros")}
        image={logoImage}
        backgroundColor="#124122"
        circleColor="#f9b234"
      />
      <div className="aboutUs__container">
        <p className="aboutUs__text">{t("sobreNosotrosTexto")}
        </p>
        <AmorphousCircle
          variant="2"
          size="300px"
          color="#f9b234"
          className="aboutUs__imageContainer"
        >
          <div className="aboutUs__imageContainer-circle" src="null">
            {carouselImages.map((img, index) => (
              <img
                className={`aboutUs__imageContainer-photo ${
                  currentImage === index ? "active" : ""
                }`}
                src={img}
                alt={`slide ${index + 1}`}
                key={index}
              />
            ))}
          </div>
          <div className="aboutUs__imageContainer-carousel">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`aboutUs__imageContainer-carousel-button ${
                  currentImage === index ? "active" : ""
                }`}
                onClick={() => setCurrentImage(index)}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </AmorphousCircle>
      </div>
    </div>
  );
}

export default AboutUs;
