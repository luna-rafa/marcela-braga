import "./Services.css";
import servicesImage from "../../assets/marcela-servicos.png";

function Services({ t }) {
  return (
    <section
      className="services"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container services-container">
        <div className="services-image">
          <img
            src={servicesImage}
            alt="Marcela Braga em evento de logística"
          />
        </div>

        <div className="services-content">
          <span className="services-tag">{t.servicesTag}</span>

          <h2 id="services-title">{t.servicesTitle}</h2>

          <div className="services-list">
            {t.services.map((service) => (
              <div className="service-item" key={service.number}>
                <span aria-hidden="true">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;