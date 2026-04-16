import './ForWhom.css';

const items = [
  'B2B firma s 15 až 150 zaměstnanci, primárně IT, SaaS nebo profesionální služby.',
  'Marketing generuje leady, ale sales je buď ignoruje, nebo jim nerozumí.',
  'Nevíte přesně, kde se ztrácejí příležitosti — mezi „zavolali jsme" a „podepsali".',
  'Nechcete full-time CMO nebo CSO, ale potřebujete seniorní vedení.',
  'Jako CEO trávíte čas mediací sporů mezi marketingem a salesem.',
  'Zkusili jste agenturu, zkusili juniora — nic z toho nepřineslo revenue.',
];

export default function ForWhom() {
  return (
    <section>
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="eyebrow">Pro koho</span>
          <h2>Pro B2B firmy, které přestávají růst — a neví proč.</h2>
          <p>Pokud kývnete na tři a víc bodů níže, máme si o čem povídat.</p>
        </div>

        <ul className="checklist">
          {items.map((text, i) => (
            <li
              className="check-item"
              key={text}
              data-reveal
              data-reveal-stagger={i * 80}
            >
              <span className="check-icon" aria-hidden="true">
                <span className="ms">check</span>
              </span>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
