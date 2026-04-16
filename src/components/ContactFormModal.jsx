import { useState } from 'react';
import Modal from './Modal.jsx';
import { useModal } from '../context/ModalContext.jsx';
import { CONTACT_FORM_ENDPOINT, CONTACT_EMAIL } from '../config/links.js';
import './ContactFormModal.css';

const initialState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactFormModal() {
  const { activeModal, close, openBooking } = useModal();
  const isOpen = activeModal === 'contact';

  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleClose = () => {
    close();
    // Reset after close animation so the user sees fresh state next time.
    setTimeout(() => {
      setValues(initialState);
      setStatus('idle');
      setErrorMsg('');
    }, 250);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      if (CONTACT_FORM_ENDPOINT) {
        const res = await fetch(CONTACT_FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        // No endpoint configured — fall back to a mailto so the message isn't lost.
        const subject = encodeURIComponent(`Poptávka — ${values.company || values.name}`);
        const body = encodeURIComponent(
          `Jméno: ${values.name}\nFirma: ${values.company}\nE-mail: ${values.email}\nTelefon: ${values.phone}\n\n${values.message}`,
        );
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      }
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Zkuste to prosím znovu.');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Napište nám" size="md">
      {status === 'success' ? (
        <div className="form-success">
          <div className="form-success-icon" aria-hidden="true">
            <span className="ms">check</span>
          </div>
          <h4>Děkujeme, zpráva odeslána.</h4>
          <p>Ozveme se vám do 24 hodin.</p>
          <button type="button" className="btn btn-outline" onClick={handleClose}>
            Zavřít
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <p className="form-intro">
            Vyplňte formulář a my se vám ozveme během 24 hodin — nebo si rovnou{' '}
            <button
              type="button"
              className="link-inline"
              onClick={() => {
                close();
                setTimeout(openBooking, 50);
              }}
            >
              rezervujte online call
            </button>.
          </p>

          <div className="form-row two">
            <div className="field">
              <label htmlFor="cf-name">Jméno a příjmení *</label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Jana Nováková"
              />
            </div>
            <div className="field">
              <label htmlFor="cf-company">Firma *</label>
              <input
                id="cf-company"
                name="company"
                type="text"
                required
                autoComplete="organization"
                value={values.company}
                onChange={handleChange}
                placeholder="Acme s.r.o."
              />
            </div>
          </div>

          <div className="form-row two">
            <div className="field">
              <label htmlFor="cf-email">E-mail *</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                placeholder="jana@acme.cz"
              />
            </div>
            <div className="field">
              <label htmlFor="cf-phone">Telefon</label>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={handleChange}
                placeholder="+420 777 123 456"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="cf-message">Vaše zpráva *</label>
            <textarea
              id="cf-message"
              name="message"
              rows={5}
              required
              value={values.message}
              onChange={handleChange}
              placeholder="S čím vám můžeme pomoct?"
            />
          </div>

          {status === 'error' && (
            <p className="form-error" role="alert">
              Odeslání se nezdařilo. {errorMsg}
            </p>
          )}

          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-orange"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Odesílám…' : 'Odeslat zprávu'}
              <span className="ms" aria-hidden="true">arrow_forward</span>
            </button>
          </div>

          <p className="form-fine">
            Odesláním souhlasíte se zpracováním osobních údajů pro účely vyřízení poptávky.
          </p>
        </form>
      )}
    </Modal>
  );
}
