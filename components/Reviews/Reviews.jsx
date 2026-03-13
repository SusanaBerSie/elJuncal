import "./Reviews.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import logoImage from "../../src/images/logoVaca.png";
import { useTranslation } from "react-i18next";

function Reviews() {
  const { t } = useTranslation();
  return (
    <div className="reviews">
      <SectionTitle
        title={t("loQueCuentan")}
        image={logoImage}
        backgroundColor="#124122"
        circleColor="#f9b234"
      />
      <p>{t("conectarGoogleApi")}</p>
      <SectionTitle
        title={t("queremosSaberTuOpinion")}
        image={logoImage}
        backgroundColor="#124122"
        circleColor="#f9b234"
        isImageLeft={false}
      />
    </div>
  );
}

export default Reviews;
