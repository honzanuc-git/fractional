// Central place for contact/booking configuration.
// Update these values when you have final endpoints.

// Cal.com embed config
export const CAL_ORIGIN = 'https://app.cal.eu';
export const CAL_EMBED_SRC = 'https://app.cal.eu/embed/embed.js';
export const CAL_NAMESPACE = 'uvodni-call';
export const CAL_LINK = 'honzanuc/uvodni-call';

// Contact form: submission endpoint (optional). If unset, the form logs to
// console and shows a success state — wire up later (Formspree, custom API, …).
export const CONTACT_FORM_ENDPOINT = '';

// Fallback e-mail (used only if JS disabled or endpoint missing).
export const CONTACT_EMAIL = 'ahoj@fractional.cz';
