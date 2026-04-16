import './Founders.css';

const founders = [
  {
    photo: '/honza.png',
    role: 'Fractional CMO',
    name: 'Honza Nuc',
    bio: '8+ let v B2B marketingu. Stavěl marketing pro IT a službové firmy, které potřebovaly napojit kampaně na pipeline — ne jen na grafy v Analytics.',
    quote: '„Řídím marketing tak, aby generoval revenue, ne jen leady."',
    alt: 'Portrétní fotka Honzy Nuce, fractional CMO',
    linkedin: 'https://www.linkedin.com/in/honzanuc/',
  },
  {
    photo: '/richard.png',
    role: 'Fractional CSO',
    name: 'Richard Vodolan',
    bio: '15+ let v B2B marketingu. Stavěl marketing pro IT a SaaS firmy, které potřebovaly napojit kampaně na pipeline — ne jen na grafy v Analytics.',
    quote: '„Stavím pipeline a obchodní procesy, které se dají řídit."',
    alt: 'Portrétní fotka Richarda Vodolana, fractional CSO',
    linkedin: 'https://www.linkedin.com/in/richardvodolan/',
  },
];

export default function Founders() {
  return (
    <section className="founders" id="kdojsme">
      <img
        src="/fragment-green.svg"
        alt=""
        aria-hidden="true"
        className="founders-fragment fragment-spin-ccw"
      />

      <div className="container">
        <div className="section-header" data-reveal>
          <span className="eyebrow">Kdo jsme</span>
          <h2>Nejsilnější kombinace.</h2>
          <p>
            Jediný fractional CMO + CSO tým v ČR, který přichází jako jeden produkt. Se
            společným jazykem, společnými metrikami, společným cílem.
          </p>
        </div>

        <div className="founders-grid">
          {founders.map((f, i) => (
            <article
              className="founder-card"
              key={f.name}
              data-reveal={i === 0 ? 'left' : 'right'}
              data-reveal-stagger={i * 150}
            >
              <div className="founder-photo-wrap">
                <img src={f.photo} alt={f.alt} className="founder-photo" loading="lazy" />
              </div>
              <div className="founder-info">
                <span className="founder-role">{f.role}</span>
                <h3>{f.name}</h3>
                <p>{f.bio}</p>
                <p className="founder-quote">{f.quote}</p>
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline founder-linkedin"
                  aria-label={`LinkedIn profil — ${f.name}`}
                >
                  <svg
                    className="founder-linkedin-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.56 20.45h3.56V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
                    />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="founders-tag" data-reveal>Přicházíme spolu. Nebo nepřicházíme vůbec.</p>
      </div>
    </section>
  );
}
