export default {
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    work: 'Trabajos',
    contact: 'Contacto',
    legal: 'Aviso legal',
  },
  settings: {
    switchLink: 'Reload in English',
  },
  home: {
    aka: 'también conocido como',
    iAm: 'y soy',
    roles: [
      'desarrollador fullstack',
      'desarrollador de videojuegos',
      'especialista en UI',
      'artista 2D',
      'gamer',
      'fan de JavaScript',
    ],
    greeting: 'Hola, soy',
    tagline: 'Construyo aplicaciones web y videojuegos que se disfrutan usar.',
    ctaWork: 'Ver mis trabajos',
    ctaContact: 'Contactame',
    gamesTitle: 'Últimos trabajos',
    featuredTitle: 'Trabajos destacados',
    featuredLink: 'Todos los proyectos →',
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Código, píxeles y curiosidad',
    avatarAlt: 'Avatar ilustrado de EvilPixi',
    imageAlt: 'Ilustración de EvilPixi sonriendo con un plato de empanadas',
    paragraphs: [
      'Soy Nestor, aunque en internet casi todos me conocen como EvilPixi. Trabajo como desarrollador fullstack, pero donde más me divierto es en el front end: entre .NET, React y JavaScript, me gusta que cada interfaz se sienta tan bien como funciona.',
      'Me formé en la Universidad Tecnológica Nacional, en Concepción del Uruguay, y desde entonces construyo aplicaciones web de punta a punta: del backend a los detalles de la interfaz.',
      "Fuera del trabajo también hago videojuegos: participo en game jams y publico juegos para navegador en itch.io, casi siempre con Phaser, Unity o Ren'Py.",
    ],
    skillsTitle: 'Tecnologías',
    skillGroups: [
      { title: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'Redux', 'HTML y CSS'] },
      { title: 'Backend', items: ['.NET / C#', 'Node.js', 'REST API', 'SQL'] },
      {
        title: 'Herramientas y metodologías',
        items: ['Git / GitHub', 'Docker', 'Google Cloud', 'Jira', 'Scrum'],
      },
      {
        title: 'Diseño',
        items: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Canva', 'Blender'],
      },
      { title: 'Videojuegos', items: ['Phaser', 'Unity', "Ren'Py"] },
    ],
    experienceTitle: 'Experiencia',
    experience: [
      // TODO: completar períodos y revisar cargos, descripciones y tecnologías
      {
        period: 'Actualidad',
        role: 'Fullstack developer',
        company: 'DEGA',
        description:
          'Desarrollo fullstack con foco en front end: interfaces en React conectadas a servicios .NET mediante APIs REST, con bases de datos SQL y entornos contenerizados con Docker.',
        stack: ['React', 'TypeScript', '.NET / C#', 'REST API', 'SQL', 'Docker'],
      },
      {
        period: '',
        role: 'Desarrollador',
        company: 'Globant',
        description:
          'Desarrollo front end en equipos ágiles para clientes internacionales, construyendo interfaces en React que consumen APIs REST y trabajando con flujos de revisión de código en GitHub.',
        stack: ['React', 'JavaScript', 'REST API', 'Git / GitHub'],
      },
      {
        period: '',
        role: 'Desarrollador',
        company: '3ogs',
        description:
          'Desarrollo de videojuegos en uno de los estudios más importantes de Argentina, programando gameplay y herramientas internas.',
        stack: ['Unity', 'C#', 'Git / GitHub'],
      },
      {
        period: '',
        role: 'Desarrollador',
        company: 'Livemedia',
        description:
          'Desarrollo de sitios y aplicaciones web interactivas, del maquetado a los servicios que las alimentan.',
        stack: ['JavaScript', 'HTML y CSS', 'Node.js'],
      },
      {
        period: '',
        role: 'Desarrollador',
        company: 'ITSynch',
        description:
          'Desarrollo de aplicaciones empresariales en .NET, diseñando APIs REST y modelando datos en bases SQL.',
        stack: ['.NET / C#', 'REST API', 'SQL'],
      },
      {
        period: '2021 — Actualidad',
        role: 'Desarrollador de videojuegos indie',
        company: 'EvilPixi',
        description:
          "Juegos para navegador y participación en game jams como la Women Game Jam y la Mini Jam, publicados en itch.io. Desde plataformas en Phaser hasta novelas visuales en Ren'Py.",
        stack: ['Phaser', 'TypeScript', 'Unity', "Ren'Py", 'Socket.IO'],
      },
    ],
    educationTitle: 'Formación',
    education: [
      {
        period: '2009 — 2016',
        role: 'Ingeniería en Sistemas de Información',
        company: 'Universidad Tecnológica Nacional — FRCU',
        description: 'Facultad Regional Concepción del Uruguay.',
      },
      {
        period: '2014',
        role: 'Publicación',
        company: '8.º CNEISI',
        description:
          '"Consolidación de Servidores para uso Académico en Facultad Regional Concepción del Uruguay", presentada en el 8.º Congreso Nacional de Estudiantes de Ingeniería en Sistemas de Información.',
      },
    ],
    certificationsTitle: 'Certificaciones',
    certifications: [
      { name: 'Curso Definitivo de HTML y CSS', issuer: 'Platzi', date: '2025' },
      {
        name: 'Curso de Fundamentos de AI para Data y Machine Learning',
        issuer: 'Platzi',
        date: '2025',
      },
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Competencia profesional' },
    ],
  },
  work: {
    title: 'Trabajos previos',
    viewGame: 'Ver juego',
    games: {
      midnight: {
        title: 'Midnight City',
        description:
          'El primer MMORPG con IA que se juega solo: un mundo persistente donde héroes controlados por agentes de IA viven, trabajan y pelean las 24 horas, y vos los dirigís.',
      },
      madden: {
        title: 'Madden NFL 23 y 24',
        description:
          'La saga de fútbol americano de EA Sports, oficial de la NFL, para consolas y PC.',
      },
    },
    personalTitle: 'Proyectos personales y game jams',
    viewProject: 'Ver proyecto',
    projects: {
      papergirl: {
        title: 'Papergirl',
        award: '1.er puesto en la BIC Game Jam',
        description:
          'Juego de acción en el que repartís diarios en bicicleta mientras esquivás a quienes intentan detenerte. Programación y arte técnico, junto a AcidBurritos, Xiangsauce y Gagota.',
      },
      aventura: {
        title: 'Aventura Jugosa',
        description:
          'Juego para navegador protagonizado por los personajes de Cartoon Network, desarrollado con Phaser.',
      },
      despierto: {
        title: 'Despierto / Despierta',
        description:
          'Aventura point & click para la Women Game Jam 2021: explorás la mente de alguien que atraviesa un momento difícil. Programación, game design y arte técnico en un equipo de nueve personas.',
      },
      trivia: {
        title: 'Pixi Trivia',
        description:
          'Juego de preguntas hecho para un challenge técnico: elegís categoría y dificultad, respondés preguntas de opción múltiple y ves tus resultados.',
      },
      meowngel: {
        title: 'Meowngel',
        description:
          'Novela visual para la Women Game Jam 2024. Pat, una gata valiente, intenta liberar a su humano del poder de la caja de luz.',
      },
      drako: {
        title: 'Drako Shop',
        description:
          'Administrá una tienda mágica de antigüedades y vendé tesoros a dragones. Hecho para la Mini Jam 151: Dragons, con arte de PandaAColor.',
      },
    },
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Trabajemos juntos',
    description:
      '¿Tenés un proyecto en mente, una pregunta o simplemente querés saludar? Mandame un mensaje y te respondo lo antes posible.',
    form: {
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      submit: 'Enviar mensaje',
      sending: 'Enviando…',
      sent: '¡Gracias! Tu mensaje llegó, te respondo pronto.',
      error: 'No se pudo enviar el mensaje. Probá de nuevo en unos minutos.',
    },
    directTitle: 'Dónde encontrarme',
    locationLabel: 'Ubicación',
    socialsLabel: 'Redes',
  },
  footer: {
    tagline: 'Desarrollo web y videojuegos, con un píxel de personalidad.',
    navTitle: 'Navegación',
    socialTitle: 'Redes',
    rights: 'Todos los derechos reservados.',
    privacy: 'Este sitio no utiliza cookies ni herramientas de seguimiento.',
  },
  legal: {
    title: 'Aviso legal',
    updated: 'Última actualización: septiembre de 2026',
    sections: [
      {
        title: 'Titular del sitio',
        body: 'Este sitio web es un portfolio personal cuyo titular y responsable es {owner}. Para cualquier consulta podés usar la página de contacto.',
      },
      {
        title: 'Propiedad intelectual',
        body: 'Todo el contenido de este sitio (textos, imágenes, diseños, código y marcas) pertenece a {owner} o a sus respectivos titulares y se muestra únicamente con fines de portfolio. No se permite su reproducción, distribución o modificación sin autorización previa por escrito.',
      },
      {
        title: 'Privacidad',
        body: 'Este sitio no utiliza cookies, analíticas ni herramientas de seguimiento, y no almacena datos personales. Los datos que envíes por el formulario de contacto se utilizan exclusivamente para responder tu mensaje y nunca se comparten con terceros.',
      },
      {
        title: 'Enlaces externos',
        body: 'Este sitio puede contener enlaces a sitios de terceros. {owner} no se responsabiliza por su contenido ni por sus políticas de privacidad.',
      },
      {
        title: 'Responsabilidad',
        body: 'La información de este sitio se ofrece "tal cual", sin garantías de ningún tipo. {owner} puede actualizar o eliminar contenido en cualquier momento sin previo aviso.',
      },
    ],
  },
}
