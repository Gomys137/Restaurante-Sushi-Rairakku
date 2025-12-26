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

          <h2 id="order-heading">Peça Online e Receba em Casa</h2>
          <p className="order-description">
            Sushi fresco entregue diretamente à sua porta. Simples, rápido e delicioso. <br className="desktop-only" />
            Também disponível para recolha.
          </p>

          <div className="order-buttons" role="group" aria-label="Opções de pedido">
            <a 
              href="#pedido" 
              className="order-btn-primary"
              aria-label="Fazer pedido online agora"
            >
              <span className="btn-icon" aria-hidden="true">
                <i className="fa-solid fa-bag-shopping"></i>
              </span>
              <span className="btn-text">Fazer Pedido Agora</span>
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
              <span>Entrega Rápida</span>
            </div>
            <div className="info-item" role="listitem">
              <i className="fa-solid fa-store"></i>
              <span>Recolha Disponível</span>
            </div>
            <div className="info-item" role="listitem">
              <i className="fa-solid fa-clock"></i>
              <span>Pedido em Minutos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}