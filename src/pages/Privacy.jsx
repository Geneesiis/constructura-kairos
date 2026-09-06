import { Helmet } from 'react-helmet-async';
import { BRAND } from '../constants/brand';

const Privacy = () => {
  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-24">
      <Helmet>
        <title>Política de privacidad | {BRAND.name}</title>
        <meta
          name="description"
          content="Política de privacidad y tratamiento de datos personales de Constructora Kairos."
        />
      </Helmet>

      <article className="max-w-4xl mx-auto px-6 md:px-12">
        <header className="border-b border-white/10 pb-12 mb-12">
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            Información legal
          </p>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1.1] mb-6">
            Política de privacidad
          </h1>
          <p className="text-white/60 max-w-2xl text-sm md:text-base leading-relaxed">
            Aquí explicamos qué datos solicitamos, para qué los usamos y cómo puedes ejercer tus derechos.
          </p>
          <p className="text-white/40 text-xs mt-6">Última actualización: 5 de septiembre de 2026.</p>
        </header>

        <div className="space-y-12 text-white/75 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">1. Responsable del tratamiento</h2>
            <p>
              El responsable es {BRAND.name}. Para completar esta identificación antes de publicar esta política, se debe informar la razón social, RUT y domicilio comercial de la empresa. Las consultas sobre datos personales pueden enviarse a {BRAND.contact.email}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">2. Datos que recopilamos</h2>
            <p>
              Cuando solicitas una cotización podemos recopilar tu nombre, teléfono, comuna o ubicación de la obra y los detalles que escribas sobre tu proyecto. No solicitamos datos sensibles para este propósito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">3. Finalidad y base del tratamiento</h2>
            <p>
              Usamos estos datos para responder consultas, coordinar visitas, preparar cotizaciones, prestar servicios y atender solicitudes posteriores o reclamos. Al marcar la casilla del formulario autorizas el tratamiento para esa finalidad y el envío del mensaje a WhatsApp, conforme a la legislación chilena aplicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">4. Envío a WhatsApp y terceros</h2>
            <p>
              Al enviar el formulario se abre WhatsApp con los datos que escribiste en el mensaje. WhatsApp es un servicio externo, con sus propias condiciones y política de privacidad. No ingreses información sensible, claves, datos bancarios ni documentos que no sean necesarios para evaluar tu proyecto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">5. Conservación y seguridad</h2>
            <p>
              Conservaremos la información solo durante el tiempo necesario para gestionar la solicitud, mantener antecedentes de una relación contractual o cumplir obligaciones legales. Aplicaremos medidas razonables de seguridad, sin perjuicio de que ningún canal de Internet o mensajería garantice seguridad absoluta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">6. Tus derechos</h2>
            <p>
              Puedes solicitar información sobre los datos tratados, su corrección, actualización, eliminación o la oposición al uso para finalidades no necesarias, según corresponda a la normativa vigente. Para hacerlo, escribe a {BRAND.contact.email} indicando tu nombre y la solicitud concreta. También puedes retirar tu autorización cuando el tratamiento se base en ella, sin afectar los usos realizados previamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">7. Cambios a esta política</h2>
            <p>
              Cualquier actualización se publicará en esta página con su fecha de vigencia. Si el cambio afecta materialmente la forma en que usamos los datos, informaremos la modificación por los medios disponibles cuando corresponda.
            </p>
          </section>
          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">8. Cookies y medición</h2>
            <p>
              Este sitio no integra Google Analytics, píxeles publicitarios ni herramientas propias destinadas a crear perfiles o medir campañas. Cloudflare Pages puede inyectar Cloudflare Pages Analytics para obtener métricas agregadas de funcionamiento y visitas. Esta herramienta es administrada por Cloudflare y debe revisarse en la configuración del proyecto y en sus condiciones vigentes.
            </p>
            <p className="mt-4">
              La página de contacto incorpora un mapa de Google Maps y los enlaces de contacto pueden abrir WhatsApp o Instagram. Esos servicios externos pueden procesar información técnica conforme a sus propias políticas y condiciones cuando interactúas con ellos. Si en el futuro incorporamos Analytics, publicidad, perfiles de usuario u otra tecnología no esencial, actualizaremos esta política y habilitaremos el mecanismo de información y consentimiento que corresponda antes de activarla.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Privacy;