import CtaButtons from './CtaButtons.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <img
        src="/fragment-green.svg"
        alt=""
        aria-hidden="true"
        className="hero-fragment hero-fragment-left fragment-spin-ccw"
      />
      <img
        src="/fragment-orange.svg"
        alt=""
        aria-hidden="true"
        className="hero-fragment hero-fragment-right fragment-spin-cw"
      />
      <div className="container">
        <div className="hero-content">
          <h1>
            Marketing &amp; sales<br />
            táhnou za jeden provaz.<br />
            <span className="accent">Konečně.</span>
          </h1>
          <p className="lead">
            Jsme Honza a Richard — fractional CMO a CSO. Přicházíme jako tým a řídíme to, co
            nikdo ve vaší firmě neřídí: cestu od prvního kontaktu k podepsané smlouvě.
          </p>
          <CtaButtons align="center" />
        </div>
      </div>
    </section>
  );
}
