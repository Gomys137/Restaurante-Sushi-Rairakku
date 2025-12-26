export default function Location() {
  const locationInfo = [
    {
      id: 1,
      icon: "fa-solid fa-location-dot",
      color: "red",
      title: "Morada",
      description: "Algueirão-Mem Martins<br/>Sintra, Portugal",
      linkText: "Como Chegar",
      linkUrl: "#contacto",
      linkIcon: "fa-solid fa-arrow-right"
    },
    {
      id: 2,
      icon: "fa-solid fa-phone",
      color: "yellow",
      title: "Telefone",
      description: "Ligue para fazer uma reserva ou encomenda",
      linkText: "Ver Contacto",
      linkUrl: "tel:+351000000000",
      linkIcon: "fa-solid fa-arrow-right"
    },
    {
      id: 3,
      icon: "fa-solid fa-clock",
      color: "green",
      title: "Horário",
      description: "Aberto todos os dias<br/>Consulte o horário completo na página de contacto",
      linkText: "Ver Horários",
      linkUrl: "#horarios",
      linkIcon: "fa-solid fa-arrow-right"
    }
  ];

  return (
    <section id="localizacao" className="location-section" aria-labelledby="location-heading">
      <div className="location-container">
        <header className="location-header">
          <h2 id="location-heading" className="location-title">
            Visite-nos em <span className="highlight">Algueirão-Mem Martins</span>
          </h2>
          <p className="location-subtitle">
            Estamos prontos para o receber com o melhor sushi da região
          </p>
        </header>

        <div className="location-content">
          <div className="location-info" role="list" aria-label="Informações de localização">
            {locationInfo.map((item) => (
              <article 
                key={item.id} 
                className="location-card"
                role="listitem"
              >
                <div className={`card-icon icon-${item.color}`} aria-hidden="true">
                  <i className={item.icon}></i>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{item.title}</h3>
                  <p 
                    className="card-description" 
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                  <a 
                    href={item.linkUrl} 
                    className="card-link"
                    aria-label={`${item.linkText} para ${item.title}`}
                  >
                    <span>{item.linkText}</span>
                    <i className={item.linkIcon} aria-hidden="true"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="location-map">
            <div className="map-card">
              <div className="map-icon" aria-hidden="true">
                <i className="fa-solid fa-map-location-dot"></i>
                <div className="map-pulse"></div>
              </div>
              <div className="map-content">
                <h3 className="map-title">Localização Interativa</h3>
                <p className="map-description">
                  Veja a nossa localização exata no mapa e obtenha direções
                </p>
                <a 
                  href="/contacto" 
                  className="map-button"
                  aria-label="Abrir mapa da localização"
                >
                  <span>Abrir Mapa</span>
                  <i className="fa-solid fa-external-link-alt" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}