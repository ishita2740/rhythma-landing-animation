import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Menu } from "lucide-react";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import womanImage from "@/assets/rhythma-women.png";


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

/*
 * Floating items positioned relative to the FULL PAGE (100vw × 100vh).
 * Coordinates use viewport-relative values to truly fill the entire screen.
 * The woman is centered ~50% horizontally, ~30-55% vertically.
 * All items avoid that center zone.
 */
/*
 * Floating multilingual greetings positioned relative to the FULL PAGE (100vw × 100vh).
 * Curated to highlight Rhythma as a multilingual AI health companion that welcomes
 * women in their own language across Indian and international cultures.
 * 
 * Symmetrically and harmoniously spaced:
 * - Clear gap below navbar (all items start at >= 18% top)
 * - Generous margins to avoid clustering
 * - Center zone (~34% to 66% width) reserved for the meditating woman
 * - Health tags reduced to just 2 subtle micro-badges so greetings dominate
 */
interface FloatingItem {
  text: string;
  lang: string;
  type: "greeting" | "term";
  tone: "rose" | "lavender" | "aqua" | "peach" | "pink";
  size?: "sm" | "md" | "lg";
  pos: Record<string, string>;
  anim: string;
}

const floatingItems: FloatingItem[] = [
  /* ── UPPER BAND (Far below navbar, >= 18% top, outer wings) ── */
  { text: "வணக்கம்",        lang: "Tamil",        type: "greeting", tone: "aqua",     size: "md", pos: { top: "18.5%", left: "5.5%" },  anim: "drift-gentle-1" },
  { text: "Bonjour",        lang: "French",       type: "greeting", tone: "lavender", size: "sm", pos: { top: "20.5%", left: "22%" },   anim: "drift-gentle-3" },
  { text: "નમસ્તે",         lang: "Gujarati",     type: "greeting", tone: "pink",     size: "sm", pos: { top: "29%",   left: "11%" },   anim: "drift-gentle-5" },

  { text: "నమస్కారం",       lang: "Telugu",       type: "greeting", tone: "peach",    size: "md", pos: { top: "18.5%", right: "5.5%" }, anim: "drift-gentle-2" },
  { text: "Hello",          lang: "English",      type: "greeting", tone: "aqua",     size: "sm", pos: { top: "20.5%", right: "22%" },  anim: "drift-gentle-4" },
  { text: "नमस्कार",         lang: "Marathi",      type: "greeting", tone: "rose",     size: "sm", pos: { top: "29%",   right: "11%" },  anim: "drift-gentle-8" },

  /* ── MID FLANKS (Flanking the serene meditation woman) ── */
  { text: "नमस्ते",          lang: "Hindi",        type: "greeting", tone: "rose",     size: "lg", pos: { top: "39%",   left: "4.5%" },  anim: "drift-gentle-7" },
  { text: "✦ Cycle Health", lang: "Care",         type: "term",     tone: "lavender", size: "sm", pos: { top: "41.5%", left: "20%" },   anim: "drift-gentle-6" },
  { text: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ",    lang: "Punjabi",      type: "greeting", tone: "peach",    size: "md", pos: { top: "50%",   left: "14%" },   anim: "drift-gentle-2" },
  { text: "¡Hola!",         lang: "Spanish",      type: "greeting", tone: "aqua",     size: "sm", pos: { top: "59%",   left: "5.5%" },  anim: "drift-gentle-8" },

  { text: "নমস্কার",         lang: "Bengali",      type: "greeting", tone: "pink",     size: "lg", pos: { top: "39%",   right: "4.5%" }, anim: "drift-gentle-1" },
  { text: "♡ Hormone Care", lang: "Care",         type: "term",     tone: "rose",     size: "sm", pos: { top: "41.5%", right: "20%" },  anim: "drift-gentle-5" },
  { text: "こんにちは",       lang: "Japanese",     type: "greeting", tone: "lavender", size: "sm", pos: { top: "50%",   right: "15%" },  anim: "drift-gentle-4" },
  { text: "Ciao",           lang: "Italian",      type: "greeting", tone: "peach",    size: "sm", pos: { top: "59%",   right: "5.5%" }, anim: "drift-gentle-3" },

  /* ── LOWER FLANKS (Comfortably framing the title & waves) ── */
  { text: "ನಮಸ್ಕಾರ",         lang: "Kannada",      type: "greeting", tone: "lavender", size: "md", pos: { top: "68%",   left: "6%" },    anim: "drift-gentle-4" },
  { text: "ନମସ୍କାର",         lang: "Odia",         type: "greeting", tone: "aqua",     size: "sm", pos: { top: "76%",   left: "18%" },   anim: "drift-gentle-7" },
  { text: "안녕하세요",        lang: "Korean",       type: "greeting", tone: "rose",     size: "sm", pos: { top: "82.5%", left: "5.5%" },  anim: "drift-gentle-5" },
  { text: "Jambo",          lang: "Swahili",      type: "greeting", tone: "peach",    size: "sm", pos: { top: "83.5%", left: "22.5%" }, anim: "drift-gentle-1" },

  { text: "നമസ്കാരം",       lang: "Malayalam",    type: "greeting", tone: "aqua",     size: "md", pos: { top: "68%",   right: "6%" },   anim: "drift-gentle-6" },
  { text: "آداب",           lang: "Urdu",         type: "greeting", tone: "lavender", size: "sm", pos: { top: "76%",   right: "18%" },  anim: "drift-gentle-2" },
  { text: "أهلاً بكِ",       lang: "Arabic",       type: "greeting", tone: "pink",     size: "sm", pos: { top: "82.5%", right: "5.5%" }, anim: "drift-gentle-3" },
  { text: "你好",           lang: "Mandarin",     type: "greeting", tone: "peach",    size: "sm", pos: { top: "83.5%", right: "22.5%" }, anim: "drift-gentle-8" },
];

/* ── Ambient floating particles ── */
const ambientParticles = [
  { tone: "lavender", pos: { top: "18%", left: "18%" },  size: 5, anim: "particle-float-1" },
  { tone: "rose",     pos: { top: "24%", left: "33%" },  size: 4, anim: "particle-float-2" },
  { tone: "aqua",     pos: { top: "45%", left: "9%" },   size: 4, anim: "particle-float-3" },
  { tone: "peach",    pos: { top: "54%", right: "11%" }, size: 5, anim: "particle-float-4" },
  { tone: "lavender", pos: { top: "27%", right: "31%" }, size: 4, anim: "particle-float-5" },
  { tone: "rose",     pos: { top: "71%", left: "30%" },  size: 4, anim: "particle-float-1" },
  { tone: "aqua",     pos: { top: "79%", right: "29%" }, size: 4, anim: "particle-float-3" },
  { tone: "peach",    pos: { top: "84%", left: "15%" },  size: 5, anim: "particle-float-2" },
  { tone: "lavender", pos: { top: "67%", right: "11%" }, size: 4, anim: "particle-float-5" },
  { tone: "pink",     pos: { top: "91%", right: "19%" }, size: 4, anim: "particle-float-4" },
  { tone: "aqua",     pos: { top: "22%", right: "8%" },  size: 4, anim: "particle-float-3" },
];

/* ── Subtle drifting petals bridging the illustration and heading ── */
const ambientPetals = [
  { tone: "rose",     pos: { top: "58.5%", left: "44.5%" }, w: 13, h: 7, anim: "drift-petal-1", delay: "0.4s" },
  { tone: "lavender", pos: { top: "61.5%", right: "43%" },  w: 11, h: 6, anim: "drift-petal-2", delay: "2.2s" },
  { tone: "peach",    pos: { top: "64%",   left: "47.5%" }, w: 10, h: 5, anim: "drift-petal-3", delay: "4s" },
];

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

      {/* ── Full-page floating field — positioned relative to .rhythma-page ── */}
      <div className="floating-field" aria-hidden="true">
        {floatingItems.map((item, index) => (
          <div
            key={`${item.text}-${item.lang}`}
            title={`${item.lang}${item.type === "greeting" ? " Greeting" : ""}`}
            className={`floating-chip tone-${item.tone} ${item.anim} chip-${item.type} chip-${item.size || "md"}`}
            style={{
              ...item.pos,
              animationDelay: `${0.25 + index * 0.14}s`,
            } as CSSProperties}
          >
            <span className="chip-text">{item.text}</span>
            {item.type === "greeting" && (
              <span className="chip-lang-badge">{item.lang}</span>
            )}
          </div>
        ))}
      </div>

      {/* ── Ambient particles & connector elements — full page ── */}
      <div className="ambient-particles" aria-hidden="true">
        {ambientParticles.map((p, i) => (
          <div
            key={`particle-${i}`}
            className={`ambient-dot dot-${p.tone} ${p.anim}`}
            style={{
              ...p.pos,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${i * 0.7}s`,
            } as CSSProperties}
          />
        ))}

        {ambientPetals.map((petal, i) => (
          <div
            key={`petal-${i}`}
            className={`ambient-petal petal-${petal.tone} ${petal.anim}`}
            style={{
              ...petal.pos,
              width: `${petal.w}px`,
              height: `${petal.h}px`,
              animationDelay: petal.delay,
            } as CSSProperties}
          />
        ))}
      </div>

      <main id="top" className="hero">
        <div className="scene" aria-label="A multilingual and menstrual wellness welcome from Rhythma">
          {/* Soft radiant aura behind woman */}
          <div className="center-aura" aria-hidden="true" />

          {/* Decorative petals */}
          <div className="petal petal-one" aria-hidden="true" />
          <div className="petal petal-two" aria-hidden="true" />
          <div className="petal petal-three" aria-hidden="true" />
          <div className="petal petal-four" aria-hidden="true" />
          <div className="petal petal-five" aria-hidden="true" />
          <div className="petal petal-six" aria-hidden="true" />

          {/* Prominent Center Woman Illustration */}
          <div className="woman-wrap">
            <WomanIllustration />
          </div>
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