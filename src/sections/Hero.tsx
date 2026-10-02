import { Download, ArrowRight } from 'lucide-react';

interface HeroProps {
  language: 'EN' | 'ES';
}

export default function Hero({ language }: HeroProps) {
  const content = {
    EN: {
      title: "Computer Engineering Student | Full-Stack Developer | Data Analyst",
      subtitle: "Building scalable digital solutions and leveraging data analytics to solve complex problems, with a special focus on sports technology and performance.",
      download: "Download CV",
      projects: "View Projects",
    },
    ES: {
      title: "Ingeniero en Computación | Desarrollador Full-Stack | Analista de Datos",
      subtitle: "Construyendo soluciones digitales escalables y aprovechando el análisis de datos para resolver problemas complejos, con un enfoque especial en tecnología y rendimiento deportivo.",
      download: "Descargar CV",
      projects: "Ver Proyectos",
    }
  };

  const t = content[language];

  return (
    <section id="hero" className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Columna Izquierda: Textos y Botones */}
        <div className="flex flex-col space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight leading-tight">
              {t.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
              {t.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Botón Primario: Descargar CV */}
            <a 
              href="/cv-patricio.pdf" 
              download
              className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white font-semibold rounded-xl px-6 py-3.5 hover:bg-slate-700 transition-colors shadow-sm"
            >
              <Download className="w-5 h-5" />
              {t.download}
            </a>
            
            {/* Botón Secundario: Ver Proyectos */}
            <a 
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 font-semibold rounded-xl px-6 py-3.5 hover:bg-slate-50 transition-colors"
            >
              {t.projects}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Columna Derecha: Fotografía Profesional */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <img 
            src="/foto-patricio.jpg" 
            alt="Patricio Gaitan" 
            className="w-64 sm:w-80 lg:w-96 aspect-[4/5] object-cover object-top rounded-2xl shadow-md border border-slate-300" 
          />
        </div>

      </div>
    </section>
  );
}