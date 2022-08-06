import { useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Certificate from "./components/Certificate";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Certificate />
      <Footer />
    </div>
  );
}

export default App;
