interface PageProps {
  language: 'EN' | 'ES';
}

export default function ProjectsDeepDive({ language }: PageProps) {
  return (
    <div className="flex-grow">
      {/* Indicador Visual / Breadcrumb */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-xs font-medium text-slate-500">
          {language === 'ES' ? 'Estás en: Inicio / Proyectos' : 'You are here: Home / Projects'}
        </div>
      </div>

      {/* Hero Section del Deep Dive */}
      <section className="py-20 bg-slate-900 text-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {language === 'ES' ? 'Proyectos en Profundidad' : 'In-Depth Projects'}
          </h1>
          <p className="text-slate-400 text-lg">
            {language === 'ES' 
              ? 'Explora la arquitectura, los retos y las soluciones técnicas de mis casos de estudio.' 
              : 'Explore the architecture, challenges, and technical solutions of my case studies.'}
          </p>
        </div>
      </section>

      {/* Contenedor Principal (Esqueleto para el contenido futuro) */}
      <section className="max-w-4xl mx-auto py-24 px-4 text-center">
        <div className="bg-white p-12 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            🚀 Coming Soon
          </h2>
          <p className="text-slate-600">
            {language === 'ES' 
              ? 'Casos de estudio detallados, videos demostrativos y arquitectura.' 
              : 'Detailed case studies, demo videos, and architecture.'}
          </p>

          {/* ZONA DE ESTRUCTURA FUTURA */}
          <div className="mt-12 hidden">
            {/* Reproductor de Video MP4 / YouTube Embed */}
            {/* Texto explicativo: Problema, Rol, Arquitectura */}
            {/* Galería de Imágenes (Grid) */}
            {/* Botones: Ver Demo / Repositorio GitHub */}
          </div>
        </div>
      </section>
    </div>
  );
}