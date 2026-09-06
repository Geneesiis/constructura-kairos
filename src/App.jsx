// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      {/* Fondo negro base para mantener la estética oscura en transiciones */}
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* Aquí es donde "vinculamos" la URL con su archivo correspondiente */}
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
            <Route path="/privacidad" element={<Privacy />} />
            
            {/* RUTA FALLBACK (404): Atrapa cualquier URL que no exista */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;