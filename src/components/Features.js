export default function Features() {
  const features = [
    {
      icon: "fa-solid fa-fish",
      color: "red",
      title: "Sushi Fresco e Variado",
      description: "Ingredientes selecionados diariamente, preparados na hora com técnica e cuidado."
    },
    {
      icon: "fa-solid fa-star",
      color: "yellow",
      title: "Avaliação de 4.4 Estrelas",
      description: "Mais de 1.300 clientes satisfeitos que confiam na nossa qualidade."
    },
    {
      icon: "fa-solid fa-money-bill-wave",
      color: "green",
      title: "Excelente Qualidade/Preço",
      description: "Sushi premium a preços acessíveis. Rodízio ao fim de semana por apenas 13,99€."
    },
    {
      icon: "fa-solid fa-bolt",
      color: "orange",
      title: "Serviço Rápido",
      description: "Atendimento eficiente sem comprometer a qualidade. O seu tempo é valioso."
    },
    {
      icon: "fa-solid fa-face-smile-beam",
      color: "blue",
      title: "Atendimento Simpático",
      description: "Equipa acolhedora que faz com que se sinta em casa em cada visita."
    },
    {
      icon: "fa-solid fa-bowl-food",
      color: "red",
      title: "Buffet / Rodízio Disponível",
      description: "All you can eat com variedade ilimitada dos melhores pratos japoneseses."
    }
  ];

  return (
    <section id="features" className="features" aria-labelledby="features-heading">
      <div className="features-container">
        <header className="features-header">
          <h2 id="features-heading" className="features-title">
            Porque Escolher o <span className="highlight">Sushi Rairakku?</span>
          </h2>
          <p className="features-subtitle">
            Qualidade, variedade e serviço de excelência em cada visita
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