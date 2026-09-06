// src/pages/Projects.jsx
import { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { BRAND } from '../constants/brand';

// COMPONENTE DE CARRUSEL (Accesible, interactivo y elegante)
const ProjectGallery = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Envolvemos las funciones en useCallback para optimizar el rendimiento
  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  // Manejador de teclado enfocado solo en este carrusel específico
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  };

  // Si solo hay 1 foto, mostramos la imagen estática con el zoom original
  if (!images || images.length <= 1) {
    const singleImg = images ? images[0] : "";
    return (
      <div className="aspect-[4/3] w-full overflow-hidden relative group">
        <img 
          src={singleImg} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
      </div>
    );
  }

  // Si hay más de 1 foto, renderizamos el Carrusel con Accesibilidad Completa
  return (
    <div 
      className="aspect-[4/3] w-full overflow-hidden relative group/slider focus:outline-none focus:ring-2 focus:ring-white/30"
      tabIndex={0} // Permite que el contenedor reciba el "foco" con el teclado
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label={`Galería de imágenes de ${title}`}
    >
      {/* Imágenes superpuestas con efecto Fade */}
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} - Foto ${idx + 1} de ${images.length}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        />
      ))}

      {/* Capa de oscurecimiento sutil */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Botones de Navegación Accesibles */}
      <button 
        type="button"
        onClick={prevImage} 
        aria-label={`Ver foto anterior de ${title}`}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm p-3 text-white rounded-full opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-black/80 z-10 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
      >
        <ChevronLeft size={20} strokeWidth={1.5} aria-hidden="true" />
      </button>
      
      <button 
        type="button"
        onClick={nextImage} 
        aria-label={`Ver foto siguiente de ${title}`}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm p-3 text-white rounded-full opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-black/80 z-10 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
      >
        <ChevronRight size={20} strokeWidth={1.5} aria-hidden="true" />
      </button>

      {/* Puntos Indicadores en la base */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10" aria-hidden="true">
        {images.map((_, idx) => (
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


// DATOS DE LOS PROYECTOS
const PORTFOLIO = [
  {
    id: 1,
    title: "Fachada Perimetral Mixta",
    category: "Estructuras Metálicas",
    location: "Puerto Montt, Región de Los Lagos",
    area: "10 metros lineales",
    duration: "1 semana",
    images: [
      "/img/1.webp",
      "/img/1.2.webp",
    ],
    description: "Diseño, fabricación y montaje de cierre perimetral mixto para fachada principal. Incluye estructura en perfiles de acero con listones de madera tratada y la fabricación a medida de un portón de corredera vehicular, según las especificaciones definidas para el proyecto."
  },
  {
    id: 2,
    title: "Quincho Rústico Integrado",
    category: "Quinchos y Terrazas",
    location: "Puerto Montt, Región de Los Lagos",
    area: "25 m²",
    duration: "1 mes",
    images: [
      "/img/2.webp",
      "/img/2.2.webp"
    ],
    description: "Construcción y habilitación de quincho cerrado con estilo rústico, diseñado para integrarse armónicamente a la vivienda principal. El proyecto destaca por su estructura de techo en madera a la vista, muros con revestimiento texturizado tipo piedra y una imponente barra de madera nativa. Incluye zona de parrilla a medida con campana y un sistema de iluminación cálida que potencia la atmósfera del lugar."
  },
  {
    id: 3,
    title: "Vivienda Unifamiliar",
    category: "Obra Nueva & Estructura",
    location: "El Manzano, San José de Maipo",
    area: "60 m²",
    duration: "2 meses y medio",
    images: [
      "/img/3.webp",
      "/img/3.2.webp"
    ],
    description: "Construcción integral desde cero de una casa habitacional de 60 metros cuadrados. El proyecto contempla fundaciones de hormigón, estructura con revestimiento exterior tipo siding y terminaciones de hojalatería para aguas lluvia. Incluye ventanales de aluminio y un diseño 'bow window' para ampliar el espacio interior y favorecer la entrada de luz natural, conforme a las especificaciones del proyecto."
  },
  {
    id: 4,
    title: "Remodelación Interior y Terminaciones",
    category: "Diseño y Remodelación",
    location: "Puente Alto, Santiago",
    area: "Living y accesos",
    duration: "3 semanas",
    images: [
      "/img/4.3.webp",
      "/img/4.2.webp",
      "/img/4.webp"
    ],
    description: "Proyecto integral de mejoramiento y diseño de espacios interiores. El trabajo contempló la renovación de la caja de escala con pasamanos de madera y peldaños alfombrados, además de la construcción de un cielo falso con diseño moderno para integrar iluminación de acento. El gran protagonista es la fabricación a medida de un centro de entretenimiento empotrado, el cual combina un elegante revestimiento de muros en fachaleta de piedra, marcos de madera, repisas de cristal e iluminación cálida superior, logrando un ambiente sofisticado y acogedor."
  },
  {
    id: 5,
    title: "Remodelación de Living Comedor",
    category: "Diseño y Remodelación",
    location: "Puente Alto, Santiago",
    area: "30 m²",
    duration: "3 semanas",
    images: [
      "/img/5.webp",
      "/img/5.2.webp"
    ],
    description: "Remodelación de living-comedor enfocada en modernizar y refrescar visualmente el espacio. El trabajo principal consistió en la construcción de un cielo falso perimetral equipado con iluminación LED indirecta y focos direccionales. Además, se realizó un trabajo completo de preparación y pintura de paredes para renovar el ambiente, logrando un resultado contemporáneo, amplio y muy acogedor."
  },
  {
    id: 6,
    title: "Construcción de Quincho Integral Rústico",
    category: "Quinchos y Terrazas",
    location: "Puente Alto, Santiago",
    area: "50 m²",
    duration: "2 meses",
    images: [
      "/img/6.webp",
      "/img/6.2.webp",
      "/img/6.3.webp",
      "/img/6.4.webp"
    ],
    description: "Construcción de quincho techado con vigas de madera a la vista y revestimiento integral de piedra. El espacio incluye parrilla a medida con espiedo, campana de extracción, horno empotrado, lavacopas y un amplio mesón en obra. Se finalizó con piso cerámico apto para el uso definido en el proyecto y un diseño de iluminación cálida."
  }
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-24">
      <Helmet>
        <title>Portafolio de Obras | {BRAND.name}</title>
        <meta name="description" content="Explora nuestra selección de obras y proyectos." />
      </Helmet>

      {/* CABECERA EDITORIAL */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <p className="text-white/50 text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
          Portafolio
        </p>
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[1.1] mb-8">
          Obras <span className="italic text-white/70">Seleccionadas.</span>
        </h1>
        <p className="text-white/60 max-w-xl text-sm md:text-base leading-relaxed">
          Cada proyecto es un testimonio de nuestra atención al detalle, el rigor técnico y el seguimiento de los plazos acordados.
        </p>
      </section>

      {/* LISTA DE PROYECTOS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        {PORTFOLIO.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div 
              key={project.id} 
              className={`flex flex-col gap-10 md:gap-20 py-20 border-t border-white/10 ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              
              {/* BLOQUE DE IMAGEN */}
              <div className="w-full md:w-3/5">
                <ProjectGallery images={project.images} title={project.title} />
              </div>

              {/* BLOQUE DE TEXTO */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <span className="text-[10px] text-white/50 font-bold uppercase tracking-[0.2em] mb-4 block">
                  {project.category}
                </span>
                
                <h2 className="text-4xl md:text-5xl font-serif mb-6">
                  {project.title}
                </h2>
                
                <p className="text-white/60 text-sm leading-relaxed mb-10">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-y border-white/10 py-6 mb-10">
                  <div>
                    <p className="text-white/40 text-[9px] uppercase tracking-[0.15em] font-bold mb-1">Ubicación</p>
                    <p className="text-sm">{project.location}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[9px] uppercase tracking-[0.15em] font-bold mb-1">Superficie</p>
                    <p className="text-sm">{project.area}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[9px] uppercase tracking-[0.15em] font-bold mb-1">Plazo</p>
                    <p className="text-sm">{project.duration}</p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${BRAND.contact.phoneRaw}?text=${encodeURIComponent(
                    BRAND.whatsapp.projectTemplate.replace('{title}', project.title).replace('{name}', BRAND.name)
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] hover:text-white/60 transition-colors self-start"
                >
                  Solicitar presupuesto similar <ArrowUpRight size={16} />
                </a>
              </div>

            </div>
          );
        })}
      </section>

      {/* CALL TO ACTION FINAL */}
      <section className="max-w-4xl mx-auto px-6 text-center mt-20 pt-20 border-t border-white/10">
        <h2 className="text-3xl md:text-5xl font-serif mb-6">¿Tienes un proyecto en mente?</h2>
        <p className="text-white/50 mb-10 text-sm max-w-xl mx-auto">
          Trae tus planos o conversemos sobre tu idea. Nos encargamos de la viabilidad técnica y la ejecución milimétrica.
        </p>
        <a
          href={`https://wa.me/${BRAND.contact.phoneRaw}?text=${encodeURIComponent(BRAND.whatsapp.generalMessage)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-white text-black px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:bg-gray-200 transition-colors"
        >
          Iniciar Conversación
        </a>
      </section>
    </div>
  );
};

export default Projects;