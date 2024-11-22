import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Navbar from "./components/navbar/Navbar";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []); 

  return (
    <main>
      <Navbar />
      <Skills />
      <Experience />
      <Projects />
    </main>
  )
}
