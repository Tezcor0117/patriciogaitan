import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Certificates from './sections/Certificates';
import ProjectsDeepDive from './pages/ProjectsDeepDive';
import AboutPage from './pages/AboutPage';
import CertificatesPage from './pages/CertificatesPage';

function App() {
  const [language, setLanguage] = useState<'EN' | 'ES'>('EN');
  const toggleLanguage = () => setLanguage((prev) => (prev === 'EN' ? 'ES' : 'EN'));

  // Este es el Home original (Resumen ejecutivo)
  const Home = () => (
    <>
      <Hero language={language} />
      <About language={language} />
      <Portfolio language={language} />
      <Certificates language={language} />
    </>
  );

  return (
    <Router>
      <div className="min-h-screen font-sans bg-slate-50 text-slate-800 antialiased flex flex-col">
        {/* El Header es global y se muestra en todas las rutas */}
        <Header language={language} toggleLanguage={toggleLanguage} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<ProjectsDeepDive language={language} />} />
            <Route path="/certificados" element={<CertificatesPage language={language} />} />
            <Route path="/sobre-mi" element={<AboutPage language={language} />} />
          </Routes>
        </main>

        <footer className="py-8 bg-white border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Patricio Gaitan. {language === 'EN' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;