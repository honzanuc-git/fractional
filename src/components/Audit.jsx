import CtaButtons from './CtaButtons.jsx';
import './Audit.css';

const steps = [
  { n: 1, title: 'Objednáte audit', desc: 'Jednorázově 29 900 Kč. 2–3 pracovní dny. Žádný další závazek.' },
  { n: 2, title: 'Dostanete report', desc: '3 největší úniky revenue, 5 doporučení, prioritizovaný plán na 90 dní.' },
  { n: 3, title: 'Rozhodnete se', desc: 'Pokračovat do retaineru, nebo si to udělat sami. Cena auditu se započítává do prvního měsíce.' },
];

export default function Audit() {
  return (
    <section id="audit" className="audit-section">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="eyebrow">Jak začít</span>
          <h2>Revenue Audit. Bez závazku.</h2>
          <p>
            Než podepíšete cokoli dlouhodobého, podíváme se, kde vám přesně uniká revenue.
            Tři dny. Jasný report. Pak se rozhodnete.
          </p>
        </div>

        <div className="audit-steps">
          {steps.map((s, i) => (
            <div
              className="step-card"
              key={s.n}
              data-reveal
              data-reveal-stagger={i * 130}
            >
              <div className="step-number">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="audit-tagline" data-reveal>
          Za 3 dny víte, kde přesně vám <span className="accent">uniká revenue.</span>
        </p>
        <div className="audit-cta" data-reveal data-reveal-stagger="100">
          <CtaButtons align="center" />
        </div>
      </div>
    </section>
  );
}
