import { useState } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Certificates from './sections/Certificates';

function App() {
  const [language, setLanguage] = useState<'EN' | 'ES'>('EN');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'EN' ? 'ES' : 'EN'));
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800 antialiased selection:bg-slate-800 selection:text-white flex flex-col">
      <Header language={language} toggleLanguage={toggleLanguage} />

      <main className="flex-grow">
        <Hero language={language} />
        <About language={language} />
        <Portfolio language={language} />
        <Certificates language={language} />
      </main>

      <footer className="py-8 bg-white border-t border-slate-200 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Patricio Gaitan. {language === 'EN' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
        </p>
      </footer>
    </div>
  );
}

export default App;