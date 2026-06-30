import "./Hero.css";
import heroImage from "../../assets/marcelabraga.png";

function Hero({ t }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag">{t.heroTag}</span>

          <h1 id="hero-title">{t.heroTitle}</h1>

          <h2>{t.heroSubtitle}</h2>

          <p className="hero-slogan">{t.heroSlogan}</p>

          <p>{t.heroText}</p>

          <div className="hero-stats">
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
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Marcela Braga" />
        </div>
      </div>
    </section>
  );
}

export default Hero;