import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  GraduationCap, 
  Users, 
  Activity, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';

interface PageProps {
  language: 'EN' | 'ES';
}

export default function CertificatesPage({ language }: PageProps) {
  const ui = {
    EN: { 
      back: "Back",
      heroTitle: "Certifications & Academic Milestones",
      heroSubtitle: "Formal education and continuous self-directed learning.",
      cat1Title: "Formal Education",
      cat2Title: "Continuous Learning & Research",
      viewBtn: "View Credential"
    },
    ES: { 
      back: "Atrás",
      heroTitle: "Certificaciones y Logros Académicos",
      heroSubtitle: "Educación formal y aprendizaje continuo autodirigido.",
      cat1Title: "Educación Formal",
      cat2Title: "Aprendizaje Continuo e Investigación",
      viewBtn: "Ver Credencial"
    }
  };

  const formalEducation = [
    {
      id: "tecnico-computacion",
      icon: GraduationCap,
      EN: {
        title: "Technical Diploma in Computer Science",
        issuer: "DGETI / Instituto Salesiano Carlos Gómez",
        date: "2024",
        description: "Official certification validating foundational knowledge in systems architecture, hardware integration, and software development prior to university enrollment."
      },
      ES: {
        title: "Título de Técnico en Computación",
        issuer: "DGETI / Instituto Salesiano Carlos Gómez",
        date: "2024",
        description: "Certificación oficial que valida conocimientos fundamentales en arquitectura de sistemas, integración de hardware y desarrollo de software previos al ingreso universitario."
      },
      action: "/certificates/Patricio_Gaitan_Technical_Diploma.pdf"
    }
  ];

  const continuousLearning = [
    {
      id: "conisoft-attendee",
      icon: Users,
      EN: {
        title: "Attendee at the 13th International Conference in Software Engineering Research and Innovation (CONISOFT 2025)",
        issuer: "Red Temática Mexicana de Ingeniería de Software (RedMIS) / UABCS",
        date: "October 27th - 31st, 2025",
        description: "General attendance at the international conference held in La Paz, Baja California Sur, engaging with the latest research, trends, and innovation in software engineering."
      },
      ES: {
        title: "Asistente en el 13º Congreso Internacional de Investigación e Innovación en Ingeniería de Software (CONISOFT 2025)",
        issuer: "Red Temática Mexicana de Ingeniería de Software (RedMIS) / UABCS",
        date: "27 al 31 de Octubre, 2025",
        description: "Asistencia general al congreso internacional celebrado en La Paz, Baja California Sur, interactuando con las últimas investigaciones, tendencias e innovaciones en ingeniería de software."
      },
      action: "/certificates/CONISOFT25_Attendance_Patricio_Gaitan_Vaca.pdf"
    },
    {
      id: "conisoft-workshop",
      icon: Activity,
      EN: {
        title: "Workshop: Managing real-time software projects with TRUEFFORT",
        issuer: "CONISOFT 2025 / UABCS",
        date: "October 2025",
        description: "Participated in specialized training on real-time project management methodologies during the international CONISOFT event."
      },
      ES: {
        title: "Taller: Gestionando proyectos de software en tiempo real con TRUEFFORT",
        issuer: "CONISOFT 2025 / UABCS",
        date: "Octubre 2025",
        description: "Participación en capacitación especializada sobre metodologías de gestión de proyectos en tiempo real durante el evento internacional CONISOFT."
      },
      action: "/certificates/CONISOFT25_Taller_PatricioGaitanVaca.pdf"
    },
    {
      id: "gemini-ai",
      icon: Sparkles,
      EN: {
        title: "Mastering AI with Gemini",
        issuer: "Santander Open Academy (Content by Google Gemini)",
        date: "October 2026",
        description: "Completed specialized training on leveraging advanced Artificial Intelligence tools and models to optimize workflows and analytical processes."
      },
      ES: {
        title: "Domina la IA con Gemini",
        issuer: "Santander Open Academy (Content by Google Gemini)",
        date: "Octubre 2026",
        description: "Capacitación especializada en el aprovechamiento de herramientas y modelos avanzados de Inteligencia Artificial para optimizar flujos de trabajo y procesos analíticos."
      },
      action: "/certificates/DominaLaIAconGeminiCertificadoSOA_PatricioGaitan.pdf"
    }
  ];

  // Función auxiliar para renderizar las tarjetas y evitar repetición de código
  const renderCard = (item: any) => {
    const Icon = item.icon;
    const content = item[language];

    return (
      <div 
        key={item.id} 
        className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm gap-6 hover:shadow-md transition-shadow"
      >
        {/* Contenedor Izquierdo: Ícono */}
        <div className="w-16 h-16 shrink-0 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 border border-slate-200">
          <Icon className="w-8 h-8" strokeWidth={1.5} />
        </div>

        {/* Contenedor Central: Textos */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
            {content.title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm font-medium text-slate-500 mb-3">
            <span className="text-slate-700">{content.issuer}</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>{content.date}</span>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            {content.description}
          </p>
        </div>

        {/* Contenedor Derecho: Acción */}
        <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0 border-t border-slate-100 pt-4 md:border-none md:pt-0">
          <a 
            href={item.action} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            {ui[language].viewBtn}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-20 font-sans text-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navegación Superior */}
        <div className="mb-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {ui[language].back}
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-24">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            {ui[language].heroTitle}
          </h1>
          <p className="text-xl text-slate-600 font-medium">
            {ui[language].heroSubtitle}
          </p>
        </div>

        {/* Categoría 1: Educación Formal */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 pb-4 border-b border-slate-200">
            {ui[language].cat1Title}
          </h2>
          <div className="flex flex-col gap-6">
            {formalEducation.map(renderCard)}
          </div>
        </div>

        {/* Categoría 2: Aprendizaje Continuo e Investigación */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-8 pb-4 border-b border-slate-200">
            {ui[language].cat2Title}
          </h2>
          <div className="flex flex-col gap-6">
            {continuousLearning.map(renderCard)}
          </div>
        </div>

      </div>
    </div>
  );
}