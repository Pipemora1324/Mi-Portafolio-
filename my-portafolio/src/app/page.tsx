import Navbar from "./components/Navbar";
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
      <Navbar />
      <Hero />
      <Capacidades />
      <SobreMi />
      <FotosMias />
      <MisProyectos />
      <MisServicios />
      <Testimonios />
      <HabilidadesBlandas />
      
      <div className="section bg-gray-50 dark:bg-dark-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Solo falta el Footer</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Ya casi terminamos mi bro
          </p>
        </div>
      </div>
    </main>
  );
}