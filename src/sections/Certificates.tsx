import { FileText } from 'lucide-react';

interface CertificatesProps {
  language: 'EN' | 'ES';
}

export default function Certificates({ language }: CertificatesProps) {
  const content = {
    EN: { title: "Credentials & Certificates", viewBtn: "View Credential" },
    ES: { title: "Credenciales y Certificados", viewBtn: "Ver Credencial" }
  };

  const certificates = [
    {
      id: 1,
      nameEN: "Attendee at the International Conference on Software Engineering (CONISOFT)",
      nameES: "Asistente en el Congreso Internacional de Ingeniería de Software (CONISOFT)",
      institution: "CONISOFT",
      dateEN: "2025",
      dateES: "2025",
      file: "/certificates/CONISOFT25_Attendance_Patricio_Gaitan_Vaca.pdf"
    },
    {
      id: 2,
      nameEN: "Technical Diploma in Computer Science",
      nameES: "Título de Técnico en Computación",
      institution: "DGETI / Instituto Salesiano Carlos Gómez",
      dateEN: "June 2024",
      dateES: "Junio 2024",
      file: "/certificates/Patricio_Gaitan_Technical_Diploma.pdf"
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight text-center mb-12">
          {content[language].title}
        </h2>
        
        <div className="flex flex-col gap-6">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 rounded-xl text-slate-600 group-hover:text-slate-800 group-hover:bg-slate-100 transition-colors">
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
              
              <a 
                href={cert.file} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-slate-300 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-colors shrink-0"
              >
                {content[language].viewBtn}
                <FileText className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}