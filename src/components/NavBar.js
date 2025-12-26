import { useState, useEffect } from 'react';
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu ao clicar em link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Prevenir scroll quando menu aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-container">
          
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <img 
              src="/logo.png" 
              alt="Sushi Rairakku" 
              className="logo-img"
              width={160}
              height={60}
            />
          </Link>

          {/* Menu Desktop */}
          <ul className="nav-menu">
            <li>
              <Link 
                href="#menu" 
                className="nav-link"
                onClick={handleLinkClick}
              >
                <span className="link-text">MENU</span>
                <span className="link-underline"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="#sobre" 
                className="nav-link"
                onClick={handleLinkClick}
              >
                <span className="link-text">SOBRE</span>
                <span className="link-underline"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="#avaliacoes" 
                className="nav-link"
                onClick={handleLinkClick}
              >
                <span className="link-text">AVALIAÇÕES</span>
                <span className="link-underline"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="#contacto" 
                className="nav-link"
                onClick={handleLinkClick}
              >
                <span className="link-text">CONTACTO</span>
                <span className="link-underline"></span>
              </Link>
            </li>
          </ul>

          {/* Botão Desktop */}
          <a 
            href="#pedido" 
            className="nav-button"
            aria-label="Fazer pedido online"
          >
            <span>Pedir Online</span>
            <i className="fa-solid fa-basket-shopping"></i>
          </a>

          {/* Botão Hamburger Mobile */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <ul className="mobile-nav">
              <li>
                <Link 
                  href="#menu" 
                  className="mobile-link"
                  onClick={handleLinkClick}
                >
                  <i className="fa-solid fa-utensils"></i>
                  <span>MENU</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#sobre" 
                  className="mobile-link"
                  onClick={handleLinkClick}
                >
                  <i className="fa-solid fa-store"></i>
                  <span>SOBRE</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#avaliacoes" 
                  className="mobile-link"
                  onClick={handleLinkClick}
                >
                  <i className="fa-solid fa-star"></i>
                  <span>AVALIAÇÕES</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#contacto" 
                  className="mobile-link"
                  onClick={handleLinkClick}
                >
                  <i className="fa-solid fa-phone"></i>
                  <span>CONTACTO</span>
                </Link>
              </li>
            </ul>

            <div className="mobile-cta">
              <a 
                href="#pedido" 
                className="mobile-button"
                onClick={handleLinkClick}
              >
                <i className="fa-solid fa-basket-shopping"></i>
                <span>Pedir Online</span>
              </a>
              
              <div className="mobile-info">
                <p className="mobile-phone">
                  <i className="fa-solid fa-phone"></i>
                  +351 912 345 678
                </p>
                <p className="mobile-address">
                  <i className="fa-solid fa-location-dot"></i>
                  Algueirão-Mem Martins
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay para fechar menu ao clicar fora */}
      {isMenuOpen && (
        <div 
          className="menu-overlay" 
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}