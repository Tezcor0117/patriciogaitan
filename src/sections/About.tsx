interface AboutProps {
  language: 'EN' | 'ES';
}

export default function About({ language }: AboutProps) {
  const content = {
    EN: {
      title: "About Me",
      description: "I am a Computer Engineering student with hands-on experience architecting end-to-end software systems. I bridge the gap between robust full-stack development (SaaS) and my strong interest in data science and computer vision, particularly applied to sports analytics. My goal is to connect complex systems engineering with human-centered design, bringing innovative solutions to high-impact R&D projects."
    },
    ES: {
      title: "Sobre Mí",
      description: "Soy estudiante de Ingeniería en Computación con experiencia práctica arquitectando sistemas de software de extremo a extremo. Combino mi dominio en el desarrollo web (SaaS) con mi gran interés por la ciencia de datos y la visión por computadora aplicadas al ámbito deportivo. Mi objetivo es cerrar la brecha entre la ingeniería de sistemas complejos y el diseño centrado en el usuario, aportando soluciones innovadoras a proyectos de investigación y desarrollo (I+D) de alto impacto."
    }
  };

  const t = content[language];

  // Lista de habilidades (independiente del idioma)
  const skills = [
    "React", "TypeScript", "Node.js", "UX/UI Design", "Figma", "Tailwind CSS", "Next.js", "Git", "Python", "Pandas", "PostgreeSQL", "Prisma", "C", "Arduino"
  ];

  return (
    <section id="about" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        
        {/* Título y Párrafo */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">
            {t.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Píldoras de Skills */}
        <div className="pt-8 border-t border-slate-100">
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="bg-slate-100 text-slate-700 font-medium px-5 py-2.5 rounded-full text-sm hover:bg-slate-200 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}