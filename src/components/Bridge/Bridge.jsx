import "./Bridge.css";

function Bridge({ t }) {
  return (
    <section className="bridge" id="elas">
      <div className="container bridge-container">
        <span>{t.bridgeTag}</span>

        <h2>{t.bridgeTitle}</h2>

        <p>{t.bridgeText}</p>

        <a href="#elas-por-elas" className="bridge-button">
          {t.bridgeButton}
        </a>
      </div>
    </section>
  );
}

export default Bridge;