// src/pages/Services.jsx
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, Home, Wrench, Hammer, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado
import { BRAND } from '../constants/brand';

// COMPONENTE DE CARRUSEL AUTOMÁTICO
const AutoCarousel = () => {
  const processImages = [
    "/img/servicio_1.webp", 
    "/img/servicio_2.webp", 
    "/img/servicio_3.webp"  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === processImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [processImages.length]);

  return (
    <div className="w-full h-[40vh] md:h-[60vh] relative overflow-hidden bg-white/5 group">
      {processImages.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Proceso constructivo ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover grayscale-[30%] transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {processImages.map((_, idx) => (
          <span 
            key={idx} 
            className={`block w-1.5 h-1.5 transition-colors duration-500 rounded-full ${
              idx === currentIndex ? 'bg-white' : 'bg-white/30'
            }`} 
          />
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-24">
      <Helmet>
        <title>Servicios | {BRAND.name}</title>
        <meta name="description" content="Especialistas en obra nueva, estructuras metálicas y remodelaciones en Santiago y Puente Alto." />
      </Helmet>

      {/* CABECERA Y DESCRIPCIÓN GENERAL */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[1.1] mb-6">
              Nuestra <span className="italic text-white/70">Experiencia.</span>
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-end">
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
              Somos una empresa especializada en la ejecución de proyectos de construcción, estructuras metálicas y remodelaciones de alto estándar en toda la Región Metropolitana.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Transformamos tus ideas en obras sólidas y duraderas, destacando por nuestra rigurosidad técnica, el cumplimiento estricto de los plazos acordados y un diseño impecable desde las fundaciones hasta las terminaciones.
            </p>
          </div>
        </div>
      </section>

      {/* CARRUSEL PANORÁMICO AUTOMÁTICO */}
      <section className="w-full mb-24 px-6 md:px-12">
        <AutoCarousel />
      </section>

      {/* NUEVO: PROCESO DE TRABAJO (4 Pasos) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4">Metodología Kairos</p>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight">Cómo trabajamos</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative">
          {/* Línea conectora visible en escritorio */}
          <div className="hidden md:block absolute top-6 left-6 right-6 h-px bg-white/10 z-0" />

          {[
            { step: "01", title: "Visita y Evaluación", desc: "Inspeccionamos el terreno, tomamos medidas exactas y entendemos tus necesidades a fondo." },
            { step: "02", title: "Propuesta Técnica", desc: "Entregamos un presupuesto transparente, detallado por partidas, sin sorpresas ni costos ocultos." },
            { step: "03", title: "Ejecución de Obra", desc: "Materializamos el proyecto con supervisión constante, respetando normativas y plazos acordados." },
            { step: "04", title: "Entrega y Garantía", desc: "Revisión final conjunta y entrega del espacio limpio, respaldado por nuestra garantía de calidad." }
          ].map((item, i) => (
            <div key={i} className="relative z-10 group">
              <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center font-serif text-lg mb-6 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                {item.step}
              </div>
              <h4 className="text-xl font-serif mb-3">{item.title}</h4>
              <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ÁREAS DE ESPECIALIDAD ENRIQUECIDAS (Tarjetas) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4">Nuestros Servicios</p>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight">Especialidades</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* SERVICIO 1 */}
          <div className="group bg-white/[0.02] border border-white/10 p-8 hover:bg-white/[0.04] hover:border-white/20 hover:-translate-y-2 transition-all duration-500 rounded-lg flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="text-white/20 font-serif text-4xl group-hover:text-white/40 transition-colors">01.</span>
              <Home className="text-white/30 group-hover:text-white transition-colors" size={36} strokeWidth={1} />
            </div>
            <h3 className="text-3xl font-serif mb-4 tracking-wide">Obra Nueva</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
              Construcción de viviendas unifamiliares y proyectos habitacionales desde cero, garantizando máxima resistencia estructural e integración estética.
            </p>
            
            {/* Metadatos de la tarjeta */}
            <div className="space-y-4 border-t border-white/10 pt-6 mb-8">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">Entregables</span>
                <span className="text-sm text-white/80">Obra gruesa, terminaciones.</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">Plazo Típico</span>
                <span className="text-sm text-white/80">4 a 8 meses.</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">Ideal Para</span>
                <span className="text-sm text-white/80">Terrenos nuevos, familias y parcelas.</span>
              </div>
            </div>

            <ul className="space-y-3 mt-auto">
              {['Fundaciones y radieres', 'Albañilería y tabiquería', 'Techumbres y aislación'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                  <CheckCircle2 size={14} className="text-white/30 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICIO 2 */}
          <div className="group bg-white/[0.02] border border-white/10 p-8 hover:bg-white/[0.04] hover:border-white/20 hover:-translate-y-2 transition-all duration-500 rounded-lg flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="text-white/20 font-serif text-4xl group-hover:text-white/40 transition-colors">02.</span>
              <Wrench className="text-white/30 group-hover:text-white transition-colors" size={36} strokeWidth={1} />
            </div>
            <h3 className="text-3xl font-serif mb-4 tracking-wide">Metalmecánica</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
              Fabricación e instalación a medida. Desarrollamos estructuras soportantes, galpones y sistemas de seguridad robustos y duraderos.
            </p>
            
            <div className="space-y-4 border-t border-white/10 pt-6 mb-8">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">Entregables</span>
                <span className="text-sm text-white/80">Estructura montada, soldaduras, pintura anticorrosiva.</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">Plazo Típico</span>
                <span className="text-sm text-white/80">2 a 6 semanas.</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">Ideal Para</span>
                <span className="text-sm text-white/80">Bodegas, seguridad perimetral, naves industriales.</span>
              </div>
            </div>

            <ul className="space-y-3 mt-auto">
              {['Galpones y cobertizos', 'Cierres perimetrales y rejas', 'Portones automatizados'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                  <CheckCircle2 size={14} className="text-white/30 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICIO 3 */}
          <div className="group bg-white/[0.02] border border-white/10 p-8 hover:bg-white/[0.04] hover:border-white/20 hover:-translate-y-2 transition-all duration-500 rounded-lg flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="text-white/20 font-serif text-4xl group-hover:text-white/40 transition-colors">03.</span>
              <Hammer className="text-white/30 group-hover:text-white transition-colors" size={36} strokeWidth={1} />
            </div>
            <h3 className="text-3xl font-serif mb-4 tracking-wide">Remodelaciones</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
              Diseño y habilitación de nuevos espacios. Elevamos el estándar de tus recintos respetando la armonía de la construcción original.
            </p>
            
            <div className="space-y-4 border-t border-white/10 pt-6 mb-8">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">Entregables</span>
                <span className="text-sm text-white/80">Espacios listos para uso, modernización de instalaciones.</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">Plazo Típico</span>
                <span className="text-sm text-white/80">3 a 8 semanas.</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">Ideal Para</span>
                <span className="text-sm text-white/80">Renovación de hogares, ampliaciones y exteriores.</span>
              </div>
            </div>

            <ul className="space-y-3 mt-auto">
              {['Quinchos y terrazas', 'Ampliaciones de nivel', 'Remodelación de cocinas'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                  <CheckCircle2 size={14} className="text-white/30 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION CON DOBLE BOTÓN */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-32">
        <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/20 p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 rounded-xl relative overflow-hidden">
          
          {/* Fondo sutil decorativo */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="z-10 text-center lg:text-left">
            <h3 className="text-3xl md:text-5xl font-serif mb-6 tracking-tight">¿Tienes un proyecto en mente?</h3>
            <p className="text-white/60 text-base max-w-lg mx-auto lg:mx-0">
              Evaluamos tu requerimiento en terreno. Operamos principalmente en Puente Alto, Santiago y toda la Región Metropolitana.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto z-10">
            <a 
              href={`https://wa.me/${BRAND.contact.phoneRaw}?text=Hola%20Constructora%20Kairos,%20me%20gustaría%20agendar%20una%20visita%20técnica%20para%20un%20proyecto.`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-200 hover:scale-105 transition-all duration-300"
            >
              Cotizar por WhatsApp <ArrowUpRight size={18} />
            </a>
            
            {/* CTA Secundario - Asumiendo que tu ruta de portafolio es '/proyectos' */}
            <Link 
              to="/proyectos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 hover:border-white transition-all duration-300"
            >
              Ver Portafolio <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Services;