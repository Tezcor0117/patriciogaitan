import { Monitor, BarChart, Cpu, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PortfolioProps {
  language: 'EN' | 'ES';
}

export default function Portfolio({ language }: PortfolioProps) {
  const t = {
    EN: { title: "Portfolio" },
    ES: { title: "Portafolio" }
  };

  const projects = [
    {
      id: 1,
      title: "TEZCOR: Digital Software Agency",
      descEN: "As Co-founder and Full-Stack Developer, I established and co-direct a software agency focused on designing and deploying scalable B2B solutions. I lead the end-to-end development lifecycle, from database architecture and UI/UX design to the implementation of high-performance web platforms.",
      descES: "Como Co-fundador y Desarrollador Full-Stack, establecí y co-dirijo una agencia de software enfocada en diseñar y desplegar soluciones B2B escalables. Lidero el ciclo completo de desarrollo, desde la arquitectura de bases de datos y el diseño de interfaces (UX/UI), hasta la implementación de plataformas web de alto rendimiento.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "Figma", "Cloud Deployment"],
      image: "/projects/tezcor-landing-page.jpg",
      icon: Globe,
      specialBadge: "Co-Founder & Full-Stack Developer"
    },
    {
      id: 2,
      title: "TezcorPass: Automated School Attendance SaaS",
      descEN: "Architected and led the development of a B2B SaaS platform that automates school attendance tracking via QR scanning and real-time notifications, streamlining security and administrative operations.",
      descES: "Lideré y arquitecté una plataforma SaaS B2B que automatiza el control de asistencia en escuelas mediante escaneo QR y notificaciones en tiempo real, optimizando la seguridad y las operaciones administrativas.",
      tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      image: "/projects/tezcorpass-mockup.png",
      icon: Monitor,
      specialBadge: "Co-Founder & Lead Developer"
    },
    {
      id: 3,
      title: "Soccer Match Data Analytics & Visualization Tool",
      descEN: "Developed a data analytics pipeline to process in-game soccer metrics. Generates heatmaps and comprehensive data visualizations to evaluate individual player performance and tactical effectiveness.",
      descES: "Desarrollé un pipeline de análisis de datos para procesar métricas en tiempo real de partidos de fútbol. Genera mapas de calor y visualizaciones complejas para evaluar el rendimiento individual de los jugadores y la eficacia táctica.",
      tech: ["Python", "Pandas", "Matplotlib", "Data Visualization"],
      image: "/projects/soccer-analytics-heatmap.png",
      icon: BarChart,
      specialBadge: null
    },
    {
      id: 4,
      title: "Assistive Wearable Device for the Visually Impaired",
      descEN: "Designed and programmed a microcontroller-based wearable device that alerts visually impaired individuals of head-level obstacles using proximity sensors and automated auditory feedback.",
      descES: "Diseñé y programé un dispositivo vestible (wearable) basado en microcontroladores que alerta a personas con debilidad visual sobre obstáculos a la altura de la cabeza, utilizando sensores de proximidad ultrasónicos y retroalimentación auditiva.",
      tech: ["C", "Arduino", "Sensors", "Hardware"],
      image: null,
      icon: Cpu,
      specialBadge: null
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight text-center mb-16">
          {t[language].title}
        </h2>
        
        {/* Aquí cambiamos el grid a 2 columnas fijas (md:grid-cols-2) para tu 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden">
                
                {/* Aquí pusimos la proporción aspect-[16/10] equivalente a una pantalla de Mac */}
                <div className="aspect-[16/10] bg-slate-100 flex items-center justify-center relative border-b border-slate-100 overflow-hidden">
                  {project.specialBadge && (
                    <span className="absolute top-4 left-4 bg-slate-800 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm z-10">
                      {project.specialBadge}
                    </span>
                  )}
                  {project.image ? ( 
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top" 
                    /> 
                  ) : (
                    <div className="flex flex-col items-center text-slate-400">
                      <Icon className="w-10 h-10 mb-2" />
                      <span className="text-sm font-medium">Project Image</span>
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
                    {language === 'EN' ? project.descEN : project.descES}
                  </p>
                  
                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((techItem) => (
                      <span key={techItem} className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
                        {techItem}
                      </span>
                    ))}
                  </div>

                  {/* Enlace al Deep Dive del Proyecto */}
                  {/*<div className="mt-auto pt-4 border-t border-slate-100">
                    <Link 
                      to={`/proyectos#proyecto-${project.id}`} 
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                    >
                      {language === 'EN' ? 'Read case study' : 'Leer caso de estudio'}
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>*/}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action para ir a la página de proyectos */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-5 font-medium">
            {language === 'EN' 
              ? 'Want to dive deeper into the architecture and case studies?' 
              : '¿Quieres profundizar en la arquitectura y los casos de estudio?'}
          </p>
          <Link 
            to="/proyectos" 
            className="inline-flex items-center gap-2 bg-slate-800 text-white font-semibold rounded-xl px-8 py-3.5 hover:bg-slate-700 transition-colors shadow-sm"
          >
            {language === 'EN' ? 'View all project details' : 'Ver detalles de los proyectos'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}