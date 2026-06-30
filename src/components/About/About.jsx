import "./About.css";

function About({ t }) {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <span className="about-bg-number">20+</span>

        <span className="about-tag">{t.aboutTag}</span>

        <h2>{t.aboutTitle}</h2>

        <div className="about-text">
          <p>{t.aboutP1}</p>

          <p>{t.aboutP2}</p>
        </div>

        <div className="about-stats">
          {t.stats.map((item, index) => {
            const [number, label] = item.split("|");

            return (
              <div key={index}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            );
          })}
        </div>

        <blockquote className="about-quote">
          “{t.aboutQuote}”
          <span>{t.aboutQuoteAuthor}</span>
        </blockquote>
      </div>
    </section>
  );
}

export default About;