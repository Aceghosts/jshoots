import { Link } from "react-router-dom";
import { Reveal, PriceTable, TagCloud, CtaStrip, usePageMeta } from "../components/shared.jsx";

export default function Family() {
  usePageMeta(
    "Family Photographer Perth | jshoots Photography Studio",
    "Perth family photographer for portraits, newborn, couples and personal sessions. We come to you, wherever that is. From $299. Book jshoots today."
  );

  return (
    <>
      <header className="hero-dark">
        <div className="container">
          <Reveal as="p" className="kicker">Family &amp; Portraits · Perth, Western Australia</Reveal>
          <Reveal as="h1" delay={1}>
            Perth family photographer.<br /><em>We come to you.</em>
          </Reveal>
          <Reveal as="p" className="hero-sub" delay={2}>
            No studio to book. No awkward location to find. Just tell us who's
            coming and where you feel comfortable, and we'll make sure the
            photos actually look like your family, not a stock image of
            someone else's.
          </Reveal>
        </div>
      </header>

      <div className="container">
        <section className="svc-sec" id="family">
          <Reveal as="h2">Family portrait sessions in Perth</Reveal>
          <Reveal as="p" className="body" delay={1}>
            Family sessions run at your pace, not ours. We'll suggest a spot
            that works: Kings Park at golden hour, the beach on a weekday
            morning, or your own backyard if that's where you're most
            yourselves. Then we shoot around whatever actually happens. Kids
            who won't sit still. Dogs who will. Family members who hate having
            their photo taken. All of it.
          </Reveal>
          <Reveal delay={2}>
            <PriceTable
              rows={[
                { name: "Family portrait session", detail: "Up to 5 people · 1 hour · 35 edited images · 1 Perth location", price: "from $449" },
                { name: "Extended family session", detail: "Up to 15 people · 1.5 to 2 hours · 60 edited images · structured shot list", price: "from $649" },
                { name: "Large group session", detail: "15+ people · 2 to 3 hours · 80+ edited images · coordination call included", price: "from $899" },
              ]}
              note="Travel within 30km of Perth CBD included. Extended travel available, just ask."
            />
            <Link to="/contact?type=family" className="text-link">Book a family session →</Link>
          </Reveal>
        </section>

        <section className="svc-sec" id="portraits">
          <Reveal as="h2">Headshots and personal portraits in Perth</Reveal>
          <Reveal as="p" className="body" delay={1}>
            Most headshots look like a passport photo that cost too much.
            Yours won't. Whether you need a clean corporate shot, a LinkedIn
            profile that actually looks like you, or a personal brand session
            that captures what you're about, we do it on-location across
            Perth, or in a studio if you want the controlled backdrop.
          </Reveal>
          <Reveal delay={2}>
            <div className="callout">
              <strong>On-location or Perth studio, your choice.</strong> Studio
              hire is included in your session quote. Just mention it when you
              book.
            </div>
            <PriceTable
              rows={[
                { name: "Individual portrait session", detail: "On-location or studio · 45 minutes · 20 edited images · LinkedIn crop included", price: "from $299" },
                { name: "Personal brand & headshots", detail: "1 hour · 2 looks · 30 edited images · informal and formal · LinkedIn and web formats", price: "from $399" },
              ]}
            />
            <Link to="/contact?type=portraits" className="text-link">Book a portrait session →</Link>
          </Reveal>
        </section>

        <section className="svc-sec" id="newborn">
          <Reveal as="h2">Newborn and maternity photography in Perth</Reveal>
          <Reveal as="p" className="body" delay={1}>
            They change faster than you think. We come to you, at your home,
            in the first two weeks, completely at your baby's pace. If someone
            needs feeding, we wait. If someone needs changing, we wait. If
            someone is just not in the mood, we wait. The photos we deliver
            show how small they actually were, and how the first weeks
            actually felt.
          </Reveal>
          <Reveal delay={2}>
            <PriceTable
              rows={[
                { name: "Maternity session", detail: "1 hour · 28 to 36 weeks ideal · 30 edited images · solo, partner and family", price: "from $349" },
                { name: "Newborn session", detail: "Up to 2 hours · first 2 weeks · 40 edited images · at your home", price: "from $449" },
                { name: "Baby's first year package", detail: "3 sessions: newborn, sitter at 6 to 8 months, cake smash · 105 images total · save $197", price: "from $999" },
              ]}
            />
            <Link to="/contact?type=newborn" className="text-link">Book a newborn session →</Link>
          </Reveal>
        </section>

        <section className="svc-sec" id="couples">
          <Reveal as="h2">Couples and engagement photography in Perth</Reveal>
          <Reveal as="p" className="body" delay={1}>
            The best couples sessions are the ones where you forget someone's
            taking photos. We find the right spot in Perth, we time it around
            golden hour, and we take care of the rest. You can just be you,
            and we'll do our job.
          </Reveal>
          <Reveal delay={2}>
            <PriceTable
              rows={[
                { name: "Couples session", detail: "1.5 hours · 1 to 2 Perth locations · 40 edited images · outfit change welcome", price: "from $449" },
                { name: "Anniversary & vow renewal", detail: "1.5 hours · golden hour · romantic editorial style · 45 edited images", price: "from $549" },
              ]}
            />
            <Link to="/contact?type=couples" className="text-link">Book a couples session →</Link>
          </Reveal>
        </section>

        <section className="svc-sec">
          <Reveal as="h2" style={{ fontSize: "24px" }}>Where we shoot across Perth</Reveal>
          <Reveal delay={1}>
            <TagCloud tags={["Cottesloe Beach", "Kings Park", "South Perth", "Fremantle", "Scarborough", "Swan River", "Elizabeth Quay", "Your home", "Your backyard"]} />
          </Reveal>
        </section>
      </div>

      <CtaStrip
        title="Ready to book a family session in Perth?"
        sub="Tell us who's coming and we'll sort the rest."
        actions={<Link to="/contact?type=family" className="btn coral">Book a session →</Link>}
      />
    </>
  );
}
