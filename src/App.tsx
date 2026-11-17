import { LanguageProvider } from "./i18n/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Perfil } from "./components/Perfil";
import { Experiencia } from "./components/Experiencia";
import { Proyectos } from "./components/Proyectos";
import { Educacion } from "./components/Educacion";
import { Habilidades } from "./components/Habilidades";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="bg-glow" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Perfil />
        <Experiencia />
        <Proyectos />
        <Educacion />
        <Habilidades />
        <Contacto />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
