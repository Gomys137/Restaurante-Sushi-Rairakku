export default function Features() {
  const features = [
    {
      icon: "fa-solid fa-fish",
      color: "red",
      title: "Sushi Sempre Fresco",
      description: "Peixe fresco e ingredientes selecionados, preparados no momento com rigor e atenção ao detalhe."
    },
    {
      icon: "fa-solid fa-star",
      color: "yellow",
      title: "Avaliação de 5.0 Estrelas",
      description: "Clientes satisfeitos destacam a frescura, a qualidade e o cuidado em cada encomenda."
    },
    {
      icon: "fa-solid fa-box",
      color: "green",
      title: "Take Away & Entrega",
      description: "Ideal para levar ou receber em casa, com embalagens cuidadas que preservam a qualidade."
    },
    {
      icon: "fa-solid fa-bolt",
      color: "orange",
      title: "Preparação Rápida",
      description: "Processo eficiente sem comprometer a qualidade, para que o seu pedido chegue no ponto certo."
    },
    {
      icon: "fa-solid fa-face-smile-beam",
      color: "blue",
      title: "Atendimento Atencioso",
      description: "Serviço próximo e simpático, focado na satisfação de quem nos escolhe."
    },
    {
      icon: "fa-solid fa-money-bill-wave",
      color: "red",
      title: "Qualidade / Preço Equilibrados",
      description: "Sushi de elevada qualidade a preços justos, ideal para o dia a dia ou ocasiões especiais."
    }
  ];

  return (
    <section id="features" className="features" aria-labelledby="features-heading">
      <div className="features-container">
        <header className="features-header">
          <h2 id="features-heading" className="features-title">
            Porque Escolher o <span className="highlight">Sushi Shogun?</span>
          </h2>
          <p className="features-subtitle">
            Frescura, consistência e confiança em cada pedido
          </p>
        </header>

        <div className="features-grid" role="list" aria-label="Lista de benefícios">
          {features.map((feature, index) => (
            <article 
              key={index} 
              className="feature-card"
              role="listitem"
            >
              <div className={`feature-icon icon-${feature.color}`} aria-hidden="true">
                <i className={feature.icon}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
