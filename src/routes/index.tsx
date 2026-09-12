import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rhythma | Women's Health, In Your Language" },
      {
        name: "description",
        content: "Rhythma is an AI-powered multilingual women's health companion for personalized, culturally aware support.",
      },
      { property: "og:title", content: "Rhythma | Women's Health, In Your Language" },
      {
        property: "og:description",
        content: "A calm, multilingual companion designed around every woman's rhythm.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RhythmaLanding,
});

const languages = [
  { native: "नमस्ते", name: "Hindi", position: "language-1", tone: "pink" },
  { native: "Hello", name: "English", position: "language-2", tone: "lavender" },
  { native: "Namaskar", name: "Marathi", position: "language-3", tone: "aqua" },
  { native: "নমস্কার", name: "Bengali", position: "language-4", tone: "pink" },
  { native: "ਮੈਂ ਸੀ ਭਵਾਲ", name: "Punjabi", position: "language-5", tone: "peach" },
  { native: "નમસ્તે", name: "Gujarati", position: "language-6", tone: "lavender" },
  { native: "வணக்கம்", name: "Tamil", position: "language-7", tone: "aqua" },
  { native: "ನಮಸ್ಕಾರ", name: "Kannada", position: "language-8", tone: "peach" },
  { native: "നമസ്കാരം", name: "Malayalam", position: "language-9", tone: "pink" },
  { native: "తెలుగు నమస్కారం", name: "Telugu", position: "language-10", tone: "aqua" },
  { native: "ଓଡ଼ିଆ ନମସ୍କାର", name: "Odia", position: "language-11", tone: "lavender" },
];

function LotusLogo() {
  return (
    <svg viewBox="0 0 56 42" className="h-9 w-12" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 37C20 28 20 16 28 4c8 12 8 24 0 33Z" />
        <path d="M27 37C15 34 9 26 9 15c10 2 17 10 18 22Z" />
        <path d="M29 37c12-3 18-11 18-22-10 2-17 10-18 22Z" />
        <path d="M24 37C13 39 5 34 3 24c9-1 17 4 21 13Z" />
        <path d="M32 37c11 2 19-3 21-13-9-1-17 4-21 13Z" />
      </g>
    </svg>
  );
}

function WomanIllustration() {
  return (
    <svg className="woman-illustration" viewBox="0 0 380 500" role="img" aria-label="Serene Indian woman greeting with Namaste">
      <defs>
        <linearGradient id="hair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--plum-deep)" />
          <stop offset="1" stopColor="var(--rose)" />
        </linearGradient>
        <linearGradient id="saree" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--rose)" />
          <stop offset="1" stopColor="var(--lavender)" />
        </linearGradient>
      </defs>
      <g className="sketch sketch-hair" fill="none" stroke="url(#hair)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M190 47c-48-4-83 35-79 89 2 32-20 57-39 79 28-8 47-23 57-43-13 39-37 62-63 74 39 0 72-19 86-50" />
        <path d="M188 47c50-4 85 34 82 89-2 34 19 58 38 80-28-7-47-22-58-43 14 39 37 61 64 73-39 1-73-18-87-49" />
        <path d="M184 50c-27 7-49 28-54 64M196 50c30 8 50 31 54 68M153 64c-17 23-15 51-5 70M227 64c18 24 16 52 6 72" />
        <path d="M124 120c-8 54 6 102 29 130M256 120c9 55-6 103-29 131" />
      </g>
      <g className="sketch sketch-face" fill="none" stroke="var(--plum-deep)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M145 98c0 67 18 111 45 115 28-5 46-49 45-115" />
        <path d="M151 98c13-7 26-22 34-39 10 20 26 35 51 43" />
        <path d="M158 134c9 7 18 7 27 0M198 134c9 7 18 7 27 0" />
        <path d="M170 125c5-4 10-5 15-3M199 122c6-2 11-1 16 3" />
        <path d="M190 137c-3 12-5 23 2 25M181 177c7 5 15 5 22 0" />
        <path d="M185 111c2-4 8-4 10 0-2 4-8 4-10 0Z" />
        <path d="M146 150c-8-2-11 9-4 17M234 150c8-2 11 9 4 17" />
      </g>
      <g className="sketch sketch-details" fill="none" stroke="var(--rose)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M143 165c-2 14-9 22-14 27M237 165c2 14 9 22 14 27" />
        <path d="M128 192l-6 12h13l-7-12ZM252 192l-6 12h13l-7-12Z" />
        <path d="M166 205c-1 15-8 23-22 29M214 205c1 15 8 23 22 29" />
      </g>
      <g className="sketch sketch-body" fill="none" stroke="url(#saree)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M145 226c-46 15-70 57-81 116L44 458M235 226c46 15 70 57 81 116l20 116" />
        <path d="M145 226c17 17 73 17 90 0M139 231c16 41 26 82 27 124M241 232c-16 41-26 82-27 124" />
        <path d="M112 250c24 29 42 60 52 93M267 250c-23 30-41 61-51 94" />
        <path d="M77 323c36 30 65 67 84 118M303 323c-36 30-65 67-84 118" />
        <path d="M234 229c23 22 46 40 70 51M225 247c27 24 52 41 76 50M220 267c27 23 52 39 76 49" />
        <path d="M48 458c82-13 201-13 288 0" />
      </g>
      <g className="sketch sketch-hands" fill="none" stroke="var(--plum-deep)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M189 285c-8 21-16 44-15 67l7 69M191 285c8 21 16 44 15 67l-7 69" />
        <path d="M189 285l-1 110M191 285l1 110" />
        <path d="M174 351c-9 9-14 26-12 48l13 42M206 351c9 9 14 26 12 48l-13 42" />
        <path d="M181 421c2 9 5 16 9 21 4-5 7-12 9-21" />
        <path d="M174 367l9 7M206 367l-9 7M172 382l11 6M208 382l-11 6" />
      </g>
    </svg>
  );
}

function RhythmaLanding() {
  return (
    <div className="rhythma-page">
      <header className="rhythma-nav entrance-nav">
        <a href="#top" className="brand" aria-label="Rhythma home">
          <LotusLogo />
          <span>Rhythma</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {['Explore', 'Features', 'Wellness', 'About', 'Community', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="login-link" href="#login">Log In</a>
          <Button asChild className="download-button"><a href="#download">Download App</a></Button>
          <Button variant="ghost" size="icon" className="mobile-menu" aria-label="Open menu"><Menu /></Button>
        </div>
      </header>

      <main id="top" className="hero">
        <div className="scene" aria-label="A multilingual welcome from Rhythma">
          <div className="orbit-line orbit-line-one" aria-hidden="true" />
          <div className="orbit-line orbit-line-two" aria-hidden="true" />
          <div className="orbit-line orbit-line-three" aria-hidden="true" />
          <div className="petal petal-one" aria-hidden="true" />
          <div className="petal petal-two" aria-hidden="true" />
          <div className="petal petal-three" aria-hidden="true" />
          <div className="petal petal-four" aria-hidden="true" />
          {languages.map((language, index) => (
            <div className={`language-bubble ${language.position} tone-${language.tone}`} key={language.name} style={{ '--bubble-index': index } as React.CSSProperties}>
              <strong>{language.native}</strong>
              <span>({language.name})</span>
            </div>
          ))}
          <div className="woman-wrap"><WomanIllustration /></div>
        </div>

        <section className="hero-copy" aria-labelledby="rhythma-title">
          <h1 id="rhythma-title">Rhythma</h1>
          <p className="tagline">Her Rhythm. Her Health. Her Power.</p>
          <p className="subtitle">An AI-powered multilingual women’s health companion.</p>
          <a className="explore-link" href="#explore" aria-label="Explore Rhythma">
            <span className="arrow-circle"><ArrowDown /></span>
            <span>Explore Rhythma</span>
          </a>
        </section>
      </main>

      <div className="waves" aria-hidden="true">
        <svg viewBox="0 0 1440 170" preserveAspectRatio="none">
          <path className="wave wave-back" d="M0 57C176 25 231 105 399 84c166-21 202-69 363-41 171 30 231 82 410 44 115-24 189-44 268-25v108H0Z" />
          <path className="wave wave-mid" d="M0 96c147 57 250 57 390 3 153-59 235-24 354 23 131 52 260 33 377-10 136-50 227-43 319-7v65H0Z" />
          <path className="wave wave-front" d="M0 116c173 22 269-37 411-24 151 14 234 86 388 61 137-22 194-82 342-61 106 15 198 52 299 39v39H0Z" />
        </svg>
      </div>
    </div>
  );
}