import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capacidades from "./components/Capacidades";
import SobreMi from "./components/SobreMi";
import FotosMias from "./components/FotosMias";
import MisProyectos from "./components/MisProyectos";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Capacidades />
      <SobreMi />
      <FotosMias />
      <MisProyectos />
      
      <div className="section bg-white dark:bg-dark-950">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Mas secciones proximamente</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Ya casi terminamos
          </p>
        </div>
      </div>
    </main>
  );
}