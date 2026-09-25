// Language-independent site data. Translatable texts live in src/i18n/*.js

export const site = {
  brand: 'EvilPixi',
  name: 'Nestor Salvi',
  nickname: 'EvilPixi',
  avatar: '/pfp.jpg',
  owner: 'Nestor Salvi',
  // Form service endpoint, e.g. https://formspree.io/f/XXXX. Empty = the form is hidden.
  contactFormEndpoint: 'https://formspree.io/f/meaolpgw',
  location: 'Concepción del Uruguay, Entre Ríos, Argentina',
  socials: [
    { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/ngsalvi/' },
    { id: 'github', label: 'GitHub', url: 'https://github.com/evilpixi' },
    { id: 'itch', label: 'itch.io', url: 'https://evilpixi.itch.io/' },
  ],
}

// Commercial games worked on. Texts are in i18n `work.games`
export const games = [
  {
    id: 'midnight',
    image: '/projects/midnightcity.jpg',
    tags: ['MMORPG', 'AI'],
    url: 'https://midnight.city',
  },
  {
    id: 'madden',
    image: '/projects/madden.jpg',
    tags: ['EA Sports', 'Xbox', 'PlayStation', 'PC'],
    url: 'https://www.xbox.com/es-AR/games/store/madden-nfl-24/9ng3kdn390bb',
  },
]

// Titles and descriptions for each project id are in i18n `work.projects`
export const projects = [
  {
    id: 'papergirl',
    image: '/projects/papergirl.png',
    pixelArt: true,
    year: 2021,
    tags: ['Unity', 'C#', 'Game Jam'],
    url: 'https://evilpixi.itch.io/papergirl',
  },
  {
    id: 'aventura',
    image: '/projects/aventura.jpg',
    year: 2024,
    tags: ['Phaser', 'JavaScript'],
    url: 'https://evilpixi.itch.io/aventura-jugosa',
  },
  {
    id: 'despierto',
    image: '/projects/despierto.jpg',
    year: 2021,
    tags: ['Unity', 'C#', 'Game Jam'],
    url: 'https://vnpeduca.itch.io/despierto-despierta',
  },
  {
    id: 'trivia',
    image: '/projects/trivia.png',
    year: 2024,
    tags: ['React', 'Redux', 'TypeScript'],
    url: 'https://possumus-challenge-salvi.vercel.app',
  },
  {
    id: 'meowngel',
    image: '/projects/meowngel.png',
    imagePosition: 'center bottom',
    year: 2024,
    tags: ["Ren'Py", 'Game Jam'],
    url: 'https://evilpixi.itch.io/meowngel',
  },
  {
    id: 'drako',
    image: '/projects/drako.jpg',
    imagePosition: 'center bottom',
    year: 2024,
    tags: ['Unity', 'C#', 'Game Jam'],
    url: 'https://evilpixi.itch.io/drako-shop',
  },
]
