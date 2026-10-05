import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Rocket, Activity, Briefcase } from 'lucide-react';

interface PageProps {
  language: 'EN' | 'ES';
}

export default function AboutPage({ language }: PageProps) {
  const ui = {
    EN: { 
      back: "Back",
      heroTitle: "Beyond the Code",
      heroSubtitle: "Engineering with purpose, running with resilience."
    },
    ES: { 
      back: "Atrás",
      heroTitle: "Más allá del código",
      heroSubtitle: "Ingeniería con propósito, corriendo con resiliencia."
    }
  };

  const pillars = [
    {
      id: "mindset",
      icon: Brain,
      EN: {
        title: "Clarity Through Process",
        body: "For me, software engineering isn't just about writing code; it's about logical reasoning and deep analysis. I cultivate this clarity through daily meditation—a dedicated space that translates into how I approach complex technical roadblocks. I don't follow technological trends blindly. Instead, I seek authentic, process-driven understanding. This philosophy of deep research and critical thinking allows me to build solutions that truly matter, hoping to inspire others to develop their own authentic criteria."
      },
      ES: {
        title: "Claridad a través del proceso",
        body: "Para mí, la ingeniería de software no se trata solo de código; se trata de razonamiento lógico y análisis profundo. Cultivo esta claridad a través de la meditación diaria, un espacio que moldea cómo abordo los bloqueos técnicos complejos. No sigo las tendencias tecnológicas a ciegas; busco una comprensión auténtica basada en procesos. Esta filosofía de investigación y pensamiento crítico me permite construir soluciones con propósito, esperando inspirar a otros a desarrollar su propio criterio."
      }
    },
    {
      id: "learner",
      icon: Rocket,
      EN: {
        title: "Beyond the Syllabus",
        body: "Real innovation happens outside the traditional classroom. I am a relentless autodidact, constantly expanding my technical boundaries. Recently, through Scotiabank Open Academy, I completed \"Mastering AI with Gemini\" and am advancing through \"Introduction to Data Science\" and its applied mathematics counterpart. These specialized courses have solidified my ability to transform raw data into powerful, actionable insights, enabling predictive analysis to drive strategic decisions."
      },
      ES: {
        title: "Más allá del plan de estudios",
        body: "La verdadera innovación ocurre fuera del aula tradicional. Soy un autodidacta incansable, expandiendo constantemente mis límites técnicos. Recientemente, a través de Scotiabank Open Academy, completé \"Domina la IA con Gemini\" y avanzo en \"Introducción a la Ciencia de Datos\" y Matemáticas Aplicadas. Estos cursos han consolidado mi capacidad para transformar datos crudos en inteligencia accionable, permitiendo realizar análisis predictivos para impulsar decisiones estratégicas."
      }
    },
    {
      id: "resilience",
      icon: Activity,
      EN: {
        title: "Discipline on the Asphalt",
        body: "I recently crossed the finish line of a Half Marathon, an achievement that profoundly shaped my professional DNA. The discipline required to train through exhaustion and mental barriers mirrors the resilience needed in software development. Running teaches you that the mind often gives up before the body does. By conquering those mental limits on the track, I’ve learned to push through complex debugging sessions. That feeling of building endurance from zero fuels my hunger to seek the next big challenge."
      },
      ES: {
        title: "Disciplina en el asfalto",
        body: "Recientemente crucé la meta de un Medio Maratón, un logro que moldeó profundamente mi ADN profesional. La disciplina requerida para entrenar a través del agotamiento y las barreras mentales refleja la resiliencia necesaria en el desarrollo de software. Al conquistar esos límites en la pista, he aprendido a superar las sesiones complejas de depuración de código. Esa sensación de construir resistencia desde cero alimenta mi hambre de buscar siempre el siguiente gran reto."
      }
    },
    {
      id: "builder",
      icon: Briefcase,
      EN: {
        title: "Co-founding TEZCOR",
        body: "The motivation behind co-founding a digital agency at a young age is simple: I believe in actively hunting for opportunities rather than waiting for them. I live by the philosophy: \"Lose the fear of losing; that's where everything begins.\" By combining forces with a strong team, we multiply our potential to deliver enterprise-grade solutions. My ultimate vision is clear: to relentlessly pursue innovation and firmly place my name—and the engineering talent of Mexico—on the international computing map."
      },
      ES: {
        title: "Co-fundando TEZCOR",
        body: "La motivación detrás de co-fundar una agencia digital es simple: creo en salir a buscar las oportunidades en lugar de esperar a que lleguen. Vivo bajo la filosofía: \"Perder el miedo a perder; ahí comienza todo.\" Al unir fuerzas con un equipo sólido, multiplicamos nuestro potencial para entregar soluciones empresariales. Mi visión final es clara: perseguir incansablemente la innovación y poner firmemente mi nombre —y el talento de México— en el mapa internacional de la computación."
      }
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-20 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              {ui[language].heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 font-medium leading-relaxed">
              {ui[language].heroSubtitle}
            </p>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-square bg-slate-200 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <img 
                src="/foto-patricio.jpg" 
                alt="Patricio Gaitan" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
          </div>
        </div>

        {/* Los 4 Pilares (Z-Pattern Layout) */}
        <div className="space-y-20 lg:space-y-32">
          {pillars.map((pillar, index) => {
            // Lógica para alternar columnas en desktop (Z-Pattern)
            // Si el índice es par, el contenedor visual va a la izquierda (flex-row)
            // Si el índice es impar, el contenedor visual va a la derecha (flex-row-reverse)
            const isEven = index % 2 === 0;
            const Icon = pillar.icon;
            const content = pillar[language];

            return (
              <div 
                key={pillar.id} 
                className={`flex flex-col gap-10 lg:gap-16 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                
                {/* Contenedor Visual */}
                <div className="w-full lg:w-1/2 aspect-square md:aspect-video lg:aspect-square bg-slate-100 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-sm border border-slate-200 group">
                  <Icon className="w-20 h-20 text-slate-300 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                  
                  {/* ESPACIO PARA FOTOS REALES EN EL FUTURO */}
                  {/* 
                    <img 
                      src={`/about/${pillar.id}.jpg`} 
                      alt={content.title}
                      className="absolute inset-0 w-full h-full object-cover" 
                    /> 
                  */}
                </div>

                {/* Contenedor de Texto */}
                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">
                    {content.title}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {content.body}
                  </p>
                </div>
                
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}