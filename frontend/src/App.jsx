import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Activities from "./sections/Activities";
import Events from "./sections/Events";
import Board from "./sections/Board";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Activities />
        <Events />
        <Board />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
