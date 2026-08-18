// src/constants/brand.js

export const BRAND = {
  name: "CONSTRUCTORA KAIROS",
  slogan: "Construimos tus ideas, superamos tus expectativas.",
  logoText: "CONSTRUCTORA KAIROS",
  
  // Datos de Contacto (Cámbialos aquí y se actualizarán en toda la web)
  contact: {
    phone: "+56 9 3084 1687",
    phoneRaw: "56930841687", // Para los enlaces de WhatsApp/Llamadas (sin espacios ni el +)
    email: "kairosconstructora.contacto@gmail.com",
    address: "Puente Alto, Santiago",
    schedule: "Lun - Vie: 8:30 - 18:00 | Sáb: 9:00 - 14:00"
  },

  // Mensajes por defecto para WhatsApp (usar encodeURIComponent al insertarlos en enlaces)
  whatsapp: {
    generalMessage: "Hola Constructora Kairos, tengo un proyecto en mente y me gustaría iniciar una conversación para cotizar.",
    projectTemplate: "Hola Constructora Kairos, estaba viendo el proyecto {title} y me gustaría cotizar algo similar."
  },

  // Datos de Ubicación (Añadido para el componente de Contacto)
  location: {
    city: "Puente Alto",
    region: "Zona Sur de Santiago"
  },

  // Redes Sociales
  socials: {
    instagram: "https://www.instagram.com/kairosconstructora.contacto/",
  },

  // Paleta de Colores Oficial - ESTILO EDITORIAL PREMIUM
  themeColors: {
    background: "bg-black",          // Fondo absoluto
    textPrimary: "text-white",       // Títulos y textos principales
    textSecondary: "text-white/50",  // Descripciones y textos sutiles (gris oscuro elegante)
    borders: "border-white/10",      // Líneas finas de separación
    accent: "bg-white text-black"    // Botones de llamada a la acción
  }
};