import Navbar from "./Components/NavBar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Portfolio from "./Pages/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* About Section */}
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        {/* <section>
          <Projects />
        </section> */}
        {/* <section id="blog" className="h-screen flex items-center justify-center bg-gray-400">
          <h1>Blog</h1>
        </section> */}
      </main>
    </>
  );
}