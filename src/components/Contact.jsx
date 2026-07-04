import { useState } from "react";
import { Reveal } from "./shared.jsx";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Family / Portraits",
    date: "",
    message: "",
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const send = () => {
    if (!form.name || !form.email) return;
    const subject = encodeURIComponent(`Enquiry — ${form.type}`);
    const body = encodeURIComponent(
      `Hi jshoots,\n\nName: ${form.name}\nEmail: ${form.email}\nShoot type: ${form.type}\nRough date: ${form.date || "TBC"}\n\nThe plan:\n${form.message}\n`
    );
    window.location.href = `mailto:hello@jshoots.com.au?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <Reveal as="p" className="kicker">Bookings</Reveal>
          <Reveal as="h2" className="display" delay={1}>Ready</Reveal>
          <Reveal as="span" className="script" delay={2}>when you are.</Reveal>
          <Reveal as="p" delay={3}>
            Tell us what you're planning — a rough date and a rough idea is
            plenty. We'll come back with a plan and a quote, usually within a
            day.
          </Reveal>
          <Reveal className="contact-lines" delay={4}>
            <span className="label">Email</span>
            <a href="mailto:hello@jshoots.com.au">hello@jshoots.com.au</a>
            <span className="label">Find us on</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
          </Reveal>
        </div>

        <Reveal as="form" delay={2} onSubmit={(e) => e.preventDefault()}>
          <div className="field-row">
            <div>
              <label htmlFor="fname">Name</label>
              <input id="fname" type="text" placeholder="Your name" value={form.name} onChange={set("name")} required />
            </div>
            <div>
              <label htmlFor="femail">Email</label>
              <input id="femail" type="email" placeholder="you@email.com" value={form.email} onChange={set("email")} required />
            </div>
          </div>
          <div className="field-row">
            <div>
              <label htmlFor="ftype">Shoot type</label>
              <select id="ftype" value={form.type} onChange={set("type")}>
                <option>Family / Portraits</option>
                <option>Wedding / Milestone</option>
                <option>Corporate / Event</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label htmlFor="fdate">Rough date</label>
              <input id="fdate" type="text" placeholder="e.g. mid-September" value={form.date} onChange={set("date")} />
            </div>
          </div>
          <div>
            <label htmlFor="fmsg">The plan</label>
            <textarea id="fmsg" placeholder="Where, who, and what's the occasion?" value={form.message} onChange={set("message")} />
          </div>
          <button className="pill" type="button" onClick={send}>
            Send enquiry ↗
          </button>
          <p className="form-note">
            Opens a pre-filled email to hello@jshoots.com.au — nothing is stored on this page.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <p>© 2026 jshoots — Perth, Western Australia. On-location only.</p>
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
        </div>
      </div>
    </footer>
  );
}
