import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { EASE, RotatingBadge, SplitText } from "./shared.jsx";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`nav ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
    >
      <div className="nav-inner">
        <a className="wordmark" href="#top">jshoots</a>
        <div className="nav-links">
          <a href="#work">Portfolio</a>
          <a href="#services">Services</a>
          <a href="#experience">Studio</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="pill" href="#contact">Book a shoot</a>
      </div>
    </motion.nav>
  );
}

export function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  /* three parallax layers moving at different speeds */
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "24%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, reduce ? 1.05 : 1.2]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -110]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.1]);

  const stagger = (i) => ({
    initial: { opacity: 0, y: 46 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: EASE, delay: 0.25 + i * 0.14 },
  });

  return (
    <header className="hero" id="top" ref={ref}>
      <div className="hero-media" aria-hidden="true">
        <motion.img
          style={{ y: imgY, scale: imgScale }}
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2400&auto=format&fit=crop"
          alt=""
        />
      </div>

      <motion.div
        className="hero-content container"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div style={{ y: cardY }}>
          <motion.div className="hero-card" {...stagger(0)}>
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop"
              alt="Candid family portrait on location"
            />
          </motion.div>
        </motion.div>

        <SplitText
          as="h1"
          className="display"
          text={"Not every photo\nis worth keeping."}
          delay={0.3}
        />
        <motion.span className="script script-line" {...stagger(4)}>
          Yours will be.
        </motion.span>

        <div className="hero-bottom">
          <motion.p className="hero-sub" {...stagger(5)}>
            On-location photography across Perth &amp; surrounds — families,
            milestones and corporate events, delivered as full galleries
            within ten days.
          </motion.p>
          <motion.div className="hero-badge" {...stagger(6)}>
            <RotatingBadge text="your place · your terms · ready when you are · " />
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
