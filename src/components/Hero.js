export default function Hero() {
  return (
    <section className="hero" aria-label="Apresentação do restaurante">
      <div className="hero-overlay" aria-hidden="true"></div>

      <div className="hero-content">
        <h1>
          Sushi de Qualidade em<br />
          <span className="highlight">Algueirão-Mem Martins</span>
        </h1>

        <p className="hero-subtitle">All You Can Eat · Ingredientes Frescos · Preço Justo</p>

        <div className="hero-buttons">
          <a className="hero-btn hero-primary" href="#menu" aria-label="Ver o menu completo">
            Ver o Menu
          </a>
          <a className="hero-btn hero-secondary" href="#pedido" aria-label="Fazer pedido online">
            Pedir Online
          </a>
        </div>
      </div>
    </section>
  );
}