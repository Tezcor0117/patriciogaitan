import { FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CertificatesProps {
  language: 'EN' | 'ES';
}

export default function Certificates({ language }: CertificatesProps) {
  const content = {
    EN: { 
      title: "Credentials & Certificates", 
      viewAll: "View all certificates details",
      ctaText: "Want to see more details and download the official documents?"
    },
    ES: { 
      title: "Credenciales y Certificados", 
      viewAll: "Ver detalles de los certificados",
      ctaText: "¿Quieres ver más detalles y descargar los documentos oficiales?"
    }
  };

  // Quitamos la propiedad "file" para que sea meramente informativo
  const certificates = [
    {
      id: 1,
      nameEN: "Attendee at the International Conference on Software Engineering (CONISOFT)",
      nameES: "Asistente en el Congreso Internacional de Ingeniería de Software (CONISOFT)",
      institution: "CONISOFT",
      dateEN: "2025",
      dateES: "2025",
    },
    {
      id: 2,
      nameEN: "Technical Diploma in Computer Science",
      nameES: "Título de Técnico en Computación",
      institution: "DGETI / Instituto Salesiano Carlos Gómez",
      dateEN: "June 2024",
      dateES: "Junio 2024",
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight text-center mb-12">
          {content[language].title}
        </h2>
        
        {/* Lista Informativa de Certificados */}
        <div className="flex flex-col gap-6">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-white border border-slate-200 rounded-2xl shadow-sm gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 rounded-xl text-slate-600">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">
                    {language === 'EN' ? cert.nameEN : cert.nameES}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm text-slate-600">
                    <span className="font-medium">{cert.institution}</span>
                    <span className="hidden sm:inline text-slate-300">•</span>
                    <span>{language === 'EN' ? cert.dateEN : cert.dateES}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action para ir a la página dedicada */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-5 font-medium">
            {content[language].ctaText}
          </p>
          <Link 
            to="/certificados" 
            className="inline-flex items-center gap-2 bg-slate-800 text-white font-semibold rounded-xl px-8 py-3.5 hover:bg-slate-700 transition-colors shadow-sm"
          >
            {content[language].viewAll}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}