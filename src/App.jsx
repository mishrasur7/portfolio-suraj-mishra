import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

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
    </main>
  )
}
