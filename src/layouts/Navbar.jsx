// src/layouts/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BRAND } from '../constants/brand';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Detectar el scroll para cambiar el fondo del menú
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // LA MAGIA: Bloquear el scroll del fondo cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Limpieza por seguridad si el componente se desmonta
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        {/* Agregamos onClick para que también cierre el menú si tocan el logo */}
        <Link to="/" className="text-white flex items-center gap-2 z-50" onClick={() => setIsOpen(false)}>
          <span className="font-serif text-2xl tracking-wide">{BRAND.name}</span>
        </Link>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { name: 'Inicio', path: '/' },
            { name: 'Proyectos', path: '/proyectos' },
            { name: 'Servicios', path: '/servicios' }
          ].map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-white/70 hover:text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Botón de Contacto Desktop */}
        <div className="hidden md:block">
          <Link 
            to="/contacto"
            className="text-white text-[10px] font-bold uppercase tracking-[0.2em] border border-white/30 px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Contacto
          </Link>
        </div>

        {/* Menú Hamburguesa (Móvil) */}
        <button 
          className="md:hidden text-white z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Alternar menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      {/* CORRECCIÓN: top-0, left-0, w-full y h-[100dvh] (altura dinámica de pantalla) */}
      <div 
        className={`fixed top-0 left-0 w-full h-[100dvh] bg-black z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {[
          { name: 'Inicio', path: '/' },
          { name: 'Proyectos', path: '/proyectos' },
          { name: 'Servicios', path: '/servicios' }
        ].map((link) => (
          <Link 
            key={link.name} 
            to={link.path}
            className="text-white text-2xl font-serif tracking-widest hover:text-white/60 transition-colors"
          >
            {link.name}
          </Link>
        ))}
        {/* Botón de Contacto Móvil */}
        <Link 
          to="/contacto"
          className="mt-8 text-white text-xs font-bold uppercase tracking-[0.2em] border border-white/30 px-8 py-3 rounded-full"
        >
          Contacto
        </Link>
      </div>
    </header>
  );
};

export default Navbar;