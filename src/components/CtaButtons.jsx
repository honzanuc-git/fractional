import { useModal } from '../context/ModalContext.jsx';

/**
 * Unified CTA pair used across the site.
 *
 * Props:
 *  - variant: 'default' (cream bg) | 'light' (dark bg — secondary uses outline-light)
 *  - align: 'start' | 'center' (flex justify)
 *  - size: 'md' | 'sm'
 */
export default function CtaButtons({ variant = 'default', align = 'start', size = 'md' }) {
  const { openContact, openBooking } = useModal();

  const secondaryClass = variant === 'light' ? 'btn btn-outline-light' : 'btn btn-outline';
  const wrapStyle = {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    justifyContent: align === 'center' ? 'center' : 'flex-start',
  };
  const btnStyle = size === 'sm' ? { padding: '10px 16px', fontSize: '0.7rem' } : undefined;

  return (
    <div style={wrapStyle}>
      <button type="button" className="btn btn-orange" onClick={openContact} style={btnStyle}>
        Napsat e-mail
        <span className="ms" aria-hidden="true">arrow_forward</span>
      </button>
      <button type="button" className={secondaryClass} onClick={openBooking} style={btnStyle}>
        Rezervovat online call
      </button>
    </div>
  );
}
