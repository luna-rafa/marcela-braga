import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer({ t }) {
  return (
    <footer className="footer" aria-labelledby="footer-title">
      <div className="container footer-container">
        <p className="footer-quote">{t.footerQuote}</p>

        <h2 id="footer-title">MB</h2>

        <h3>Marcela Braga</h3>

        <span>{t.footerBrand}</span>

        <div className="footer-social" aria-label="Redes sociais">
          <a
            href="https://wa.me/5527998473840"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" />
          </a>

          <a
            href="https://www.instagram.com/marcelaemviagem?igsh=MXFzZ2wxZDhmaHM4Mg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/marcela-braga-6ba6776a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t.rights1}</p>
        <p>{t.rights2}</p>
        <p>
          {t.developed} <strong>Rodrigues Digital</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;