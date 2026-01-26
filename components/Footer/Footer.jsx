import "./Footer.css";
import logo from "../../src/images/logoRNT.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social-container">
          <div className="footer__title">Encuéntranos en:</div>
          <a
            className="footer__link"
            href="https://www.facebook.com/profile.php?id=100043995743957&locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="footer__link"
            href="https://www.instagram.com/posadaruraleljuncal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="footer__link"
            href="https://www.airbnb.com.co/rooms/29418197?adults=1&check_in=2025-12-01&check_out=2025-12-02&children=2&pets=1&search_mode=regular_search&category_tag=Tag%3A8678&photo_id=2108485451&source_impression_id=p3_1763479131_P3gexqeK7gF1Qcm1&previous_page_section_name=1000&federated_search_id=6cfcb866-47f4-4e25-874c-87a3d1f45e01"
            target="_blank"
            rel="noopener noreferrer"
          >
            Airbnb
          </a>
          <a
            className="footer__link"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Workaway
          </a>
        </div>
        <img
          className="footer__image"
          src={logo}
          alt="Logo de Registro Nacional de Turismo"
        ></img>
      </div>
      <p className="footer__copyright">
        © 2026 El Juncal. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
