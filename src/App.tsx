import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";

import backgroundimagemain from "./assets/backgroundmain.png";

import "./App.css";

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

      <Appointment />

      <Footer />
    </div>
  );
}