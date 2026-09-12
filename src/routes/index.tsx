import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import womanImage from "@/assets/rhythma-women.png";
import appShowcaseImage from "@/assets/rhythma-app-showcase.png";

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

function RhythmaLogo() {
  return (
    <img
      src="/rhythma-logo.png"
      alt="Rhythma Logo"
      className="brand-logo"
      width={36}
      height={36}
      loading="eager"
      decoding="async"
    />
  );
}

function WomanIllustration() {
  return (
    <div className="woman-frame">
      {/*
        Subtle hair breeze: four independent overlay layers, each showing
        only a narrow strip of the loose hair via clip-path + radial mask.
        Each layer sways on its own timer for organic movement.

        Layer mapping (coordinates relative to the 1824×862 source):
        1. Left outer hair tip/strand  — the wispy flowing end, lower-left
        2. Left upper hair wave        — the wave near her left shoulder
        3. Right upper hair wave       — the wave near her right shoulder
        4. Right outer hair tip/strand — the wispy flowing end, lower-right
      */}
      <div className="hair-strand hair-strand-1" aria-hidden="true">
        <img className="hair-strand-img" src={womanImage} alt="" />
      </div>
      <div className="hair-strand hair-strand-2" aria-hidden="true">
        <img className="hair-strand-img" src={womanImage} alt="" />
      </div>
      <div className="hair-strand hair-strand-3" aria-hidden="true">
        <img className="hair-strand-img" src={womanImage} alt="" />
      </div>
      <div className="hair-strand hair-strand-4" aria-hidden="true">
        <img className="hair-strand-img" src={womanImage} alt="" />
      </div>

      {/* Main serene meditation woman — always sharp & still */}
      <img
        className="woman-photo"
        src={womanImage}
        alt="Serene Indian woman in meditative Namaste posture"
      />
    </div>
  );
}


function RhythmaLanding() {
  return (
    <div className="rhythma-page">
      {/* SVG Filters — gentle organic wave displacement for each hair strand.
           Each filter uses different turbulence frequency + timing so
           the four hair sections ripple independently. */}
      <svg className="sr-only" aria-hidden="true" focusable="false">
        <defs>
          {/* Left outer tip — slowest, widest ripple */}
          <filter id="hair-wave-1" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.016" numOctaves="2" seed="1" result="n">
              <animate attributeName="baseFrequency" dur="10s" values="0.010 0.014;0.016 0.022;0.010 0.014" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="n" scale="2.8" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          {/* Left upper wave — medium ripple */}
          <filter id="hair-wave-2" x="-6%" y="-6%" width="112%" height="112%">
            <feTurbulence type="fractalNoise" baseFrequency="0.014 0.018" numOctaves="2" seed="7" result="n">
              <animate attributeName="baseFrequency" dur="8s" values="0.012 0.016;0.018 0.024;0.012 0.016" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="n" scale="2.2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          {/* Right upper wave — slightly offset medium ripple */}
          <filter id="hair-wave-3" x="-6%" y="-6%" width="112%" height="112%">
            <feTurbulence type="fractalNoise" baseFrequency="0.015 0.019" numOctaves="2" seed="13" result="n">
              <animate attributeName="baseFrequency" dur="9s" values="0.013 0.017;0.019 0.025;0.013 0.017" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="n" scale="2.4" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          {/* Right outer tip — slowest, widest ripple (mirror of 1) */}
          <filter id="hair-wave-4" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence type="fractalNoise" baseFrequency="0.011 0.015" numOctaves="2" seed="19" result="n">
              <animate attributeName="baseFrequency" dur="11s" values="0.009 0.013;0.015 0.021;0.009 0.013" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="n" scale="2.8" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <header className="rhythma-nav entrance-nav">
        <a href="#top" className="brand" aria-label="Rhythma home">
          <RhythmaLogo />
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
        <div className="hero-split-container">
          {/* Left Column: App Showcase */}
          <div className="hero-left">
            <div className="app-showcase-wrap">
              <img
                src={appShowcaseImage}
                alt="Rhythma App Showcase - Multilingual AI Health Assistant with Privacy First, Offline Support, SMS Reminders, and AI Guidance"
                className="app-showcase-img"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Column: Meditating Woman + Rhythma Brand Text */}
          <div className="hero-right">
            <div className="woman-scene" aria-label="Meditating woman illustration">
              <div className="center-aura" aria-hidden="true" />
              <div className="woman-wrap">
                <WomanIllustration />
              </div>
            </div>

            <section className="hero-copy" aria-labelledby="rhythma-title">
              <h1 id="rhythma-title">Rhythma</h1>
              <p className="tagline">Her Rhythm. Her Health. Her Power.</p>
              <div className="hero-actions">
                <Button asChild className="hero-cta-btn">
                  <a href="#download">Download App</a>
                </Button>
                <a className="explore-link" href="#explore" aria-label="Explore Rhythma">
                  <span className="arrow-circle"><ArrowDown /></span>
                  <span>Explore Features</span>
                </a>
              </div>
            </section>
          </div>
        </div>
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