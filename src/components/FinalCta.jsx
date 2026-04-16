import CtaButtons from './CtaButtons.jsx';
import './FinalCta.css';

export default function FinalCta() {
  return (
    <section className="final-cta-wrap" id="kontakt">
      <div className="container">
        <img
          src="/fragment-orange.svg"
          alt=""
          aria-hidden="true"
          className="final-cta-fragment-orange fragment-spin-cw"
        />
        <img
          src="/fragment-green.svg"
          alt=""
          aria-hidden="true"
          className="final-cta-fragment-green fragment-spin-ccw"
        />

        <div className="final-cta" data-reveal>
          <h2>
            Zjistěte, kde vám <span className="accent">uniká revenue.</span>
          </h2>
          <p>
            Začněte 30minutovým callem zdarma — nebo rovnou Revenue Auditem. Za 3 dny máte
            jasno.
          </p>
          <div className="final-cta-buttons">
            <CtaButtons align="center" variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
