import { Link } from "react-router-dom";
import { Reveal, TagCloud, CtaStrip, usePageMeta } from "../components/shared.jsx";

export default function Events() {
  usePageMeta(
    "Corporate Event Photographer Perth | jshoots Photography Studio",
    "Perth event photographer for corporate events, community events, product launches and award nights. Briefed before we arrive. Delivered for press and social."
  );

  return (
    <>
      <header className="hero-dark">
        <div className="container">
          <Reveal as="p" className="kicker">Events &amp; Activations · Perth, Western Australia</Reveal>
          <Reveal as="h1" delay={1}>
            Perth event photography.<br />We know the brief before we show up.
          </Reveal>
          <Reveal as="p" className="hero-sub" delay={2}>
            Most event photographers point a camera at things and hope for
            the best. We arrive knowing your agenda, your key people, and
            exactly what the imagery needs to do after the event. Corporate
            events, community gatherings, launches and award nights, covered
            properly.
          </Reveal>
        </div>
      </header>

      <div className="container">
        <section className="svc-sec" id="corporate">
          <Reveal as="h2">Corporate event photography in Perth</Reveal>
          <Reveal as="p" className="body" delay={1}>
            Award nights, conferences, product launches, brand activations.
            We show up knowing the agenda, briefed on your key guests, your
            award categories, and the channels the imagery will live on. The
            result is a gallery where everything is usable, not just the
            lucky shots.
          </Reveal>
          <Reveal delay={2}>
            <ul className="inc-list">
              <li>Pre-event briefing and shot list planning</li>
              <li>Full coverage from arrival to close</li>
              <li>Press-ready, social-ready and internal comms formats</li>
              <li>Delivered within 5 business days</li>
              <li>Multi-photographer crew available for large-scale events</li>
            </ul>
            <div className="scope-box">
              Priced by scope: event scale, coverage hours, crew size. Tell us
              about your event and we'll respond with a proposal within 48
              hours.
            </div>
            <Link to="/contact?type=corporate" className="text-link">Tell us about your event →</Link>
          </Reveal>
        </section>

        <section className="svc-sec" id="community">
          <Reveal as="h2">Community event photography in Perth</Reveal>
          <Reveal as="p" className="body" delay={1}>
            Perth has some of the most active community organisations in
            Australia: multicultural festivals, charity fundraisers, sporting
            clubs, cultural celebrations and neighbourhood events. We
            photograph community events with the same professionalism as any
            corporate event, because the people in them deserve exactly that.
          </Reveal>
          <Reveal delay={2}>
            <TagCloud tags={["Multicultural festivals", "Charity fundraisers", "Cultural celebrations", "Eid · Diwali · Lunar New Year", "Sporting clubs", "School events", "ANZAC & civic events", "Not-for-profit events"]} />
            <div className="scope-box">
              Priced by scope. Tell us about your community event and we'll
              work out what makes sense.
            </div>
            <Link to="/contact?type=community" className="text-link">Tell us about your event →</Link>
          </Reveal>
        </section>

        <section className="svc-sec" id="launches">
          <Reveal as="h2">Product launches and brand activations in Perth</Reveal>
          <Reveal as="p" className="body" delay={1}>
            A launch gets one day. The imagery from that day lasts a lot
            longer. We develop a visual approach before the day, with key
            shots planned and objectives agreed, so every moment that matters
            gets captured and every deliverable is usable for press and
            social from day one.
          </Reveal>
          <Reveal delay={2}>
            <div className="scope-box">
              Priced by scope. Share your brief and we'll respond within 48
              hours.
            </div>
            <Link to="/contact?type=launch" className="text-link">Tell us about your launch →</Link>
          </Reveal>
        </section>

        <section className="svc-sec" id="awards">
          <Reveal as="h2">Award night photography in Perth</Reveal>
          <Reveal as="p" className="body" delay={1}>
            From the arrivals and cocktail hour through to the presentations
            and the after-party. We're briefed on your award categories and
            key guests before we walk in the door. The gallery we deliver
            covers every moment worth covering, and nothing that isn't.
          </Reveal>
          <Reveal delay={2}>
            <TagCloud tags={["Crown Perth", "Perth Convention Centre", "Optus Stadium", "The Westin Perth", "QT Perth", "Fraser's Kings Park", "Your venue"]} />
            <div className="scope-box">
              Priced by scope: evening duration, crew size. Proposal within 48
              hours.
            </div>
            <Link to="/contact?type=awards" className="text-link">Tell us about your awards night →</Link>
          </Reveal>
        </section>
      </div>

      <CtaStrip
        title="Tell us about your Perth event."
        sub="We'll respond with a scope and proposal within 48 hours."
        actions={<Link to="/contact?type=corporate" className="btn coral">Get a quote →</Link>}
      />
    </>
  );
}
