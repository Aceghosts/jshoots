import { Link } from "react-router-dom";
import { Reveal, CtaStrip, usePageMeta } from "../components/shared.jsx";

export default function Studio() {
  usePageMeta(
    "Perth Photography Studio | About jshoots",
    "jshoots is a Perth photography studio founded by Jawad Sheikh. Six years directing campaigns for 20+ brands before picking up a camera. Based in Perth, shoots everywhere."
  );

  return (
    <>
      <header className="hero-dark">
        <div className="container">
          <Reveal as="p" className="kicker">The studio</Reveal>
          <Reveal as="h1" delay={1}>
            Six years making brands look good.<br />
            <em>Now I do it for people.</em>
          </Reveal>
          <Reveal as="p" className="hero-sub" delay={2}>
            jshoots is run by Jawad Sheikh. Six years as a creative director
            for 20+ brands across Australia and internationally. He knows
            what makes an image work, and he brings that to every shoot.
          </Reveal>
        </div>
      </header>

      <section className="sec">
        <div className="container about-grid">
          <Reveal>
            <p className="lede">
              Most photographers learned photography first and everything
              else later. Jawad did it the other way around. Six years
              directing campaigns for brands across Australia, the UK, the
              USA and Canada taught him what a good image actually needs to
              do, before he ever picked up a camera professionally.
            </p>
            <p className="phil">
              He shoots the same way he directed. Brief first. Purpose behind
              every frame. Work that earns its place.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div className="cd-card">
              <div className="cd-top">
                <div className="avatar">JS</div>
                <div>
                  <div className="cd-name">Jawad Sheikh</div>
                  <div className="cd-role">Founder &amp; Lead Photographer</div>
                </div>
              </div>
              <p className="cd-bio">
                Six years, 20+ brands across Australia, the UK, the USA and
                Canada. He approached every campaign with a brief and a
                purpose. He photographs exactly the same way.
              </p>
              <div className="tag-pills">
                <span className="tp">Creative Direction</span>
                <span className="tp">Campaign Strategy</span>
                <span className="tp">Adobe Suite</span>
                <span className="tp">Social Media</span>
                <span className="tp">Moodboard Development</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title="Want to know if we're the right fit?"
        actions={<Link to="/contact" className="btn coral">Book a session →</Link>}
      />
    </>
  );
}
