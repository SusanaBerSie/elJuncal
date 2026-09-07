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
      <div className="reviews__container">
        <div className="reviews__card">
          <img src={logoImage} alt="" className="reviews__card-image" />
          <h2 className="reviews__card-title">Review Title</h2>
          <p className="reviews__card-puntuation">⭐⭐⭐⭐⭐</p>
          <p className="reviews__card-date">Review date goes here.</p>
          <p className="reviews__card-text">Review text goes here.</p>
        </div>
        <div className="reviews__card">
          <img src={logoImage} alt="" className="reviews__card-image" />
          <h2 className="reviews__card-title">Review Title</h2>
          <p className="reviews__card-puntuation">⭐⭐⭐⭐⭐</p>
          <p className="reviews__card-date">Review date goes here.</p>
          <p className="reviews__card-text">Review text goes here.</p>
        </div>
        <div className="reviews__card">
          <img src={logoImage} alt="" className="reviews__card-image" />
          <h2 className="reviews__card-title">Review Title</h2>
          <p className="reviews__card-puntuation">⭐⭐⭐⭐⭐</p>
          <p className="reviews__card-date">Review date goes here.</p>
          <p className="reviews__card-text">Review text goes here.</p>
        </div>
        <div className="reviews__card">
          <img src={logoImage} alt="" className="reviews__card-image" />
          <h2 className="reviews__card-title">Review Title</h2>
          <p className="reviews__card-puntuation">⭐⭐⭐⭐⭐</p>
          <p className="reviews__card-date">Review date goes here.</p>
          <p className="reviews__card-text">Review text goes here.</p>
        </div>
      </div>
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
