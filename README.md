# ckolavennu.live — Portfolio

A personal portfolio website for **Chandu Kolavennu**, built to present my data analytics journey, technical experience, selected projects, resume, and contact information in one clean place.

The site is designed as more than a static resume. It highlights practical work across data analysis, reporting, technical support, student leadership, and project building.

## Features

- **Reactive landing page** with a full-width animated Vanta/Three.js background.
- **Modern SvelteKit structure** for fast routing and component-based development.
- **Project case study pages** for portfolio work such as Student Dropout Risk Prediction, Foodbasket Analytics, and StudyFlow.
- **Resume page** with an embedded resume preview.
- **Responsive design** for desktop, tablet, and mobile screens.
- **Live project progress integration** for tracking selected GitHub project activity.

## Tech Stack

- SvelteKit
- Svelte 5
- Vite
- JavaScript
- CSS
- Three.js
- Vanta.js

## Getting Started

Clone the repository:

```bash
git clone https://github.com/ckolavennu/ckolavennu-portfolio.git
cd ckolavennu-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Or open the site automatically in your browser:

```bash
npm run dev -- --open
```

## Available Scripts

```bash
npm run dev
```

Runs the local development server.

```bash
npm run build
```

Builds the production version of the site.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs formatting and lint checks.

```bash
npm run format
```

Formats the project files with Prettier.

## Project Structure

```text
src/
├── lib/
│   ├── assets/
│   ├── components/
│   │   └── VantaHero.svelte
│   └── styles/
│       ├── landing-background.css
│       └── status-pills.css
├── routes/
│   ├── +layout.svelte
│   ├── +page.svelte
│   ├── api/
│   └── projects/
└── app.css
```

## Landing Background Notes

The main landing page uses `VantaHero.svelte` with Vanta Net and Three.js. The animated canvas is styled through `src/lib/styles/landing-background.css` so it fills the full landing section instead of being restricted to the normal content container.

This keeps the content aligned with the rest of the site while allowing the background to feel more immersive and reactive.

## Deployment

This project can be deployed using any platform that supports SvelteKit/Vite builds, such as Vercel, Netlify, or a static hosting setup with the appropriate SvelteKit adapter.

General production flow:

```bash
npm run build
npm run preview
```

## Purpose

This portfolio is meant to support my transition into data analyst opportunities by showing:

- how I approach real-world problems,
- how I communicate insights,
- how I build practical tools and dashboards,
- and how my technical, leadership, and reporting experience connect together.

## Author

**Chandu Kolavennu**

Portfolio: `ckolavennu.live`
