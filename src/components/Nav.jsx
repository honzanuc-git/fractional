import { useEffect, useState } from 'react';
import { useModal } from '../context/ModalContext.jsx';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { openContact } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="nav" className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <a href="/" className="logo" aria-label="Fractional — domovská stránka">
          <img src="/fractional-logo.svg" alt="Fractional" className="logo-img" />
        </a>

        <nav aria-label="Hlavní navigace">
          <ul className="nav-links">
            <li><a href="#problem">Problém</a></li>
            <li><a href="#reseni">Řešení</a></li>
            <li><a href="#kdojsme">Kdo jsme</a></li>
            <li><a href="#audit">Revenue Audit</a></li>
            <li><a href="#balicky">Balíčky</a></li>
          </ul>
        </nav>

        <button type="button" className="btn btn-primary nav-cta" onClick={openContact}>
          Kontaktovat
          <span className="ms" aria-hidden="true">arrow_forward</span>
        </button>
      </div>
    </header>
  );
}
