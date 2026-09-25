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
      // TODO: fill in periods and review roles, descriptions and technologies
      {
        period: 'Present',
        role: 'Fullstack developer',
        company: 'DEGA',
        description:
          'Fullstack development with a focus on front end: React interfaces connected to .NET services through REST APIs, backed by SQL databases and containerized with Docker.',
        stack: ['React', 'TypeScript', '.NET / C#', 'REST API', 'SQL', 'Docker'],
      },
      {
        period: '',
        role: 'Developer',
        company: 'Globant',
        description:
          'Front end development in agile teams for international clients, building React interfaces on top of REST APIs and working with code review flows on GitHub.',
        stack: ['React', 'JavaScript', 'REST API', 'Git / GitHub'],
      },
      {
        period: '',
        role: 'Developer',
        company: '3ogs',
        description:
          "Game development at one of Argentina's leading studios, programming gameplay and internal tools.",
        stack: ['Unity', 'C#', 'Git / GitHub'],
      },
      {
        period: '',
        role: 'Developer',
        company: 'Livemedia',
        description:
          'Built interactive websites and web applications, from the markup to the services powering them.',
        stack: ['JavaScript', 'HTML & CSS', 'Node.js'],
      },
      {
        period: '',
        role: 'Developer',
        company: 'ITSynch',
        description:
          'Built enterprise applications in .NET, designing REST APIs and modeling data in SQL databases.',
        stack: ['.NET / C#', 'REST API', 'SQL'],
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
