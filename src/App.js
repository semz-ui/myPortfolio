import "./styles.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Certificate from "./components/Certificate";

function App() {
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
