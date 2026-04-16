import './Problem.css';

const quotes = [
  { icon: 'campaign', speaker: 'Marketing', text: 'Přivedli jsme 60 leadů za měsíc. Sales s nimi nic nedělá.' },
  { icon: 'handshake', speaker: 'Sales', text: 'Leady jsou nekvalitní. Chceme teplé kontakty, ne lidi z formuláře.' },
  { icon: 'person', speaker: 'CEO', text: 'Nevím, kdo má pravdu. Ale revenue mi nestoupá.' },
];

export default function Problem() {
  return (
    <section id="problem">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="eyebrow">Problém</span>
          <h2>Zní vám to povědomě?</h2>
          <p>V každé B2B firmě, která má marketing a sales, existuje napětí. Někdy tiché, někdy hlasité — ale vždycky tam je.</p>
        </div>

        <div className="quote-grid">
          {quotes.map((q, i) => (
            <div
              className="quote-card"
              key={q.speaker}
              data-reveal
              data-reveal-stagger={i * 120}
            >
              <span className="quote-speaker">
                <span className="ms" aria-hidden="true">{q.icon}</span>
                {q.speaker}
              </span>
              <p className="quote-text">{q.text}</p>
            </div>
          ))}
        </div>

        <div className="problem-conclusion" data-reveal>
          <p>
            Tohle není problém marketingu ani salesu. Je to problém{' '}
            <span className="highlight">mezery mezi nimi.</span> A za tu mezeru ve vaší firmě
            nikdo nezodpovídá.
          </p>
        </div>
      </div>
    </section>
  );
}
