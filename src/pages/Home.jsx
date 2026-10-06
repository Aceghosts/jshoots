import { Link } from "react-router-dom";
import { Reveal, CtaStrip, usePageMeta } from "../components/shared.jsx";

export default function Home() {
  usePageMeta(
    "Perth Photography Studio | jshoots",
    "Perth photography studio for families, couples, weddings, events and every moment worth keeping. On-location across Perth. Book jshoots today."
  );

  return (
    <>
      <header className="hero-dark">
        <div className="container hero-grid">
          <div>
            <Reveal as="p" className="kicker">Perth, Western Australia</Reveal>
            <Reveal as="h1" delay={1}>
              Not every photo is worth keeping. <em>Yours will be.</em>
            </Reveal>
            <Reveal as="p" className="hero-sub" delay={2}>
              Families, couples, weddings, birthdays, graduation and every
              Perth event worth documenting. Shot on-location, delivered
              within ten days.
            </Reveal>
            <Reveal className="hero-links" delay={3}>
              <Link to="/work" className="primary">See our work →</Link>
              <Link to="/studio" className="secondary">About the studio</Link>
            </Reveal>
          </div>
          <Reveal className="stat-stack" delay={2}>
            <div className="stat">
              <div className="sk">Based in</div>
              <div className="sv">Perth, WA</div>
              <div className="sd">On-location across the city and surrounds.</div>
            </div>
            <div className="stat-row2">
              <div className="stat">
                <div className="sk">We come to you</div>
                <div className="sv ac">Your place.</div>
                <div className="sd">Your terms.</div>
              </div>
              <div className="stat">
                <div className="sk">Turnaround</div>
                <div className="sv ac">10 days</div>
                <div className="sd">Gallery. Every time.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="sec">
        <div className="container">
          <div className="svc-grid">
            <Reveal className="svc" delay={0}>
              <div className="num">01</div>
              <h3>Family &amp; Portraits</h3>
              <p>Families, newborn, couples and headshots. We come to you, wherever that is.</p>
              <Link to="/family" className="price">From $299 →</Link>
            </Reveal>
            <Reveal className="svc" delay={1}>
              <div className="num">02</div>
              <h3>Weddings, Birthdays &amp; Milestones</h3>
              <p>Weddings, birthdays, graduation and christenings. Every occasion that deserves a proper photographer.</p>
              <Link to="/milestones" className="price">From $299 →</Link>
            </Reveal>
            <Reveal className="svc blue" delay={2}>
              <div className="num">03</div>
              <h3>Events</h3>
              <p>Corporate events, community events, launches and award nights. We know the brief before we show up.</p>
              <Link to="/events" className="price">Scope-based →</Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="container">
          <Reveal className="work-head">
            <span className="lbl">A selection of our work</span>
            <Link to="/work" className="text-link">See all work →</Link>
          </Reveal>
          <Reveal className="preview-grid" delay={1}>
            <Link to="/work"><img src="/images/2.jpg" alt="Event photography in Perth by jshoots" loading="lazy" /></Link>
            <Link to="/work"><img src="/images/9.jpg" alt="Portrait photography in Perth by jshoots" loading="lazy" /></Link>
            <Link to="/work"><img src="/images/15.jpg" alt="Community event photography in Perth by jshoots" loading="lazy" /></Link>
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title="Ready when you are."
        sub="Book a session or enquire about an event."
        actions={
          <>
            <Link to="/contact" className="btn">Book a session →</Link>
            <Link to="/contact?type=corporate" className="btn coral">Enquire about an event →</Link>
          </>
        }
      />
    </>
  );
}
