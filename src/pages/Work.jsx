import { Link } from "react-router-dom";
import { Reveal, Gallery, CtaStrip, usePageMeta } from "../components/shared.jsx";

export default function Work() {
  usePageMeta(
    "Photography Portfolio Perth | jshoots",
    "Perth photography portfolio. Families, weddings, events and milestones across Perth and WA. jshoots photography studio."
  );

  return (
    <>
      <header className="hero-dark" style={{ padding: "64px 0 56px" }}>
        <div className="container">
          <Reveal as="p" className="kicker">Work</Reveal>
          <Reveal as="h1" delay={1} style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
            Some of the work.<br />The rest is on Instagram.
          </Reveal>
        </div>
      </header>

      <section className="sec">
        <div className="container">
          <Gallery initial={9} />
        </div>
      </section>

      <CtaStrip
        title="Like what you see?"
        actions={<Link to="/contact" className="btn coral">Book a session →</Link>}
      />
    </>
  );
}
