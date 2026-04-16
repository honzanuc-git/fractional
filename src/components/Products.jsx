import { useModal } from '../context/ModalContext.jsx';
import './Products.css';

const products = [
  {
    id: 'start',
    name: 'Combo Start',
    scope: '4 + 4 dny / měsíc',
    price: 'od 52 000 Kč',
    unit: 'měsíčně',
    desc: 'Pro firmy 15–40 lidí, které potřebují pořádek v základech. CMO nastavuje směr, CSO procesy.',
    featured: false,
  },
  {
    id: 'standard',
    name: 'Combo Standard',
    scope: '6 + 6 dní / měsíc',
    price: 'od 76 000 Kč',
    unit: 'měsíčně',
    desc: 'Pro firmy 40–100 lidí, které potřebují aktivní vedení — od strategie po každotýdenní řízení.',
    featured: true,
  },
  {
    id: 'growth',
    name: 'Combo Growth',
    scope: '9 + 9 dní / měsíc',
    price: 'od 115 000 Kč',
    unit: 'měsíčně',
    desc: 'Pro firmy 100–150 lidí ve fázi škálování. Téměř full-time leadership za zlomek nákladů.',
    featured: false,
  },
];

export default function Products() {
  const { openContact } = useModal();

  return (
    <section className="products" id="balicky">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="eyebrow">Balíčky</span>
          <h2>Nebo rovnou do spolupráce.</h2>
          <p>
            Tři retainer balíčky podle velikosti a ambic vaší firmy. Kombinace CMO + CSO dní,
            žádné fakturování „po hodinách".
          </p>
        </div>

        <div className="products-grid">
          {products.map((p, i) => (
            <div
              className={`product-card${p.featured ? ' featured' : ''}`}
              key={p.id}
              data-reveal
              data-reveal-stagger={i * 140}
            >
              {p.featured && <span className="featured-badge">Nejčastější volba</span>}
              <h3>{p.name}</h3>
              <div className="product-scope">{p.scope}</div>
              <div className="product-price">{p.price}</div>
              <div className="product-price-unit">{p.unit}</div>
              <p className="product-desc">{p.desc}</p>
              <button
                type="button"
                className={`btn ${p.featured ? 'btn-orange' : 'btn-outline'}`}
                onClick={openContact}
              >
                Zjistit víc
              </button>
            </div>
          ))}
        </div>

        <p className="products-note" data-reveal>
          <strong>Full-time CMO + CSO = 300 000+ Kč/měsíc.</strong> Fractional combo Standard =
          od 76 000 Kč. Úspora 67–75 % oproti full-time hire.
        </p>
      </div>
    </section>
  );
}
