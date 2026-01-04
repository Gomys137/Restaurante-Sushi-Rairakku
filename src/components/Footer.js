export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <div className="footer-container">
        
        {/* LOGO + TEXTO */}
        <div className="footer-col footer-col-logo">
          <div className="footer-logo-wrapper">
            <img 
              src="/logo.png" 
              className="footer-logo" 
              alt="Sushi Shogun" 
              width={140}
              height={60}
            />
          </div>

          <p className="footer-description">
            Sushi fresco preparado no momento,<br />
            com foco em take away e entrega.<br />
            Qualidade que se sente em cada pedido.
          </p>

          <div className="footer-rating">
            <div className="stars" aria-label="Avaliação de 5 estrelas">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa-solid fa-star" aria-hidden="true"></i>
              ))}
            </div>
            <span className="rating-text">5.0/5</span>
            <span className="rating-count" aria-hidden="true">• Avaliações reais de clientes</span>
          </div>
        </div>

        {/* LINKS RÁPIDOS */}
        <div className="footer-col">
          <h3 className="footer-col-title">Links Rápidos</h3>
          <ul className="footer-links" role="list">
            <li><a href="#home" className="footer-link">Início</a></li>
            <li><a href="#menu" className="footer-link">Menu</a></li>
            <li><a href="#sobre" className="footer-link">Sobre</a></li>
            <li><a href="#avaliacoes" className="footer-link">Avaliações</a></li>
          </ul>
        </div>

        {/* SERVIÇOS */}
        <div className="footer-col">
          <h3 className="footer-col-title">Serviços</h3>
          <ul className="footer-links" role="list">
            <li><a href="#pedido" className="footer-link">Pedir Online</a></li>
            <li><a href="#recolha" className="footer-link">Take Away</a></li>
            <li><a href="#entrega" className="footer-link">Entrega ao Domicílio</a></li>
            <li><a href="#contacto" className="footer-link">Contacto</a></li>
          </ul>
        </div>

        {/* CONTACTOS + SOCIAL */}
        <div className="footer-col">
          <h3 className="footer-col-title">Contactos</h3>
          <address className="footer-address">
            Algueirão-Mem Martins<br/>
            Sintra, Portugal
          </address>

          <div className="footer-social" aria-label="Redes sociais">
            <a 
              href="https://facebook.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a 
              href="https://instagram.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
            <a 
              href="https://wa.me/351920614257"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider" role="separator"></div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Sushi Shogun. Todos os direitos reservados.
        </p>
        <div className="footer-made-with">
          <span>Feito com </span>
          <i className="fa-solid fa-heart" aria-hidden="true"></i>
          <span> em Portugal</span>
        </div>
      </div>
    </footer>
  );
}
