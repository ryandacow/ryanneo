import Navbar from "./Components/NavBar";
import Hero from "./Pages/Hero";
import About from "./Components/About";
import Portfolio from "./Pages/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
      </main>
    </>
  );
}