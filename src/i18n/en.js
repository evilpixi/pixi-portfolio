export default {
  nav: {
    home: 'Home',
    about: 'About',
    work: 'Work',
    contact: 'Contact',
    legal: 'Legal notice',
  },
  settings: {
    switchLink: 'Recargar en español',
  },
  home: {
    aka: 'also known as',
    iAm: 'and I am a',
    roles: [
      'fullstack developer',
      'game developer',
      'UI specialist',
      '2D artist',
      'gamer',
      'JavaScript fan',
    ],
    greeting: "Hi, I'm",
    tagline: 'I build web apps and video games that are fun to use.',
    ctaWork: 'See my work',
    ctaContact: 'Contact me',
    gamesTitle: 'Latest work',
    featuredTitle: 'Featured work',
    featuredLink: 'All projects →',
  },
  about: {
    eyebrow: 'About me',
    title: 'Code, pixels and curiosity',
    avatarAlt: 'Illustrated avatar of EvilPixi',
    imageAlt: 'Illustration of EvilPixi smiling with a plate of empanadas',
    paragraphs: [
      "I'm Nestor, though online most people know me as EvilPixi. I work as a fullstack developer, but front end is where I have the most fun: between .NET, React and JavaScript, I like every interface to feel as good as it works.",
      'I studied at Universidad Tecnológica Nacional in Concepción del Uruguay, and since then I have been building web applications end to end: from the backend to the details of the interface.',
      "Outside of work I also make video games: I take part in game jams and publish browser games on itch.io, usually with Phaser, Unity or Ren'Py.",
    ],
    skillsTitle: 'Technologies',
    skillGroups: [
      { title: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'Redux', 'HTML & CSS'] },
      { title: 'Backend', items: ['.NET / C#', 'Node.js', 'REST API', 'SQL'] },
      {
        title: 'Tools & methodologies',
        items: ['Git / GitHub', 'Docker', 'Google Cloud', 'Jira', 'Scrum'],
      },
      {
        title: 'Design',
        items: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Canva', 'Blender'],
      },
      { title: 'Game development', items: ['Phaser', 'Unity', "Ren'Py"] },
    ],
    experienceTitle: 'Experience',
    experience: [
      {
        period: 'Mar 2025 — Present',
        role: 'Senior fullstack developer',
        company: 'DEGA',
        description:
          'Leading the development team of a crypto AI fullstack simulation. Built the memory system for AI agents and their connection to a 3D simulation environment, and designed the simulation side of the solution in sync with other teams.',
        stack: [
          'TypeScript',
          'Node.js',
          'Phaser',
          'PostgreSQL',
          'WebSockets',
          'LangGraph',
          'Docker',
        ],
      },
      {
        period: 'Mar 2024 — Aug 2024',
        role: 'Fullstack developer',
        company: 'DEGA',
        description:
          'Led the gameplay, UI and software architecture of Dega Survivors, a web game. The quality of the delivery secured extra funding that extended development by four months. Also acted as technology advisor and shipped tailored builds for three clients.',
        stack: ['JavaScript', 'TypeScript', 'Phaser', 'React', 'Node.js', 'Git / GitHub'],
      },
      {
        period: 'Apr 2022 — Jan 2024',
        role: 'Software engineer',
        company: 'Globant',
        description:
          'Designed and styled UI screens and widgets for Madden NFL 23 and 24, working with UX/UI designers and back end developers. Managed UI state transitions and wrote a guide of best practices for future technical artists.',
        stack: ['UI', 'Agile / Jira', 'Perforce'],
      },
      {
        period: 'Mar 2021 — Sep 2021',
        role: 'Frontend developer',
        company: '3OGS',
        description:
          'Built the front end of a drawing web app and a language learning web app, improving the drawing app performance by 50%.',
        stack: ['React', 'Phaser', 'JavaScript', 'Kanban', 'Git / GitHub'],
      },
      {
        period: 'Mar 2020 — Sep 2021',
        role: 'Frontend developer / Game developer',
        company: 'LiveMedia',
        description:
          'Developed six projects, including a game for a tournament with over 50,000 participants optimized to run 200% better on older devices. Also built interactive books and web ad campaigns, and mentored junior game developers.',
        stack: ['Phaser', 'JavaScript', 'Unity', 'C#', 'HTML & CSS', 'Photoshop / Illustrator'],
      },
      {
        period: 'Mar 2019 — Nov 2019',
        role: 'Fullstack developer',
        company: 'IT Synch',
        description:
          'Developed and maintained features for cruise management software, with a .NET back end following SOLID principles and an AngularJS front end.',
        stack: ['.NET / C#', 'AngularJS', 'Docker', 'SQL Server', 'Oracle SQL'],
      },
      {
        period: '2021 — Present',
        role: 'Indie game developer',
        company: 'EvilPixi',
        description:
          "Browser games and game jam entries such as Women Game Jam and Mini Jam, published on itch.io. From Phaser platformers to Ren'Py visual novels.",
        stack: ['Phaser', 'TypeScript', 'Unity', "Ren'Py", 'Socket.IO'],
      },
    ],
    educationTitle: 'Education',
    education: [
      {
        period: '2009 — 2016',
        role: 'Information Systems Engineering',
        company: 'Universidad Tecnológica Nacional — FRCU',
        description: 'Concepción del Uruguay Regional Faculty.',
      },
      {
        period: '2014',
        role: 'Publication',
        company: '8th CNEISI',
        description:
          '"Consolidación de Servidores para uso Académico en Facultad Regional Concepción del Uruguay" (server consolidation for academic use), presented at the 8th National Congress of Information Systems Engineering Students.',
      },
    ],
    certificationsTitle: 'Certifications',
    certifications: [
      { name: 'Curso Definitivo de HTML y CSS', issuer: 'Platzi', date: '2025' },
      {
        name: 'Curso de Fundamentos de AI para Data y Machine Learning',
        issuer: 'Platzi',
        date: '2025',
      },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Professional working proficiency' },
    ],
  },
  work: {
    title: 'Previous work',
    viewGame: 'View game',
    games: {
      midnight: {
        title: 'Midnight City',
        description:
          'The first AI MMORPG that plays itself: a persistent world where AI-driven heroes live, work and fight 24/7 while you direct them.',
      },
      madden: {
        title: 'Madden NFL 23 & 24',
        description: "EA Sports' official NFL football franchise for consoles and PC.",
      },
    },
    personalTitle: 'Personal projects & game jams',
    viewProject: 'View project',
    projects: {
      papergirl: {
        title: 'Papergirl',
        award: '1st place in BIC Game Jam',
        description:
          'An action game where you deliver newspapers on a bike while dodging those trying to stop you. Programming and technical art, alongside AcidBurritos, Xiangsauce and Gagota.',
      },
      aventura: {
        title: 'Aventura Jugosa',
        description: 'A browser game starring Cartoon Network characters, built with Phaser.',
      },
      despierto: {
        title: 'Despierto / Despierta',
        description:
          'A point & click adventure made for Women Game Jam 2021: explore the mind of someone going through a hard time. Programming, game design and technical art in a nine-person team.',
      },
      trivia: {
        title: 'Pixi Trivia',
        description:
          'A trivia game built for a technical challenge: pick a category and difficulty, answer multiple-choice questions and see your results.',
      },
      meowngel: {
        title: 'Meowngel',
        description:
          'A visual novel made for Women Game Jam 2024. Pat, a brave cat, tries to free her human from the power of the light box.',
      },
      drako: {
        title: 'Drako Shop',
        description:
          'Run a magical antique shop and sell treasures to dragons. Made for Mini Jam 151: Dragons, with art by PandaAColor.',
      },
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's work together",
    description:
      "Have a project in mind, a question or just want to say hi? Send me a message and I'll get back to you as soon as I can.",
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send message',
      sending: 'Sending…',
      sent: 'Thanks! Your message arrived, I will get back to you soon.',
      error: 'The message could not be sent. Please try again in a few minutes.',
    },
    directTitle: 'Find me',
    locationLabel: 'Based in',
    socialsLabel: 'Social',
  },
  footer: {
    tagline: 'Web development and video games, with a pixel of personality.',
    navTitle: 'Navigation',
    socialTitle: 'Social',
    rights: 'All rights reserved.',
    privacy: 'This site does not use cookies or tracking.',
  },
  legal: {
    title: 'Legal notice',
    updated: 'Last updated: September 2026',
    sections: [
      {
        title: 'Site owner',
        body: 'This website is a personal portfolio owned and operated by {owner}. For any inquiry you can use the contact page.',
      },
      {
        title: 'Intellectual property',
        body: 'All content on this site (texts, images, designs, code and trademarks) belongs to {owner} or to their respective owners and is shown for portfolio purposes only. Reproduction, distribution or modification without prior written permission is not allowed.',
      },
      {
        title: 'Privacy',
        body: 'This site does not use cookies, analytics or tracking tools, and does not store personal data. The information you send through the contact form is used exclusively to reply to your message and is never shared with third parties.',
      },
      {
        title: 'External links',
        body: 'This site may contain links to third-party websites. {owner} is not responsible for their content or privacy practices.',
      },
      {
        title: 'Liability',
        body: 'The information on this site is provided "as is", without warranties of any kind. {owner} may update or remove content at any time without notice.',
      },
    ],
  },
}
