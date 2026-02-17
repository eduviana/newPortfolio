export const projects = [
  {
    id: 27,
    title: "Medical Healt",
    slug: "medical-healt",
    githubUrl: "https://github.com/eduviana/hard360",
    desc: "Sistema web de gestión de turnos - Obra Social",
    explanation:
    "El objetivo principal de este proyecto fue diseñar y desarrollar un sistema web de gestión de turnos para una obra social, pensado para uso interno en un entorno controlado, con múltiples tipos de usuarios y reglas de negocio claras./n/nMás allá de resolver el flujo funcional (generación de turnos, llamado en pantalla y gestión administrativa), el desafío estuvo en construir una aplicación con arquitectura escalable y decisiones estructurales conscientes. Busqué salir de proyectos más acotados y enfrentar un sistema que incluyera:/n/n- Autenticación externa y sincronización con base de datos propia./n- Control de acceso basado en roles (RBAC) con jerarquía./n- Reglas de negocio diferenciadas por tipo de usuario./n- Eventos en tiempo real para coordinación entre operadores y pantallas públicas./n- Registro y explotación de métricas operativas./n/nDesde el inicio definí una Modular Feature Architecture, donde cada dominio del negocio (usuarios, turnos, servicios, áreas, farmacia, etc.) vive en su propio módulo autocontenido con UI, lógica, tipos y servicios, mientras que app/ se limita exclusivamente al enrutamiento. Esto permitió escalar la base de código manteniendo claridad estructural y bajo acoplamiento./n/nEn términos de seguridad, implementé un modelo en tres capas:/n/n1) Middleware (proxy.ts) como gatekeeper: autenticación, autorización coarse-grained por prefijo de ruta y redirección inteligente según rol./n2) Private layout para garantizar sesión válida y sincronización consistente con la base de datos./n3) Protección fine-grained en endpoints y server actions, donde cada operación sensible valida explícitamente el rol requerido./n/nEl sistema contempla tres roles (ADMIN, SUPERVISOR, OPERATOR) con jerarquía explícita. Los permisos no se resuelven mediante simples comparaciones de strings, sino mediante un esquema jerárquico que evita duplicación de reglas y mantiene el principio de menor privilegio./n/nEl módulo de turnos incorpora realtime con Pusher, permitiendo que:/n- Los operadores visualicen inmediatamente nuevos turnos en su área./n- El visor público muestre en tiempo real el turno actual y el historial reciente./n- El sistema registre métricas exactas sin depender de refresh manuales./n/nAdemás, el modelado contempló decisiones anticipando evolución futura. Por ejemplo, las áreas “Farmacia General” y “Farmacia Medicamentos” se diseñaron como módulos independientes, aunque hoy compartan estructura similar, para evitar acoplamiento innecesario ante posibles divergencias en reglas de negocio (como validación de recetas médicas).",
    
    technologies: ["next", "tailwind", "shadcn", "prisma", "PostgreSQL"],
    categories: ["Nextjs"],
    feedback:
  "Este proyecto fue especialmente formativo porque muchas decisiones no surgieron en abstracto, sino enfrentando problemas reales y refactorizando cuando fue necesario./n/nUno de los aprendizajes más importantes fue comprender que la arquitectura no se diseña completamente desde el inicio, sino que se ajusta cuando el sistema comienza a escalar. Algunas estructuras iniciales funcionaban en pequeña escala, pero empezaban a generar fricción al aumentar la complejidad. Detectar esos puntos y refactorizar hacia módulos más cohesionados fue una parte clave del proceso./n/nEn términos de seguridad, consolidé una visión más madura sobre defensa en profundidad:/n/n- No confiar únicamente en el middleware./n- Proteger endpoints y server actions sensibles./n- Registrar intentos indebidos./n- Centralizar la lógica de autorización./n/nLa separación entre autenticación (Clerk) y autorización (base de datos propia + RBAC) me permitió mantener control total sobre la lógica de negocio y evitar acoplamiento con el proveedor de identidad./n/nTambién profundicé en el uso estratégico de:/n/n- Server Components vs Client Components, priorizando server siempre que fue posible./n- Acceso directo a base de datos desde server components y server actions./n- Endpoints específicos cuando el consumo provenía de client components./n- Servicios nombrados por acción (get/create/update/delete), alineados con un enfoque backend-driven frontend./n/nEl sistema de turnos me permitió trabajar con eventos en tiempo real integrados a reglas de negocio medibles, registrando con precisión:/n/n- Tiempo desde generación hasta llamado./n- Tiempo real de atención (sin penalizar demoras del afiliado)./n- Métricas por operador y por área./n/nDiseñar el flujo de “Llamado → Inicio de atención → Finalización” con separación explícita fue una decisión clave para mantener consistencia estadística y evitar sesgos en los gráficos administrativos./n/nFinalmente, aprendí a tomar decisiones pensando en la evolución del dominio, no solo en el presente del código. Separar módulos similares para evitar acoplamiento prematuro, centralizar permisos con jerarquía y estructurar seeds reproducibles para el entorno de desarrollo fueron decisiones que priorizaron mantenibilidad por sobre rapidez inmediata./n/nEn conjunto, este proyecto marcó un punto de inflexión en mi forma de pensar sistemas: menos enfoque en hacer que funcione y más en diseñar para que evolucione.",
    image: "/projects/fullstack/medicalHealt/medicalHealt-1.webp",
    images: [
      "/projects/fullstack/medicalHealt/medicalHealt-thumbnail.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-2.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-3.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-4.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-5.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-6.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-7.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-8.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-9.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-10.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-11.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-12.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-13.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-14.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-15.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-16.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-17.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-18.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-19.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-20.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-21.webp",
    ],
  },
  {
    id: 26,
    title: "Hard360",
    slug: "hard360",
    liveSiteUrl: "https://hard360.vercel.app",
    githubUrl: "https://github.com/eduviana/hard360",
    desc: "Sitio web para una tienda de informática",
    explanation:
      "Este proyecto me acompaña desde mis inicios como desarrollador frontend. Sin embargo, muchos de mis proyectos, incluyendo este, requieren un backend para funcionar, el cual también desarrollo yo mismo./n/n Esta es la tercera versión de este sitio web. La primera fue desarrollada con React y Strapi como CMS. En ese momento opté por un servicio de hosting gratuito para el backend, que eventualmente dejó de funcionar. Eso me llevó a rehacer el proyecto, no solo para solucionar ese problema, sino también porque al releer el código, noté cuánto había mejorado como desarrollador. Noté que con los conocimientos que tenía podía hacer algo más sólido y profesional./n/n En la segunda versión utilicé el framework Remix y una base de datos MySQL. El resultado fue mucho mejor en términos de estructura, buenas prácticas y calidad de código. Sin embargo, una vez más, el servicio gratuito de hosting para la base de datos dejó de estar disponible, dejando la página inactiva./n/nFue al hacer una actualización de mi portfolio que noté que esta versión ya no estaba online. Al revisar el código, vi que podía mejorar aún más la implementación, especialmente en términos de desacoplamiento y mantenimiento. Decidí entonces rehacer el proyecto completamente desde cero, esta vez utilizando Next.js./n/nPara evitar los problemas recurrentes con el hosting gratuito de la base de datos, opté por una solución distinta: usar archivos .ts como fuente de datos. Soy plenamente consciente de que esto no es una solución escalable ni adecuada para un proyecto en producción, pero en este caso específico donde el objetivo principal es demostrar mis habilidades en frontend me pareció una opción práctica y sostenible.",
    technologies: ["next", "tailwind"],
    categories: ["Nextjs"],
    feedback:
      "En este proyecto consolidé y apliqué muchas prácticas modernas del desarrollo frontend con Next.js. Pude experimentar de lleno con el SSR (Server-Side Rendering), lo cual me permitió entregar al cliente páginas ya renderizadas desde el servidor, optimizando así la carga inicial y reduciendo el trabajo en el dispositivo del usuario./n/nPara almacenar los datos de productos opté por usar archivos .ts en lugar de una base de datos externa, lo cual me evitó depender de servicios pagos o inestables. Esta decisión fue estratégica: aunque no escalable, me permitió centrarme en mostrar mis habilidades de frontend sin comprometer la operatividad de la página/n/n.Implementé un sistema de rutas dinámicas con app/[...slug]/page.tsx que resuelve si debe renderizarse una vista de categoría o una página de detalle, lo cual simplificó y desacopló enormemente el enrutado del proyecto.También diseñé un sistema de filtros dinámico que cambia según la categoría y subcategoría seleccionadas. Esto se logró gracias a una estructura tipada con TypeScript, mapeando valores y filtros válidos por cada sección, y usando un context global que centraliza lógica como ordenamiento y paginación.Por cada subcategoría desarrollé un sistema de especificaciones (specs) altamente adaptable. Cada una cuenta con su propio tipo y vista personalizada, lo que me permitió renderizar componentes especializados según el tipo de producto, todo gestionado desde un único specsComponentMap./n/nOtro punto clave fue el manejo del estado global del carrito mediante Context API, así como el formateo de precios almacenados en centavos, transformados dinámicamente a pesos argentinos para su correcta visualización./n/nEn resumen, este proyecto me permitió mejorar tanto la estructura del código como las prácticas de diseño de datos, tipado estricto, optimización del renderizado y organización de componentes reutilizables en un entorno realista.",
    image: "/projects/personales/hard360/hard360-1.webp",
    images: [
      "/projects/personales/hard360/hard360-1.webp",
      "/projects/personales/hard360/hard360-2.webp",
      "/projects/personales/hard360/hard360-3.webp",
      "/projects/personales/hard360/hard360-4.webp",
      "/projects/personales/hard360/hard360-5.webp",
      "/projects/personales/hard360/hard360-6.webp",
      "/projects/personales/hard360/hard360-7.webp",
    ],
  },
  {
    id: 25,
    title: "Vivarium",
    slug: "vivarium",
    liveSiteUrl: "",
    githubUrl: "",
    desc: "Sitio web para un vivero con panel administrativo y Mercadopago integrado.",
    explanation:
      "Este proyecto consiste en el desarrollo de un sitio web para un vivero, solicitado por un cliente que necesitaba contar con una plataforma propia para exhibir y gestionar sus productos. El objetivo principal era permitirle publicar, editar y eliminar productos de forma sencilla a través de un panel administrativo, al cual se accede mediante una página de login con validación de usuario./n/n Uno de los requerimientos específicos fue incluir en la página principal una sección destacada bajo el título “Productos destacados”. Esta sección permite al cliente seleccionar, desde el listado de productos ya cargados en el sistema, aquellos que desea resaltar en la home, justo debajo del hero. De esta manera, puede promocionar fácilmente los artículos que más le interesa vender en cada momento./n/n Inicialmente, el sitio contaba con la integración de MercadoPago para concretar ventas directamente desde la web. Sin embargo, debido a que el modelo de negocio actual del cliente funciona bajo demanda, surgió el riesgo de que se efectúen compras de productos no disponibles. Mientras trabajamos en una solución que permita automatizar y asegurar el stock disponible, la funcionalidad de pago fue temporalmente deshabilitada. En su lugar, se implementó un botón de “Consultar” que redirige al WhatsApp del vivero, facilitando el contacto directo entre cliente y comprador./n/n El sitio está desarrollado con Next.js, utilizando CSS nativo para los estilos, NextAuth para la autenticación de usuarios y MySQL como base de datos. Las imágenes de los productos se alojan en Cloudinary, lo que permite una gestión eficiente y optimizada del contenido multimedia.",
    technologies: ["next", "tailwind", "mongo"],
    categories: ["Freelance", "Nextjs", "Fullstack"],
    feedback:
      "Al desarrollar este proyecto aprendí e incorporé varias funcionalidades que enriquecieron mi experiencia como desarrollador. Uno de los principales desafíos fue la creación de un menú de navegación dinámico, cuyas categorías se construyen a partir de los datos almacenados en la base de datos. Esto permite que, al agregar una nueva categoría, esta se muestre automáticamente en el menú tras recargar la página./n/n El menú cuenta con tres niveles jerárquicos, lo que requirió diseñar una función que identificara correctamente el nivel de cada categoría. Las categorías de primer nivel no tienen padres pero sí pueden tener hijos; las de segundo nivel tienen tanto padres como hijos; y las de tercer nivel tienen dos niveles de padres pero no poseen hijos. Esta lógica me permitió estructurar el menú de manera eficiente y escalable./n/n También aprendí a integrar MercadoPago, creando la preference que se envía al sistema con la información del pedido, y a implementar un webhook que permite recibir respuestas del servicio para mostrar mensajes de éxito o error según el resultado de la transacción./n/n Por último, incorporé el botón de carga de imágenes de Cloudinary, lo que facilitó al cliente subir y gestionar imágenes directamente desde la interfaz del panel administrativo, mejorando tanto la experiencia de usuario como el flujo de gestión de contenido.",
    image: "/projects/fullstack/vivarium/vivarium-1.webp",
    images: [
      "/projects/fullstack/vivarium/vivarium-1.webp",
      "/projects/fullstack/vivarium/vivarium-2.webp",
      "/projects/fullstack/vivarium/vivarium-3.webp",
      "/projects/fullstack/vivarium/vivarium-4.webp",
      "/projects/fullstack/vivarium/vivarium-5.webp",
      "/projects/fullstack/vivarium/vivarium-6.webp",
      "/projects/fullstack/vivarium/vivarium-7.webp",
      "/projects/fullstack/vivarium/vivarium-8.webp",
    ],
  },
  {
    id: 24,
    title: "Linktree Clone",
    slug: "linktree-clone",
    liveSiteUrl: "https://linktree-clone-gray.vercel.app/",
    githubUrl: "https://github.com/eduviana/linktree-clone",
    desc: "Clon moderno y personalizable de Linktree para centralizar enlaces sociales y profesionales con diseño minimalista.",
    explanation:
      "Plataforma full-stack que permite a los usuarios crear perfiles personalizados con enlaces a redes sociales, portafolios y proyectos destacados. Desarrollada con Next.js para aprovechar renderizado estático y optimización SEO, integra Clerk para autenticación segura con multi-factor y gestión de sesiones, y shadcn/ui para construir componentes accesibles y estilizados con sistema de temas./n/n El backend utiliza Prisma como ORM para interactuar con una base de datos PostgreSQL, permitiendo escalabilidad y consultas eficientes. Los perfiles se gestionan dinámicamente a través de un CMS personalizado (no CMS externo), donde los usuarios pueden actualizar su biografía, enlaces y preferencias de tema (light/dark mode) sin modificar el código. El diseño prioriza performance: animaciones CSS nativas para transiciones suaves, carga progresiva de imágenes optimizadas con <Image> de Next.js, y un 100% en accesibilidad WCAG gracias a los componentes base de shadcn.",
    technologies: ["next", "tailwind", "clerk", "prisma"],
    categories: ["Nextjs", "Prueba Técnica"],
    feedback:
      "Realizando este curso, lo más valioso que me llevo es la metodología utilizada para organizar la estructura de archivos y carpetas./n/n Esta metodología se basa en crear carpetas con la sintaxis (nombre de carpeta) dentro del directorio app. Al hacer esto, dichas carpetas no son reconocidas como páginas, sino como una forma de agruparlas./n/n Dentro de cada una de estas carpetas, se crea una carpeta components, donde se organizan los componentes exclusivos de esa sección o funcionalidad. Además, cada componente tiene su propia carpeta, que contiene:/n/n - Un archivo .tsx para el componente./n - Un archivo types.ts para el tipado de datos./n - Un archivo form.ts si se trata de un formulario./n - Un archivo data.ts para información estática si es necesario./n/n También se crea un archivo index.ts en la carpeta components para exportar todos los componentes que contiene. Dentro de cada componente, se sigue la misma lógica, creando un index.ts que lo exporta./n/n Gracias a esta estructura, las rutas de importación son más cortas y fáciles de leer, mejorando la organización y mantenibilidad del código.",
    image: "/projects/fullstack/linktreeclone/linktree-2.webp",
    images: [
      "/projects/fullstack/linktreeclone/linktree-1.webp",
      "/projects/fullstack/linktreeclone/linktree-2.webp",
      "/projects/fullstack/linktreeclone/linktree-3.webp",
      "/projects/fullstack/linktreeclone/linktree-4.webp",
    ],
  },
  {
    id: 23,
    title: "Apex Sporote",
    slug: "apex-soporte",
    liveSiteUrl: "",
    githubUrl: "",
    desc: "Sitio web que permite gestionar reclamos de los usuarios y visualizar la información en tablas y gráficos.",
    explanation:
      "Desarrollar una plataforma que permita a los operarios de un call center registrar y consultar incidencias a través de un formulario interactivo y una tabla que muestra los reportes almacenados en MongoDB./n/n Por otro lado, incorpora un segundo formulario y una tabla especializada para la gestión de seguimientos y adelantos, diseñados específicamente para los supervisores. Además, la aplicación ofrece gráficos dinámicos que facilitan la visualización de estadísticas relevantes, y su arquitectura optimizada garantiza un rendimiento excepcional mediante un renderizado eficiente y una experiencia de usuario fluida",
    technologies: ["next", "tailwind", "mongo"],
    categories: ["Freelance", "Nextjs", "Fullstack"],
    feedback:
      "Trabajar de manera autónoma en este proyecto para la empresa APEX me permitió mejorar significativamente mi comunicación con el cliente, en este caso, los gerentes de la empresa. A través de reuniones y un constante ida y vuelta, pude comprender sus necesidades, analizar el sistema que utilizaban y proponer soluciones acordes, seleccionando las herramientas de software y arquitecturas más adecuadas para el caso./n/n  Además, esta experiencia me permitió notar un detalle importante sobre el hosting en planes gratuitos de Vercel. Inicialmente, ejecutaba las solicitudes de datos (fetch) del lado del servidor, pero al notar que esto generaba latencias significativas debido al estado standby del servidor en el plan gratuito, decidí mover los fetchs al lado del cliente. Este ajuste mejoró notablemente el rendimiento del sitio, evitando demoras en la respuesta del servidor y optimizando métricas clave como el Largest Contentful Paint (LCP) en Lighthouse de Google./n/n Fue un proceso muy enriquecedor tanto a nivel técnico como en la interacción con el cliente, lo que reforzó mis habilidades en la toma de decisiones y adaptación a los requerimientos del proyecto.",
    image: "/projects/fullstack/apex/apex-1.webp",
    images: [
      "/projects/fullstack/apex/apex-1.webp",
      "/projects/fullstack/apex/apex-2.webp",
      "/projects/fullstack/apex/apex-3.webp",
      "/projects/fullstack/apex/apex-4.webp",
      "/projects/fullstack/apex/apex-5.webp",
    ],
  },
  {
    id: 22,
    title: "Kass Tienda",
    slug: "kass-tienda",
    liveSiteUrl: "https://kass-tienda.vercel.app/",
    githubUrl: "https://github.com/eduviana/kassTienda",
    desc: "Sitio web para una tienda de accesorios y productos tecnológicos con pasarela de pagos.",
    explanation:
      "El dueño de un negocio de articulos de tecnología me plantió la necesidad de crear un sitio web en el cual él mismo pueda agregar, modificar y eliminar la información de los productos de las distintas secciones que posee la página./n/n Además me comentó que se siente cómodo trabajando con hojas de cálculo al estilo Excel, por lo que luego de investigar posibles soluciones que satisfagan estos requerimientos, le sugerí realizar la base de datos en una hoja de cálculo de Google utilizando la Api de Googlesheets./n/n El documento cuanta con varias páginas, en donde cada página es una categoría de productos. Mediante esta división logramos que sea más fácil de ubicar un producto y realizar las modificaciones necesarias. El sitio utiliza el servicio de Stripe para lo que respecta a los pagos y también el paquete use-shopping-cart proveído por el mismo servicio para administrar el carrito de compras y la seguridad del mismo.",
    technologies: ["next", "tailwind"],
    categories: ["Freelance", "Nextjs", "Fullstack"],
    feedback:
      "Este proyecto representa mi primera incursión en un proyecto real, donde asumí la responsabilidad de comprender los requisitos del cliente, explorar diversas soluciones y establecer un diálogo constante tanto con el propietario como con los futuros usuarios./n/n Este proceso me llevó a investigar y determinar las tecnologías más adecuadas para abordar de manera integral todos los requisitos necesarios para garantizar el funcionamiento del sistema según las especificaciones del cliente./n/n En el desarrollo de esta iniciativa, adquirí experiencia en la implementación de la API de Google Sheets, integrándolo eficazmente en un entorno de Next.js. Además, opté por utilizar el paquete de npm denominado use-shopping-cart proporcionado por Stripe, el cual ofrece funcionalidades robustas para la gestión del carrito de compras./n/n Cabe destacar que existen dos enfoques para la implementación de este paquete: del lado del cliente y del lado del servidor. Elegí el enfoque del lado del servidor, ya que es la opción más segura y recomendada. Además, al estar basado en el framework de Next.js consideré apropiado complementar los server components con esta funcionalidad serverless, mejorando así la eficiencia y seguridad del sistema.",
    image: "/projects/fullstack/kassTienda/kass_1.png",
    images: [
      "/projects/fullstack/kassTienda/kass_1.png",
      "/projects/fullstack/kassTienda/kass_2.png",
      "/projects/fullstack/kassTienda/kass_3.png",
      "/projects/fullstack/kassTienda/kass_4.png",
      "/projects/fullstack/kassTienda/kass_5.png",
    ],
  },

  {
    id: 21,
    title: "Movix",
    slug: "movix",
    liveSiteUrl: "https://movix-nu-six.vercel.app/",
    githubUrl: "https://github.com/eduviana/movix",
    desc: "Página web de películas y series que utiliza la API gratuita 'The Movie Database'. ",
    explanation:
      "El objetivo de este proyecto es crear un sitio en el cual se pueda consumir contenido tanto de películas como series consumiendo una API. La idea central es utilizar algun manejador de estados y lograr un diseño agradable y moderno. El sitio debe ser responsive y debe estar componetizado para reutilizar el código.",
    technologies: ["react", "sass", "redux"],
    categories: ["React"],
    feedback:
      "Realizando este proyecto aprendí que por más que estemos utilizando un manejador de estados no es necesario ni recomendado que todos los estados residan en él, sino sólo los que necesitamos que estén disponibles en toda la aplicación. El resto de estados pueden existir en cada componente, ya que sólo en ese lugar es requerido./n/nDe esta manera mantenemos en el estado global lo mínimo necesario y no abusamos de dicha tecnología. También me quedo con la experiencia de haber utilizado varios paquetes de npm tales como:/n/n - dayjs para formatear fechas/n/n - react-circular-progressbar para representar la calificación de una película o serie/n/n - react-lazy-load-image para realizar la carga perezosa de las imágenes/n/n - react-player para la reproducción de video/n/n - react-select para crear el filtro por género más eficientemente.",
    image: "/projects/fullstack/movix/movix-1.webp",
    images: [
      "/projects/fullstack/movix/movix-1.webp",
      "/projects/fullstack/movix/movix-3.webp",
      "/projects/fullstack/movix/movix-4.webp",
    ],
  },
  {
    id: 20,
    title: "Gamehub",
    slug: "gamehub",
    liveSiteUrl: "",
    githubUrl: "",
    desc: "Plataforma que permite visualizar y realizar transmisiones en vivo.",
    explanation:
      "Este proyecto fue desarrollado siguiendo un curso proporcionado por el instructor CodeWithAntonio en YouTube, con el propósito de crear una plataforma similar a Twitch que permita a los usuarios actuar como espectadores y/o streamers./n/n Para gestionar la autenticación de usuarios a través de Google, implementamos el servicio de Clerk, aprovechando un webhook para registrar la información del usuario en nuestra base de datos. Además, empleamos el paquete Livekit para construir todos los elementos relacionados con los streams, salas de transmisión, y el chat./n/n En el contexto de un streamer, una vez que se ha creado una cuenta o iniciado sesión, se puede establecer una conexión que proporcionará la información necesaria para integrarla con programas compatibles, como OBS Studio. El streamer cuenta con la capacidad de personalizar tanto la información del stream como su perfil de usuario. Además, se le brinda la opción de configurar el chat de su propio stream, permitiéndole activar o desactivar funciones como desactivar el chat, habilitar el modo lento y el modo solo suscriptores. Este nivel de flexibilidad y control permite a los streamers adaptar la experiencia según sus preferencias y necesidades específicas./n/n Este proyecto, a diferencia del resto de proyectos de mi portafolio, no posee un link para visitar el sitio online debido a que utiliza servicios de pago para funcionar, por lo que solo funciona en desarrollo. Por lo tanto decidí subir un video demostrativo.",
    technologies: ["next", "shadcn"],
    categories: ["Nextjs"],
    feedback:
      "Abordé este proyecto de gran complejidad, que superaba mis habilidades actuales, con la determinación de desafiarme y aprender a manejar un nivel de complejidad superior al que había enfrentado anteriormente. Se trata de un proyecto extenso y complicado, que demanda dedicación, constancia y atención meticulosa para evitar errores. Aunque conté con la guía de un instructor, la posibilidad de cometer errores es inherente, especialmente dado que el código no es de mi autoría y la resolución de problemas puede resultar desafiante./n/n A pesar de los desafíos, la experiencia de desarrollo fue sumamente positiva por varios motivos. En primer lugar, adquirí conocimientos significativos y adopté buenas prácticas que aplicaré en futuros proyectos. En segundo lugar, este proyecto contribuyó en gran medida a fortalecer mi mentalidad. Aprendí a abordar proyectos aparentemente difíciles y complejos dividiéndolos en partes más pequeñas, resolviendo cada problema de manera incremental y evitando preocuparme en exceso por lo que está por venir o lo que falta. La clave fue centrarme en el módulo o las actividades que se estaban desarrollando en ese momento, sin sobreanalizar el futuro. Este enfoque resultó ser fundamental para mantener la claridad y el control a lo largo del proceso de desarrollo.",
    image: "/projects/fullstack/gamehub/gamehub-1.webp",
    images: [],
    video: "https://www.youtube.com/embed/U6XBxhTLSuU",
  },
  {
    id: 19,
    title: "Flair Store",
    slug: "flair-store",
    liveSiteUrl: "https://sanity-ecommerce-orcin.vercel.app/",
    githubUrl: "https://github.com/eduviana/Sanity-Ecommerce",
    desc: "Tienda online de venta de indumentaria realizado con Sanity y Next 13.",
    explanation:
      "El objetivo de este proyecto es crear un sitio web de venta de indumentaria con Sanity y Next 13. Debe de tener dos tipos de filtros, el primero con las propiedades de los productos tales como categorías, tamaño, color y el segundo para poder ordenarlos por precio de mayor a menor, de menor a mayor y también por más nuevos. Debe de tener dark mode y carrito de compras y un método de pago funcional. Es importante que esté desarrollado con Typescript y debe ser responsive.",
    technologies: ["next", "tailwind", "sanity"],
    categories: ["Nextjs"],
    feedback:
      "En este proyecto aprendí muchas cosas. En cuanto al backend se utilizó Sanity, un potente administrador de contenido que nos permite crear los modelos y productos de una manera sencilla y ágil. Lo que me gustó de trabajar con esta tecnología es que, comparándolo con Strapi, la interfaz para agregar productos es mucho más limpia y simple./n/nCon respecto al frontend se utilizó la librería radix-ui y sanity-ui, de las cuales utilizamos ciertos componentes específicos de cada una. El resto de los estilos están construídos con Tailwind, en donde aprendí a crear un tema personalizado./n/nOtra librería que se implementa es use-shopping-cart, proveída por Stripe para manejar los productos del carrito de compras. La funcionalidad que más me gustó de este proyecto es la forma en que se manejan los filtros, dado que éstos son componentes hijos que, al seleccionar un filtro, modifican algún valor internamente y estos cambios deben actualizar la información del componente padre y este flujo de hijo a padre no es la manera correcta o natural de trabajar en React. Para no tener que complicar el código para solucionar este problema ni tampoco relegar todo el problema con más states y effects todo se realiza a través de parámetros en la url. Un componente hijo setea en la url la query y el componente padre está pendiente de estos cambios y de esta manera se dispara la re-renderización del/los elementos del DOM correspondientes.",

    image: "/projects/fullstack/flair/flair-1.webp",
    images: [
      "/projects/fullstack/flair/flair-1.webp",
      "/projects/fullstack/flair/flair-2.webp",
      "/projects/fullstack/flair/flair-3.webp",
      "/projects/fullstack/flair/flair-4.webp",
      "/projects/fullstack/flair/flair-5.webp",
    ],
  },
  {
    id: 18,
    title: "Prueba Técnica Libros",
    slug: "prueba-tecnica-libros",
    liveSiteUrl: "https://challenge-books-midudev.vercel.app/",
    githubUrl: "https://github.com/eduviana/Challenge-Books-Midudev",
    desc: "Challenge extraído del creador de contenido Midudev que consiste en una página web de una editorial de libros.",
    explanation:
      "Somos un sello editorial de libros multinacional. Queremos ofrecer a nuestro público una forma de ver nuestro catálogo y poder guardar los libros que les interesan en una lista de lectura. Para ello, queremos desarrollar una aplicación web que permita a los usuarios ver los libros disponibles y crear una lista de lectura./n/nTen en cuenta que:/n/n - no sabemos si el framework que utilicemos ahora será el definitivo, pero querremos reutilizar el máximo de código posible/n/n - la aplicación debe ser fácil de usar y agradable a la vista/n/n - tenemos un 80% de usuarios que vienen de navegadores de escritorio/n/n - usa el archivo books.json para obtener los datos de los libros. Puedes añadir más libros si lo deseas, siempre y cuando siga la misma estructura.",
    technologies: ["react", "sass"],
    categories: ["Prueba Técnica"],
    feedback:
      "Este challenge que en una primera instancia parece muy simple y de escueto diseño me enseñó muchisimo. En primer lugar contribuyó a mejorar la forma en que estructuro las carpetas de un proyecto. Además me exijió a debuguear el código para poder encontrar los problemas como re-renders infinitos, saber que valores tienen los states en cada momento al cambiar los filtros de búsqueda y a almacenar los resultados en el localstorage./n/nLo más importante que me llevo de aprendizaje de este ejercicio es la importancia de que cualquier variable que tengo en un componente que no forma parte de un state y que tiene relación con un useEffect genera renderizados infinitos, ya que no es manejada por el motor de react.  ",
    image: "/projects/personales/libros/libros-1.webp",
    images: [
      "/projects/personales/libros/libros-1.webp",
      "/projects/personales/libros/libros-2.webp",
      "/projects/personales/libros/libros-3.webp",
    ],
  },
  {
    id: 17,
    title: "Admin UI Recharts",
    slug: "admin-ui-recharts",
    liveSiteUrl: "https://react-dashboard-recharts-nff7.vercel.app/",
    githubUrl: "https://github.com/eduviana/React-Dashboard-Recharts",
    desc: "Página web que permite visualizar información tanto en formato de gráficos como de tablas.",
    explanation:
      "Construir un panel de administración con Vite utilizando react-router-dom para las rutas, Material Ui y Sass para la interfaz gráfica y la libreria Recharts para los gráficos. El objetivo de este proyecto es familiarizarce con estas librerias y principalmente aprender a utilizar el componente data-grid de Material.",
    technologies: ["react", "material", "sass"],
    categories: ["React"],
    feedback:
      "Este proyecto me permitió adentrarme en el uso de la última versión de react-router-dom, que al momento de escribir estas líneas es la v6. Además, exploré una nueva metodología para abordar la responsividad en Sass. Esta técnica implica crear un archivo Sass separado que contiene los media querys personalizados, los cuales se pueden importar en cada clase para aplicar propiedades específicas a diferentes tamaños de pantalla./n/n Este enfoque difiere de mi práctica anterior, que consistía en definir los media querys al final del archivo de estilos para cada breakpoint. Con esta nueva metodología, podemos tener un media query dedicado a cada clase, lo que lo hace más preciso. A pesar de que esta forma de trabajo puede aumentar la longitud del código debido a la repetición del mixin para aplicar los media querys, su ventaja radica en la claridad y facilidad de lectura, ya que no es necesario desplazarse hasta el final del documento./n/n Se utiliza el componente data-grid para representar las tablas. Para asegurar la reutilización de este componente tanto para usuarios como para productos, lo diseñé de manera dinámica. En lugar de almacenar los datos en una base de datos, opté por mantener la información necesaria en un archivo local. Esta decisión se tomó para simplificar el hosteo de la página web. Si hubiera utilizado una base de datos  la hubiera alojado en un servicio gratuito, habría enfrentado restricciones de acceso en poco tiempo debido a las limitaciones de la versión gratuita de dicho servicio. La esencia de este proyecto es aprender y perfeccionar el desarrollo frontend, sin lidiar con suscripciones y el riesgo de que la página deje de funcionar.",
    image: "/projects/fullstack/adminRecharts/adminUI-1.webp",
    images: [
      "/projects/fullstack/adminRecharts/adminUI-1.webp",
      "/projects/fullstack/adminRecharts/adminUI-2.webp",
      "/projects/fullstack/adminRecharts/adminUI-3.webp",
      "/projects/fullstack/adminRecharts/adminUI-4.webp",
    ],
  },
  // {
  //   id: 16,
  //   title: "Car Showcase",
  //   liveSiteUrl: "https://car-showcase-seven-nu.vercel.app/",
  //   githubUrl: "https://github.com/eduviana/Car-Showcase",
  //   desc: "Página web de venta e información de vehículos. Se utilizan dos endpoints distintos para mostrar la información.  ",
  //   explanation:
  //     "Esta página es el resultado de un curso/tutorial extraído de YouTube del canal de Javascript Mastery, el cual considero que tiene contenido de buena calidad y valiosas explicaciones a diversos temas que no son fáciles de entender e interiorizar./n/n El objetivo de esta página web es brindar una interfaz vistoza e interactiva que permita la búsqueda de automóviles. Para ello utilizamos dos endpoints, el primero proveniente de RapidApi, que nos provee de toda la información de los vehículos y el segundo endpoint lo utilizamos para mostrar información del vehículo seleccionado a través de un modal, en el cual se puede visualizar tres imágenes del mismo desde distintos ángulos de visión.",
  //   technologies: ["next", "ts", "tailwind"],
  //   feedback:
  //     "Realizar este tutorial me enseñó muchas cosas, desde cómo trabajar con Typescript, definiendo los types para cada pieza de código, como estructurar el projecto a nivel de carpetas y la utilización de la carpeta app de next 13 que funciona como router. Hay un montón de otras funcionalidades que me fueron de utilidad, como los filtros de búsqueda, animaciones y responsive design. ",
  //   image: "/projects/fullstack/carShowcase/carShowcase_1.png",
  //   images: [
  //     "/projects/fullstack/carShowcase/carShowcase_1.png",
  //     "/projects/fullstack/carShowcase/carShowcase_2.png",
  //     "/projects/fullstack/carShowcase/carShowcase_3.png",
  //   ],
  // },
  {
    id: 15,
    title: "Evo Gym",
    slug: "evo-gym",
    liveSiteUrl: "https://gym-typescript-one.vercel.app/",
    githubUrl: "https://github.com/eduviana/gym-typescript",
    desc: "Página web con temática fitness. Simple, elegante y efectiva. Buen proyecto para dar mis primeros pasos con Typescript.",
    explanation:
      "Este sitio web fué desarrollado siguiendo un curso de YouTube cuyo autor es EdRoh. Es un ejercicio perfecto para asentar las bases tanto de diseño como de Typescript, definiendo los tipos e interfaces utilizadas por los componentes. ",
    technologies: ["react", "ts", "tailwind"],
    categories: ["React"],
    feedback:
      "Realizando esta página dí mis primeros pasos con typescript en un proyecto real. El uso del mismo en este proyecto no es muy sofisticado ni complejo, pero eso es lo que yo me encontraba buscando, un ejercicio que implementara typescript con sus conceptos básicos sin complicaciones extras, para ir incorporándolo lentamente a todos mis proyectos. ",
    image: "/projects/fullstack/gym/gym-1.webp",
    images: [
      "/projects/fullstack/gym/gym-1.webp",
      "/projects/fullstack/gym/gym-2.webp",
      "/projects/fullstack/gym/gym-3.webp",
    ],
  },

  {
    id: 14,
    title: "Liverr",
    slug: "liverr",
    liveSiteUrl: "https://liverr.vercel.app/",
    githubUrl: "https://github.com/eduviana/liverr",
    desc: "Página web inspirada en Fiverr. Este sitio tiene un nivel de complejidad mayor tanto a nivel de diseño como funcionalidad.",
    explanation:
      "Esta página la desarrollé siguiendo el curso de Javascript Mastery en YouTube. La idea de este proyecto es realizar una página con los mismos objetivos que la página oficial Fiverr, cuya finalidad es ofrecer un mercado en línea para servicios independientes. Es una plataforma para que los trabajadores autónomos ofrezcan servicios a clientes de todo el mundo. ",
    technologies: ["react", "sass"],
    categories: ["React"],
    feedback:
      "Aplicación muy completa y compleja, tanto a nivel de diseño como funcional. Hay muchos elementos en pantalla que hay que reordenar para que se ajuste a distintos tamaños de pantalla, posee muchas categorías e items por cada una de ellas, tiene filtros de búsqueda y página de detalles por cada artículo. La envergadura del proyecto me obligó a reorganizar las carpetas y archivos dado que estos empezaron a crecer y la arquitectura que se había implementado en un principio quedó desfasada.",
    image: "/projects/fullstack/liverr/liverr-1.webp",
    images: [
      "/projects/fullstack/liverr/liverr-1.webp",
      "/projects/fullstack/liverr/liverr-2.webp",
      "/projects/fullstack/liverr/liverr-3.webp",
      "/projects/fullstack/liverr/liverr-4.webp",
    ],
  },
  // {
  //   id: 13,
  //   title: "Hardware 360",
  //   slug: "hardware-360",
  //   liveSiteUrl: "https://hardware360-remix.vercel.app/",
  //   githubUrl: "https://github.com/eduviana/hardware360-remix",
  //   desc: "Página web de venta de hardware e insumos informáticos.",
  //   explanation:
  //     "Esta página la desarrollé con Remix.js en el frontend y Strapi en el backend. La idea fué aprender ambas tecnologías y realizar un proyecto fullstack. ",
  //   technologies: ["remix", "bootstrap", "strapi"],
  //   feedback:
  //     "Realizando este proyecto aprendí lo básico de Remix y bootstrap. También me sirvió para aprender Strapi, crear los distintos endpoints, asignar permisos, y a crear los modelos de cada tipo de producto./n/nLa información cargada de cada producto es verídica y las imágenes están alojadas en Cloudinary utilizando un plugin de Strapi. Cuando se clickea un producto, en vez de establecer el id en la url como normalmente hacía, utilicé un slug de Strapi que sustituye dicho id por el nombre del producto que automaticamente extrae del campo título. Esto hace que la url sea más descriptiva y ayude a los motores de Google a indexar mejor la página.",
  //   image: "/projects/personales/hardware360/hardware360_1.png",
  //   images: [
  //     "/projects/personales/hardware360/hardware360_1.png",
  //     "/projects/personales/hardware360/hardware360_2.png",
  //     "/projects/personales/hardware360/hardware360_3.png",
  //     "/projects/personales/hardware360/hardware360_4.png",
  //   ],
  // },
  {
    id: 12,
    title: "Fashion Ecommerce",
    slug: "fashion-ecommerce",
    liveSiteUrl: "https://www.google.com",
    githubUrl: "https://github.com/eduviana/Fashion-Online-Client",
    desc: "Página web de venta de ropa con método de pagos.",
    explanation:
      "Esta página la desarrollé siguiendo un curso de EdRoh en YouTube. El objetivo de este proyecto es proporcionar una página web para la venta de artículos de indumentaria, con un estilo elegante y simple. El frontend está desarrollado con React, Material Ui, Formik y Yup. El backend está construído con strapi y tiene implementado stripe para lo que respecta a pagos.",
    technologies: ["react", "material", "strapi", "stripe"],
    categories: ["React", "Fullstack"],
    feedback:
      "Aprendí a dar mis primeros pasos con Material Ui. Puedo destacar que utilizando dicha librería, los estilos de la página consiguen una apariencia muy lograda y armónica, dando la sensación de que todo concuerda y encaja, tanto las tipografías como la combinación de colores./n/n Con respecto al backend aprendí a utilizar strapi y me encantó. Le veo mucho potencial para futuros proyectos. Creo que te dá un control y una visión de lo que uno podría hacer a futuro debido a que posee una interfaz gráfica para manejar el contenido de la base de datos, ademas de que permite agregar plugins para aumentar sus funcionalidades. Por ejemplo, existe un paquete disponible en npm que permite que las imágenes que uno sube a strapi directamente se suban a cloudinary.",
    image: "/projects/fullstack/fashionEcommerce/fashion_1.png",
    images: [
      "/projects/fullstack/fashionEcommerce/fashion_1.png",
      "/projects/fullstack/fashionEcommerce/fashion_2.png",
      "/projects/fullstack/fashionEcommerce/fashion_3.png",
      "/projects/fullstack/fashionEcommerce/fashion_4.png",
      "/projects/fullstack/fashionEcommerce/fashion_5.png",
    ],
  },
  {
    id: 11,
    title: "Dashboard",
    slug: "dashboard",
    liveSiteUrl: "https://react-dashboard-lyart.vercel.app/",
    githubUrl: "https://github.com/eduviana/react-dashboard",
    desc: "Panel de administración que incluye diversos tipos de  gráficos, listados y buscadores.",
    explanation:
      "Esta proyecto fué desarrollado siguiendo un curso de EdRoh en YouTube. El objetivo es construir un panel de administración visualmente atractivo y formal en el cual se pueda visualizar distintos tipos de información. En la página principal se muestra un resumen de todas las secciones que hay en el menú, como lo son control de gastos, listado de personas, graficos de barra, circular, de línea y geográfico.",
    technologies: ["react", "material", "strapi", "stripe"],
    categories: ["React"],
    feedback:
      "Proyecto muy completo que hace uso de varias librerías externas tales como:/n/n - Material Ui para los estilos/n/n - Fullcalendar para representar el calendario/n/n - Nivo para los distintos tipos de gráficos/n/n - Formik y Yup para la validación de formularios/n/n - React Router Dom para la navegación entre páginas/n/n Todo esto me ayudó a leer documentacion de cada uno de estos paquetes porque muchas cosas no me funcionaban como en el curso, había diferencias entre las versiones utilizadas en el curso y las que actualmente se instalan.",
    image: "/projects/fullstack/dashboard/dashboard-1.webp",
    images: [
      "/projects/fullstack/dashboard/dashboard-1.webp",
      "/projects/fullstack/dashboard/dashboard-2.webp",
      "/projects/fullstack/dashboard/dashboard-3.webp",
      "/projects/fullstack/dashboard/dashboard-4.webp",
      "/projects/fullstack/dashboard/dashboard-5.webp",
      "/projects/fullstack/dashboard/dashboard-6.webp",
      "/projects/fullstack/dashboard/dashboard-7.webp",
      "/projects/fullstack/dashboard/dashboard-8.webp",
      "/projects/fullstack/dashboard/dashboard-9.webp",
      "/projects/fullstack/dashboard/dashboard-10.webp",
    ],
  },
  {
    id: 10,
    title: "Easybank Landing Page",
    slug: "easybank-landing-page",
    liveSiteUrl: "https://easybank-landing-page-phi-lyart.vercel.app/",
    githubUrl: "https://github.com/eduviana/Easybank-Landing-Page",
    desc: "Desafío que consta en desarrollar una SPA que se asemeje lo más posible al diseño proveído.",
    explanation:
      "El desafió es construir esta página intentado que se parezca lo más posible al diseño proveído. Se puede utilizar cualquier herramienta para lograr el objetivo. La única funcionalidad que requiere Javascript es el menú de navegación para dispositivos móviles, sin embargo también es posible realizar dicha funcionalidad sólo con Css.",
    technologies: ["html", "css"],
    categories: ["Frontend Mentor"],
    feedback:
      "Este ejercicio me sirvió para aprender a hacer el menú para dispositivos móviles sin necesidad de utilizar Javascript y hacerlo sólo con Css. Considero que esto es una buena práctica ya que el código del componente queda más simple, creo que leer código de Css es mas fácil de interpretar que su contraparte en Javascript, siempre pensando en que mi código tiene que ser lo más legible posible tanto para otras personas como par mi yo del futuro 😀.",
    image: "/projects/frontendMentor/easybank/easybank-1.webp",
    images: [
      "/projects/frontendMentor/easybank/easybank-1.webp",
      "/projects/frontendMentor/easybank/easybank-2.webp",
    ],
  },
  {
    id: 9,
    title: "Ecommerce Product Page",
    slug: "ecommerce-product-page",
    liveSiteUrl: "https://ecommerce-product-page-rho-seven.vercel.app/",
    githubUrl: "https://github.com/eduviana/Ecommerce-Product-Page",
    desc: "Desafío que puso a prueba mis habilidades de Javascript para crear una galería de productos, un modal y una funcionalidad de carrito de compras.",
    explanation:
      "El desafío es construir esta página de comercio electrónico y lograr que se parezca lo más posible al diseño proveído. Se puede utilizar cualquier herramienta que te guste para ayudarte a completar el desafío.",
    technologies: ["react", "sass"],
    categories: ["Frontend Mentor"],
    feedback:
      "Este ejercicio me sirvió para reforzar conocimientos sobre el posicionamiento relativo y absoluto para poder ubicar correctamente el menú desplegable al hacer click en el carrito de compras, en los thumbnails de la galería, como así tambien al abrir el modal al clickear una imágen./n/n Utilizé un context para almacenar los productos agregados al carrito, de esta manera se vé reflejado en tiempo real el badget de la cantidad de productos que posee el carrito en un momento determinado. Opté por esta técnica porque me parece que en este ejercicio es lo más adecuado, ya que quería evitar el prop drilling. Es cierto que dada la envergadura reducida de este ejercicio podría haber utilizado props, pero pensando en un código escalable preferí utilizar content. ",
    image: "/projects/frontendMentor/ecommerce/ecommerce-1.webp",
    images: [
      "/projects/frontendMentor/ecommerce/ecommerce-1.webp",
      "/projects/frontendMentor/ecommerce/ecommerce-2.webp",
      "/projects/frontendMentor/ecommerce/ecommerce-3.webp",
    ],
  },
  {
    id: 8,
    title: "News Home Page",
    slug: "news-home-page",
    liveSiteUrl: "https://news-homepage-main-g8l3jn4bt-eduviana.vercel.app/",
    githubUrl: "https://github.com/eduviana/news-homepage-main",
    desc: "Este desafío es una excelente oportunidad para practicar mis habilidades de CSS Grid. ¡Hay muchas decisiones difíciles que tomar y muchas oportunidades de aprendizaje!",
    explanation:
      "El desafió es construir esta página intentado que se parezca lo más posible al diseño proveído. Se puede utilizar cualquier herramienta para lograr el objetivo. La única funcionalidad que requiere Javascript es el menú de navegación para dispositivos móviles, sin embargo también es posible realizar dicha funcionalidad sólo con CSS",
    technologies: ["html", "css", "js"],
    categories: ["Frontend Mentor"],
    feedback:
      "Gané destreza con Css grid para posicionar los elementos como el diseño lo requiere y adaptándolo a dispositivos móviles. Utilicé la propiedad grid-template-areas en el contenedor padre para crear la grilla y grid-area en los contenedores hijos para asignarle a cada uno su ubicación.",
    image: "/projects/frontendMentor/news/news-1.webp",
    images: ["/projects/frontendMentor/news/news-1.webp"],
  },
  {
    id: 7,
    title: "Rest Country",
    slug: "rest-country",
    liveSiteUrl:
      "https://rest-country-api-with-color-theme-switcher-fupf6x4t2-eduviana.vercel.app/",
    githubUrl:
      "https://github.com/eduviana/Rest-Country-Api-With-Color-Theme-Switcher",
    desc: "Challenge para poner a prueba mis skills de Javascript consumiendo una API. ¡Tiene varios detalles a resolver que no se aprecian a simple vista!",
    explanation:
      "El desafío es integrar la API REST de paises para extraer los datos y mostrarlos como indica el diseño. Puedes usar cualquier framework de Javascript que quieras. también tienes control sobre qué paquete utilizar para realizar las solicitudes HTTP.",
    technologies: ["react", "sass"],
    categories: ["Frontend Mentor"],
    feedback:
      "Aprendí muchas cosas realizando este reto. Quería hacer el dark mode sin utilizar context y encontré una forma de realizarlo con el atributo data-set de HTML5./n/n En los estilos globales del proyecto defino las variables de css para cuando el body tenga el data-set con el valor 'light' y para cuando tenga el valor 'dark'. Los nombres de las variables son los mismos para ambos casos, lo que cambia son los valores. Creo que con esta forma de hacerlo se puede ahorrar lineas de código en los componentes./n/n En vez de tener que importar useContent y mi context para poder comprobar en qué tema nos encontramos lo que hago es crear una variable css tanto en el selector body[data-theme='light'] como en body[data-theme='dark'], estableciendo en cada una el valor correspondiente. Otra cuestión que me pareció muy interesante y que tenía a medio olvidar es que la respuesta de la API tiene algunos campos que son variables dependiendo del país que se buscó, por lo que no es posible acceder a dichas keys del objeto por medio de la notación del punto como normalmente estaba acostumbrado, hay que hacerlo por medio de la notacion de corchetes, marcando la posición en vez del valor.",
    image: "/projects/frontendMentor/restCountry/restCountry-1.webp",
    images: [
      "/projects/frontendMentor/restCountry/restCountry-1.webp",
      "/projects/frontendMentor/restCountry/restCountry-2.webp",
      "/projects/frontendMentor/restCountry/restCountry-3.webp",
      "/projects/frontendMentor/restCountry/restCountry-4.webp",
    ],
  },
  {
    id: 6,
    title: "Testimonial Grid",
    slug: "testimonial-grid",
    liveSiteUrl:
      "https://testimonial-grid-section-main-jnauizfda-eduviana.vercel.app/",
    githubUrl: "https://github.com/eduviana/testimonial-grid-section-main",
    desc: "Este desafío es una práctica perfecta para cualquiera que quiera probar sus habilidades con CSS Grid. Grid es una adición tan poderosa a CSS, ¡así que vale la pena familiarizarse con él!",
    explanation:
      "El desafío es construir esta sección de cuadrícula y lograr que se parezca lo más posible al diseño. Puedes usar cualquier herramienta que te guste para ayudarte a completar el desafío. Entonces, si tienes algo que te gustaría practicar, no dudes en intentarlo. ",
    technologies: ["react", "sass"],
    categories: ["Frontend Mentor"],
    feedback:
      "Buena práctica para repasar Css grid. Lo más complicado es ajustar los textos para que queden igual al diseño proveido. Hay que jugar mucho con tamaños de texto, altura de linea, espaciado de letras etc.",
    image: "/projects/frontendMentor/testimonialGrid/testimonialGrid-1.webp",
    images: ["/projects/frontendMentor/testimonialGrid/testimonialGrid-1.webp"],
  },
  {
    id: 5,
    title: "Fylo dark theme landing page",
    slug: "fylo-darktheme-landing-page",
    liveSiteUrl:
      "https://filo-dark-theme-landing-page-master-nmeoll70x-eduviana.vercel.app/",
    githubUrl:
      "https://github.com/eduviana/filo-dark-theme-landing-page-master",
    desc: "Este challenge tiene desafíos de diseño agradables. Un campo de entrenamiento perfecto para practicar mis habilidades de Flexbox y/o Grid.",
    explanation:
      "El desafío es construir esta página de destino y lograr que se parezca lo más posible al diseño. Puedes usar cualquier herramienta que te guste para ayudarte a completar el desafío.",
    technologies: ["react", "sass"],
    categories: ["Frontend Mentor"],
    feedback:
      "Un desafío ideal para adquirir experiencia en el uso de grid y flexbox es la anidación de múltiples contenedores grid o flex que deben ajustar su disposición en función de las dimensiones de la pantalla. Además, este desafío implica el uso de position relative y absolute para posicionar elementos entre dos secciones con colores diferentes.",
    image: "/projects/frontendMentor/fyloDarkTheme/fyloDarkTheme-1.webp",
    images: [
      "/projects/frontendMentor/filoDarkTheme/fyloDarkTheme-1.webp",
      "/projects/frontendMentor/filoDarkTheme/fyloDarkTheme-2.webp",
      "/projects/frontendMentor/filoDarkTheme/fyloDarkTheme-3.webp",
    ],
  },
  {
    id: 4,
    title: "Loopstudios landing page",
    slug: "loopstudios-landing-page",
    liveSiteUrl:
      "https://loopstudios-landing-page-main-r8k6s4vrh-eduviana.vercel.app/",
    githubUrl: "https://github.com/eduviana/loopstudios-landing-page-main",
    desc: "Este desafío es perfecto si buscas probar tus habilidades con CSS Grid. ¡Incluso sin Grid, este proyecto será divertido para ayudarlo a practicar sus habilidades de diseño!",
    explanation:
      "Su desafío es construir esta página de destino y lograr que se parezca lo más posible al diseño. Se enfoca principalmente en HTML y CSS pero tiene un poquito de Javascript incluido para la alternancia de navegación móvil.",
    technologies: ["react", "sass"],
    categories: ["Frontend Mentor"],
    feedback:
      "En este desafío, empleé tanto flexbox como grid. Ambas técnicas pueden conducir a resultados similares, pero no al mismo costo. Si se trata de elementos que necesitan separación, centrado o alineación hacia uno de los lados, es más eficiente utilizar flexbox. Por otro lado, cuando se trata de elementos superpuestos o de situaciones complejas que requieren adaptación a diferentes resoluciones de pantalla, resulta más conveniente optar por grid.",
    image: "/projects/frontendMentor/loopstudios/loopstudios-1.webp",
    images: [
      "/projects/frontendMentor/loopstudios/loopstudios-1.webp",
      "/projects/frontendMentor/loopstudios/loopstudios-2.webp",
    ],
  },
  {
    id: 3,
    title: "Room Homepage",
    slug: "room-homepage",
    liveSiteUrl: "https://room-homepage-ashy-delta.vercel.app/",
    githubUrl: "https://github.com/eduviana/Room-Homepage",
    desc: "Desafío que debe realizarce utilizando CSS Grid para crear la cuadrícula y ubicar los elementos en los dos breakpoints que se indican en los requisitos. ",
    explanation:
      "El desafío consta en construir esta página de inicio de comercio electrónico y lograr que se parezca lo más posible al diseño. La idea es que todos los elementos estén manejados por una Grid, definiendo sus dimensiones en el contenedor padre.",
    technologies: ["react", "tailwind"],
    categories: ["Frontend Mentor"],
    feedback:
      "Este ejercicio resultó altamente beneficioso para mi aprendizaje, ya que me permitió experimentar con las proporciones de tamaños asignadas a un contenedor grid, logrando medidas adecuadas para cada punto de quiebre y manteniendo la integridad del diseño.",
    image: "/projects/frontendMentor/room/room-1.webp",
    images: ["/projects/frontendMentor/room/room-1.webp"],
  },
  {
    id: 2,
    title: "Game Store",
    slug: "game-store",
    liveSiteUrl: "https://game-store-nextjs-api.vercel.app/",
    githubUrl: "https://github.com/eduviana/GameStore-FreeToGame-API",
    desc: "Maquetación extraída de Figma Community a la que le implementé una API gratuita llamada freetogame para mostrar información dinámica.",
    explanation:
      "Este proyecto surgío revisando los diseños gratituos que la comunidad de Figma comparte en su página, así que seleccioné este y el objetivo era replicarlo lo mas parecido al diseño original, ya que mis anteriores maquetaciones habian sido en base a una foto.",
    technologies: ["next", "css"],
    categories: ["Nextjs"],
    feedback:
      "Realizando esta maquetación pude comprobar por mi mismo que hacer una interfaz teniendo una herramienta como Figma, el resultado final es mucho más acertado y fiel al diseño original. Es más cómodo y ágil trabajar de esta manera. Con respecto a la Api, requirió investigar y pensar bien que método de next utilizar para realizar los fetchs y aprender sobre los mismos. Actualmente utilizo getServerSideProps en este proyecto para reealizar las consultas del lado del backend.",
    image: "/projects/personales/gamestore/gamestore-1.webp",
    images: [
      "/projects/personales/gamestore/gamestore-1.webp",
      "/projects/personales/gamestore/gamestore-2.webp",
      "/projects/personales/gamestore/gamestore-3.webp",
      "/projects/personales/gamestore/gamestore-4.webp",
      "/projects/personales/gamestore/gamestore-5.webp",
      "/projects/personales/gamestore/gamestore-6.webp",
      "/projects/personales/gamestore/gamestore-7.webp",
    ],
  },
  {
    id: 1,
    title: "YouTube Clone",
    slug: "youtube-clone",
    liveSiteUrl: "https://ev-YouTube-app.netlify.app/",
    githubUrl: "https://github.com/eduviana/YouTube-app",
    desc: "Página web inspirada en YouTube con un diseño similar que utiliza la API oficial de YouTube para visualizar los videos y realizar las búsquedas.",
    explanation:
      "La idea de este proyecto es simular un sitio web parecido a YouTube en el que se puede buscar videos en el buscador, filtrar por categorías y mostrar videos relacionados al seleccionado. Utiliza la API oficial de YouTube.",
    technologies: ["react", "material"],
    categories: ["React"],
    feedback:
      "Este ejercicio me ayudó a mejorar construyendo interfaces de usuario sin tener un diseño preestablecido o un archivo de figma en el que basarme./n/n Utilizar Material Ui me obligó a leer y buscar mucha informacion en la documentación oficial para lograr el aspecto visual que yo pretendía, ya que es muy distinto trabajar con esta librería a hacerlo con Css o Sass como yo estoy acostumbrado. También opté por usar Axios para realizar las peticiones al endpoint para incorporar otra herramienta nueva para mi ya que el método fetch nativo del navegador es lo que habitualmente utiizo y no quería quedarme en mi zona de confort. ",
    image: "/projects/personales/youtubeClone/youtubeClone-1.webp",
    images: [
      "/projects/personales/youtubeClone/youtubeClone-1.webp",
      "/projects/personales/youtubeClone/youtubeClone-2.webp",
      "/projects/personales/youtubeClone/youtubeClone-3.webp",
    ],
  },
];
