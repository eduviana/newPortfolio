const About = () => {
  return (
    <section className="mx-auto my-20 px-6 flex flex-col gap-10 text-text-muted">
      <h1 className="text-3xl font-bold text-brand-primary">Sobre mí</h1>

      <p>
        ¡Hola! Soy <span className="font-semibold">Eduardo Viana</span>,
        Analista de Sistemas recibido de la Institución Cervantes. Desde joven
        me interesé por la informática, comenzando con armado y reparación de
        equipos, hasta que ese hobby se convirtió en una actividad autónoma con
        clientes propios.
      </p>

      <h2 className="text-2xl font-semibold">Experiencia previa</h2>
      <p>
        Durante mis estudios trabajé como auditor de software legal en
        <span className="font-semibold"> Activa Soluciones</span>, visitando
        empresas para verificar licencias y gestionando la información en
        sistemas internos. Esa experiencia me enseñó la importancia del detalle
        y la documentación.
      </p>
      <p>
        Tras recibirme, me dediqué al soporte técnico independiente, hasta que
        poco antes de la pandemia decidí retomar la programación a través de
        cursos en YouTube, Udemy y DevTalles.
      </p>

      <h2 className="text-2xl font-semibold">Camino a la programación</h2>
      <p>
        Comencé con HTML, CSS y JavaScript, probé Angular, pero finalmente
        encontré en
        <span className="font-semibold"> React</span> el enfoque que más se
        adaptaba a mí. Su modularidad, flexibilidad y ecosistema me motivaron a
        seguir creciendo, y más adelante me especialicé en{" "}
        <span className="font-semibold">Next.js</span>.
      </p>

      <h2 className="text-2xl font-semibold">Perfil actual</h2>
      <p>
        Hoy trabajo con React, Next.js, TypeScript y Tailwind CSS. Mi foco es el
        frontend, aunque también tengo experiencia en backend con Next.js:
        integraciones de pago, envío de emails y renderizado desde el servidor.
      </p>

      <h2 className="text-2xl font-semibold">Valores</h2>
      <p>
        Valoro el trabajo en equipo, el aprendizaje continuo y la confianza
        entre colegas. Conozco bien el síndrome del impostor y sé la importancia
        de apoyar a otros desarrolladores en esa etapa.
      </p>

      <h2 className="text-2xl font-semibold">Objetivo profesional</h2>
      <p>
        Busco formar parte de un equipo colaborativo, donde pueda aportar
        soluciones claras, ordenadas y sostenibles en el tiempo, además de
        actitud, compañerismo y ganas de seguir aprendiendo siempre.
      </p>
    </section>
  );
};
export default About;
