import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Reveal, usePageMeta } from "../components/shared.jsx";

const TYPES = [
  "Family portraits or gathering",
  "Headshots or personal portraits",
  "Newborn or maternity",
  "Couples or engagement",
  "Wedding or elopement",
  "Birthday or milestone",
  "Graduation",
  "Christening or cultural celebration",
  "Corporate or community event",
  "Product launch or brand activation",
  "Award night or gala",
  "Something else",
];

const TYPE_PARAM = {
  family: TYPES[0],
  portraits: TYPES[1],
  newborn: TYPES[2],
  couples: TYPES[3],
  wedding: TYPES[4],
  birthday: TYPES[5],
  graduation: TYPES[6],
  celebration: TYPES[7],
  corporate: TYPES[8],
  community: TYPES[8],
  launch: TYPES[9],
  awards: TYPES[10],
  other: TYPES[11],
};

export default function Contact() {
  usePageMeta(
    "Contact | jshoots Photography Studio Perth",
    "Book a photography session in Perth. Tell us what you're planning and we'll get back to you within one business day."
  );

  const [params] = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: TYPE_PARAM[params.get("type")] || TYPES[0],
    date: "",
    message: "",
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const send = () => {
    if (!form.name || !form.email) return;
    const subject = encodeURIComponent(`Enquiry: ${form.type}`);
    const body = encodeURIComponent(
      `Hi jshoots,\n\nName: ${form.name}\nEmail: ${form.email}\nBooking: ${form.type}\nRough date: ${form.date || "TBC"}\n\nA bit more detail:\n${form.message}\n`
    );
    window.location.href = `mailto:hello@jshoots.com.au?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <header className="hero-dark" style={{ padding: "64px 0 56px" }}>
        <div className="container">
          <Reveal as="p" className="kicker">Contact</Reveal>
          <Reveal as="h1" delay={1} style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
            Let's sort it.
          </Reveal>
          <Reveal as="p" className="hero-sub" delay={2}>
            Fill in the form and we'll get back to you within one business
            day. No forms required if you'd prefer to just email.
          </Reveal>
        </div>
      </header>

      <section className="sec">
        <div className="container contact-grid">
          <Reveal as="form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="fname">Your name</label>
            <input id="fname" type="text" placeholder="Your name" value={form.name} onChange={set("name")} required />
            <label htmlFor="femail">Email address</label>
            <input id="femail" type="email" placeholder="you@email.com" value={form.email} onChange={set("email")} required />
            <label htmlFor="ftype">What are you booking?</label>
            <select id="ftype" value={form.type} onChange={set("type")}>
              {TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
            <label htmlFor="fdate">Rough date or timeframe (optional)</label>
            <input id="fdate" type="text" placeholder="e.g. mid-November" value={form.date} onChange={set("date")} />
            <label htmlFor="fmsg">Tell us a bit more</label>
            <textarea id="fmsg" placeholder="Where, who, and what's the occasion?" value={form.message} onChange={set("message")} />
            <button className="btn filled" type="button" onClick={send}>Send →</button>
            <p className="form-note">
              Opens a pre-filled email to hello@jshoots.com.au. Nothing is
              stored on this page.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div className="ci">
              <h3>Or just email us</h3>
              <div className="ci-row">
                <span className="ci-key">Email</span>
                <a href="mailto:hello@jshoots.com.au">hello@jshoots.com.au</a>
              </div>
              <div className="ci-row">
                <span className="ci-key">Based in</span>
                Perth, Western Australia
              </div>
              <div className="ci-row">
                <span className="ci-key">Response</span>
                Within one business day
              </div>
              <div className="ci-row">
                <span className="ci-key">Social</span>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>{" · "}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>{" · "}
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
