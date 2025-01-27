import Navbar from "./Components/NavBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="about" className="h-screen flex items-center justify-center">
          <h1>About Me</h1>
        </section>
        <section id="experience" className="h-screen flex items-center justify-center bg-gray-100">
          <h1>Experience</h1>
        </section>
        <section id="skills" className="h-screen flex items-center justify-center bg-gray-200">
          <h1>Skills</h1>
        </section>
        <section id="projects" className="h-screen flex items-center justify-center bg-gray-300">
          <h1>Projects</h1>
        </section>
        <section id="blog" className="h-screen flex items-center justify-center bg-gray-400">
          <h1>Blog</h1>
        </section>
      </main>
    </>
  );
}