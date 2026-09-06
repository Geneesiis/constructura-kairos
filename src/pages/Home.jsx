// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Ruler, Hammer, ShieldCheck, ArrowUpRight, ArrowRight, FileText } from 'lucide-react';

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-black text-white selection:bg-white selection:text-black">
      <Helmet>
        <title>Constructora Kairos | Proyectos, ampliaciones y remodelaciones en RM</title>
        <meta name="description" content="Remodelaciones e ingeniería estructural con estándares de excelencia en Santiago y Puente Alto." />
        <link rel="preload" as="image" href="/img/home_4.3.webp" fetchpriority="high" />
      </Helmet>

      {/* 1. HERO ESTILO EDITORIAL */}
      <section className="relative h-screen w-full flex flex-col justify-end overflow-hidden">
        <img 
          src="/img/home_4.3.webp"
          alt="Proyectos de Construcción Kairos"
          fetchPriority="high"
          className="absolute inset-0 z-0 w-full h-full object-cover animate-[pulse_20s_ease-in-out_infinite] scale-105"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/80 to-black/40" />

        <div className="relative z-20 w-full px-6 md:px-12 pb-12 md:pb-20 max-w-7xl mx-auto">
          <p className="text-white/70 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6 font-bold flex items-center gap-4">
            <span className="w-8 h-px bg-white/60"></span>
            Ingeniería & Construcción
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] text-white mb-12 font-serif tracking-tight leading-[1.05]">
            Materializamos todo<br /> 
            <span className="italic text-white/80">lo que imaginas.</span>
          </h1>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mt-8 border-t border-white/20 pt-8">
            <Link 
              to="/contacto"
              className="bg-white text-black px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-200 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 w-full lg:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              Cotizar Proyecto <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 1.5. PRUEBA SOCIAL / TRUST BAR */}
      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0 md:px-8 text-center md:text-left flex flex-col justify-center">
              <span className="text-3xl font-serif text-white block mb-1">01</span>
              <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Evaluación técnica</span>
            </div>
            <div className="pt-4 md:pt-0 md:px-8 text-center md:text-left flex flex-col justify-center">
              <span className="text-3xl font-serif text-white block mb-1">02</span>
              <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Propuesta detallada</span>
            </div>
            <div className="pt-4 md:pt-0 md:px-8 text-center md:text-left flex flex-col justify-center">
              <span className="text-3xl font-serif text-white block mb-1">OK</span>
              <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Respaldo técnico</span>
            </div>
            <div className="pt-4 md:pt-0 md:px-8 text-center md:text-left flex flex-col justify-center">
              <span className="text-3xl font-serif text-white block mb-1">RM</span>
              <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Región Metropolitana</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILOSOFÍA DE LA EMPRESA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:pt-32 md:pb-16">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="w-full md:w-5/12">
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              Diseño, rigor técnico y <span className="italic text-white/60">ejecución impecable.</span>
            </h2>
          </div>
          <div className="w-full md:w-7/12 flex flex-col gap-8 text-white/80 text-base md:text-lg leading-relaxed font-light">
            <p>
              En Constructora Kairos entendemos que una obra no es solo un conjunto de materiales, sino una inversión de vida. Nos dedicamos a materializar proyectos residenciales y estructuras metálicas con una precisión obsesiva.
            </p>
            <p>
              Nuestro equipo aborda cada desafío constructivo desde la ingeniería hasta las terminaciones más finas, asegurando que el resultado final sea sólido, funcional y estéticamente superior.
            </p>
            <div className="pt-4">
              <Link 
                to="/proyectos" 
                className="inline-flex items-center gap-3 text-white hover:text-white/70 transition-colors uppercase tracking-[0.2em] text-[11px] font-bold pb-2 border-b border-white/30 hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black"
              >
                Ver nuestro portafolio <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 CTA INTERMEDIO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 hover:bg-white/[0.07] transition-colors duration-500">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <FileText className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-2">¿Ya tienes tus planos o ideas?</h3>
              <p className="text-white/70 text-sm md:text-base">Envíanos la información y evaluamos la factibilidad con un presupuesto transparente.</p>
            </div>
          </div>
          <Link 
            to="/contacto"
            className="shrink-0 bg-transparent border border-white text-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Enviar Proyecto
          </Link>
        </div>
      </section>

      {/* 3. RESUMEN DE SERVICIOS */}
      <section className="bg-white/[0.02] py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-4">Lo que hacemos</p>
              <h2 className="text-4xl md:text-5xl font-serif">Áreas de <span className="italic text-white/60">Especialidad</span></h2>
            </div>
            <Link 
              to="/servicios" 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors border border-white/20 hover:border-white/50 px-8 py-4 bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              Ver todos los servicios
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group border border-white/10 bg-black p-10 hover:bg-white/[0.04] hover:border-white/30 hover:-translate-y-2 transition-all duration-500 rounded-lg">
              <Ruler className="text-white/40 group-hover:text-white transition-colors mb-8" size={40} strokeWidth={1.5} />
              <h3 className="text-2xl font-serif mb-4">Obra Nueva</h3>
              <p className="text-sm text-white/70 leading-relaxed">Ejecución integral de proyectos habitacionales, desde las fundaciones hasta las terminaciones.</p>
            </div>
            
            <div className="group border border-white/10 bg-black p-10 hover:bg-white/[0.04] hover:border-white/30 hover:-translate-y-2 transition-all duration-500 rounded-lg">
              <ShieldCheck className="text-white/40 group-hover:text-white transition-colors mb-8" size={40} strokeWidth={1.5} />
              <h3 className="text-2xl font-serif mb-4">Metalmecánica</h3>
              <p className="text-sm text-white/70 leading-relaxed">Fabricación de portones, cierres perimetrales y estructuras soportantes en acero de alta resistencia.</p>
            </div>

            <div className="group border border-white/10 bg-black p-10 hover:bg-white/[0.04] hover:border-white/30 hover:-translate-y-2 transition-all duration-500 rounded-lg">
              <Hammer className="text-white/40 group-hover:text-white transition-colors mb-8" size={40} strokeWidth={1.5} />
              <h3 className="text-2xl font-serif mb-4">Remodelaciones</h3>
              <p className="text-sm text-white/70 leading-relaxed">Habilitación de nuevos espacios, quinchos y ampliaciones respetando la armonía de tu hogar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OBRAS DESTACADAS: Grid en Desktop, Swipe en Mobile */}
      <section className="py-24 border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-4">Nuestro Trabajo</p>
            <h2 className="text-4xl md:text-5xl font-serif">Obras <span className="italic text-white/60">Destacadas</span></h2>
          </div>
        </div>

        {/* CONTENEDOR DESLIZABLE EN MOBILE / GRID EN DESKTOP */}
        {/* Las clases de scrollbar-hide las logramos con utilidades de CSS nativo */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            
            {/* Proyecto 1 */}
            <Link to="/proyectos" className="group relative block min-w-[85%] md:min-w-0 snap-center rounded-lg overflow-hidden aspect-[4/5] bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white">
              <img 
                src="/img/3.webp" 
                alt="Proyecto 1" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-2">Obra Nueva</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif text-white">Casa San José de Maipo</h3>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 backdrop-blur-sm">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Proyecto 2 */}
            <Link to="/proyectos" className="group relative block min-w-[85%] md:min-w-0 snap-center rounded-lg overflow-hidden aspect-[4/5] bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white">
              <img 
                src="/img/1.webp" 
                alt="Proyecto 2" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-2">Metalmecánica</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif text-white">Cierre Perimetral y Rejas</h3>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 backdrop-blur-sm">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Proyecto 3 */}
            <Link to="/proyectos" className="group relative block min-w-[85%] md:min-w-0 snap-center rounded-lg overflow-hidden aspect-[4/5] bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white">
              <img 
                src="/img/6.webp" 
                alt="Proyecto 3" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-2">Remodelación</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif text-white">Terraza y Quincho</h3>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 backdrop-blur-sm">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION FINAL */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 text-center flex flex-col items-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-6">Da el primer paso</p>
        <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-3xl tracking-tight">¿Listo para comenzar tu próximo proyecto?</h2>
        <p className="text-white/70 mb-12 max-w-xl text-sm md:text-base leading-relaxed">
          Contáctanos para agendar una visita técnica y evaluar la factibilidad de tu terreno o plano en la Región Metropolitana.
        </p>
        <Link 
          to="/contacto"
          className="bg-white text-black px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-200 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        >
          Hablemos de tu obra <ArrowUpRight size={18} />
        </Link>
      </section>

    </div>
  );
};

export default Home;