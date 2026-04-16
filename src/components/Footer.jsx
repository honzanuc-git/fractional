import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src="/fractional-logo.svg" alt="Fractional" />
        </div>
        <div className="footer-links">
          <a href="#problem">Problém</a>
          <a href="#reseni">Řešení</a>
          <a href="#kdojsme">Kdo jsme</a>
          <a href="#audit">Revenue Audit</a>
          <a href="#balicky">Balíčky</a>
        </div>
        <div className="footer-copy">© {year} Fractional</div>
      </div>
    </footer>
  );
}
