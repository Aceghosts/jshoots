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
          <img src="/logo-red.png" alt="jshoots" />
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

/* Floating contact buttons, visible on every page. */
export function ContactFab() {
  return (
    <div className="fab-stack">
      <a className="fab wa" href="https://wa.me/61415558960" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12a9 9 0 0 1-13.2 8L3 21l1.1-4.7A9 9 0 1 1 21 12z" />
          <path fill="#fff" stroke="none" d="M9.1 7.7c.3-.7 1-.8 1.4-.2l.9 1.3c.3.4.2.9-.1 1.2l-.5.6c.5 1 1.5 2 2.6 2.6l.5-.6c.3-.3.8-.4 1.2-.1l1.3.9c.6.4.5 1.1-.2 1.4-1 .4-2.2.3-3.5-.5a10.6 10.6 0 0 1-3.6-3.6c-.8-1.3-.9-2.5-.5-3.5z" />
        </svg>
      </a>
      <a className="fab ig" href="https://www.instagram.com/jshoots.au" target="_blank" rel="noopener noreferrer" aria-label="Message us on Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.2" cy="6.8" r="1.2" fill="#fff" stroke="none" />
        </svg>
      </a>
      <a className="fab ms" href="https://m.me/jshoots.au" target="_blank" rel="noopener noreferrer" aria-label="Message us on Facebook Messenger">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2.5C6.8 2.5 2.5 6.4 2.5 11.3c0 2.8 1.3 5.2 3.5 6.8v3.4l3.2-1.8c.9.2 1.8.4 2.8.4 5.2 0 9.5-3.9 9.5-8.8S17.2 2.5 12 2.5z" />
          <path fill="#fff" stroke="none" d="M6.3 13.8l4.2-4.4 2.5 2.3 4.6-4.1-4.2 4.5-2.5-2.3z" />
        </svg>
      </a>
    </div>
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
            <a href="https://www.instagram.com/jshoots.au" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://wa.me/61415558960" target="_blank" rel="noopener noreferrer">WhatsApp</a>
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
