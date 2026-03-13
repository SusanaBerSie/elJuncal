import "./Allies.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import flowerImage from "../../src/images/logoPerro.png";
import caminataImage from "../../src/images/tour.jpg";
import amasijosImage from "../../src/images/mirador.jpg";
import tejidosImage from "../../src/images/telar.jpg";
import { useTranslation } from "react-i18next";

function Allies() {
  const { t } = useTranslation();

  return (
    <div className="allies" id="aliados">
      <SectionTitle
        title={t("nuestrosAliados")}
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
            alt="Elaboración de tejidos artesanales"
          />
          <div className="allies__circle-container allies__circle--variant1">
            <div className="allies__circle-outline"></div>
            <div className="allies__circle-filled"></div>
            <div className="allies__text-container">
              <p className="allies__text-title">{t("tejidosMamaLuvitaTitulo")}</p>
              <p className="allies__text-paragraph">
                {t("tejidosMamaLuvitaTexto")}
              </p>
            </div>
          </div>
        </div>

        <div className="allies__element">
          <img
            className="allies__image"
            src={caminataImage}
            alt="Caminata al páramo Rabanal"
          />
          <div className="allies__circle-container allies__circle--variant2">
            <div className="allies__circle-outline"></div>
            <div className="allies__circle-filled"></div>
            <div className="allies__text-container">
              <p className="allies__text-title">{t("caminatasToursTitulo")}</p>
              <p className="allies__text-paragraph">
                {t("caminatasToursTexto")}
              </p>
            </div>
          </div>
        </div>

        <div className="allies__element">
          <img
            className="allies__image"
            src={amasijosImage}
            alt="Elaboración de amasijos artesanales"
          />
          <div className="allies__circle-container allies__circle--variant3">
            <div className="allies__circle-outline"></div>
            <div className="allies__circle-filled"></div>
            <div className="allies__text-container">
              <p className="allies__text-title">{t("miradorElValleTitulo")}</p>
              <p className="allies__text-paragraph">
                {t("miradorElValleTexto")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allies;
