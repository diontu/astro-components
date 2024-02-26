# Astro Website Template

To run the website in development:

```sh
npm run dev
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/                 // essentially the atomic units of the website (minus built html tags).
│   │   └── Card.astro
│   ├── layouts/                    // layouts for the entire page.
│   │   └── Layout.astro
│   ├── pages/                      // reserved folder name - has folder based routing. Holds the section-wrappers.
│   │   └── index.astro
|   ├── section-wrappers/           // holds the sections/pre-built sections.
│   │   ├── SimpleWrapper.astro
│   │   └── index.ts
│   └── sections/                   // holds the components/custom components.
│       ├── pre-built               // pre-built sections that I can just add to the pages directly.
│       │   └── first-section       // specifically the first section of the page.
│       │       └── Home.astro
│       ├── Feature.astro
│       └── index.ts
└── package.json
```

Any static assets, like images, can be placed in the `public/` directory.

### 🧩 components

This folder holds the atomic units of the website (minus the built-in html tags (a, div, span, etc)).

### 📝 layouts

This folder holds the layouts for the entire page. I should only use one per page.

**Functionality:**

-   A layout can have many section-wrappers.

### 🗒️ pages

The page itself. This is folder based routing so a folder with "about" and an `index.html` file inside creates a route to the `/about` path.

**Functionality:**

-   A page should ONLY have 1 layout.

### 🎁 section-wrappers

This folder holds the section wrappers. I can use multiple section-wrappers per layout.

**Functionality:**

-   A section-wrapper can holder multiple sections.

### 📦 sections

This folder holds the sections. I can use multiple per sections per section-wrapper.

**Functionality:**

-   A section can hold multiple components.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
