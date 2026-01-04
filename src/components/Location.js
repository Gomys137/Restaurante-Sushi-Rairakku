export default function Location() {
  const locationInfo = [
    {
      id: 1,
      icon: "fa-solid fa-location-dot",
      color: "red",
      title: "Morada",
      description: "R. Angola, 2725-219<br/>Algueirão-Mem Martins",
      linkText: "Como Chegar",
      linkUrl: "https://maps.google.com/?q=R.+Angola,+2725-219+Algueirão-Mem+Martins",
      linkIcon: "fa-solid fa-arrow-right"
    },
    {
      id: 2,
      icon: "fa-solid fa-phone",
      color: "yellow",
      title: "Telefone",
      description: "Faça a sua encomenda por telefone",
      linkText: "Ligar Agora",
      linkUrl: "tel:+351920614257",
      linkIcon: "fa-solid fa-arrow-right"
    },
    {
      id: 3,
      icon: "fa-solid fa-clock",
      color: "green",
      title: "Horário",
      description: "Aberto todos os dias<br/>Das 12:00 às 23:00",
      linkText: "Ver no Google Maps",
      linkUrl: "https://maps.google.com/?q=Sushi+Shogun+Algueirão-Mem+Martins",
      linkIcon: "fa-solid fa-arrow-right"
    }
  ];

  return (
    <section id="localizacao" className="location-section" aria-labelledby="location-heading">
      <div className="location-container">
        <header className="location-header">
          <h2 id="location-heading" className="location-title">
            Onde Estamos <span className="highlight">Algueirão-Mem Martins</span>
          </h2>
          <p className="location-subtitle">
            Take away e entrega de sushi fresco, preparados no momento
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
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.linkText} - ${item.title}`}
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
                <h3 className="map-title">Mapa & Direções</h3>
                <p className="map-description">
                  Veja a localização exata e obtenha direções no Google Maps
                </p>
                <a
                  href="https://maps.google.com/?q=Sushi+Shogun+Algueirão-Mem+Martins"
                  className="map-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir localização no Google Maps"
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
