import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AboutMe from "./components/about/AboutMe";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []); 

  return (
    <main>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
