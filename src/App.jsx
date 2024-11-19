import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Hero } from "./components/hero/Hero"; 
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []); 

  return (
    <main className='bg-[#0d182e]'>
      <Hero />
      <Skills />
      <Experience />
    </main>
  )
}
