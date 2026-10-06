import { Link } from "react-router-dom";
import { Reveal, PriceCard, CtaStrip, usePageMeta } from "../components/shared.jsx";

const FAMILY_CARDS = [
  { cat: "Portrait", name: "Portrait Session", desc: "Solo portraits, LinkedIn headshots, personal brand. On-location or studio.", price: "$299", detail: "from · 45 mins · 20 edited images", inc: ["Pre-shoot style consult", "LinkedIn crop included", "Gallery in 5 days"], to: "/contact?type=portraits", cta: "Book portrait →" },
  { cat: "Personal Brand", name: "Brand & Headshots", desc: "Two looks, formal and relaxed, in one session. LinkedIn, your website, press.", price: "$399", detail: "from · 1 hour · 30 edited images", inc: ["2 looks: formal and relaxed", "LinkedIn, web and press formats", "Studio hire available"], feat: true, badge: "Popular", to: "/contact?type=portraits", cta: "Book brand session →" },
  { cat: "Family", name: "Family Portrait Session", desc: "On-location across Perth. Kings Park, the beach, your backyard.", price: "$449", detail: "from · 1 hour · up to 5 people · 35 images", inc: ["Group and individual shots", "Candid and posed", "Gallery in 10 days"], to: "/contact?type=family", cta: "Book family →" },
  { cat: "Extended Family", name: "Extended Family", desc: "Reunions, multigenerational, Christmas gatherings. A structured shot list so nobody gets missed.", price: "$649", detail: "from · 1.5 to 2 hours · up to 15 people · 60 images", inc: ["Structured shot list", "All group combinations", "Gallery in 10 days"], to: "/contact?type=family", cta: "Book extended →" },
  { cat: "Maternity", name: "Maternity Session", desc: "Best at 28 to 36 weeks. On-location or at your home. Golden hour timing recommended.", price: "$349", detail: "from · 1 hour · 30 edited images", inc: ["Solo, partner and family", "Wardrobe guidance", "Gallery in 7 days"], to: "/contact?type=newborn", cta: "Book maternity →" },
  { cat: "Newborn", name: "Newborn Session", desc: "They change faster than you think. We come to you, at your home, at your baby's pace.", price: "$449", detail: "from · up to 2 hours · 40 edited images", inc: ["Baby, parents and siblings", "Completely at baby's pace", "Gallery in 10 days"], feat: true, badge: "Best value", to: "/contact?type=newborn", cta: "Book newborn →" },
  { cat: "First Year", name: "Baby's First Year", desc: "3 sessions bundled: newborn, sitter and cake smash. Save $197 vs booking separately.", price: "$999", detail: "from · 3 sessions · 105 images total", inc: ["Newborn (0 to 2 weeks)", "Sitter (6 to 8 months)", "Cake smash (12 months)"], to: "/contact?type=newborn", cta: "Book first year →" },
  { cat: "Couples", name: "Couples Session", desc: "Engagements, anniversaries, or just because. The sessions where you forget someone's taking photos.", price: "$449", detail: "from · 1.5 hours · 1 to 2 locations · 40 images", inc: ["Location scouting", "Golden hour timing", "Outfit change welcome"], to: "/contact?type=couples", cta: "Book couples →" },
  { cat: "Large Group", name: "Large Group Session", desc: "15+ people. Reunions, large gatherings, multi-family events.", price: "$899", detail: "from · 2 to 3 hours · 80+ images", inc: ["Coordination call included", "Full shot list", "Gallery in 10 days"], to: "/contact?type=family", cta: "Book large group →" },
];

const WEDDING_CARDS = [
  { cat: "Engagement", name: "Engagement Session", desc: "Save-the-dates, or just because you're engaged.", price: "$449", detail: "from · 1.5 hours · 40 images", to: "/contact?type=wedding" },
  { cat: "Wedding", name: "Elopement", desc: "Intimate. Just the two of you. Every moment covered.", price: "$1,800", detail: "from · up to 2 hours · 60 images", to: "/contact?type=wedding", cta: "Enquire →" },
  { cat: "Wedding", name: "Half-Day Wedding", desc: "Ceremony, portraits and reception start. Perfect for smaller weddings.", price: "$2,400", detail: "from · up to 5 hours · 150+ images", feat: true, badge: "Popular", to: "/contact?type=wedding", cta: "Enquire →" },
  { cat: "Wedding", name: "Full Day Wedding", desc: "Getting ready through to first dances. There are no retakes, so we cover it all.", price: "$3,200", detail: "from · up to 8 hours · 300+ images", to: "/contact?type=wedding", cta: "Enquire →" },
];

const MILESTONE_CARDS = [
  { cat: "Birthday", name: "Kids Birthday & Cake Smash", desc: "1st birthdays through to kids parties. Candid, colourful, delivered fast.", price: "$349", detail: "from · 1 to 1.5 hours · 35 images", to: "/contact?type=birthday" },
  { cat: "Birthday", name: "Milestone 21st to 60th+", desc: "The birthdays people actually talk about. Any size, any venue.", price: "$549", detail: "from · 2 to 3 hours · 60 images", feat: true, badge: "Milestone", to: "/contact?type=birthday" },
  { cat: "Graduation", name: "Graduate Portrait", desc: "You spent years on this. Don't let the photos be an afterthought.", price: "$299", detail: "from · 1 hour · 30 images", to: "/contact?type=graduation" },
  { cat: "Graduation", name: "Graduation Day Coverage", desc: "Ceremony, portraits and family groups. The whole day covered.", price: "$449", detail: "from · 2 hours · 50 images", to: "/contact?type=graduation" },
  { cat: "Christening", name: "Christening & Celebration", desc: "Every tradition treated the way it deserves. Nothing staged. Nothing rushed.", price: "$499", detail: "from · 2 hours · 50 images", to: "/contact?type=celebration" },
  { cat: "Anniversary", name: "Anniversary & Vow Renewal", desc: "Golden hour. Romantic editorial style. Outfit change welcome.", price: "$549", detail: "from · 1.5 hours · 45 images", to: "/contact?type=couples" },
];

const ADDONS = [
  { name: "Extra editing", desc: "Additional retouched images beyond package allowance", price: "+$80" },
  { name: "Rush delivery", desc: "Gallery within 48 hours of shoot day", price: "+$120" },
  { name: "Second location", desc: "Additional Perth location within the same session", price: "+$100" },
  { name: "Extended travel", desc: "Beyond 30km from Perth CBD, per km", price: "+$0.85/km" },
  { name: "Print package", desc: "Curated print set. Sizes and finishes per session type", price: "+$149" },
  { name: "Second photographer", desc: "For large events, weddings or complex sessions", price: "+$250" },
  { name: "Social media reel", desc: "Short-form vertical video edit, ready to post", price: "+$180" },
  { name: "Studio hire", desc: "Perth studio booked for portrait sessions", price: "POA" },
  { name: "Commercial usage rights", desc: "Extended licence for advertising or editorial use", price: "POA" },
];

const POLICIES = [
  { h: "30% deposit to confirm", b: "Non-refundable. Remainder due 7 days before your session. No booking is confirmed until the deposit is received." },
  { h: "One free reschedule", b: "With at least 48 hours notice. Changes within 48 hours may incur a rebooking fee. This protects both of us." },
  { h: "Bad weather, no penalty", b: "Perth weather is beautiful but not always cooperative. If your outdoor session is weather-impacted, we'll reschedule at no cost." },
  { h: "Sick children, no penalty", b: "Let us know as early as possible and we'll reschedule with no penalty. Family sessions only work when everyone's feeling good." },
];

export default function Pricing() {
  usePageMeta(
    "Photography Pricing Perth | jshoots Photography Studio",
    "Transparent photography pricing in Perth. Portraits from $299. Family sessions from $449. Weddings from $1,800. See all session types and add-ons."
  );

  return (
    <>
      <header className="hero-dark" style={{ padding: "64px 0 56px" }}>
        <div className="container">
          <Reveal as="p" className="kicker">Pricing</Reveal>
          <Reveal as="h1" delay={1} style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
            No surprises.<br />Just honest prices.
          </Reveal>
          <Reveal as="p" className="hero-sub" delay={2}>
            Every session has a starting price. Exact investment confirmed
            once we know your specifics. Events are scope-based, so enquire
            separately.
          </Reveal>
        </div>
      </header>

      <section className="sec">
        <div className="container">
          <Reveal as="p" className="pc-group-lbl">Family &amp; Portraits</Reveal>
          <div className="pc-grid g3">
            {FAMILY_CARDS.map((c, i) => (
              <Reveal key={c.name} delay={i % 3}><PriceCard c={c} /></Reveal>
            ))}
          </div>

          <Reveal as="p" className="pc-group-lbl">Weddings</Reveal>
          <div className="pc-grid g4">
            {WEDDING_CARDS.map((c, i) => (
              <Reveal key={c.name} delay={i % 4}><PriceCard c={c} /></Reveal>
            ))}
          </div>

          <Reveal as="p" className="pc-group-lbl">Birthdays, Graduation &amp; Celebrations</Reveal>
          <div className="pc-grid g3">
            {MILESTONE_CARDS.map((c, i) => (
              <Reveal key={c.name} delay={i % 3}><PriceCard c={c} /></Reveal>
            ))}
          </div>

          <Reveal as="p" className="pc-group-lbl">Optional add-ons, all sessions</Reveal>
          <div className="addon-grid">
            {ADDONS.map((a, i) => (
              <Reveal key={a.name} delay={i % 3}>
                <div className="ac">
                  <div className="ac-name">{a.name}</div>
                  <div className="ac-desc">{a.desc}</div>
                  <div className="ac-price">{a.price}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal as="p" className="pc-group-lbl">Booking &amp; cancellation</Reveal>
          <div className="policy-grid">
            {POLICIES.map((p, i) => (
              <Reveal key={p.h} delay={i % 2}>
                <div className="pol">
                  <div className="pol-h">{p.h}</div>
                  <div className="pol-b">{p.b}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Ready to book?"
        actions={
          <>
            <Link to="/contact" className="btn">Book a session →</Link>
            <Link to="/contact?type=corporate" className="btn coral">Enquire about events →</Link>
          </>
        }
      />
    </>
  );
}
