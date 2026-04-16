import './Solution.css';

const pillars = [
  {
    num: '01',
    title: 'Společný jazyk',
    desc: 'Nastavíme metriky a slovník, kterému rozumí marketing, sales i vy. Žádné „MQL vs. SQL" hádky.',
  },
  {
    num: '02',
    title: 'Funkční handover',
    desc: 'Definujeme SLA, kdy a jak se lead předává. Žádné leady, co v CRM umírají stáří.',
  },
  {
    num: '03',
    title: 'Zodpovědnost za revenue',
    desc: 'Ne za leady. Ne za dealy. Za celou cestu. Konečně má někdo jméno u toho čísla.',
  },
];

export default function Solution() {
  return (
    <section id="reseni">
      <div className="container">
        <div className="solution-block" data-reveal>
          <span className="eyebrow">Řešení</span>
          <h2>
            Neřídíme sales &amp; marketing.<br />
            <span className="accent">Řídíme cestu k úspěchu.</span>
          </h2>

          <div className="solution-pillars">
            {pillars.map((p, i) => (
              <div
                className="pillar"
                key={p.num}
                data-reveal
                data-reveal-stagger={i * 140}
              >
                <div className="pillar-number">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
