import { useEffect, useRef } from 'react';
import Modal from './Modal.jsx';
import { useModal } from '../context/ModalContext.jsx';
import { CAL_EMBED_SRC, CAL_ORIGIN, CAL_NAMESPACE, CAL_LINK } from '../config/links.js';
import './CalBookingModal.css';

// Cal.com inline embed. The loader snippet below mirrors Cal's official embed code,
// adapted so it can run on demand inside a React component.
function ensureCalLoader() {
  if (typeof window === 'undefined') return;
  if (window.Cal && window.Cal.loaded) return;

  const p = (a, ar) => {
    a.q.push(ar);
  };
  const d = window.document;
  window.Cal =
    window.Cal ||
    function (...args) {
      const cal = window.Cal;
      const ar = args;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        const scriptEl = d.createElement('script');
        scriptEl.src = CAL_EMBED_SRC;
        d.head.appendChild(scriptEl);
        cal.loaded = true;
      }
      if (ar[0] === 'init') {
        const api = function (...innerArgs) {
          p(api, innerArgs);
        };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ['initNamespace', namespace]);
        } else {
          p(cal, ar);
        }
        return;
      }
      p(cal, ar);
    };
}

export default function CalBookingModal() {
  const { activeModal, close } = useModal();
  const isOpen = activeModal === 'booking';
  const inlineId = 'fr-cal-inline-uvodni-call';
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;
    ensureCalLoader();

    const Cal = window.Cal;
    if (!Cal) return;

    // init namespace once
    if (!initializedRef.current) {
      Cal('init', CAL_NAMESPACE, { origin: CAL_ORIGIN });
      initializedRef.current = true;
    }

    const ns = Cal.ns[CAL_NAMESPACE];
    if (!ns) return;

    ns('inline', {
      elementOrSelector: `#${inlineId}`,
      config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
      calLink: CAL_LINK,
    });
    ns('ui', { hideEventTypeDetails: false, layout: 'month_view' });
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={close} title="Rezervovat úvodní call (30 min, zdarma)" size="lg">
      <p className="cal-intro">
        Vyberte si termín, který vám vyhovuje. Call je nezávazný — podíváme se, jestli si máme co
        říct.
      </p>
      <div id={inlineId} className="cal-embed-slot" />
    </Modal>
  );
}
