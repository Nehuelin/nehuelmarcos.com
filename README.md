# nehuelmarcos.com

The source code for **my personal portfolio**: a content-rich, responsive single-page site that presents my software projects, professional experience, Computer Engineering journey, technical toolkit, education and interests outside work.

## What the site is about

The portfolio introduces me as a Computer Engineering student and software developer based in Buenos Aires, with a focus on:

- backend development and API design;
- process automation and operational tooling;
- data, SQL and database-backed systems;
- connecting business workflows with dependable software;
- continuous learning through university, professional work and independent projects.

The home page provides the shortest version of that story. The deeper sections let a reader explore it from different angles:

| Area | Purpose |
| --- | --- |
| **Home** | A high-level introduction, selected work, current experience, core toolkit and contact prompt. |
| **About** | Personal background, working style, capabilities and profile facts. |
| **Education** | Formal education and additional coursework, including dedicated detail views. |
| **Academic journey** | A structured view of the Computer Engineering curriculum, course status and prerequisites (including a dependence graph). |
| **Experience** | Professional roles, responsibilities, outcomes and the tools used in each role. |
| **Projects** | A searchable, filterable project index with individual case-study pages. |
| **Stack** | Technologies grouped by discipline, with contextual links to related projects, courses and roles. |
| **Other** | Basketball, aviation and other interests that provide context beyond a résumé. |
| **Contact** | Direct paths to email, LinkedIn and GitHub. |

The experience is intentionally interconnected. A project can point to the course that produced it; a technology can point to projects and experience where it was used; a curriculum course can expose its prerequisites and related work.

## Design and experience

The interface uses an editorial visual system. Large display typography establishes hierarchy, thin rules divide content, muted surfaces support dense information, and acid-green accents identify interactive or emphasized elements. This site is also **responsive**, meaning that the UI layout can shift from broad multi-column compositions on desktop to a compact navigation and single-column reading flow on smaller screens (namely phones).

Key experience details include:

- responsive desktop, tablet and mobile layouts;
- light and dark color themes;
- theme preference persisted in `localStorage`;
- a no-flash theme bootstrap in `index.html` before React renders;
- keyboard-focus treatments and semantic landmarks;
- reduced-motion-aware smooth scrolling;
- an accessible mobile menu with an Escape-key close action;
- meaningful link labels and ARIA annotations for icon-only controls;
- route-specific browser titles and descriptions;
- a custom 404 view for invalid routes;

### Context-aware browser metadata

The browser tab follows the visitor through the site. Every top-level section has its own title, while project, experience, education and academic-course detail routes include the entity name in the document title. Invalid URLs receive explicit “Page Not Found” metadata and a distinct warning icon.

Metadata is recalculated whenever the URL hash changes. This keeps the tab useful when several portfolio pages are open at once and makes browser history easier to scan. The initial HTML still supplies complete default metadata so the document has a meaningful title, description and branded icon before JavaScript starts.

## Technical overview

### Core stack

- **React 19** renders the interface as composable function components.
- **React DOM** mounts the application into the document root.
- **Vite 8** provides the local development server, module graph and production bundling.
- **JavaScript with JSX** is used throughout; the project intentionally does not require TypeScript or a runtime API.
- **CSS** provides the complete visual system, responsive behavior, themes and transitions.
- **ESLint 10** applies the recommended JavaScript, React Hooks and Vite React Refresh rules.
- **React Compiler** is enabled through the Babel/Rolldown integration configured in `vite.config.js`.

All portfolio copy and relationships are version-controlled JavaScript data, and production output is a set of static assets.

### Application boot sequence

1. The browser loads `index.html`.
2. Google Analytics is registered and the default title and description are available immediately.
3. A small inline script reads the saved theme or operating-system preference and updates the root element before first paint.
4. `/src/main.jsx` loads global CSS and mounts `<App />` under React Strict Mode.
5. `App` reads the current hash, resolves the matching page component and installs listeners for navigation and menu behavior.
6. A metadata effect derives the title and description from the active route.
7. Vite resolves imported source assets and `import.meta.glob` collections during development or build.

### Routing model

Routing is implemented without an external routing library. Links use hash URLs such as:

```text
#home
#projects
#projects/municipal-help-center-frontend
#experience/operations-intern
#education/computer-engineering
#education/computer-engineering/algorithms-and-data-structures-i
```

`App.jsx` reads `window.location.hash`, listens for `hashchange`, and splits the active value into route segments. `PageContent` validates those segments against the relevant data collection before rendering a detail component. Unsupported sections, unknown slugs and excessive path segments resolve to the same 404 experience.

Hash routing is a deliberate fit for this static deployment:

- deep navigation does not require host-level rewrite rules;
- the site remains deployable as plain files;
- browser back/forward behavior works naturally;
- content links are easy to define directly in the data and components.

When adding a new route shape, update both the rendering logic in `src/App.jsx` and metadata resolution in `src/utils/pageMetadata.js` so visible content and browser chrome stay synchronized.

### Metadata generation

`src/utils/pageMetadata.js` owns the browser metadata map. It:

- defines titles, descriptions and short icon labels for top-level sections;
- looks up detail titles in the project, experience, education and academic-course datasets;
- detects routes that do not resolve to real content;
- returns a single metadata object consumed by `App`.

### Content architecture

Most content lives in `src/data`, keeping long structured records out of rendering components:

- `projects.js` contains project summaries, challenges, solutions, stacks, associations, source links and optional previews;
- `experiences.js` contains roles, periods, responsibilities, impact, tools and skills;
- `education.js` contains degree and supplementary course records;
- `academicCourses.js` models the Computer Engineering curriculum, semesters, statuses, prerequisites, topics and related projects;
- `skills.js` groups tools and maps them back to projects, courses and experiences;
- `personalInterests.js` contains the narrative material for the “Other” section;
- `courseFilters.js` contains reusable curriculum filtering logic.

Slugs are stable identifiers. Components use them for route matching and cross-dataset relationships, so a slug change must be propagated to every reference. Human-readable titles can change independently as long as their relationship logic does not rely on an exact title match.

### Component structure

```text
src/
├── App.jsx                         # Shell, navigation, hash routing, themes and metadata
├── App.css                         # Page, component and responsive styles
├── index.css                       # Global reset, font imports and document defaults
├── main.jsx                        # React entry point
├── utils/
│   └── pageMetadata.js             # Route-aware title and description logic
├── components/
│   ├── academic/
│   │   ├── AcademicOverview.jsx    # Curriculum summary and progress information
│   │   ├── CourseCard.jsx          # Individual curriculum item
│   │   ├── CourseStatusBadge.jsx   # Course-state presentation
│   │   ├── CurriculumView.jsx      # Curriculum browsing and filters
│   │   └── DependencyGraph.jsx     # Prerequisite visualization
│   └── ui/
│       ├── PageIntro.jsx           # Shared page heading composition
│       ├── ProjectPreview.jsx      # Project preview image handling
│       └── TechnologyDetail.jsx    # Expandable technology relationships
├── data/                           # Version-controlled portfolio content
├── pages/                          # Top-level and detail page components
└── assets/
    └── images/
        ├── entity-logos/           # Company and institution branding
        ├── previews/               # Project screenshots
        └── tool-logos/             # Technology marks
```

Page components own section-specific composition, while reusable visual or behavioral patterns are extracted into `components`. The shared shell—the header, navigation, theme toggle, content outlet and footer—stays in `App.jsx`.

### State and interaction

The application uses local React state instead of a global state library:

- `page` mirrors the normalized location hash;
- `theme` mirrors the active light/dark preference;
- `menuOpen` controls mobile navigation;
- project query and select values drive derived filtering through `useMemo`;
- the stack page stores the selected technology identifier;
- curriculum controls keep their filter and view state close to the academic components.

This is sufficient because state is either UI-local or already represented by the URL. Derived collections are recalculated from static datasets, avoiding synchronization with a second store.

### Styling system

`src/index.css` establishes global typography and browser defaults. `src/App.css` contains the site’s component and page rules.

Theme tokens are CSS custom properties on `:root`, with dark-mode overrides selected by `[data-theme='dark']`. Important tokens include:

```css
--ink          /* primary text and dark surfaces */
--paper        /* page background and inverse text */
--acid         /* primary accent */
--acid-hover   /* interactive accent state */
--muted        /* secondary text */
--line         /* structural borders */
--surface      /* cards and grouped content */
--surface-alt  /* alternate media surfaces */
```

Components should use these tokens instead of hard-coded theme-specific backgrounds wherever possible. Responsive rules live alongside the main stylesheet so a component’s desktop and compact behavior can be inspected in one place.

### Images and static assets

Images imported from `src/assets` become part of Vite’s dependency graph and receive production-safe URLs. Project previews and logos are rendered through their relevant UI components. `import.meta.glob` is used on the stack page to eagerly construct a filename-to-URL map for technology logos, avoiding a long list of manual imports while retaining build-time asset handling.

Files in `public` are copied without transformation and addressed from the site root. 

## Getting started

### Prerequisites

- a current Node.js release compatible with Vite 8;
- npm (the repository includes `package-lock.json` for reproducible dependency resolution).

### Install

```bash
npm ci
```

Use `npm ci` for a clean checkout or CI environment. It installs the exact versions recorded in the lockfile and refuses to silently rewrite dependency resolution.

### Develop

```bash
npm run dev
```

Vite prints the local URL in the terminal. The development server supports fast refresh for React components and updates CSS without a full production rebuild.

To expose the server to another device on the network:

```bash
npm run dev -- --host
```

### Production build

```bash
npm run build
```

The generated static site is written to `dist/`. Vite fingerprints bundled assets and rewrites their references for production.

### Preview the production build

```bash
npm run preview
```

This serves `dist/` locally and is useful for catching behavior that differs from the development module server. It is a verification server, not a production deployment strategy.

### Lint

```bash
npm run lint
```

Linting covers JavaScript and JSX, including React Hook correctness and React Refresh export constraints. Generated `dist` output is ignored.

## Common development tasks

### Add a project

1. Add a record to `src/data/projects.js` with a unique slug.
2. Add its screenshot to `src/assets/images/previews` if one is available.
3. Add the slug to `featuredProjectSlugs` if it belongs on the home page.
4. Reference the project slug from technologies or academic courses where relevant.
5. Open both `#projects` and `#projects/<slug>` and verify the card, filters, preview, case study and title.

### Add an experience

1. Add the structured role to `src/data/experiences.js`.
2. Keep its slug unique and stable.
3. Update technology `experienceSlugs` relationships when the role demonstrates a listed tool.
4. Verify the experience index, home snapshot and detail route.

### Add or update a technology

1. Edit the correct group in `src/data/skills.js`.
2. Add any logo file to `src/assets/images/tool-logos` and reference its filename.
3. Populate related project, experience and course slugs using identifiers that exist in their datasets.
4. Check the expanded technology panel with both keyboard and pointer input.

### Add an academic course

1. Add the course to `src/data/academicCourses.js` using a unique slug.
2. Set its year, semester, status, technology list and prerequisite slugs.
3. Ensure prerequisites refer only to existing course records.
4. Add related project slugs where appropriate.
5. Verify the curriculum filters, dependency graph and course detail metadata.

### Add a top-level page

1. Create the page component in `src/pages`.
2. Import and render it from `PageContent` in `src/App.jsx`.
3. Add navigation links where appropriate.
4. Add the route’s label, title and description to `sections` in `src/utils/pageMetadata.js`.
5. Add responsive styles and confirm that unknown child paths still produce a 404.

## Quality checklist

Before committing a content or UI change:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Navigate through every route affected by the change.
4. Confirm browser title, description and icon updates after hash navigation.
5. Test light and dark themes and reload to verify persistence.
6. Check desktop and narrow mobile widths.
7. Use keyboard-only navigation for new controls.
8. Confirm new links, slugs, asset paths and cross-dataset references.
9. Inspect the browser console for missing assets, invalid DOM nesting or React warnings.

## Deployment characteristics

The output is static and can be hosted on services such as GitHub Pages, Netlify, Vercel, Cloudflare Pages or a conventional web server. Because navigation is hash-based, direct links do not require server rewrites to `index.html`. A deployment needs only to publish the contents of `dist/` after a successful `npm run build`.

If the site is hosted below a domain subpath rather than at `/`, configure Vite’s `base` option and verify public asset URLs. Analytics consent and privacy requirements should also be reviewed for the target jurisdiction before deploying the included Google Analytics tag.


## Browser and persistence behavior

The app relies on modern platform features including ES modules, CSS custom properties, `matchMedia`, `localStorage`, `import.meta.glob` (compiled by Vite) and SVG favicons. The selected theme is the only user preference persisted locally. Portfolio data remains bundled and read-only (with no sensible data). The included analytics provider may independently use storage according to its configuration and policies.

## License and content

This repository represents a personal portfolio. Unless given direct permission from me, the source, written content, project imagery and personal branding are NOT licensed for reuse. External product, company and technology names and logos remain the property of their respective owners.