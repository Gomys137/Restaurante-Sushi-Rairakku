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
                alt="Preparação de sushi fresco no Sushi Shogun"
                width={600}
                height={400}
                className="about-img"
                loading="lazy"
              />
              <div className="image-badge" aria-hidden="true">
                <span>Sushi Fresco</span>
              </div>
            </div>
          </div>

          {/* TEXTO À DIREITA - Desktop / Abaixo - Mobile */}
          <div className="about-text">
            <header className="about-header">
              <span className="about-subtitle">Quem Somos</span>
              <h2 id="about-heading" className="about-title">
                Sobre o <br />
                <span className="highlight">Sushi Shogun</span>
              </h2>
            </header>

            <div className="about-description">
              <p>
                O <strong>Sushi Shogun</strong> nasceu com um objetivo simples:
                levar <strong>sushi fresco e de elevada qualidade</strong> até si,
                com todo o cuidado, rigor e atenção ao detalhe.
              </p>

              <p>
                Trabalhamos maioritariamente em regime de <strong>take away e entrega</strong>,
                garantindo que cada peça é preparada no momento,
                utilizando ingredientes frescos e peixe cuidadosamente selecionado.
              </p>

              <p>
                Acreditamos que a verdadeira qualidade está na consistência,
                na boa relação <strong>qualidade/preço</strong> e na satisfação de quem confia em nós,
                seja para uma refeição rápida ou um momento especial.
              </p>
            </div>

            <div className="about-quote">
              <i className="fa-solid fa-quote-left" aria-hidden="true"></i>
              <blockquote>
                "Sempre tudo fresco, bem embalado e delicioso. Vou repetir de certeza!"
                <footer className="quote-footer">— Cliente Satisfeito</footer>
              </blockquote>
            </div>

            <div className="about-cta">
              <a href="#menu" className="about-button primary">
                <span>Ver Menu</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">5★</span>
                  <span className="stat-label">Avaliação Média</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Foco na Qualidade</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
