import { ModalProvider } from './context/ModalContext.jsx';
import useReveal from './hooks/useReveal.js';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Problem from './components/Problem.jsx';
import Solution from './components/Solution.jsx';
import Founders from './components/Founders.jsx';
import Audit from './components/Audit.jsx';
import Products from './components/Products.jsx';
import ForWhom from './components/ForWhom.jsx';
import Faq from './components/Faq.jsx';
import FinalCta from './components/FinalCta.jsx';
import Footer from './components/Footer.jsx';
import ContactFormModal from './components/ContactFormModal.jsx';
import CalBookingModal from './components/CalBookingModal.jsx';

export default function App() {
  useReveal();
  return (
    <ModalProvider>
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Solution />
        <Founders />
        <Audit />
        <Products />
        <ForWhom />
        <Faq />
        <FinalCta />
      </main>
      <Footer />

      <ContactFormModal />
      <CalBookingModal />
    </ModalProvider>
  );
}
