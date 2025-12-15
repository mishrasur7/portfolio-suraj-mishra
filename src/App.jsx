import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AboutMe from "./components/about/AboutMe";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Certifications from "./components/certifications/Certifications";
import Books from "./components/books/Books";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main className='lg:ml-20'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Books />
      <Contact />
      <Footer />
    </main>
  )
}
