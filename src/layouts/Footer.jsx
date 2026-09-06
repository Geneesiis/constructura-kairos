// src/layouts/Footer.jsx
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* Columna Principal: Marca */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-serif text-4xl tracking-wide">{BRAND.name}</span>
            </Link>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed pr-8">
              {BRAND.slogan} Estructuras sólidas, diseño impecable y atención al detalle milimétrico en Santiago.
            </p>
          </div>

          {/* Columna: Explorar */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Explorar</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/proyectos" className="text-white/70 hover:text-white transition-colors">Portafolio de Obras</Link>
              </li>
              <li>
                <Link to="/servicios" className="text-white/70 hover:text-white transition-colors">Especialidades</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-white/70 hover:text-white transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Columna: Información Legal */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Información legal</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link to="/terminos-y-condiciones" className="text-white/70 hover:text-white transition-colors">Términos y condiciones</Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-white/70 hover:text-white transition-colors">Política de privacidad</Link>
              </li>
            </ul>
          </div>

          {/* Columna: Contacto Directo */}
          <div className="sm:col-span-2 md:col-span-3">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Oficina & Contacto</h3>
            <div className="space-y-4 text-sm text-white/70">
              <p className="hover:text-white transition-colors cursor-default">
                {BRAND.contact.address}
              </p>
              <a href={`mailto:${BRAND.contact.email}`} className="block break-all hover:text-white transition-colors">
                {BRAND.contact.email}
              </a>
              <a href={`mailto:${BRAND.contact.email}?subject=Reclamo%20o%20solicitud%20de%20postventa`} className="block hover:text-white transition-colors">
                Reclamos y postventa
              </a>
              <a href={`tel:${BRAND.contact.phoneRaw}`} className="block hover:text-white transition-colors">
                {BRAND.contact.phone}
              </a>
              <p className="pt-4 text-xs text-white/40">
                {BRAND.contact.schedule}
              </p>
            </div>
          </div>

        </div>

        <p className="max-w-2xl mx-auto text-center text-sm text-white/55 leading-relaxed pb-8">
          Ofrecemos servicios de construcción en Puente Alto, La Florida, Pirque, Macul y todo Santiago.
        </p>

        {/* Barra Inferior (Legal y Redes) */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40">
          <p>© {currentYear} {BRAND.name}. Todos los derechos reservados.</p>
          
          <div className="flex gap-6">
            {<a href={BRAND.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors uppercase tracking-widest font-bold text-[9px]">
              Instagram
            </a>}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;