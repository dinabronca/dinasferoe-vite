// @ts-nocheck
import React, { useState, useEffect } from 'react';

const DINAMARCA = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Admin password - Editable desde el panel admin
  const [adminPassword, setAdminPassword] = useState(() => {
    const saved = localStorage.getItem('dinamarca_admin_password');
    return saved || 'dinamarca2025';
  });

  // ========================================
  // 🔴 EDITÁ ACÁ TU INFORMACIÓN PERSONAL
  // ========================================
  
  // ABOUT ME - Esto se edita desde el panel admin en /admin
  const [aboutText, setAboutText] = useState(() => {
    const saved = localStorage.getItem('dinamarca_about');
    return saved || `soy una contradicción ambulante. me obsesiono con cosas que nadie pidió. 
colecciono referencias visuales como si fueran recuerdos robados. 
creo en la estética como lenguaje. en el silencio como declaración.
probablemente esté pensando en algo que no importa pero me importa.
esto no es un portfolio. es un archivo de mi cabeza.`;
  });

  // REDES SOCIALES - Esto se edita desde el panel admin en /admin
  const [socialLinks, setSocialLinks] = useState(() => {
    const saved = localStorage.getItem('dinamarca_social');
    return saved ? JSON.parse(saved) : {
      instagram: 'https://instagram.com/tuusuario',
      twitter: 'https://twitter.com/tuusuario',
      letterboxd: 'https://letterboxd.com/tuusuario',
      twitch: 'https://twitch.tv/tuusuario',
      youtube: 'https://youtube.com/@tuusuario',
      spotify: 'https://open.spotify.com/user/tuusuario',
      tiktok: 'https://tiktok.com/@tuusuario'
    };
  });

  // ========================================
  // FIN ZONA DE EDICIÓN RÁPIDA
  // ========================================

  // PUBLICACIONES - Se editan desde el panel admin
  const [publicaciones, setPublicaciones] = useState(() => {
    const saved = localStorage.getItem('dinamarca_publicaciones');
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        title: 'fragmentos de una ciudad que no existe',
        date: '2024.11.03',
        heroImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200',
        preview: 'hay ciudades que solo viven en la memoria. calles que recorriste pero nunca existieron. esta es una de esas...',
        content: `hay ciudades que solo viven en la memoria. calles que recorriste pero nunca existieron.

me acuerdo de una esquina. no sé dónde estaba. solo sé que existió en mi cabeza con tanta fuerza que juraría haberla caminado.

la nostalgia no necesita hechos. solo necesita convicción.

esto es un recuerdo inventado. o quizás todos lo son.`,
        images: [
          'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200',
          'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200'
        ]
      },
      {
        id: 2,
        title: 'la estética del fracaso',
        date: '2024.10.15',
        heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200',
        preview: 'todos mis proyectos favoritos son los que nunca terminé. hay algo poético en lo incompleto...',
        content: `todos mis proyectos favoritos son los que nunca terminé.

hay algo poético en lo incompleto. en la promesa eterna. en el "podría haber sido".

la perfección es aburrida. el fracaso tiene textura.

quizás por eso sigo empezando cosas que sé que no voy a terminar.

no es falta de disciplina. es método.`,
        images: [
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200',
          'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1200'
        ]
      },
      {
        id: 3,
        title: 'internet como museo personal',
        date: '2024.09.28',
        heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
        preview: 'guardamos screenshots de conversaciones que nunca volveremos a leer. coleccionamos memes como artefactos culturales...',
        content: `guardamos screenshots de conversaciones que nunca volveremos a leer.
coleccionamos memes como artefactos culturales.
bookmarkeamos artículos para "leer después" sabiendo que nunca lo haremos.

internet es nuestro museo personal. caótico. íntimo. innavegable.

cada carpeta de descargas es una cápsula del tiempo que nadie abrirá.

y está bien. no todo necesita ser revisitado.

algunos archivos solo necesitan existir.`,
        images: [
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
          'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200'
        ]
      }
    ];
  });

  // MULTIMEDIA - Editable desde admin
  const [mediaItems, setMediaItems] = useState(() => {
    const saved = localStorage.getItem('dinamarca_media');
    return saved ? JSON.parse(saved) : [];
  });

  // PROYECTOS - Se editan desde el panel admin
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('dinamarca_projects');
    return saved ? JSON.parse(saved) : [
      { 
        id: 1, 
        name: 'sodaroja', 
        type: 'podcast',
        description: 'conversaciones sobre cosas que importan y cosas que no. principalmente cosas que no.',
        logo: '◉',
        logoImage: '',
        link: '#'
      },
      { 
        id: 2, 
        name: 'culto efervescente', 
        type: 'religión ficticia',
        description: 'una religión inventada con rituales reales. humor existencial carbonatado.',
        logo: '◬',
        logoImage: '',
        link: '#'
      },
      { 
        id: 3, 
        name: 'sodaroja web', 
        type: 'plataforma',
        description: 'suscripciones. contenido exclusivo. la ilusión de comunidad.',
        logo: '▣',
        logoImage: '',
        link: '#'
      },
      { 
        id: 4, 
        name: 'dinaesthetic prints', 
        type: 'arte visual',
        description: 'prints minimalistas para gente que entiende el silencio.',
        logo: '◘',
        logoImage: '',
        link: '#'
      },
    ];
  });

  const GeometricAnimation = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setRotation(prev => (prev + 0.5) % 360);
      }, 50);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="fixed inset-0 flex items-center justify-center opacity-50 pointer-events-none">
        <div style={{ transform: `rotateX(${rotation * 0.5}deg) rotateY(${rotation}deg) rotateZ(${rotation * 0.3}deg)`, transformStyle: 'preserve-3d' }}>
          {/* Outer holographic cube */}
          <div className="relative" style={{ width: '300px', height: '300px', transformStyle: 'preserve-3d' }}>
            {/* Cube faces */}
            <div className="absolute w-full h-full border border-white/20" style={{ 
              transform: 'translateZ(150px)',
              background: 'linear-gradient(135deg, rgba(255,0,0,0.1) 0%, rgba(255,255,255,0.05) 100%)'
            }} />
            <div className="absolute w-full h-full border border-white/20" style={{ 
              transform: 'translateZ(-150px) rotateY(180deg)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,0,0,0.1) 100%)'
            }} />
            <div className="absolute w-full h-full border border-red-500/30" style={{ 
              transform: 'rotateY(90deg) translateZ(150px)',
              background: 'linear-gradient(135deg, rgba(255,0,0,0.15) 0%, rgba(255,255,255,0.03) 100%)'
            }} />
            <div className="absolute w-full h-full border border-red-500/30" style={{ 
              transform: 'rotateY(-90deg) translateZ(150px)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,0,0,0.15) 100%)'
            }} />
            <div className="absolute w-full h-full border border-white/10" style={{ 
              transform: 'rotateX(90deg) translateZ(150px)',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)'
            }} />
            <div className="absolute w-full h-full border border-white/10" style={{ 
              transform: 'rotateX(-90deg) translateZ(150px)',
              background: 'radial-gradient(circle, rgba(255,0,0,0.1) 0%, transparent 70%)'
            }} />
            
            {/* Inner sphere with holographic effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/30"
                 style={{
                   background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), rgba(255,0,0,0.2), transparent)',
                   boxShadow: '0 0 60px rgba(255,0,0,0.3), inset 0 0 40px rgba(255,255,255,0.2)'
                 }} />
            
            {/* Orbiting rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-red-500/20"
                 style={{ transform: `rotateX(${rotation * 2}deg)`, transformStyle: 'preserve-3d' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border border-white/10"
                 style={{ transform: `rotateY(${rotation * 1.5}deg)`, transformStyle: 'preserve-3d' }} />
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${20 + (i * 7)}%`,
                top: `${30 + Math.sin(rotation * 0.02 + i) * 20}%`,
                opacity: Math.abs(Math.sin(rotation * 0.02 + i)) * 0.6,
                boxShadow: i % 3 === 0 ? '0 0 10px rgba(255,0,0,0.5)' : '0 0 8px rgba(255,255,255,0.3)'
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  // Subtle background particles - barely visible
  const BackgroundParticles = () => {
    const [particles] = useState(() => 
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 40 + 30,
        delay: Math.random() * 20
      }))
    );

    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-35">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              boxShadow: particle.id % 5 === 0 ? '0 0 4px rgba(255,0,0,0.3)' : '0 0 3px rgba(255,255,255,0.2)'
            }}
          />
        ))}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
            50% { transform: translateY(-30px) translateX(10px); opacity: 0.6; }
          }
        `}</style>
      </div>
    );
  };

  const Header = () => {
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
      const triggerGlitch = () => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 200);
      };

      // Glitch effect every 35-45 seconds
      const interval = setInterval(() => {
        triggerGlitch();
      }, Math.random() * 10000 + 35000);

      return () => clearInterval(interval);
    }, []);

    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <nav className="container mx-auto px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
          <button 
            onClick={() => {
              setCurrentSection('home');
              setMobileMenuOpen(false);
            }} 
            className={`font-mono text-white tracking-wider hover:text-red-500 transition-colors flex items-center gap-2 ${
              glitch ? 'glitch-effect' : ''
            }`}
          >
            <span className="text-red-500">▪️</span> <span className="hidden sm:inline">dinamarca</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 lg:gap-6 font-mono text-xs lg:text-sm">
            {['about me', 'publicaciones', 'multimedia', 'proyectos', 'clima', 'contacto'].map(section => (
              <button
                key={section}
                onClick={() => setCurrentSection(section)}
                className={`hover:text-red-500 transition-colors ${
                  currentSection === section ? 'text-red-500' : 'text-white/70'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden font-mono text-white text-xl"
          >
            {mobileMenuOpen ? '×' : '≡'}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/10">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4 font-mono text-sm">
              {['about me', 'publicaciones', 'multimedia', 'proyectos', 'clima', 'contacto'].map(section => (
                <button
                  key={section}
                  onClick={() => {
                    setCurrentSection(section);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left hover:text-red-500 transition-colors ${
                    currentSection === section ? 'text-red-500' : 'text-white/70'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}

        <style>{`
          @keyframes glitch {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, 1px); }
            40% { transform: translate(2px, -1px); }
            60% { transform: translate(-1px, 2px); }
            80% { transform: translate(1px, -2px); }
          }
          .glitch-effect {
            animation: glitch 0.2s linear;
            text-shadow: 2px 0 rgba(255, 0, 0, 0.3), -2px 0 rgba(0, 255, 255, 0.3);
          }
        `}</style>
      </header>
    );
  };

  const Footer = () => (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-8 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 font-mono text-xs text-white/50">
        <span className="text-center sm:text-left">© 2025 dinamarca — archivo digital personal</span>
        <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
          {Object.entries(socialLinks).map(([platform, url]) => (
            <a 
              key={platform}
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-red-500 transition-colors lowercase"
            >
              {platform}
            </a>
          ))}
          {isAdmin && (
            <button 
              onClick={() => setCurrentSection('admin')}
              className="hover:text-red-500 transition-colors"
            >
              admin
            </button>
          )}
        </div>
      </div>
    </footer>
  );

  const Home = () => (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <GeometricAnimation />
    </div>
  );

  const AboutMe = () => (
    <div className="min-h-screen bg-black pt-24 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-mono text-white/30 text-xs sm:text-sm mb-6 sm:mb-8 tracking-widest">ABOUT_ME</h1>
        <div className="font-mono text-white/90 text-base sm:text-lg leading-relaxed whitespace-pre-line lowercase">
          {aboutText}
        </div>
      </div>
    </div>
  );

  const Publicaciones = () => (
    <div className="min-h-screen bg-black pt-24 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-mono text-white/30 text-xs sm:text-sm mb-8 sm:mb-12 tracking-widest">PUBLICACIONES</h1>
        <div className="space-y-12 sm:space-y-16">
          {publicaciones.map(pub => (
            <article 
              key={pub.id} 
              onClick={() => setSelectedPublication(pub)}
              className="border-l border-white/10 pl-4 sm:pl-8 hover:border-red-500/50 transition-all cursor-pointer group"
            >
              {/* Hero image with dark gradient */}
              <div className="relative w-full h-48 sm:h-64 mb-4 sm:mb-6 overflow-hidden -ml-4 sm:-ml-8 group/hero">
                <img 
                  src={pub.heroImage} 
                  alt={pub.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Hover particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/39 rounded-full"
                      style={{
                        left: `${3 + i * 8}%`,
                        bottom: '-10px',
                        animation: `floatUpParticle 2.2s ease-out ${i * 0.1}s infinite`
                      }}
                    />
                  ))}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`red-${i}`}
                      className="absolute w-1 h-1 bg-red-500/39 rounded-full"
                      style={{
                        left: `${10 + i * 15}%`,
                        bottom: '-10px',
                        animation: `floatUpParticle 2.5s ease-out ${i * 0.15}s infinite`
                      }}
                    />
                  ))}
                </div>
                
                {/* Dark gradient overlay - very dark */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70 z-10" />
                
                {/* Content over gradient */}
                <div className="absolute bottom-0 left-4 sm:left-8 right-0 pb-4 sm:pb-6 z-20">
                  <div className="font-mono text-white/40 text-xs mb-1 sm:mb-2">{pub.date}</div>
                  <h2 className="font-mono text-white text-lg sm:text-2xl mb-2 lowercase">{pub.title}</h2>
                </div>
              </div>
              
              <p className="font-mono text-white/60 leading-relaxed lowercase text-xs sm:text-sm">
                {pub.preview}
              </p>
              
              <button className="mt-3 sm:mt-4 font-mono text-red-500 text-xs hover:underline">
                leer completo →
              </button>
              
              <style>{`
                @keyframes floatUpParticle {
                  0% { 
                    transform: translateY(0) translateX(0); 
                    opacity: 0; 
                  }
                  10% { 
                    opacity: 0.8; 
                  }
                  90% { 
                    opacity: 0.3; 
                  }
                  100% { 
                    transform: translateY(-150px) translateX(${(Math.random() - 0.5) * 30}px); 
                    opacity: 0; 
                  }
                }
              `}</style>
            </article>
          ))}
        </div>
        <div className="mt-12 sm:mt-16 text-center font-mono text-white/30 text-xs">
          // agrega más publicaciones para scroll infinito
        </div>
      </div>

      {/* Full publication view modal */}
      {selectedPublication && (
        <div 
          className="fixed inset-0 bg-black z-50 overflow-y-auto"
          onClick={() => setSelectedPublication(null)}
        >
          <div className="min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-8" onClick={e => e.stopPropagation()}>
            <div className="max-w-3xl mx-auto">
              {/* Close button */}
              <button 
                onClick={() => setSelectedPublication(null)}
                className="fixed top-4 sm:top-8 right-4 sm:right-8 font-mono text-white/50 hover:text-red-500 text-2xl sm:text-3xl transition-colors z-10"
              >
                ×
              </button>

              {/* Hero image full */}
              <div className="relative w-full h-64 sm:h-96 mb-8 sm:mb-12 overflow-hidden">
                <img 
                  src={selectedPublication.heroImage} 
                  alt={selectedPublication.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                  <div className="font-mono text-white/40 text-xs mb-2">{selectedPublication.date}</div>
                  <h1 className="font-mono text-white text-2xl sm:text-4xl mb-4 lowercase">{selectedPublication.title}</h1>
                </div>
              </div>

              {/* Full content */}
              <div className="font-mono text-white/80 text-base sm:text-lg leading-[1.6] whitespace-pre-line lowercase mb-8 sm:mb-12">
                {selectedPublication.content}
              </div>

              {/* Additional images if any */}
              {selectedPublication.images && selectedPublication.images.length > 1 && (
                <div className="space-y-6 sm:space-y-8">
                  {selectedPublication.images.slice(1).map((img, idx) => (
                    <div key={idx} className="relative w-full h-64 sm:h-80 overflow-hidden">
                      <img 
                        src={img} 
                        alt={`imagen ${idx + 2}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  ))}
                </div>
              )}

              {/* Back button */}
              <button 
                onClick={() => setSelectedPublication(null)}
                className="mt-8 sm:mt-12 font-mono text-red-500 text-sm hover:underline"
              >
                ← volver a publicaciones
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const Multimedia = () => (
    <div className="min-h-screen bg-black pt-24 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-mono text-white/30 text-xs sm:text-sm mb-8 sm:mb-12 tracking-widest">MULTIMEDIA</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {mediaItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="aspect-square bg-white/5 overflow-hidden cursor-pointer hover:ring-2 hover:ring-red-500 transition-all group relative"
            >
              <img 
                src={item.url} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Hover particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/39 rounded-full"
                    style={{
                      left: `${10 + i * 12}%`,
                      bottom: '-10px',
                      animation: `floatUpParticle 2s ease-out ${i * 0.15}s infinite`
                    }}
                  />
                ))}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`red-${i}`}
                    className="absolute w-1 h-1 bg-red-500/39 rounded-full"
                    style={{
                      left: `${20 + i * 20}%`,
                      bottom: '-10px',
                      animation: `floatUpParticle 2.5s ease-out ${i * 0.2}s infinite`
                    }}
                  />
                ))}
              </div>
              
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 z-10">
                <div className="text-center">
                  <div className="font-mono text-white text-xs sm:text-sm mb-2 lowercase">{item.title}</div>
                  <div className="font-mono text-white/60 text-xs lowercase">{item.desc}</div>
                </div>
              </div>
              
              <style>{`
                @keyframes floatUpParticle {
                  0% { 
                    transform: translateY(0) translateX(0); 
                    opacity: 0; 
                  }
                  10% { 
                    opacity: 0.8; 
                  }
                  90% { 
                    opacity: 0.3; 
                  }
                  100% { 
                    transform: translateY(-150px) translateX(${(Math.random() - 0.5) * 30}px); 
                    opacity: 0; 
                  }
                }
              `}</style>
            </div>
          ))}
        </div>
        <div className="mt-6 sm:mt-8 text-center font-mono text-white/30 text-xs">
          // scroll para más contenido visual
        </div>
      </div>
      
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={selectedMedia.url} alt={selectedMedia.title} className="w-full" />
            <div className="mt-3 sm:mt-4 font-mono text-white text-base sm:text-lg lowercase">{selectedMedia.title}</div>
            <div className="mt-2 font-mono text-white/50 text-xs sm:text-sm lowercase">{selectedMedia.desc}</div>
            <button 
              onClick={() => {
                setSelectedMedia(null);
                setCurrentSection('publicaciones');
              }}
              className="mt-3 sm:mt-4 font-mono text-red-500 text-xs hover:underline"
            >
              → ver publicación relacionada
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const Proyectos = () => (
    <div className="min-h-screen bg-black pt-24 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-mono text-white/30 text-xs sm:text-sm mb-8 sm:mb-12 tracking-widest">PROYECTOS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              onClick={() => {
                if (project.link && project.link !== '#') {
                  window.open(project.link, '_blank');
                } else {
                  setSelectedProject(project);
                }
              }}
              className="aspect-[4/3] bg-white/5 border border-white/10 hover:border-red-500 transition-all cursor-pointer flex flex-col items-center justify-center p-4 sm:p-6 group relative overflow-hidden"
            >
              {/* Hover particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/39 rounded-full"
                    style={{
                      left: `${10 + i * 12}%`,
                      bottom: '-10px',
                      animation: `floatUpParticle 2s ease-out ${i * 0.15}s infinite`
                    }}
                  />
                ))}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`red-${i}`}
                    className="absolute w-1 h-1 bg-red-500/39 rounded-full"
                    style={{
                      left: `${20 + i * 20}%`,
                      bottom: '-10px',
                      animation: `floatUpParticle 2.5s ease-out ${i * 0.2}s infinite`
                    }}
                  />
                ))}
              </div>
              
              {project.logoImage ? (
                <img 
                  src={project.logoImage} 
                  alt={project.name} 
                  className="w-10 h-10 object-contain mb-3 group-hover:scale-110 transition-transform relative z-10" 
                />
              ) : (
                <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform relative z-10">{project.logo || '▪️'}</div>
              )}
              <h3 className="font-mono text-white text-base sm:text-lg mb-1 lowercase relative z-10">{project.name}</h3>
              <p className="font-mono text-white/40 text-xs lowercase relative z-10">{project.type}</p>
              
              <style>{`
                @keyframes floatUpParticle {
                  0% { 
                    transform: translateY(0) translateX(0); 
                    opacity: 0; 
                  }
                  10% { 
                    opacity: 0.8; 
                  }
                  90% { 
                    opacity: 0.3; 
                  }
                  100% { 
                    transform: translateY(-150px) translateX(${(Math.random() - 0.5) * 30}px); 
                    opacity: 0; 
                  }
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div className="max-w-2xl w-full bg-black border border-white/20 p-8 sm:p-12" onClick={e => e.stopPropagation()}>
            <div className="text-5xl sm:text-6xl mb-6">{selectedProject.logo}</div>
            <h2 className="font-mono text-white text-2xl sm:text-3xl mb-2 lowercase">{selectedProject.name}</h2>
            <p className="font-mono text-white/40 text-sm mb-6 lowercase">{selectedProject.type}</p>
            <p className="font-mono text-white/70 leading-relaxed lowercase text-sm sm:text-base">{selectedProject.description}</p>
            {selectedProject.link && selectedProject.link !== '#' && (
              <a 
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-mono text-red-500 text-sm hover:underline"
              >
                visitar proyecto →
              </a>
            )}
            <button 
              onClick={() => setSelectedProject(null)}
              className="mt-6 sm:mt-8 block font-mono text-white/50 text-sm hover:text-red-500"
            >
              ← volver
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const Contacto = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      // Simulate email send
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    };

    return (
      <div className="min-h-screen bg-black pt-24 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-mono text-white/30 text-xs sm:text-sm mb-8 sm:mb-12 tracking-widest">CONTACTO</h1>
          
          {submitted ? (
            <div className="font-mono text-red-500 lowercase text-sm sm:text-base">mensaje enviado. gracias.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 px-3 sm:px-4 py-2 sm:py-3 font-mono text-white text-sm sm:text-base lowercase focus:border-red-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 px-3 sm:px-4 py-2 sm:py-3 font-mono text-white text-sm sm:text-base lowercase focus:border-red-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="mensaje"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="6"
                  className="w-full bg-white/5 border border-white/10 px-3 sm:px-4 py-2 sm:py-3 font-mono text-white text-sm sm:text-base lowercase focus:border-red-500 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="font-mono text-white border border-white/20 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base hover:bg-red-500 hover:border-red-500 transition-all lowercase"
              >
                enviar →
              </button>
            </form>
          )}
        </div>
      </div>
    );
  };

  // ADMIN PANEL COMPONENT
  const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [editingAbout, setEditingAbout] = useState(aboutText);
    const [editingSocial, setEditingSocial] = useState(socialLinks);
    const [editingPubs, setEditingPubs] = useState(publicaciones);
    const [editingProjects, setEditingProjects] = useState(projects);
    const [newSocialPlatform, setNewSocialPlatform] = useState('');
    const [newSocialUrl, setNewSocialUrl] = useState('');
    const [editingPubId, setEditingPubId] = useState(null);
    const [newPubForm, setNewPubForm] = useState({
      title: '',
      preview: '',
      content: '',
      heroImage: '',
      images: []
    });

    const saveAbout = () => {
      setAboutText(editingAbout);
      localStorage.setItem('dinamarca_about', editingAbout);
      alert('About Me guardado ✓');
    };

    const saveSocial = () => {
      setSocialLinks(editingSocial);
      localStorage.setItem('dinamarca_social', JSON.stringify(editingSocial));
      alert('Redes sociales guardadas ✓');
    };

    const addSocialLink = () => {
      if (newSocialPlatform && newSocialUrl) {
        setEditingSocial({...editingSocial, [newSocialPlatform.toLowerCase()]: newSocialUrl});
        setNewSocialPlatform('');
        setNewSocialUrl('');
      }
    };

    const removeSocialLink = (platform) => {
      const updated = {...editingSocial};
      delete updated[platform];
      setEditingSocial(updated);
    };

    const savePublicaciones = () => {
      setPublicaciones(editingPubs);
      localStorage.setItem('dinamarca_publicaciones', JSON.stringify(editingPubs));
      alert('Publicaciones guardadas ✓');
    };

    const createNewPublication = () => {
      if (!newPubForm.title || !newPubForm.content) {
        alert('Título y contenido son obligatorios');
        return;
      }
      const newPub = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
        ...newPubForm
      };
      const updated = [newPub, ...editingPubs];
      setEditingPubs(updated);
      setPublicaciones(updated);
      localStorage.setItem('dinamarca_publicaciones', JSON.stringify(updated));
      setNewPubForm({ title: '', preview: '', content: '', heroImage: '', images: [] });
      alert('Publicación creada ✓');
    };

    const deletePublication = (id) => {
      if (confirm('¿Eliminar esta publicación?')) {
        const updated = editingPubs.filter(p => p.id !== id);
        setEditingPubs(updated);
        setPublicaciones(updated);
        localStorage.setItem('dinamarca_publicaciones', JSON.stringify(updated));
      }
    };

    const addImageToNewPub = () => {
      const url = prompt('URL de la imagen:');
      if (url) {
        setNewPubForm({
          ...newPubForm,
          images: [...newPubForm.images, url]
        });
      }
    };

    const saveProjects = () => {
      setProjects(editingProjects);
      localStorage.setItem('dinamarca_projects', JSON.stringify(editingProjects));
      alert('Proyectos guardados ✓');
    };

    return (
      <div className="min-h-screen bg-black pt-24 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
            <h1 className="font-mono text-white/30 text-xs sm:text-sm tracking-widest">ADMIN PANEL</h1>
            <button 
              onClick={() => { setIsAdmin(false); setCurrentSection('home'); }}
              className="font-mono text-red-500 text-xs hover:underline"
            >
              cerrar sesión
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8 border-b border-white/10 overflow-x-auto">
            {['about', 'redes', 'publicaciones', 'proyectos', 'multimedia'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-mono px-3 sm:px-4 py-2 lowercase text-xs sm:text-sm whitespace-nowrap ${
                  activeTab === tab ? 'text-red-500 border-b-2 border-red-500' : 'text-white/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ABOUT ME TAB */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <textarea
                value={editingAbout}
                onChange={(e) => setEditingAbout(e.target.value)}
                rows="10"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-white lowercase focus:border-red-500 focus:outline-none resize-none"
              />
              <button
                onClick={saveAbout}
                className="font-mono text-white border border-white/20 px-8 py-3 hover:bg-red-500 hover:border-red-500 transition-all"
              >
                guardar about me
              </button>
            </div>
          )}

          {/* REDES SOCIALES TAB */}
          {activeTab === 'redes' && (
            <div className="space-y-8">
              <div className="space-y-4">
                {Object.entries(editingSocial).map(([platform, url]) => (
                  <div key={platform} className="flex gap-4 items-center">
                    <input
                      value={platform}
                      disabled
                      className="w-40 bg-white/5 border border-white/10 px-4 py-2 font-mono text-white/50 lowercase"
                    />
                    <input
                      value={url}
                      onChange={(e) => setEditingSocial({...editingSocial, [platform]: e.target.value})}
                      className="flex-1 bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                    />
                    <button
                      onClick={() => removeSocialLink(platform)}
                      className="font-mono text-red-500 hover:underline text-sm"
                    >
                      eliminar
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-8">
                <h3 className="font-mono text-white/50 text-sm mb-4">agregar nueva red</h3>
                <div className="flex gap-4">
                  <input
                    placeholder="plataforma (ej: threads)"
                    value={newSocialPlatform}
                    onChange={(e) => setNewSocialPlatform(e.target.value)}
                    className="w-40 bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                  />
                  <input
                    placeholder="url completa"
                    value={newSocialUrl}
                    onChange={(e) => setNewSocialUrl(e.target.value)}
                    className="flex-1 bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                  />
                  <button
                    onClick={addSocialLink}
                    className="font-mono text-white border border-white/20 px-6 py-2 hover:bg-red-500 hover:border-red-500 transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={saveSocial}
                className="font-mono text-white border border-white/20 px-8 py-3 hover:bg-red-500 hover:border-red-500 transition-all"
              >
                guardar redes sociales
              </button>
            </div>
          )}

          {/* PUBLICACIONES TAB */}
          {activeTab === 'publicaciones' && (
            <div className="space-y-8">
              {/* Create new publication */}
              <div className="border border-white/10 p-6 space-y-4">
                <h3 className="font-mono text-white/50 text-sm mb-4">crear nueva publicación</h3>
                <input
                  placeholder="título"
                  value={newPubForm.title}
                  onChange={(e) => setNewPubForm({...newPubForm, title: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                />
                <input
                  placeholder="preview (texto corto)"
                  value={newPubForm.preview}
                  onChange={(e) => setNewPubForm({...newPubForm, preview: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                />
                <textarea
                  placeholder="contenido completo (usa saltos de línea para párrafos)"
                  value={newPubForm.content}
                  onChange={(e) => setNewPubForm({...newPubForm, content: e.target.value})}
                  rows="8"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-white lowercase focus:border-red-500 focus:outline-none resize-none"
                />
                <input
                  placeholder="url imagen hero (principal)"
                  value={newPubForm.heroImage}
                  onChange={(e) => setNewPubForm({...newPubForm, heroImage: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                />
                <div>
                  <button
                    onClick={addImageToNewPub}
                    className="font-mono text-white/50 border border-white/10 px-4 py-2 hover:text-red-500 hover:border-red-500 transition-all text-sm"
                  >
                    + agregar imagen adicional
                  </button>
                  {newPubForm.images.length > 0 && (
                    <div className="mt-2 font-mono text-white/50 text-xs">
                      {newPubForm.images.length} imágenes agregadas
                    </div>
                  )}
                </div>
                <button
                  onClick={createNewPublication}
                  className="font-mono text-white border border-white/20 px-8 py-3 hover:bg-red-500 hover:border-red-500 transition-all"
                >
                  crear publicación
                </button>
              </div>

              {/* List existing publications */}
              <div className="space-y-4">
                <h3 className="font-mono text-white/50 text-sm">publicaciones existentes</h3>
                {editingPubs.map(pub => (
                  <div key={pub.id} className="border border-white/10 p-4 flex justify-between items-center">
                    <div>
                      <div className="font-mono text-white lowercase">{pub.title}</div>
                      <div className="font-mono text-white/40 text-xs mt-1">{pub.date}</div>
                    </div>
                    <button
                      onClick={() => deletePublication(pub.id)}
                      className="font-mono text-red-500 hover:underline text-sm"
                    >
                      eliminar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROYECTOS TAB */}
          {activeTab === 'proyectos' && (
            <div className="space-y-8">
              {/* Create new project */}
              <div className="border border-white/10 p-6 space-y-4">
                <h3 className="font-mono text-white/50 text-sm mb-4">crear nuevo proyecto</h3>
                <input
                  placeholder="nombre del proyecto"
                  className="w-full bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                  id="newProjectName"
                />
                <input
                  placeholder="tipo (ej: podcast, web, etc)"
                  className="w-full bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                  id="newProjectType"
                />
                <textarea
                  placeholder="descripción breve"
                  rows="2"
                  className="w-full bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none resize-none"
                  id="newProjectDesc"
                />
                <input
                  placeholder="logo (emoji o símbolo, ej: ◉)"
                  className="w-32 bg-white/5 border border-white/10 px-4 py-2 font-mono text-white focus:border-red-500 focus:outline-none"
                  id="newProjectLogo"
                />
                <input
                  placeholder="link del proyecto (url completa)"
                  className="w-full bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                  id="newProjectLink"
                />
                <button
                  onClick={() => {
                    const name = document.getElementById('newProjectName').value;
                    const type = document.getElementById('newProjectType').value;
                    const desc = document.getElementById('newProjectDesc').value;
                    const logo = document.getElementById('newProjectLogo').value;
                    const link = document.getElementById('newProjectLink').value;
                    
                    if (!name || !desc) {
                      alert('Nombre y descripción son obligatorios');
                      return;
                    }
                    
                    const newProject = {
                      id: Date.now(),
                      name,
                      type: type || 'proyecto',
                      description: desc,
                      logo: logo || '▪️',
                      link: link || '#'
                    };
                    
                    const updated = [...editingProjects, newProject];
                    setEditingProjects(updated);
                    setProjects(updated);
                    localStorage.setItem('dinamarca_projects', JSON.stringify(updated));
                    
                    document.getElementById('newProjectName').value = '';
                    document.getElementById('newProjectType').value = '';
                    document.getElementById('newProjectDesc').value = '';
                    document.getElementById('newProjectLogo').value = '';
                    document.getElementById('newProjectLink').value = '';
                    
                    alert('Proyecto creado ✓');
                  }}
                  className="font-mono text-white border border-white/20 px-8 py-3 hover:bg-red-500 hover:border-red-500 transition-all"
                >
                  crear proyecto
                </button>
              </div>

              {/* List existing projects */}
              <div className="space-y-4">
                <h3 className="font-mono text-white/50 text-sm">proyectos existentes</h3>
                {editingProjects.map((project, idx) => (
                  <div key={project.id} className="border border-white/10 p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 space-y-3">
                        <input
                          value={project.name}
                          onChange={(e) => {
                            const updated = [...editingProjects];
                            updated[idx].name = e.target.value;
                            setEditingProjects(updated);
                          }}
                          placeholder="nombre"
                          className="w-full bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                        />
                        <input
                          value={project.type}
                          onChange={(e) => {
                            const updated = [...editingProjects];
                            updated[idx].type = e.target.value;
                            setEditingProjects(updated);
                          }}
                          placeholder="tipo"
                          className="w-full bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                        />
                        <textarea
                          value={project.description}
                          onChange={(e) => {
                            const updated = [...editingProjects];
                            updated[idx].description = e.target.value;
                            setEditingProjects(updated);
                          }}
                          placeholder="descripción"
                          rows="2"
                          className="w-full bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none resize-none"
                        />
                        <div className="flex gap-3">
                          <input
                            placeholder="logo emoji"
                            value={project.logo}
                            onChange={(e) => {
                              const updated = [...editingProjects];
                              updated[idx].logo = e.target.value;
                              setEditingProjects(updated);
                            }}
                            className="w-32 bg-white/5 border border-white/10 px-4 py-2 font-mono text-white focus:border-red-500 focus:outline-none"
                          />
                          <input
                            placeholder="logo URL imagen (40x40px)"
                            value={project.logoImage || ''}
                            onChange={(e) => {
                              const updated = [...editingProjects];
                              updated[idx].logoImage = e.target.value;
                              setEditingProjects(updated);
                            }}
                            className="flex-1 bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                          />
                        </div>
                        <input
                          placeholder="link (url completa)"
                          value={project.link || ''}
                          onChange={(e) => {
                            const updated = [...editingProjects];
                            updated[idx].link = e.target.value;
                            setEditingProjects(updated);
                          }}
                          className="w-full bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                        />
                      </div>
                      <button
                        onClick={() => {
                          if (confirm('¿Eliminar este proyecto?')) {
                            const updated = editingProjects.filter((_, i) => i !== idx);
                            setEditingProjects(updated);
                            setProjects(updated);
                            localStorage.setItem('dinamarca_projects', JSON.stringify(updated));
                          }
                        }}
                        className="ml-4 font-mono text-red-500 hover:underline text-sm"
                      >
                        eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={saveProjects}
                className="font-mono text-white border border-white/20 px-8 py-3 hover:bg-red-500 hover:border-red-500 transition-all"
              >
                guardar cambios
              </button>
            </div>
          )}

          {/* MULTIMEDIA TAB */}
          {activeTab === 'multimedia' && (
            <div className="space-y-8">
              <div className="border border-white/10 p-6 space-y-4">
                <h3 className="font-mono text-white/50 text-sm mb-4">agregar imagen</h3>
                <input
                  placeholder="URL de la imagen"
                  id="newMediaUrl"
                  className="w-full bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                />
                <input
                  placeholder="título"
                  id="newMediaTitle"
                  className="w-full bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                />
                <input
                  placeholder="descripción"
                  id="newMediaDesc"
                  className="w-full bg-white/5 border border-white/10 px-4 py-2 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                />
                <button
                  onClick={() => {
                    const url = document.getElementById('newMediaUrl').value;
                    const title = document.getElementById('newMediaTitle').value;
                    const desc = document.getElementById('newMediaDesc').value;
                    
                    if (url && title) {
                      const newItem = {
                        id: Date.now(),
                        type: 'image',
                        url,
                        title,
                        desc,
                        linked: 1
                      };
                      const updated = [...mediaItems, newItem];
                      setMediaItems(updated);
                      localStorage.setItem('dinamarca_media', JSON.stringify(updated));
                      document.getElementById('newMediaUrl').value = '';
                      document.getElementById('newMediaTitle').value = '';
                      document.getElementById('newMediaDesc').value = '';
                      alert('Imagen agregada ✓');
                    }
                  }}
                  className="font-mono text-white border border-white/20 px-8 py-3 hover:bg-red-500 hover:border-red-500 transition-all"
                >
                  agregar imagen
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="font-mono text-white/50 text-sm">imágenes actuales ({mediaItems.length})</h3>
                {mediaItems.length === 0 ? (
                  <div className="font-mono text-white/30 text-sm">no hay imágenes. agregá algunas arriba.</div>
                ) : (
                  mediaItems.map((item, idx) => (
                    <div key={item.id} className="border border-white/10 p-4 flex justify-between items-center">
                      <div className="flex gap-4 items-center flex-1">
                        <img src={item.url} alt={item.title} className="w-16 h-16 object-cover" />
                        <div className="flex-1">
                          <div className="font-mono text-white lowercase">{item.title}</div>
                          <div className="font-mono text-white/40 text-xs mt-1">{item.desc}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          if (confirm('¿Eliminar esta imagen?')) {
                            const updated = mediaItems.filter((_, i) => i !== idx);
                            setMediaItems(updated);
                            localStorage.setItem('dinamarca_media', JSON.stringify(updated));
                          }
                        }}
                        className="font-mono text-red-500 hover:underline text-sm ml-4"
                      >
                        eliminar
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Componente CLIMA
  const Clima = () => {
    const ciudades = [
      'Buenos Aires', 'Ushuaia', 'El Calafate', 'Puerto Madryn',
      'San Martin de los Andes', 'Viedma', 'Cuatral Co', 'Mar del Plata',
      'Ramos Mejia', 'Trenque Lauquen', 'Santa Rosa', 'Villa Mercedes',
      'Mendoza', 'Venado Tuerto', 'Rio Cuarto', 'Villa Gral Belgrano',
      'Concordia', 'Chilecito', 'Curuzu Cuatia', 'Fiambala',
      'Cafayate', 'Purmamarca', 'Clorinda', 'Puerto Iguazu',
      'Tartagal', 'Islas Malvinas'
    ];

    const getColorForTemp = (temp) => {
      if (temp <= 0) return '#00d4ff'; // Azul muy frío
      if (temp <= 10) return '#4dd0e1'; // Azul frío
      if (temp <= 18) return '#9e9e9e'; // Gris templado
      if (temp <= 25) return '#ffa726'; // Naranja cálido
      if (temp <= 32) return '#ff6b6b'; // Rojo calor
      if (temp <= 40) return '#ef5350'; // Rojo fuerte
      return '#d32f2f'; // Rojo extremo
    };

    return (
      <div className="min-h-screen bg-black pt-24 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-mono text-white/30 text-xs sm:text-sm mb-8 sm:mb-12 tracking-widest">CLIMA</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {ciudades.map((ciudad, idx) => {
              // Temperatura simulada (en producción usarías API)
              const temp = Math.floor(Math.random() * 35) + 5;
              const condiciones = ['soleado', 'nublado', 'lluvia', 'tormenta', 'viento', 'nevada'];
              const condicion = condiciones[Math.floor(Math.random() * condiciones.length)];
              
              return (
                <div key={idx} className="border border-white/10 p-4 hover:border-red-500/50 transition-all">
                  <div className="font-mono text-white text-sm mb-2 lowercase">{ciudad}</div>
                  <div className="font-mono text-white/50 text-xs mb-2 lowercase">{condicion}</div>
                  <div 
                    className="font-mono text-2xl font-bold" 
                    style={{color: getColorForTemp(temp)}}
                  >
                    {temp}°
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const sections = {
    'home': <Home />,
    'about me': <AboutMe />,
    'publicaciones': <Publicaciones />,
    'multimedia': <Multimedia />,
    'proyectos': <Proyectos />,
    'clima': <Clima />,
    'contacto': <Contacto />,
    'admin': <AdminPanel />
  };

  // Check for admin access via URL
  useEffect(() => {
    if (window.location.hash === '#admin') {
      setShowAdminLogin(true);
    }
  }, []);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setCurrentSection('admin');
      setShowAdminLogin(false);
      setAdminPassword('');
    } else {
      alert('contraseña incorrecta');
      setAdminPassword('');
    }
  };

  return (
    <div className="bg-black min-h-screen font-mono">
      <BackgroundParticles />
      <Header />
      {sections[currentSection]}
      <Footer />

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="max-w-md w-full mx-4">
            <div className="bg-black border border-white/20 p-8">
              <h2 className="font-mono text-white text-xl mb-6 lowercase">admin access</h2>
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <input
                  type="password"
                  placeholder="contraseña"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-white lowercase focus:border-red-500 focus:outline-none"
                  autoFocus
                />
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 font-mono text-white border border-white/20 px-6 py-3 hover:bg-red-500 hover:border-red-500 transition-all"
                  >
                    entrar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowAdminLogin(false);
                      setAdminPassword('');
                      window.location.hash = '';
                    }}
                    className="font-mono text-white/50 hover:text-red-500 transition-colors"
                  >
                    cancelar
                  </button>
                </div>
              </form>
              <div className="mt-6 font-mono text-white/30 text-xs">
                contraseña por defecto: dinamarca2025
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DINAMARCA;

