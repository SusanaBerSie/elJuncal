import "./Footer.css";
import logo from "../../src/images/logoRNT.png";
import logoJuncal from "../../src/images/logoVector.png";
import mapIcon from "../../src/images/map.png";
import whatsappIcon from "../../src/images/whatsappIcon.png";
import atIcon from "../../src/images/atIcon.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img
          className="footer__logo"
          src={logoJuncal}
          alt="Logo de El Juncal"
        ></img>
        <div className="footer__element-container">
          <div className="footer__title">Menú</div>
          <a className="footer__link" href="#inicio">Sobre nosotros</a>
          <a className="footer__link" href="#nosotros">Habitaciones y servicios</a>
          <a className="footer__link" href="#servicios">Experiencias</a>
          <a className="footer__link" href="#contacto">Eventos</a>
          <a className="footer__link" href="#contacto">Voluntariado</a>
          <a className="footer__link" href="#contacto">Comentarios</a>
          <a className="footer__link" href="#contacto">Galería</a>
        </div>
        <div className="footer__element-container">
          <div className="footer__title">Redes sociales</div>
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
        <div className="footer__element-container">
          <div className="footer__info">
            <span className="footer__info-text">
            <img src={mapIcon} alt="" className="footer__icon" />
            <a className="footer_link" href="https://www.google.com/maps/place/Posada+Rural+El+Juncal/@5.532784,-73.4930571,1654m/data=!3m1!1e3!4m6!3m5!1s0x8e41d5b0254aea3f:0xc2ea3c62a4935066!8m2!3d5.5330478!4d-73.4878634!16s%2Fg%2F11g__46trl?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank"
            rel="noopener noreferrer">Samacá, Boyacá, Colombia</a>
            </span>
          </div>
          <div className="footer__info">
                            <span className="footer__info-text">
                              <img src={whatsappIcon} alt="" className="footer__icon" /> +57 310-287-3928
                            </span>
          </div>
          <div className="footer__info">
                            <span className="footer__info-text">
                              <img src={atIcon} alt="" className="footer__icon" /> susaritas4@gmail.com
                            </span>
          </div>
        </div>
      </div>
      <p className="footer__copyright">
        © 2026 El Juncal. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
