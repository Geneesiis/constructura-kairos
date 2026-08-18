// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <Helmet>
        <title>Página no encontrada | Constructora Kairos</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
        Error 404
      </p>
      <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[1.1] mb-6 text-white">
        Ruta no <span className="italic text-white/50">Encontrada.</span>
      </h1>
      <p className="text-white/60 max-w-md text-sm md:text-base leading-relaxed mb-10 mx-auto">
        La página que buscas no existe o ha sido movida. Volvamos a los cimientos para que puedas seguir explorando nuestro trabajo.
      </p>
      
      <Link 
        to="/"
        className="bg-white text-black border border-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/80 transition-colors"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;