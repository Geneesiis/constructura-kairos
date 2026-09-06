import { Helmet } from 'react-helmet-async';
import { BRAND } from '../constants/brand';

const TermsAndConditions = () => {
  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-24">
      <Helmet>
        <title>Términos y condiciones | {BRAND.name}</title>
        <meta
          name="description"
          content="Términos y condiciones para solicitudes de cotización y contratación de servicios de Constructora Kairos."
        />
      </Helmet>

      <article className="max-w-4xl mx-auto px-6 md:px-12">
        <header className="border-b border-white/10 pb-12 mb-12">
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            Información legal
          </p>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1.1] mb-6">
            Términos y condiciones
          </h1>
          <p className="text-white/60 max-w-2xl text-sm md:text-base leading-relaxed">
            Estas condiciones regulan las solicitudes de cotización y la contratación de servicios de construcción ofrecidos por {BRAND.name}.
          </p>
          <p className="text-white/40 text-xs mt-6">Última actualización: 5 de septiembre de 2026.</p>
        </header>

        <div className="space-y-12 text-white/75 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">1. Identificación del proveedor</h2>
            <p>
              El proveedor es {BRAND.name}. Para completar esta identificación antes de publicar esta página, se debe informar la razón social inscrita, RUT, domicilio comercial y representante legal de la empresa. El contacto disponible para consultas es {BRAND.contact.email} y {BRAND.contact.phone}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">2. Solicitud de cotización</h2>
            <p>
              El formulario de contacto y los canales de WhatsApp permiten solicitar información o una visita técnica. El envío de una solicitud no constituye por sí solo una aceptación de obra, reserva de fecha ni contrato. La información entregada será revisada y, cuando corresponda, se enviará una cotización por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">3. Cotización y alcance del servicio</h2>
            <p>
              Cada cotización se expresará en pesos chilenos e indicará si el precio incluye o no IVA. También deberá señalar la vigencia de la oferta, el alcance de los trabajos, las partidas y materiales incluidos, las exclusiones, el precio total, el plazo estimado, la forma de pago y las condiciones necesarias para iniciar la obra. Si una cotización no indica vigencia, se deberá confirmar su validez antes de aceptarla.
            </p>
            <p className="mt-4">
              Los costos adicionales, trabajos fuera de alcance, permisos, materiales especiales, traslados u otras condiciones no incluidas deberán identificarse antes de contratar o informarse durante la ejecución. No se ejecutarán ni cobrarán trabajos adicionales sin aprobación escrita del cliente, salvo las excepciones previstas en estas condiciones o en la ley.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">4. Formación del contrato</h2>
            <p>
              La contratación se perfeccionará mediante la aceptación escrita de una cotización o contrato que identifique al cliente, el inmueble, el alcance de la obra y las condiciones económicas. En caso de existir un contrato específico firmado por las partes, sus estipulaciones prevalecerán respecto de la cotización y de estas condiciones generales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">5. Plazos y atrasos</h2>
            <p>
              El plazo de ejecución comenzará cuando se cumplan las condiciones indicadas en la cotización o contrato, incluyendo el pago inicial, el acceso al inmueble, la entrega de información técnica y los permisos que correspondan al cliente. La empresa informará oportunamente cualquier circunstancia que pueda afectar el calendario y propondrá una nueva fecha o plan de trabajo.
            </p>
            <p className="mt-4">
              Los atrasos atribuibles a la empresa no podrán justificarse genéricamente por causas no informadas. Los plazos solo podrán ampliarse por modificaciones aprobadas, falta de condiciones a cargo del cliente, hechos de terceros fuera del control razonable de la empresa o fuerza mayor, dejando constancia de la causa y del nuevo plazo acordado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">6. Modificaciones de la obra</h2>
            <p>
              El cliente podrá solicitar cambios de diseño, materiales, cantidades o alcance. Antes de ejecutarlos, la empresa informará por escrito su descripción, precio adicional o rebaja, efecto en el plazo y cualquier condición técnica relevante. La modificación solo se ejecutará después de la aprobación escrita del cliente, salvo medidas urgentes y necesarias para evitar un daño, las que deberán ser informadas y justificadas.
            </p>
            <p className="mt-4">
              Si durante la ejecución aparecen condiciones ocultas o imprevistas que hagan necesario modificar la solución técnica, se detendrá la partida afectada cuando sea razonable, se documentará la situación y se entregará una propuesta para aprobación. No se cobrarán trabajos adicionales que no hayan sido informados y aceptados, salvo que la ley permita expresamente una solución distinta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">7. Cancelaciones y término anticipado</h2>
            <p>
              Las solicitudes de cancelación deberán enviarse por escrito a {BRAND.contact.email}. Antes del inicio de la obra, la empresa informará los montos efectivamente incurridos y devolverá, cuando corresponda, los pagos recibidos que no estén respaldados por trabajos realizados, materiales adquiridos o gastos previamente aprobados.
            </p>
            <p className="mt-4">
              Una vez iniciada la obra, cualquiera de las partes podrá solicitar el término anticipado conforme a las condiciones de la cotización o contrato. Se realizará una liquidación de los trabajos ejecutados, materiales comprometidos, gastos acreditados y anticipos pagados. La empresa no cobrará servicios no prestados y devolverá los saldos que correspondan, sin perjuicio de los derechos que la legislación chilena reconozca al consumidor.
            </p>
            <p className="mt-4">
              Si el término se debe a un incumplimiento de la empresa, el cliente podrá ejercer los derechos y solicitar las soluciones que correspondan conforme al contrato y la Ley N° 19.496. Ninguna condición de cancelación limitará derechos irrenunciables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">8. Pagos y recepción de los trabajos</h2>
            <p>
              Los anticipos, estados de pago, medios de pago y condiciones de vencimiento serán los establecidos en la cotización o contrato aceptado. Al finalizar los trabajos se realizará una revisión con el cliente y se dejará constancia de las observaciones pendientes y de su forma de solución, cuando corresponda.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">9. Garantía y solicitudes posteriores</h2>
            <p>
              La garantía contractual indicada en la cotización o contrato no podrá reducir las garantías legales aplicables. En obras de construcción, cuando corresponda conforme a la Ley General de Urbanismo y Construcciones y su normativa, se considerarán como referencia los siguientes plazos mínimos: 3 años para terminaciones, 5 años para elementos constructivos o instalaciones y 10 años para fallas que afecten elementos estructurales. La clasificación de cada defecto y el plazo aplicable dependerán del tipo de obra, sus permisos, la recepción y las circunstancias del caso.
            </p>
            <p className="mt-4">
              La cobertura comprenderá los defectos de ejecución o de los materiales suministrados por la empresa que se manifiesten dentro del plazo legal o contractual que corresponda. El contrato podrá establecer una garantía superior, pero no una inferior a la exigida por la ley. Quedan excluidos, salvo que la normativa disponga otra cosa, el desgaste normal, el uso distinto del previsto, la falta de mantención, intervenciones de terceros, modificaciones no autorizadas, daños preexistentes, accidentes y hechos de fuerza mayor.
            </p>
            <p className="mt-4">
              Para solicitar revisión, el cliente deberá escribir a {BRAND.contact.email} con su nombre, datos de contacto, identificación de la obra, fecha de entrega y descripción del problema, adjuntando fotografías cuando sea útil. Confirmaremos la recepción dentro de 3 días hábiles y coordinaremos una revisión o respuesta técnica dentro de un plazo razonable según la urgencia y complejidad del caso. La solución podrá consistir, según corresponda, en reparación, reposición, corrección u otra medida prevista en el contrato y la legislación aplicable.
            </p>
            <p className="mt-4">
              Esta garantía contractual no limita la garantía legal ni otros derechos irrenunciables que correspondan al consumidor conforme a la legislación chilena, incluidos los plazos especiales que pudieran aplicar a obras de construcción.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">10. Reclamos y contacto</h2>
            <p>
              Los reclamos, solicitudes de garantía y casos de postventa deben enviarse a {BRAND.contact.email}, con el asunto “Reclamo o postventa”, o solicitarse al teléfono {BRAND.contact.phone}. Se entregará confirmación de recepción dentro de 3 días hábiles y una respuesta o plan de solución dentro de 10 días hábiles, salvo que la complejidad técnica requiera más tiempo, situación que será informada al cliente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">11. Legislación aplicable</h2>
            <p>
              Estas condiciones se interpretarán conforme a la legislación vigente de la República de Chile, incluyendo la Ley N° 19.496 sobre protección de los derechos de los consumidores, la Ley General de Urbanismo y Construcciones y su Ordenanza, en lo que resulte aplicable a la relación entre las partes. Si existiera una diferencia entre estas condiciones y una norma imperativa, prevalecerá la norma legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">12. Propiedad intelectual e imágenes</h2>
            <p>
              El nombre, logotipo, textos, diseño, fotografías, renders, videos y demás contenidos de este sitio pertenecen a {BRAND.name}, se utilizan con autorización o se presentan como material referencial. No está permitido copiarlos, modificarlos, distribuirlos o utilizarlos con fines comerciales sin autorización previa y escrita.
            </p>
            <p className="mt-4">
              Las imágenes del portafolio tienen finalidad informativa y pueden mostrar trabajos terminados, procesos o referencias visuales. No garantizan que una obra futura sea idéntica en diseño, materiales, colores, dimensiones o terminaciones. Cuando una imagen no corresponda a una obra ejecutada por la empresa, deberá identificarse expresamente como referencial antes de publicarse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">13. Información del sitio y cotizaciones</h2>
            <p>
              Las descripciones de servicios, superficies, plazos típicos, fotografías y demás información publicada en este sitio tienen carácter informativo. No constituyen por sí solas una oferta irrevocable ni aseguran un resultado, precio o plazo para un proyecto particular.
            </p>
            <p className="mt-4">
              Los valores comunicados por WhatsApp, correo o cualquier otro canal serán estimativos hasta que exista una cotización escrita con vigencia, alcance, partidas incluidas y excluidas, IVA, plazos, forma de pago y demás condiciones aplicables. La cotización aceptada y el contrato formal determinarán las obligaciones específicas de las partes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">14. Disponibilidad y responsabilidad del sitio</h2>
            <p>
              Procuramos mantener este sitio disponible y actualizado, pero pueden existir interrupciones por mantenimiento, fallas de conectividad, servicios de terceros o circunstancias fuera del control razonable de la empresa. También pueden producirse errores temporales en textos, enlaces, imágenes o información comercial, los que serán corregidos al ser detectados.
            </p>
            <p className="mt-4">
              En la medida permitida por la ley, la empresa no será responsable por daños derivados exclusivamente de la indisponibilidad temporal del sitio, decisiones tomadas únicamente a partir de información preliminar publicada en él o contenidos de servicios externos enlazados. Esta limitación no afecta la responsabilidad que corresponda por una cotización o contrato aceptado, ni restringe los derechos irrenunciables del consumidor.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default TermsAndConditions;