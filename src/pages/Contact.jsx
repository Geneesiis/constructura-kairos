// src/pages/Contact.jsx
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BRAND } from '../constants/brand';

const Contact = () => {
  // Estado para capturar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waMessage = `Hola Constructora Kairos, mi nombre es ${formData.name}. Les escribo desde ${formData.location}. Mi teléfono es ${formData.phone}. Les comento sobre mi proyecto: ${formData.message}`;
    window.open(`https://wa.me/${BRAND.contact.phoneRaw}?text=${encodeURIComponent(waMessage)}`, '_blank');
    setFormData({
      name: '',
      phone: '',
      location: '',
      message: ''
    });
  };

  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-24 font-sans">
      <Helmet>
        <title>Contacto y Cotizaciones | {BRAND.name}</title>
        <meta name="description" content="Solicita una visita a terreno y cotiza tu proyecto. Respondemos en menos de 24 horas hábiles." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ENCABEZADO */}
        <div className="mb-20">
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            Contacto Directo
          </p>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1.1] mb-6">
            Hablemos de tu <br className="hidden md:block" /><span className="italic text-white/50">Proyecto.</span>
          </h1>
          <p className="text-white/60 max-w-xl text-sm md:text-base leading-relaxed">
            Solicita una visita a terreno. Evaluamos tu espacio, tomamos medidas exactas y te entregamos un presupuesto transparente y sin sorpresas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10 mb-20">
          
          {/* INFORMACIÓN DE CONTACTO (Izquierda) */}
          <div className="lg:col-span-4 bg-black p-6 sm:p-10 md:p-14">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-10">
              Datos de Oficina
            </h3>
            
            <div className="space-y-10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Teléfono / WhatsApp</p>
                <a href={`https://wa.me/${BRAND.contact.phoneRaw}`} target="_blank" rel="noreferrer" className="text-lg font-serif hover:text-white/70 transition-colors">
                  {BRAND.contact.phone}
                </a>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Correo Electrónico</p>
                <a 
                  href={`mailto:${BRAND.contact.email}`} 
                  className="block w-full text-[10px] sm:text-xs md:text-sm font-serif hover:text-white/70 transition-colors break-all"
                >
                  {BRAND.contact.email}
                </a>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Zona de Cobertura</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Puente Alto, Santiago y alrededores.
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Horario de Atención</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Lunes a Viernes<br/>08:30 a 18:00 hrs
                </p>
              </div>
            </div>
          </div>

          {/* FORMULARIO DE CONTACTO (Derecha) */}
          <div className="lg:col-span-8 bg-black p-6 sm:p-10 md:p-14">
            <h2 className="text-2xl font-serif tracking-wide mb-8">
              Cuéntanos qué necesitas
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2 block">
                    Nombre Completo
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2 block">
                    Teléfono
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                    placeholder="Ej. +56 9 1234 5678"
                  />
                </div>
              </div>

              {/* Comuna */}
              <div>
                <label htmlFor="location" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2 block">
                  Comuna donde se realizará la obra
                </label>
                <input 
                  type="text" 
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                  placeholder="Ej. Puente Alto"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2 block">
                  Detalles del Proyecto
                </label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Cuéntanos un poco sobre lo que tienes en mente..."
                ></textarea>
              </div>

              {/* Botón Enviar */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                <button 
                  type="submit"
                  className="w-full sm:w-auto text-black bg-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/80 transition-colors text-center cursor-pointer"
                >
                  Enviar para Cotizar
                </button>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 text-center sm:text-right">
                  Respondemos en menos de 24 horas.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* SECCIÓN DEL MAPA (Elegante y en escala de grises para el modo oscuro) */}
        <div className="border border-white/10 bg-white/5 p-px">
          <div className="bg-black p-2">
            <iframe 
              title="Ubicación Constructora Kairos"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106330.40742111867!2d-70.65045025!3d-33.61113265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d7c4a169b59d%3A0xc47e3a9cfa28fb17!2sPuente%20Alto%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1700000000000!5m2!1ses-419!2scl" 
              width="100%" 
              height="400" 
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-80 hover:opacity-100 transition-opacity duration-500"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;