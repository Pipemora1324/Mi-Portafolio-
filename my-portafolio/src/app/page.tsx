import Hero from "./components/Hero";
import Capacidades from "./components/Capacidades";
import SobreMi from "./components/SobreMi";
import FotosMias from "./components/FotosMias";
import MisProyectos from "./components/MisProyectos";
import MisServicios from "./components/MisServicios";
import Testimonios from "./components/Testimonios";
import HabilidadesBlandas from "./components/HabilidadesBlandas";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Capacidades />
      <SobreMi />
      <FotosMias />
      <MisProyectos />
      <MisServicios />
      <Testimonios />
      <HabilidadesBlandas />
    </main>
  );
}
