import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";

export const EASE = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: i * 0.1 },
  }),
};

export function Reveal({ children, as = "div", className = "", delay = 0, ...rest }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      custom={delay}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
  }, [title, description]);
}

/* Scrolls to top on route change, or to the #anchor if one is present. */
export function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "instant" }), 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo" aria-label="jshoots home">
          <span className="j">j</span>
          <span className="rest">shoots</span>
          <span className="dot" />
        </Link>
        <div className="nav-links">
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/family">Family</NavLink>
          <NavLink to="/milestones">Milestones</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/studio">Studio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <Link to="/contact" className="nav-cta">Book a session →</Link>
      </div>
    </nav>
  );
}

export function CtaStrip({ title, sub, actions }) {
  return (
    <div className="cta-strip">
      <div className="container inner">
        <Reveal>
          <h2>{title}</h2>
          {sub && <p>{sub}</p>}
        </Reveal>
        <Reveal className="actions" delay={1}>{actions}</Reveal>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="fc">
          <strong>jshoots</strong>
          Perth, Western Australia
          <br />
          <a href="mailto:hello@jshoots.com.au">hello@jshoots.com.au</a>
        </div>
        <div className="fc">
          <strong>Navigate</strong>
          <span className="flinks">
            <Link to="/work">Work</Link>
            <Link to="/family">Family &amp; Portraits</Link>
            <Link to="/milestones">Milestones</Link>
            <Link to="/events">Events</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/studio">Studio</Link>
            <Link to="/contact">Contact</Link>
          </span>
        </div>
        <div className="fc">
          <strong>Social</strong>
          <span className="flinks">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
            <span>© 2026 jshoots</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function PriceTable({ rows, note }) {
  return (
    <>
      <table className="pt">
        <thead>
          <tr><th>Session type</th><th>Starting from</th></tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td>
                <div className="pn">{r.name}</div>
                <div className="pd">{r.detail}</div>
              </td>
              <td className="pv">{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {note && <p className="price-note">{note}</p>}
    </>
  );
}

export function PriceCard({ c }) {
  return (
    <div className={`pc ${c.feat ? "feat" : ""}`}>
      {c.badge && <span className="pc-badge">{c.badge}</span>}
      <div className="pc-cat">{c.cat}</div>
      <div className="pc-name">{c.name}</div>
      <div className="pc-desc">{c.desc}</div>
      <div className="pc-price">{c.price}</div>
      <div className="pc-detail">{c.detail}</div>
      {c.inc && (
        <ul className="pc-inc">
          {c.inc.map((x) => <li key={x}>{x}</li>)}
        </ul>
      )}
      <Link className="pc-cta" to={c.to || "/contact"}>{c.cta || "Book →"}</Link>
    </div>
  );
}

export function TagCloud({ tags }) {
  return (
    <div className="tag-cloud">
      {tags.map((t) => <span key={t}>{t}</span>)}
    </div>
  );
}

/* ---------- photo gallery with lightbox ---------- */
export const CLICKS = Array.from({ length: 27 }, (_, i) => `/images/${i + 1}.jpg`);

export function Gallery({ initial = 9 }) {
  const [sel, setSel] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? CLICKS : CLICKS.slice(0, initial);

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
    <>
      <div className="clicks-grid">
        {shown.map((src, i) => (
          <Reveal
            key={src}
            as="button"
            className="click-item"
            delay={i % 3}
            onClick={() => setSel(i)}
            aria-label={`View photo ${i + 1} full size`}
          >
            <img src={src} alt={`jshoots photography, Perth`} loading="lazy" />
          </Reveal>
        ))}
      </div>
      <div className="see-more-wrap">
        <button
          className="btn"
          onClick={() => {
            if (showAll) document.querySelector(".clicks-grid")?.scrollIntoView({ behavior: "instant" });
            setShowAll(!showAll);
          }}
        >
          {showAll ? "See less" : "See more"}
        </button>
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
              alt="jshoots photo full size"
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
    </>
  );
}
