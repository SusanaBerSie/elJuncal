import "./Reviews.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import logoImage from "../../src/images/logoVaca.png";

function Reviews() {
  return (
    <div className="reviews">
      <SectionTitle
        title="LO QUE CUENTAN LOS 
        VISITANTES DEL JUNCAL"
        image={logoImage}
        backgroundColor="#124122"
        circleColor="#f9b234"
      />
      <p>Aquí debería conectar la API de google business profile</p>
      <SectionTitle
        title="¡¡QUEREMOS SABER TU OPINIÓN!!"
        image={logoImage}
        backgroundColor="#124122"
        circleColor="#f9b234"
        isImageLeft={false}
      />
    </div>
  );
}

export default Reviews;
