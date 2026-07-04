import { Nav, Hero } from "./components/Hero.jsx";
import { Statement, Experience, Portfolio, Services } from "./components/Sections.jsx";
import { Contact, Footer } from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Statement />
        <Experience />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
