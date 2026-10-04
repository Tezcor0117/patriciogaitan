interface PageProps {
  language: 'EN' | 'ES';
}

export default function AboutPage({ language }: PageProps) {
  return (
    <div className="flex-grow flex flex-col items-center justify-center py-24 px-4">
      <div className="bg-white p-12 rounded-2xl border border-slate-200 shadow-sm max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">🚀 Coming Soon</h1>
        <p className="text-slate-600 text-lg">
          {language === 'EN' 
            ? 'My in-depth journey, tech stack, and work philosophy.' 
            : 'Mi trayectoria en profundidad, stack tecnológico y filosofía de trabajo.'}
        </p>
      </div>
    </div>
  );
}