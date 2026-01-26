import "./Allies.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import flowerImage from "../../src/images/logoVector.png";
import caminataImage from "../../src/images/aboutUs1.jpg";
import amasijosImage from "../../src/images/aboutUs2.jpg";
import tejidosImage from "../../src/images/aboutUs3.jpg";

function Allies() {
  return (
    <div className="allies" id="aliados">
      <SectionTitle
        title="NUESTROS ALIADOS"
        image={flowerImage}
        backgroundColor="#124122"
        circleColor="#f9b234"
        isImageLeft={false}
      />
      <div className="allies__container">
        <div className="allies__element">
          <img
            className="allies__image"
            src={tejidosImage}
            alt="Tejidos artesanales"
          />
          <div className="allies__circle-container allies__circle--variant1">
            <div className="allies__circle-outline"></div>
            <div className="allies__circle-filled"></div>
            <div className="allies__text-container">
              <p className="allies__text-title">Tejidos mamá Luvita</p>
              <p className="allies__text-paragraph">
                Conoce la hacienda Santo Domingo y detalla la elaboración de
                tejidos artesanales en telar tradicional
              </p>
            </div>
          </div>
        </div>

        <div className="allies__element">
          <img
            className="allies__image"
            src={caminataImage}
            alt="Caminata al páramo"
          />
          <div className="allies__circle-container allies__circle--variant2">
            <div className="allies__circle-outline"></div>
            <div className="allies__circle-filled"></div>
            <div className="allies__text-container">
              <p className="allies__text-title">Caminatas Tours</p>
              <p className="allies__text-paragraph">
                Respira el aire puro del Valle de Frailejones del Páramo el
                Rabanal
              </p>
            </div>
          </div>
        </div>

        <div className="allies__element">
          <img
            className="allies__image"
            src={amasijosImage}
            alt="Amasijos artesanales"
          />
          <div className="allies__circle-container allies__circle--variant3">
            <div className="allies__circle-outline"></div>
            <div className="allies__circle-filled"></div>
            <div className="allies__text-container">
              <p className="allies__text-title">Mirador el Valle</p>
              <p className="allies__text-paragraph">
                Impresionate con la vista del Valle de Camsicá y aprende a hacer
                amasijos típicos de la región
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allies;
