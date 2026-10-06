import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav, Footer, ScrollManager } from "./components/shared.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Family from "./pages/Family.jsx";
import Milestones from "./pages/Milestones.jsx";
import Events from "./pages/Events.jsx";
import Pricing from "./pages/Pricing.jsx";
import Studio from "./pages/Studio.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/family" element={<Family />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/events" element={<Events />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
