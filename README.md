# Ahmed Bilal Syed — Portfolio

A professional, modern portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles & design tokens (CSS variables)
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx        # Sticky responsive navbar
│   ├── Hero.tsx          # Hero section with typewriter effect
│   ├── About.tsx         # About me + contact info card
│   ├── Skills.tsx        # Tech skills by category
│   ├── Experience.tsx    # Work experience, education & training timeline
│   ├── Projects.tsx      # Projects grid (empty slots ready)
│   ├── Blog.tsx          # Blog/articles section (placeholder ready)
│   ├── Contact.tsx       # Contact form + social links
│   └── Footer.tsx        # Footer
├── data/
│   └── portfolio.json    # ⭐ ALL YOUR DATA LIVES HERE
└── README.md
```

---

## ✏️ How to Update Your Content

**All content is managed from a single file:**

```
data/portfolio.json
```

### Adding a Project

Open `data/portfolio.json` and add an object to the `"projects"` array:

```json
"projects": [
  {
    "id": "proj-1",
    "title": "My Awesome App",
    "description": "A brief description of what this project does.",
    "technologies": ["React", "Node.js", "MongoDB"],
    "github": "https://github.com/yourusername/project",
    "live": "https://myproject.vercel.app"
  }
]
```

### Adding a Blog Post

Add an object to the `"blog"` array:

```json
"blog": [
  {
    "id": "blog-1",
    "title": "My First Article",
    "excerpt": "A short summary of what the article covers.",
    "date": "April 2026",
    "readTime": "5 min read",
    "url": "https://dev.to/yourusername/article",
    "tags": ["React", "JavaScript"]
  }
]
```

### Updating Social Links

```json
"social": {
  "github": "https://github.com/YOUR_USERNAME",
  "linkedin": "https://linkedin.com/in/YOUR_USERNAME",
  "twitter": "https://twitter.com/YOUR_USERNAME"
}
```

### Toggling Availability Status

```json
"personal": {
  "available": true
}
```

Set to `false` to hide the "Available for new opportunities" badge.

---

## 🎨 Design System

Colors and design tokens live in `app/globals.css` as CSS variables:

| Variable | Value | Usage |
|---|---|---|
| `--bg-primary` | `#080B0F` | Page background |
| `--accent-blue` | `#60A5FA` | Primary accent |
| `--accent-cyan` | `#22D3EE` | Secondary accent |
| `--text-primary` | `#F0F4F8` | Main text |
| `--text-secondary` | `#8A9BB0` | Subtitles / body text |

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Vercel auto-detects Next.js — just click **Deploy**

### Deploy to Netlify

```bash
npm run build
# Upload the .next/static folder or connect your GitHub repo
```

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Fonts**: Syne (headings) + DM Sans (body) via Google Fonts
- **Icons**: Inline SVG
- **Data**: JSON (no database needed)

