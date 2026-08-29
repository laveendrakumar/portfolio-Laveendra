# Laveendra Kumar Yarramsetty — portfolio

Personal portfolio built with React and Vite. Dark theme by default with a light theme toggle in the top right, persisted to localStorage.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production files land in `dist/`. Drop that folder on Netlify, Vercel, GitHub Pages, or any static host.

## Where to edit things

| What | File |
| --- | --- |
| Name, role, email, phone, GitHub, LinkedIn | `src/data.js` |
| Stats, skills, experience, projects, certifications, education | `src/data.js` |
| Colors, both themes, type scale, spacing | `src/index.css` |
| Profile photo | `public/profile.jpg` |
| Downloadable CV | `public/Laveendra_Kumar_Resume.pdf` |

All content lives in `src/data.js`, so you can update the site without touching component code.

## Notes

- Jost loads from Google Fonts and Tabler icons load from jsDelivr, both linked in `index.html`.
- Theme colors are CSS variables under `:root[data-theme="dark"]` and `:root[data-theme="light"]`.
- Project cards use icon tiles rather than screenshots, since client work is usually under NDA. Swap in images if you have shareable ones.
