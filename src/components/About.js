export default function About() {
  return (
    <section id="sobre" className="about" aria-labelledby="about-heading">
      <div className="about-container">
        <div className="about-content">
          
          {/* IMAGEM À ESQUERDA - Desktop / Acima - Mobile */}
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src="/sushi-about.jpg" 
                alt="Preparação de sushi fresco no restaurante Sushi Rairakku" 
                width={600}
                height={400}
                className="about-img"
                loading="lazy"
              />
              <div className="image-badge" aria-hidden="true">
                <span>Desde 2015</span>
              </div>
            </div>
          </div>

          {/* TEXTO À DIREITA - Desktop / Abaixo - Mobile */}
          <div className="about-text">
            <header className="about-header">
              <span className="about-subtitle">A Nossa História</span>
              <h2 id="about-heading" className="about-title">
                Sobre o Restaurante <br />
                <span className="highlight">Sushi Rairakku</span>
              </h2>
            </header>

            <div className="about-description">
              <p>
                Com vários anos de experiência, o Restaurante Sushi Rairakku é uma referência em Algueirão-Mem Martins
                para quem procura <strong>sushi fresco e de qualidade</strong> a preços justos.
              </p>

              <p>
                A nossa missão é oferecer uma <strong>experiência gastronómica autêntica</strong>,
                com uma ampla variedade de pratos japoneses preparados com ingredientes frescos e selecionados diariamente.
              </p>

              <p>
                O nosso compromisso passa por manter uma <strong>qualidade consistente</strong> em cada prato,
                um atendimento simpático e rápido, e um ambiente acolhedor onde todos se sentem bem-vindos.
              </p>
            </div>

            <div className="about-quote">
              <i className="fa-solid fa-quote-left" aria-hidden="true"></i>
              <blockquote>
                "Excelente relação qualidade/preço. Um restaurante que nunca desilude!"
                <footer className="quote-footer">— Cliente Regular</footer>
              </blockquote>
            </div>

            <div className="about-cta">
              <a href="#menu" className="about-button primary">
                <span>Saber Mais</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">1.300+</span>
                  <span className="stat-label">Clientes Satisfeitos</span>
                </div>
                <div className="stat">
                  <span className="stat-number">8+</span>
                  <span className="stat-label">Anos de Experiência</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}