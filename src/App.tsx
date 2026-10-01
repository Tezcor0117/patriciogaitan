import { useState } from 'react';
import Header from './components/Header';
// Importaremos estas secciones conforme las vayamos construyendo
// import Hero from './sections/Hero';
// import About from './sections/About';
// import Portfolio from './sections/Portfolio';
// import Certificates from './sections/Certificates';

function App() {
  // Estado simple para manejar el idioma (Inglés por defecto para MITACS)
  const [language, setLanguage] = useState<'EN' | 'ES'>('EN');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'EN' ? 'ES' : 'EN'));
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800 antialiased selection:bg-slate-800 selection:text-white flex flex-col">
      {/* HEADER FIJO */}
      <Header language={language} toggleLanguage={toggleLanguage} />

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-grow">
        {/* Aquí iremos insertando los componentes modulares */}
        <section id="hero" className="min-h-[80vh] flex items-center justify-center border-b border-slate-200">
          <p className="text-slate-500">Hero Section (Coming soon...)</p>
        </section>
        
        <section id="about" className="min-h-[50vh] flex items-center justify-center border-b border-slate-200">
          <p className="text-slate-500">About Me (Coming soon...)</p>
        </section>

        <section id="portfolio" className="min-h-[50vh] flex items-center justify-center border-b border-slate-200">
          <p className="text-slate-500">Portfolio (Coming soon...)</p>
        </section>

        <section id="certificates" className="min-h-[50vh] flex items-center justify-center">
          <p className="text-slate-500">Certificates (Coming soon...)</p>
        </section>
      </main>

      {/* FOOTER BÁSICO */}
      <footer className="py-8 bg-white border-t border-slate-200 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Patricio Gaitan. {language === 'EN' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
        </p>
      </footer>
    </div>
  );
}

export default App;