import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capacidades from "./components/Capacidades";
import SobreMi from "./components/SobreMi";
import FotosMias from "./components/FotosMias";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Capacidades />
      <SobreMi />
      <FotosMias />
      
      {/* Más secciones próximamente */}
      <div className="section bg-gray-50 dark:bg-dark-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">🚧 Más secciones próximamente...</h2>
          <p className="text-gray-600 dark:text-gray-400">
            ¡Vamos avanzando brutal! 🔥
          </p>
        </div>
      </div>
    </main>
  );
}