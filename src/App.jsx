import { Nav, Hero } from "./components/Hero.jsx";
import { Statement, Experience, Portfolio, Gallery, Services } from "./components/Sections.jsx";
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
        <Gallery />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
