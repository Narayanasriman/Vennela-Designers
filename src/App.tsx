import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import backgroundimagemain from "./assets/backgroundmain.png";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";


import './App.css';
export default function App() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${backgroundimagemain})` }}
    >
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
     
    </div>
  );
}



