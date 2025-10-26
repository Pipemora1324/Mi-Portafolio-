import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capacidades from "./components/Capacidades";
import SobreMi from "./components/SobreMi";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Capacidades />
      <SobreMi />
      
      {/* Más secciones próximamente */}
      <div className="section bg-white dark:bg-dark-950">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">🚧 Más secciones próximamente...</h2>
          <p className="text-gray-600 dark:text-gray-400">
            ¡Vamos por más! 🔥
          </p>
        </div>
      </div>
    </main>
  );
}