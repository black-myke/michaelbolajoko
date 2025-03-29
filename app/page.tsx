import Header from "./component/header";
import Hero from "./component/hero";
import About from "./component/about"
import Contact from "./component/contact"
import Skills from "./component/skills"
import Projects from "./component/projects"
import Footer from "./component/footer"


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}