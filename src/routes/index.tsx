import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Menu } from "lucide-react";
import type { CSSProperties } from "react";
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
  { native: "नमस्ते", name: "Hindi", tone: "pink" },
  { native: "Hello", name: "English", tone: "lavender" },
  { native: "Namaskar", name: "Marathi", tone: "aqua" },
  { native: "নমস্কার", name: "Bengali", tone: "pink" },
  { native: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ", name: "Punjabi", tone: "peach" },
  { native: "નમસ્તે", name: "Gujarati", tone: "lavender" },
  { native: "வணக்கம்", name: "Tamil", tone: "aqua" },
  { native: "ನಮಸ್ಕಾರ", name: "Kannada", tone: "peach" },
  { native: "നമസ്കാരം", name: "Malayalam", tone: "pink" },
  { native: "నమస్కారం", name: "Telugu", tone: "aqua" },
  { native: "ନମସ୍କାର", name: "Odia", tone: "lavender" },
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
    <div className="woman-frame">
      <img
        className="woman-photo"
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VVVZ3cMnooIAnqdexGR4GjkySXmaP8.png"
        alt="Serene Indian woman with closed eyes greeting with Namaste"
      />
    </div>
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
            <div className="language-orbit" key={language.name} style={{ '--bubble-index': index } as CSSProperties}>
              <div className={`language-bubble tone-${language.tone}`} title={language.name}>
                <strong>{language.native}</strong>
              </div>
            </div>
          ))}
          <div className="woman-wrap"><WomanIllustration /></div>
        </div>

        <section className="hero-copy" aria-labelledby="rhythma-title">
          <h1 id="rhythma-title">Rhythma</h1>
          <p className="tagline">Her Rhythm. Her Health. Her Power.</p>
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
