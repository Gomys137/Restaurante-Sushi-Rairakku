export default function OrderOnline() {
  return (
    <section className="order-section" aria-labelledby="order-heading">
      <div className="order-overlay" aria-hidden="true"></div>

      <div className="order-container">
        <div className="order-content">
          
          <div className="order-icon" aria-hidden="true">
            <i className="fa-solid fa-motorcycle"></i>
            <div className="icon-pulse"></div>
          </div>

          <h2 id="order-heading">Peça Online ou por Telefone</h2>
          <p className="order-description">
            Sushi fresco preparado no momento e entregue em sua casa. <br className="desktop-only" />
            Também disponível para take away.
          </p>

          <div className="order-buttons" role="group" aria-label="Opções de pedido">
            <a 
              href="tel:+351920614257" 
              className="order-btn-primary"
              aria-label="Ligar para fazer pedido"
            >
              <span className="btn-icon" aria-hidden="true">
                <i className="fa-solid fa-phone"></i>
              </span>
              <span className="btn-text">Ligar Agora</span>
              <span className="btn-arrow" aria-hidden="true">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </a>

            <a 
              href="#menu" 
              className="order-btn-secondary"
              aria-label="Ver o menu completo"
            >
              <span className="btn-icon" aria-hidden="true">
                <i className="fa-solid fa-book-open"></i>
              </span>
              <span className="btn-text">Ver Menu</span>
            </a>
          </div>

          <div className="order-info" role="list" aria-label="Vantagens do serviço">
            <div className="info-item" role="listitem">
              <i className="fa-solid fa-truck-fast"></i>
              <span>Entrega ao Domicílio</span>
            </div>
            <div className="info-item" role="listitem">
              <i className="fa-solid fa-store"></i>
              <span>Take Away</span>
            </div>
            <div className="info-item" role="listitem">
              <i className="fa-solid fa-clock"></i>
              <span>Preparado no Momento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
