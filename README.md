<p align="center">
  <img src="public/about.jpg" alt="EvilPixi holding a plate of empanadas" width="260" />
</p>

<h1 align="center">EvilPixi — Portfolio</h1>

<p align="center">
  Personal portfolio of <strong>Nestor Salvi</strong>, also known as <strong>EvilPixi</strong>:<br />
  fullstack developer, game developer, UI specialist and 2D artist from Argentina.
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/ngsalvi/">LinkedIn</a> ·
  <a href="https://github.com/evilpixi">GitHub</a> ·
  <a href="https://evilpixi.itch.io/">itch.io</a>
</p>

---

## About

I'm a fullstack developer who has the most fun on the front end, working mostly with .NET, React
and JavaScript. Outside of work I make video games, take part in game jams and draw.

This site collects my work: commercial games I worked on (Midnight City, Madden NFL 23 & 24),
personal projects and game jam entries, like **Papergirl**, which won 1st place at the BIC Game Jam.

## Features

- **Bilingual:** English and Spanish, with localized routes (`/en/...` and `/es/...`).
- **Pages:** home, about, work, contact and legal notice.
- **Contact form** powered by [Formspree](https://formspree.io), so no email address appears in the code.
- **Dark theme** with violet as the primary color and sky blue as the secondary.
- **Small touches:** an animated logo, a typewriter effect for the roles in the hero and pixel-art-friendly image rendering.
- **Accessible:** responsive layout, keyboard focus styles, and animations that respect `prefers-reduced-motion`.

## Tech stack

- [React 19](https://react.dev) + [Vite](https://vite.dev)
- [React Router](https://reactrouter.com)
- Plain CSS with custom properties, no UI framework
- ESLint + Prettier
- Deployed on [Vercel](https://vercel.com)

## Getting started

Requires [Node.js](https://nodejs.org).

```bash
npm install
npm run dev       # start the dev server
npm run build     # build for production into dist/
npm run preview   # preview the production build
npm run lint      # lint the code
npm run format    # format the code with Prettier
```

## Editing the content

The code and the content live apart, so most changes don't touch any component:

| What                                       | Where                                  |
| ------------------------------------------ | -------------------------------------- |
| Name, links, contact form, games, projects | [`src/data/site.js`](src/data/site.js) |
| Texts in English                           | [`src/i18n/en.js`](src/i18n/en.js)     |
| Texts in Spanish                           | [`src/i18n/es.js`](src/i18n/es.js)     |
| Images (avatar, covers, screenshots)       | [`public/`](public/)                   |
| Colors and theme                           | [`src/index.css`](src/index.css)       |

To add a project, add an entry in `projects` in `site.js`, then add its `title` and `description`
under `work.projects` with the same `id` in both language files.

## Deployment

The site is deployed on Vercel. [`vercel.json`](vercel.json) sends every route to `index.html`,
so pages like `/es/about` work when opened directly or reloaded.

## License

© Nestor Salvi. All rights reserved. The code is public for reference; the artwork, images and
personal content may not be reused without permission.
