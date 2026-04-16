import './Faq.css';

const faqs = [
  {
    q: 'Co znamená „fractional" a čím se liší od interim nebo agentury?',
    a: 'Fractional = strategické vedení na částečný úvazek (typicky 4–9 dní měsíčně). Liší se od interim (ten je full-time na krátkou dobu) i od agentury (ta exekuuje, ale neřídí strategicky). My řídíme, nastavujeme procesy a metriky — exekuci dělá váš interní tým nebo externí partneři.',
  },
  {
    q: 'Jak dlouho trvá spolupráce?',
    a: 'Minimálně 3 měsíce (chrání obě strany — za kratší dobu se nic reálného nezmění). Typicky pokračujeme 6–12 měsíců, dokud není pipeline a procesy natolik stabilní, že si je firma dokáže řídit sama.',
  },
  {
    q: 'Jak začneme?',
    a: 'Buď 30minutovým callem zdarma (podíváme se, jestli si máme co říct), nebo rovnou Revenue Auditem (29 900 Kč, 2–3 dny). Po auditu se rozhodnete, jestli pokračovat do retaineru. Bez tlaku.',
  },
  {
    q: 'Přijdete vždycky oba, nebo jen jeden?',
    a: 'Primárně nabízíme combo balíček, protože přínos je právě v napojení marketingu a salesu. Pokud ale potřebujete jen jednu stranu (třeba máte solidní sales, ale chybí marketing), řekneme vám to — a doporučíme samostatný CMO nebo CSO retainer.',
  },
  {
    q: 'Kolik firem najednou obsluhujete?',
    a: 'Maximálně 4–5 klientů najednou v retaineru. Fractional model stojí na tom, že máme kapacitu vám skutečně rozumět — ne poslat šablonu a přefakturovat.',
  },
];

export default function Faq() {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="eyebrow">Časté otázky</span>
          <h2>Co se lidi obvykle ptají.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <details
              className="faq-item"
              key={item.q}
              data-reveal
              data-reveal-stagger={i * 70}
            >
              <summary>
                {item.q}
                <span className="faq-toggle" aria-hidden="true">
                  <span className="ms">add</span>
                </span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
