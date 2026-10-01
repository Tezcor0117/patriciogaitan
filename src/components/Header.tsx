import { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Props para recibir el idioma desde App.tsx
interface HeaderProps {
  language: 'EN' | 'ES';
  toggleLanguage: () => void;
}

export default function Header({ language, toggleLanguage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Diccionario básico temporal para los textos del menú
  const navLinks = {
    EN: [
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#portfolio' },
      { name: 'Certificates', href: '#certificates' }
    ],
    ES: [
      { name: 'Sobre mí', href: '#about' },
      { name: 'Proyectos', href: '#portfolio' },
      { name: 'Certificados', href: '#certificates' }
    ]
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Nombre */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-slate-800 tracking-tight">
              Patricio<span className="text-slate-500 font-medium">Gaitan</span>
            </a>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks[language].map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Acciones Derecha (Idioma y CTA Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={toggleLanguage}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              {language === 'EN' ? 'ES' : 'EN'}
            </button>
            <a 
              href="mailto:tu-correo@ejemplo.com"
              className="inline-flex items-center justify-center bg-slate-800 text-white text-sm font-medium rounded-xl px-5 py-2.5 hover:bg-slate-700 transition-colors shadow-sm"
            >
              {language === 'EN' ? 'Contact Me' : 'Contáctame'}
            </a>
          </div>

          {/* Botón Menú Hamburguesa Mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-md"
            >
              {language === 'EN' ? 'ES' : 'EN'}
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile Desplegable */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-sm">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navLinks[language].map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={toggleMenu}
                className="block text-slate-600 hover:text-slate-900 font-medium text-base py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a 
                href="mailto:tu-correo@ejemplo.com"
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