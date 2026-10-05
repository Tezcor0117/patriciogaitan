import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Play,
  Code,
  Award
} from 'lucide-react';

interface PageProps {
  language: 'EN' | 'ES';
}

export default function ProjectsDeepDive({ language }: PageProps) {
  const [expandedProject, setExpandedProject] = useState<string | null>('tezcor-agency');

  const toggleProject = (id: string) => {
    setExpandedProject((prev) => (prev === id ? null : id));
  };

  const ui = {
    EN: { back: "Back" },
    ES: { back: "Atrás" }
  };

  const projects = [
    {
      id: 'tezcor-agency',
      image: "/projects/tezcor-landing-page.jpg",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "Figma", "Cloud Deployment"],
      EN: {
        title: "TEZCOR: Digital Software Agency",
        subtitle: "Co-Founder & Full-Stack Developer",
        contextTitle: "The Context",
        contextBody: "Founded with the vision of solving everyday problems through cutting-edge technologies, TEZCOR was born from our drive to gain real-world experience and create a tangible impact before graduation. Our goal is to develop comprehensive, innovative solutions that put the engineering talent of San Luis Potosí and Mexico on the global tech map.",
        challengesTitle: "Key Challenges & Solutions",
        challengesBody: "The greatest challenge as young founders has been strategic client acquisition and the legal formalization of the agency. We refuse to deliver half-baked projects; we seek partners who require deep innovation. We overcame the \"fear of starting\" by securing structured legal counsel and applying an engineering mindset to solve business obstacles, proving that age is not a barrier to delivering enterprise-grade quality.",
        architectureTitle: "Architecture & Tech Stack",
        architectureBody: "We operate on a modern, scalable architecture. We utilize Figma for UX/UI design and Next.js to build the frontend of our platforms and landing pages. For backend operations and data persistence, we implement relational databases with PostgreSQL managed via the Prisma ORM. Our entire continuous integration (CI/CD) and version control pipeline is orchestrated through GitHub, with optimized deployments on Vercel.",
        techStackTitle: "Tech Stack",
        buttons: [
          {
            text: "Visit Official Site",
            href: "https://www.tezcor.com.mx/",
            style: "solid",
            icon: ExternalLink
          }
        ]
      },
      ES: {
        title: "TEZCOR: Digital Software Agency",
        subtitle: "Co-Fundador y Desarrollador Full-Stack",
        contextTitle: "El Origen",
        contextBody: "Fundada con la visión de resolver problemas de la vida cotidiana mediante tecnologías de vanguardia, TEZCOR nació de nuestra determinación por adquirir experiencia en el mundo real y crear impacto antes de graduarnos. Nuestro objetivo es desarrollar soluciones completas e innovadoras que posicionen el talento de San Luis Potosí y México en el panorama tecnológico internacional.",
        challengesTitle: "Retos y Soluciones",
        challengesBody: "El mayor desafío como jóvenes fundadores ha sido la adquisición estratégica de clientes y la formalización legal de la agencia. Nos negamos a entregar proyectos a medias; buscamos socios que necesiten innovación profunda. Superamos el \"miedo a empezar\" apoyándonos en asesoría legal estructurada y aplicando una mentalidad de ingeniería para resolver obstáculos empresariales, demostrando que la edad no es una barrera para entregar calidad de nivel empresarial.",
        architectureTitle: "Arquitectura y Operación",
        architectureBody: "Operamos con una arquitectura moderna y escalable. Utilizamos Figma para el diseño UX/UI y Next.js para construir el frontend de nuestras plataformas. Para el backend y la persistencia de datos, implementamos bases de datos relacionales con PostgreSQL gestionadas a través del ORM Prisma. Todo nuestro flujo de integración continua (CI/CD) y control de versiones se orquesta mediante GitHub, con despliegues optimizados en Vercel.",
        techStackTitle: "Tecnologías",
        buttons: [
          {
            text: "Visitar Sitio Oficial",
            href: "https://www.tezcor.com.mx/",
            style: "solid",
            icon: ExternalLink
          }
        ]
      }
    },
    {
      id: 'tezcorpass',
      image: "/projects/tezcorpass-mockup.png",
      techStack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "WhatsApp API"],
      EN: {
        title: "TezcorPass: Automated School Attendance SaaS",
        subtitle: "Lead Project Manager & Full-Stack Architect",
        contextTitle: "The Context",
        contextBody: "What began as a direct request from school directors for a simple arrival notification system evolved into a comprehensive B2B attendance management platform. TezcorPass revolutionizes school administration by saving staff hours, automating attendance histories, managing absence justifications, and generating detailed reports, all while guaranteeing student safety.",
        challengesTitle: "Key Challenges & Solutions",
        challengesBody: "The most significant technical hurdle was high-concurrency data processing during peak morning hours. The system needed to fluidly process dozens of QR scans per second without UI bottlenecks. Additionally, we faced the challenge of continuously evolving our PostgreSQL schema to support new features without data loss. We resolved this by optimizing our API response times and structuring highly scalable relational databases capable of handling thousands of rapid transactions.",
        architectureTitle: "Architecture & Tech Stack",
        architectureBody: "Built on a Next.js framework integrated with third-party messaging APIs (WhatsApp, Telegram, Email). Students scan securely generated QR codes containing only a UID—protecting personal data—which queries a highly secured database via Prisma. A single scan logs the attendance and triggers real-time parental alerts. The platform supports CSV bulk imports and features a master Admin Dashboard for SaaS management, handling subscriptions, contracts, and real-time user support.",
        techStackTitle: "Tech Stack",
        buttons: [
          {
            text: "Watch System Demo",
            href: "#VIDEO_DEMO",
            style: "outline",
            icon: Play
          },
          {
            text: "Visit Landing Page",
            href: "https://www.tezcorpass.com/",
            style: "solid",
            icon: ExternalLink
          }
        ]
      },
      ES: {
        title: "TezcorPass: Automated School Attendance SaaS",
        subtitle: "Líder de Proyecto y Arquitecto Full-Stack",
        contextTitle: "El Origen",
        contextBody: "Lo que comenzó como una solicitud de directores escolares para un sistema de notificación de llegadas, evolucionó hacia una plataforma B2B integral de gestión de asistencia. TezcorPass revoluciona la administración escolar al ahorrar horas de trabajo al personal, automatizar historiales, gestionar justificaciones y generar reportes detallados, todo mientras garantiza la seguridad de los alumnos.",
        challengesTitle: "Retos y Soluciones",
        challengesBody: "El mayor obstáculo técnico fue el procesamiento de alta concurrencia durante las horas pico de entrada. El sistema necesitaba procesar fluidamente docenas de escaneos QR por segundo sin cuellos de botella. Además, enfrentamos el reto de evolucionar continuamente nuestro esquema de PostgreSQL para soportar nuevas funciones. Resolvimos esto optimizando los tiempos de respuesta de nuestras APIs y estructurando bases de datos relacionales capaces de manejar miles de transacciones rápidas.",
        architectureTitle: "Arquitectura y Operación",
        architectureBody: "Construido sobre un entorno Next.js integrado con APIs de mensajería (WhatsApp, Telegram, Correo). Los alumnos escanean códigos QR seguros que contienen solo un UID (protegiendo datos personales), el cual consulta una base de datos protegida mediante Prisma. Un escaneo registra la asistencia y dispara alertas en tiempo real. La plataforma soporta importación masiva por CSV y cuenta con un Panel de Control Maestro para la gestión del SaaS (suscripciones, contratos y soporte en tiempo real).",
        techStackTitle: "Tecnologías",
        buttons: [
          {
            text: "Ver Demo del Sistema",
            href: "#VIDEO_DEMO",
            style: "outline",
            icon: Play
          },
          {
            text: "Visitar Landing Page",
            href: "https://www.tezcorpass.com/",
            style: "solid",
            icon: ExternalLink
          }
        ]
      }
    },
    {
      id: 'soccer-analytics',
      image: "/projects/soccer-analytics-heatmap.png",
      techStack: ["Python", "Pandas", "Matplotlib", "Data Visualization"],
      EN: {
        title: "Soccer Match Data Analytics & Visualization",
        subtitle: "Data Analyst & Python Developer",
        contextTitle: "The Context",
        contextBody: "This project was born from the initiative to merge my passion for soccer with software engineering. To deeply understand the data lifecycle, I bypassed pre-built datasets and manually collected spatial coordinates (X, Y) in real-time during matches. This self-taught approach—reinforced through specialized online certifications—allowed me to understand exactly which metrics are fundamental to generating actionable sports intelligence.",
        challengesTitle: "Key Challenges & Solutions",
        challengesBody: "The greatest technical challenge was high-frequency data acquisition. Manually tracking every single event of a full match created capture bottlenecks and noisy datasets. To resolve this, I optimized the collection methodology by applying scope filters: focusing exclusively on 'key events' (critical passes, shots, dribbles). This ensured the data volume maintained high quality and analytical relevance without overwhelming the manual input process.",
        architectureTitle: "Architecture & Tech Stack",
        architectureBody: "The data pipeline is built entirely in Python. I utilize pandas for data cleaning, transforming raw spatial inputs, and structuring DataFrames. For the visual and tactical representation, I integrate mplsoccer, a specialized library that renders pitch dimensions and overlays complex heatmaps and pass trajectories based on our start and end coordinates, effectively translating raw numbers into visual tactical analysis.",
        techStackTitle: "Tech Stack",
        buttons: [
          {
            text: "View Source",
            href: "URL_GITHUB",
            style: "outline",
            icon: Code
          },
          {
            text: "View Certificates",
            href: "/certificados",
            style: "solid",
            icon: Award
          }
        ]
      },
      ES: {
        title: "Soccer Match Data Analytics & Visualization",
        subtitle: "Analista de Datos y Desarrollador Python",
        contextTitle: "El Origen",
        contextBody: "Este proyecto nació de la iniciativa de fusionar mi pasión por el fútbol con la ingeniería de software. Para comprender a fondo el ciclo de vida de los datos, decidí prescindir de datasets prefabricados y realizar la recolección manual de coordenadas espaciales (X, Y) en tiempo real durante los partidos. Este enfoque autodidacta —reforzado a través de certificaciones especializadas— me permitió entender exactamente qué métricas son fundamentales para generar inteligencia deportiva accionable.",
        challengesTitle: "Retos y Soluciones",
        challengesBody: "El mayor desafío técnico fue la adquisición de datos de alta frecuencia. Rastrear manualmente cada evento de un partido completo generaba cuellos de botella en la captura. Para resolver esto, optimicé la metodología de recolección aplicando filtros de alcance: me enfoqué exclusivamente en 'eventos clave' (pases críticos, tiros, regates). Esto aseguró que el volumen de datos mantuviera una alta calidad y relevancia analítica para la visualización estadística.",
        architectureTitle: "Arquitectura y Operación",
        architectureBody: "El pipeline de datos está construido íntegramente en Python. Utilizo pandas para la limpieza, transformación de datos crudos y estructuración de DataFrames. Para la representación espacial y táctica, integro mplsoccer, una biblioteca especializada que renderiza las dimensiones de la cancha y superpone mapas de calor (heatmaps) y trayectorias de pases basados en nuestras coordenadas de inicio y fin, traduciendo números brutos en análisis táctico visual.",
        techStackTitle: "Tecnologías",
        buttons: [
          {
            text: "Ver Código",
            href: "URL_GITHUB",
            style: "outline",
            icon: Code
          },
          {
            text: "Mis Certificados",
            href: "/certificados",
            style: "solid",
            icon: Award
          }
        ]
      }
    },
    {
      id: 'wearable-assistant',
      image: "/projects/wearable-arduino.jpg",
      techStack: ["C", "Arduino", "Sensors", "Hardware Integration", "Soldering"],
      EN: {
        title: "Assistive Wearable Device for the Visually Impaired",
        subtitle: "Hardware Engineer & C Developer",
        contextTitle: "The Context",
        contextBody: "Developed as a capstone project during my technical high school education, this wearable was created with a clear social purpose and successfully donated to a visually impaired user. While traditional white canes effectively map ground-level terrain, users remain vulnerable to head-level collisions. This project bridges that safety gap by integrating an early-warning technological solution directly into an everyday cap.",
        challengesTitle: "Key Challenges & Solutions",
        challengesBody: "The primary engineering challenge was the physical transition from a functional breadboard prototype to a permanent phenolic board. This required high-precision soldering to ensure circuit durability without damaging sensitive components. Additionally, we had to carefully design the hardware's physical integration onto the cap, ensuring the ultrasonic sensor's field of view remained completely unobstructed while maintaining ergonomic comfort for the end-user.",
        architectureTitle: "Architecture & Tech Stack",
        architectureBody: "The hardware architecture centers around an Arduino Uno connected to a custom-soldered phenolic board. It utilizes an ultrasonic sensor to continuously measure spatial depth, triggering a piezoelectric buzzer when physical obstacles breach a predefined safety threshold. The entire logic is programmed in bare-metal C, leveraging the microcontroller's low-level hardware control capabilities for real-time sensor processing.",
        techStackTitle: "Tech Stack",
        buttons: []
      },
      ES: {
        title: "Assistive Wearable Device for the Visually Impaired",
        subtitle: "Ingeniero de Hardware y Desarrollador C",
        contextTitle: "El Origen",
        contextBody: "Desarrollado como proyecto integrador durante mi educación técnica, este wearable fue creado con un claro propósito social y donado exitosamente a un usuario con debilidad visual. Mientras que los bastones tradicionales mapean eficazmente el terreno a ras de suelo, los usuarios siguen siendo vulnerables a colisiones a la altura de la cabeza. Este proyecto cierra esa brecha de seguridad integrando una solución tecnológica de alerta temprana directamente en una gorra de uso diario.",
        challengesTitle: "Retos y Soluciones",
        challengesBody: "El principal desafío de ingeniería fue la transición física de un prototipo funcional en protoboard a una placa fenólica permanente. Esto requirió soldadura de alta precisión para garantizar la durabilidad del circuito sin dañar los componentes. Además, tuvimos que diseñar cuidadosamente la integración física del hardware en la gorra, asegurando que el campo de visión del sensor ultrasónico permaneciera completamente libre de obstrucciones y manteniendo la comodidad ergonómica del usuario.",
        architectureTitle: "Arquitectura y Operación",
        architectureBody: "La arquitectura de hardware se centra en un Arduino Uno conectado a una placa fenólica soldada a medida. Utiliza un sensor ultrasónico para medir la profundidad espacial continuamente, activando un zumbador (buzzer) piezoeléctrico cuando los obstáculos superan un umbral de seguridad predefinido. Toda la lógica está programada en lenguaje C puro, aprovechando las capacidades de control de hardware de bajo nivel del microcontrolador para el procesamiento de sensores en tiempo real.",
        techStackTitle: "Tecnologías",
        buttons: []
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

        {/* Contenedor de Acordeones */}
        <div className="space-y-6">
          {projects.map((project) => {
            const isExpanded = expandedProject === project.id;
            const content = project[language];

            return (
              <div key={project.id} className="flex flex-col gap-6" id={project.id}>
                {/* Header del Acordeón (Trigger) */}
                <div 
                  onClick={() => toggleProject(project.id)}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex justify-between items-center cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                    {content.title}
                  </h2>
                  <div className="text-slate-400">
                    {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                  </div>
                </div>

                {/* Cuerpo del Proyecto (Deep Dive) */}
                {isExpanded && (
                  <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                    {/* Hero Section del Caso de Estudio */}
                    <div className="mb-12">
                      <p className="text-xl sm:text-2xl text-slate-600 font-medium mb-8">
                        {content.subtitle}
                      </p>

                      {/* Simulador de Carrusel / Media Placeholder */}
                      <div className="relative group aspect-video bg-slate-200 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                        <img 
                          src={project.image} 
                          alt={content.title} 
                          className="w-full h-full object-cover rounded-xl" 
                        />
                        
                        {/* Controles del Carrusel (Aparecen en Hover) */}
                        <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-md text-slate-800 backdrop-blur-sm transition-all transform hover:scale-105">
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button className="bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-md text-slate-800 backdrop-blur-sm transition-all transform hover:scale-105">
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Layout del Contenido Principal */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
                      
                      {/* Columna Principal (Textos del Caso de Estudio) */}
                      <div className="lg:col-span-2 space-y-12 bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-200">
                        <section>
                          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 tracking-tight">
                            {content.contextTitle}
                          </h2>
                          <p className="text-lg text-slate-600 leading-relaxed">
                            {content.contextBody}
                          </p>
                        </section>
                        
                        <section>
                          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 tracking-tight">
                            {content.challengesTitle}
                          </h2>
                          <p className="text-lg text-slate-600 leading-relaxed">
                            {content.challengesBody}
                          </p>
                        </section>
                        
                        <section>
                          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 tracking-tight">
                            {content.architectureTitle}
                          </h2>
                          <p className="text-lg text-slate-600 leading-relaxed">
                            {content.architectureBody}
                          </p>
                        </section>
                      </div>

                      {/* Columna Secundaria (Sidebar Sticky) */}
                      <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-fit">
                          <h3 className="text-xl font-bold text-slate-800 mb-6 tracking-tight">
                            {content.techStackTitle}
                          </h3>
                          
                          {/* Píldoras de Tecnologías */}
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <span 
                                key={tech} 
                                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          {/* Botones Call to Action Dinámicos (Solo se renderiza si hay botones) */}
                          {content.buttons && content.buttons.length > 0 && (
                            <div className="mt-10 space-y-3">
                              {content.buttons.map((btn, idx) => {
                                const Icon = btn.icon;
                                const isOutline = btn.style === 'outline';
                                const btnClasses = `w-full flex justify-center items-center gap-2 rounded-xl py-3.5 px-6 font-semibold transition-all ${
                                  isOutline 
                                    ? 'border border-slate-300 text-slate-700 hover:bg-slate-50' 
                                    : 'bg-slate-800 hover:bg-slate-700 text-white shadow-sm hover:shadow-md'
                                }`;
                                
                                if (btn.href.startsWith('/')) {
                                  return (
                                    <Link key={idx} to={btn.href} className={btnClasses}>
                                      {btn.text}
                                      <Icon className="w-5 h-5" />
                                    </Link>
                                  );
                                }

                                return (
                                  <a 
                                    key={idx}
                                    href={btn.href} 
                                    target={btn.href.startsWith('#') ? '_self' : '_blank'} 
                                    rel="noopener noreferrer" 
                                    className={btnClasses}
                                  >
                                    {btn.text}
                                    <Icon className="w-5 h-5" />
                                  </a>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}