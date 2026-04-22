# Hector Mendez — Portfolio

Personal portfolio / resume website built with **Vite + React**.

## Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Root component, theme state
├── data.js               # All content (roles, experience, projects, skills…)
├── styles/
│   └── globals.css       # All styles (CSS variables, dark/light, responsive)
└── components/
    ├── Nav.jsx           # Fixed navigation bar
    ├── Hero.jsx          # Full-screen hero with typewriter
    ├── Typewriter.jsx    # Animated typewriter component
    ├── About.jsx         # About section + stats
    ├── Expertise.jsx     # 6-card expertise grid
    ├── Experience.jsx    # Timeline with scroll-reveal
    ├── Skills.jsx        # Skill pills grouped by category
    ├── Education.jsx     # Education cards
    ├── Projects.jsx      # Project cards with links
    ├── Contact.jsx       # Contact links + footer
    └── Tweaks.jsx        # Floating tweaks panel (dark/light + accent)
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Adding Your Resume PDF

Place your resume at:
```
public/Hector_Mendez_Resume.pdf
```
The download button in the hero and contact section will automatically link to it.

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your repo — Vercel auto-detects Vite
4. Click **Deploy** — done!

To connect your custom domain `hectormendez.io`:
- Go to your project settings → **Domains**
- Add `hectormendez.io` and follow the DNS instructions

## Customization

All content lives in **`src/data.js`** — edit roles, experience, skills, and projects there.

Colors and fonts are CSS variables in **`src/styles/globals.css`** under `:root`.

The accent color hue is controlled by `--accent` (oklch). Change the hue number to shift the color:
- `235` = Blue
- `185` = Teal
- `65`  = Amber
- `130` = Military Green
- `145` = Matrix Green
- `0`   = Rose
- `290` = Purple
