import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, RotatingBadge, SplitText, ParallaxImg, TiltCard } from "./shared.jsx";

const InlineImg = ({ src, alt }) => (
  <span className="inline-img">
    <img src={src} alt={alt} loading="lazy" />
  </span>
);

export function Statement() {
  return (
    <section className="statement">
      <div className="container">
        <Reveal as="p">
          The photographs worth keeping{" "}
          <InlineImg
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
            alt="Candid portrait"
          />
          can't be staged. A kid mid-laugh, a quiet look between two people,{" "}
          <InlineImg
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400&auto=format&fit=crop"
            alt="Event moment with confetti"
          />
          a room caught at exactly the right moment.{" "}
          <span className="dim">That's what we show up for.</span>
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="exp-head">
          <Reveal as="p" className="kicker">The studio</Reveal>
          <SplitText as="h2" className="display" text="Our experience" />
          <Reveal as="span" className="script" delay={2}>in frames</Reveal>
        </div>
        <div className="exp-grid">
          <Reveal className="stat" delay={0}>
            <b>10 days</b>
            <span>Full edited gallery, delivered</span>
          </Reveal>
          <Reveal className="stat" delay={1}>
            <b>$299</b>
            <span>Sessions start here, no hidden extras</span>
          </Reveal>
          <Reveal className="stat" delay={2}>
            <b>1:1</b>
            <span>Same photographer, start to finish</span>
          </Reveal>
          <Reveal as="p" className="exp-note" delay={3}>
            jshoots doesn't have a studio you have to come to, and that's the
            point. Kids relax at home. Couples loosen up on their own beach.
            Event coverage lands better when the photographer already knows the
            room. We travel anywhere across Perth and surrounds, we know the
            brief before we show up, and you'll know exactly who's turning up
            on the day.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const WORK = [
  { cls: "tall", tag: "Wedding · Swan Valley", src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop", alt: "Bride and groom walking together" },
  { cls: "", tag: "Family · Cottesloe", src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop", alt: "Family laughing together outdoors" },
  { cls: "wide", tag: "Corporate · Perth CBD", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop", alt: "Corporate conference in session" },
  { cls: "", tag: "Graduation · UWA", src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop", alt: "Graduates throwing caps" },
  { cls: "", tag: "Portraits · On location", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop", alt: "Natural light portrait" },
  { cls: "wide", tag: "Celebration · Fremantle", src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1600&auto=format&fit=crop", alt: "Friends celebrating with sparklers at night" },
];

const WorkItem = ({ w, delay }) => (
  <Reveal as="figure" className={`p-item ${w.cls}`} delay={delay}>
    <ParallaxImg src={w.src} alt={w.alt} strength={w.cls === "tall" ? 9 : 6} />
    <figcaption className="p-tag">{w.tag}</figcaption>
  </Reveal>
);

export function Portfolio() {
  return (
    <section id="work">
      <div className="container">
        <div className="exp-head">
          <Reveal as="p" className="kicker">Portfolio</Reveal>
          <SplitText as="h2" className="display" text="Work that stands" />
          <Reveal as="span" className="script" delay={2}>the test of time</Reveal>
        </div>
        <div className="portfolio-grid">
          {WORK.slice(0, 3).map((w, i) => (
            <WorkItem key={w.tag} w={w} delay={i} />
          ))}
          <Reveal className="p-text" delay={3}>
            <h3>Every day worth keeping</h3>
            <RotatingBadge text="create your own story · create your own story · " />
          </Reveal>
          {WORK.slice(3).map((w, i) => (
            <WorkItem key={w.tag} w={w} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const CLICKS = Array.from({ length: 27 }, (_, i) => `/images/${i + 1}.jpg`);

export function Gallery() {
  const [sel, setSel] = useState(null);

  useEffect(() => {
    if (sel === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSel(null);
      if (e.key === "ArrowRight") setSel((s) => (s + 1) % CLICKS.length);
      if (e.key === "ArrowLeft") setSel((s) => (s - 1 + CLICKS.length) % CLICKS.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sel]);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="exp-head">
          <Reveal as="p" className="kicker">Gallery</Reveal>
          <SplitText as="h2" className="display" text="Recent clicks" />
          <Reveal as="span" className="script" delay={2}>straight off the camera</Reveal>
        </div>
        <div className="clicks-grid">
          {CLICKS.map((src, i) => (
            <Reveal key={src} as="button" className="click-item" delay={i % 3} onClick={() => setSel(i)} aria-label={`View photo ${i + 1} full size`}>
              <img src={src} alt={`jshoots photo ${i + 1}`} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {sel !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSel(null)}
          >
            <motion.img
              key={sel}
              src={CLICKS[sel]}
              alt={`jshoots photo ${sel + 1} full size`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="lb-btn lb-prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); setSel((sel - 1 + CLICKS.length) % CLICKS.length); }}>←</button>
            <button className="lb-btn lb-next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); setSel((sel + 1) % CLICKS.length); }}>→</button>
            <button className="lb-btn lb-close" aria-label="Close" onClick={() => setSel(null)}>✕</button>
            <span className="lb-count">{sel + 1} / {CLICKS.length}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const SERVICES = [
  {
    kicker: "01 · Portraits",
    title: "Family & Portraits",
    copy: "Families, newborns, couples and professional headshots. No stiff poses under studio lights. Just you, at ease, somewhere you actually like being.",
    price: "From $299",
    note: "Gallery in 10 days",
  },
  {
    kicker: "02 · Milestones",
    title: "Weddings & Milestones",
    copy: "Weddings, birthdays, graduations and christenings. These are the days you only get once, so we photograph them properly. Nobody gets told to say cheese.",
    price: "From $299",
    note: "Gallery in 10 days",
  },
  {
    kicker: "03 · Events",
    title: "Corporate & Events",
    copy: "Corporate functions, community events, launches and award nights. Send us the run sheet and the key people, and we'll know the brief before we arrive.",
    price: "Scoped to your brief",
    note: "Tell us the shape of the night",
  },
];

export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="exp-head">
          <Reveal as="p" className="kicker">Services</Reveal>
          <SplitText as="h2" className="display" text="Three ways" />
          <Reveal as="span" className="script" delay={2}>to book</Reveal>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i}>
              <TiltCard className="svc">
                <p className="kicker">{s.kicker}</p>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
                <div className="price">
                  {s.price}
                  <small>{s.note}</small>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
