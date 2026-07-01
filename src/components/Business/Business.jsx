import "./Business.css";

function Business({ t }) {
  return (
    <section
      className="business"
      id="solucoes"
      aria-labelledby="business-title"
    >
      <div className="container business-container">
        <span className="business-bg-text">
          {t.businessBgText}
        </span>

        <span className="business-tag">
          {t.businessTag}
        </span>

        <h2 id="business-title">
          {t.businessTitle}
        </h2>

        <p className="business-description">
          {t.businessText}
        </p>

        <div className="business-grid" aria-label={t.businessCardsLabel}>
          {t.businessCards.map((card) => (
            <div className="business-card" key={card.number}>
              <span>{card.number}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/5527998473840?text=Ol%C3%A1%2C%20Marcela!%20Conheci%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20para%20meu%20neg%C3%B3cio."
          target="_blank"
          rel="noopener noreferrer"
          className="business-button"
        >
          {t.businessButton}
        </a>
      </div>
    </section>
  );
}

export default Business;