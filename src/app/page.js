import Navbar from "./Components/NavBar";
import About from "./Components/About";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* About Section */}
        <section id="about">
          <About />
        </section>
        <section id="experience" className="h-screen flex items-center justify-center bg-gray-100">
          <h1>Experience</h1>
        </section>
        <section id="skills" className="h-screen flex items-center justify-center bg-gray-200">
          <h1>Skills</h1>
        </section>
        <section>
          <Projects />
        </section>
        <section id="blog" className="h-screen flex items-center justify-center bg-gray-400">
          <h1>Blog</h1>
        </section>
      </main>
    </>
  );
}