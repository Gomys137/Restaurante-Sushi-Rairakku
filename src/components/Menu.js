export default function Menu() {
  const menuItems = [
    {
      id: 1,
      image: '/sushi.jpg',
      title: 'Sushi & Sashimi',
      description: 'Peixe fresco, cortes precisos e combinações equilibradas',
      color: '#e63946'
    },
    {
      id: 2,
      image: '/temaki.jpg',
      title: 'Temakis',
      description: 'Preparados na hora, cheios de sabor e frescura',
      color: '#4e6cff'
    },
    {
      id: 3,
      image: '/gyosa.jpg',
      title: 'Entradas & Quentes',
      description: 'Gyozas, pratos quentes e acompanhamentos japoneses',
      color: '#34c759'
    },
    {
      id: 4,
      image: '/combinados.jpg',
      title: 'Combinados',
      description: 'Seleções ideais para partilhar ou desfrutar sozinho',
      color: '#f5b700'
    }
  ];

  return (
    <section id="menu" className="menu-section" aria-labelledby="menu-heading">
      <div className="menu-container">
        <header className="menu-header">
          <h2 id="menu-heading" className="menu-title">
            O Nosso <span className="highlight">Menu</span>
          </h2>
          <p className="menu-subtitle">
            Sushi fresco preparado no momento, perfeito para levar ou receber em casa
          </p>
        </header>

        <div className="menu-grid" role="list" aria-label="Categorias do menu">
          {menuItems.map((item) => (
            <article 
              key={item.id} 
              className="menu-card"
              role="listitem"
              aria-label={`Categoria: ${item.title}`}
            >
              <div className="menu-image-container">
                <div 
                  className="menu-img" 
                  style={{ backgroundImage: `url('${item.image}')` }}
                  role="img"
                  aria-label={`Imagem de ${item.title}`}
                >
                  <div className="image-overlay"></div>
                </div>
                <div className="menu-badge">
                  <span className="badge-text">{item.title.split(' ')[0]}</span>
                </div>
              </div>
              
              <div className="menu-content">
                <div className="menu-info">
                  <h3 className="menu-item-title">{item.title}</h3>
                  <p className="menu-item-description">{item.description}</p>
                </div>
                <button 
                  className="menu-view-btn"
                  aria-label={`Ver ${item.title} no menu`}
                >
                  <span>Ver mais</span>
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="menu-cta">
          <a 
            href="/menu" 
            className="menu-button"
            aria-label="Ver o menu completo do restaurante"
          >
            <span>Ver Menu Completo</span>
            <i className="fa-solid fa-utensils" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
