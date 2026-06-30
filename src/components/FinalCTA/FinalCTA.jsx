import { useEffect, useRef } from "react";
import "./FinalCTA.css";

function FinalCTA({ t }) {
  const ctaRef = useRef(null);

  useEffect(() => {
    const section = ctaRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="final-cta"
      id="contato"
      ref={ctaRef}
      aria-labelledby="final-cta-title"
    >
      <div className="container final-cta-container">
        <div className="cta-number">01</div>

        <span>{t.finalTag}</span>

        <h2 id="final-cta-title">{t.finalTitle}</h2>

        <p>{t.finalText}</p>

        <a
          href="https://wa.me/5527998473840"
          target="_blank"
          rel="noopener noreferrer"
          className="final-cta-button"
        >
          {t.cta}
        </a>
      </div>

      <div className="final-cta-bottom-transition"></div>
    </section>
  );
}

export default FinalCTA;