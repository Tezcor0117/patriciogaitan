import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  language: 'EN' | 'ES';
  toggleLanguage: () => void;
}

export default function Header({ language, toggleLanguage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = {
    EN: [
      { name: 'Home', to: '/' },
      { name: 'About', to: '/sobre-mi' },
      { name: 'Projects', to: '/proyectos' },
      { name: 'Certificates', to: '/certificados' }
    ],
    ES: [
      { name: 'Inicio', to: '/' },
      { name: 'Sobre mí', to: '/sobre-mi' },
      { name: 'Proyectos', to: '/proyectos' },
      { name: 'Certificados', to: '/certificados' }
    ]
  };

  // 📧 Aquí defines tu correo electrónico
  const myEmail = "patricioi170506@gmail.com";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0">
            <Link className="text-xl font-bold text-slate-800 tracking-tight" to="/">
              Patricio Iván <span className="text-slate-500 font-medium">Gaitán Vaca</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks[language].map((link) => (
              <Link 
                key={link.name}
                to={link.to} 
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={toggleLanguage}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              {language === 'EN' ? 'ES' : 'EN'}
            </button>
            
            {/* BOTÓN DESKTOP: Etiqueta <a> con mailto: */}
            <a 
              href={`mailto:${myEmail}`}
              className="inline-flex items-center justify-center bg-slate-800 text-white text-sm font-medium rounded-xl px-5 py-2.5 hover:bg-slate-700 transition-colors shadow-sm"
            >
              {language === 'EN' ? 'Contact Me' : 'Contáctame'}
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleLanguage} className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
              {language === 'EN' ? 'ES' : 'EN'}
            </button>
            <button onClick={toggleMenu} className="text-slate-600 hover:text-slate-900 focus:outline-none">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-sm">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navLinks[language].map((link) => (
              <Link 
                key={link.name}
                to={link.to} 
                onClick={toggleMenu}
                className="block text-slate-600 hover:text-slate-900 font-medium text-base py-2"
              >
                {link.name}
              </Link>
            ))}
            
            {/* BOTÓN MOBILE: Etiqueta <a> con mailto: */}
            <div className="pt-4">
              <a 
                href={`mailto:${myEmail}`}
                onClick={toggleMenu}
                className="block w-full text-center bg-slate-800 text-white font-medium rounded-xl px-5 py-3 shadow-sm"
              >
                {language === 'EN' ? 'Contact Me' : 'Contáctame'}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}