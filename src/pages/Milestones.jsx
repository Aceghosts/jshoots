import { Link } from "react-router-dom";
import { Reveal, PriceTable, TagCloud, CtaStrip, usePageMeta } from "../components/shared.jsx";

export default function Milestones() {
  usePageMeta(
    "Wedding Photographer Perth | jshoots Photography Studio",
    "Perth photographer for weddings, birthdays, graduation and cultural celebrations. On-location across Perth. From $299. jshoots, the moments worth keeping."
  );

  return (
    <>
      <header className="hero-dark">
        <div className="container">
          <Reveal as="p" className="kicker">Weddings, Birthdays &amp; Milestones · Perth, Western Australia</Reveal>
          <Reveal as="h1" delay={1}>
            The days worth <em>keeping forever.</em>
          </Reveal>
          <Reveal as="p" className="hero-sub" delay={2}>
            Weddings, birthdays, graduation and christenings. All the
            occasions that deserve more than someone's phone camera.
            On-location across Perth.
          </Reveal>
        </div>
      </header>

      <div className="container">
        <section className="svc-sec" id="weddings">
          <Reveal as="h2">Wedding photography in Perth</Reveal>
          <Reveal as="p" className="body" delay={1}>
            The thing about wedding photography is that there are no retakes.
            So we show up prepared: knowing the timeline, knowing the venue,
            knowing the shots that matter most to you. From quiet Swan Valley
            elopements to full days in the Perth Hills, we document your
            wedding the way it actually happened, not the way a mood board
            said it should.
          </Reveal>
          <Reveal delay={2}>
            <PriceTable
              rows={[
                { name: "Engagement session", detail: "1.5 hours · 1 to 2 locations · 40 edited images · perfect for save-the-dates", price: "from $449" },
                { name: "Elopement", detail: "Up to 2 hours · ceremony and couple portraits · 60 edited images · gallery in 3 weeks", price: "from $1,800" },
                { name: "Half-day wedding", detail: "Up to 5 hours · ceremony, portraits and reception start · 150+ edited images", price: "from $2,400" },
                { name: "Full day wedding", detail: "Up to 8 hours · getting ready through to first dances · 300+ edited images", price: "from $3,200" },
              ]}
            />
            <Link to="/contact?type=wedding" className="text-link">Book a wedding session →</Link>
          </Reveal>
        </section>

        <section className="svc-sec" id="birthdays">
          <Reveal as="h2">Birthday photography in Perth</Reveal>
          <Reveal as="p" className="body" delay={1}>
            Every birthday is worth a photo. But some of them deserve proper
            documentation: the first one, the big round numbers, the ones
            people fly in for. We cover kids' cake smash sessions, big
            backyard parties, and milestone 21sts to 60th and beyond with the
            same energy and attention to detail. Candid, colourful, and
            delivered before the birthday's a distant memory.
          </Reveal>
          <Reveal delay={2}>
            <PriceTable
              rows={[
                { name: "Kids birthday & cake smash", detail: "1 to 1.5 hours · up to 30 guests · 35 edited images · at your venue or home", price: "from $349" },
                { name: "Milestone birthday 21st to 60th+", detail: "Any size · 2 to 3 hours · 60 edited images · formal portraits and candid party coverage", price: "from $549" },
              ]}
            />
            <Link to="/contact?type=birthday" className="text-link">Book a birthday session →</Link>
          </Reveal>
        </section>

        <section className="svc-sec" id="graduation">
          <Reveal as="h2">Graduation photography in Perth</Reveal>
          <Reveal as="p" className="body" delay={1}>
            You spent years on this. Don't let the photos be an afterthought.
            Cap and gown portraits, family groups, campus or wherever you want
            to shoot. Done properly, delivered within a week. Studio available
            if you want something clean and controlled.
          </Reveal>
          <Reveal delay={2}>
            <div className="callout">
              <strong>Looking for a graduation gift that isn't a card?</strong>{" "}
              jshoots gift vouchers are available for any session amount. Tell
              us the occasion when you get in touch and we'll sort the rest.
            </div>
            <TagCloud tags={["UWA", "Curtin University", "ECU", "Murdoch University", "Notre Dame", "Your campus"]} />
            <PriceTable
              rows={[
                { name: "Graduate portrait session", detail: "1 hour · campus or chosen location · 30 edited images · individual and with family", price: "from $299" },
                { name: "Graduation day coverage", detail: "2 hours · ceremony, portraits and family groups · 50 edited images", price: "from $449" },
              ]}
            />
            <Link to="/contact?type=graduation" className="text-link">Book a graduation session →</Link>
          </Reveal>
        </section>

        <section className="svc-sec" id="celebrations">
          <Reveal as="h2">Christenings and cultural celebrations in Perth</Reveal>
          <Reveal as="p" className="body" delay={1}>
            Every culture marks the important moments differently. We've
            photographed christenings, naming ceremonies, communions, Eid
            celebrations, Diwali gatherings, and everything in between. We
            approach every one with genuine care for the occasion and the
            people in it. Nothing staged. Nothing rushed.
          </Reveal>
          <Reveal delay={2}>
            <PriceTable
              rows={[
                { name: "Christening & celebration coverage", detail: "2 hours · ceremony and gathering · 50 edited images · all traditions respected", price: "from $499" },
              ]}
            />
            <TagCloud tags={["Christenings", "Naming ceremonies", "Communions", "Confirmations", "Gender reveals", "Baby showers", "Eid", "Diwali", "Cultural festivals"]} />
            <Link to="/contact?type=celebration" className="text-link">Book your celebration →</Link>
          </Reveal>
        </section>

        <section className="svc-sec">
          <Reveal as="h2" style={{ fontSize: "24px" }}>Where we shoot</Reveal>
          <Reveal delay={1}>
            <TagCloud tags={["Swan Valley", "Perth Hills", "Fremantle", "Cottesloe Beach", "Kings Park", "Elizabeth Quay", "Rottnest Island", "Your venue"]} />
          </Reveal>
        </section>
      </div>

      <CtaStrip
        title="Whatever the occasion."
        sub="Tell us about it. Back to you within one business day."
        actions={<Link to="/contact" className="btn coral">Book a session →</Link>}
      />
    </>
  );
}
