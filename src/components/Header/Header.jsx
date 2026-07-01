import "./Header.css";

function Header({ t, lang, setLang }) {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="brand">
          <div className="brand-monogram">MB</div>

          <div>
            <strong>Marcela Braga</strong>
            <span>{t.footerBrand}</span>
          </div>
        </div>

        <nav aria-label="Menu principal">
          <a href="#about">{t.menu[0]}</a>
          <a href="#solucoes">{t.menu[1]}</a>
          <a href="#services">{t.menu[2]}</a>
          <a href="#elas">{t.menu[3]}</a>
          <a href="#contato">{t.menu[4]}</a>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="lang-button"
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            aria-label="Alterar idioma"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>

          <a
            href="https://wa.me/5527998473840?text=Ol%C3%A1%2C%20Marcela!%20Conheci%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20para%20meu%20neg%C3%B3cio."
            target="_blank"
            rel="noopener noreferrer"
            className="header-button"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;