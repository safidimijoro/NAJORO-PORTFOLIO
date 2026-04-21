import React, { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const scooterScreenshots = [
    {src:"/LOGIN.png",title:"login"},
    { src: "/image.png", title: "Dashboard & Ventes" },
    { src: "/stock.png", title: "Gestion des Stocks" },
    { src: "/credit.png", title: "Suivi des Crédits" },
    { src: "/client.png", title: "Interface Client" } 
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    const interval = setInterval(() => {
      setActiveImg((prev) => (prev === scooterScreenshots.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [scooterScreenshots.length]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skillGroups = [
    {
      title: "Frontend & Web",
      color: "text-emerald-400",
      skills: [
        { name: "React JS", level: "90%", barColor: "bg-emerald-500" },
        { name: "JavaScript", level: "90%", barColor: "bg-emerald-400" },
        { name: "HTML", level: "95%", barColor: "bg-emerald-500" },
        { name: "CSS", level: "85%", barColor: "bg-emerald-400" },
        { name: "Tailwind CSS", level: "90%", barColor: "bg-emerald-500" },
      ]
    },
    {
      title: "Backend & Logiciel",
      color: "text-blue-400",
      skills: [
        { name: "Java / Spring Boot", level: "85%", barColor: "bg-blue-600" },
        { name: "Node.js", level: "80%", barColor: "bg-blue-500" },
        { name: "PHP", level: "80%", barColor: "bg-blue-400" },
        { name: "Laravel", level: "80%", barColor: "bg-blue-500" },
        { name: "Symfony", level: "85%", barColor: "bg-blue-600" },
      ]
    },
    {
      title: "Bases de données",
      color: "text-orange-400",
      skills: [
        { name: "PostgreSQL", level: "90%", barColor: "bg-orange-500" },
        { name: "MySQL", level: "85%", barColor: "bg-orange-400" },
        { name: "SQLite", level: "80%", barColor: "bg-orange-500" },
      ]
    },
    {
      title: "DevOps & Outils",
      color: "text-slate-400",
      skills: [
        { name: "Docker", level: "60%", barColor: "bg-slate-500" },
        { name: "GitHub / Git", level: "90%", barColor: "bg-slate-400" },
        { name: "GitLab", level: "85%", barColor: "bg-slate-500" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* EFFETS DE FOND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-black/60 border-b border-white/5 py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-white cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            NAJORO<span className="text-emerald-500">.</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            {['parcours', 'competences', 'projets', 'contact'].map(item => (
              <button key={item} onClick={() => scrollToSection(item === 'competences' ? 'skills' : item)} className="hover:text-emerald-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="md:hidden flex flex-col gap-1.5 p-2 group transition-all">
            <span className="w-6 h-0.5 bg-emerald-500 group-hover:w-4 transition-all"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-4 h-0.5 bg-emerald-500 group-hover:w-6 transition-all"></span>
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pt-40 pb-20 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-[9px] font-black tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            Disponible pour nouveaux défis
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
            RANDRIANARIVO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">Patrick Safidimijoro</span>
          </h1>
          <p className="max-w-xl text-slate-400 text-lg leading-relaxed mx-auto md:mx-0">
            Développeur <span className="text-white">Fullstack Expert</span>. Déterminé, sérieux et autonome. Je conçois des solutions numériques innovantes en alliant design moderne et performance technique..
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-5">
            <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-emerald-500 text-black font-black rounded-2xl hover:scale-105 transition-all text-xs uppercase tracking-widest shadow-lg shadow-emerald-500/20">Me Contacter</button>
            <button onClick={() => scrollToSection('projets')} className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all text-xs uppercase tracking-widest">Mes Travaux</button>
          </div>
        </div>

        {/* --- IMAGE DE PROFIL AVEC ANIMATION CERCLE MULTICOLORE --- */}
        <div className="relative group w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
          {/* Cercle animé multicolore */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500 animate-spin duration-[3s] opacity-70 blur-md"></div>
          {/* Image de profil */}
          <div className="relative w-[95%] h-[95%] rounded-full overflow-hidden border-4 border-[#020617] z-10">
            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* --- SECTION PARCOURS --- */}
      <section id="parcours" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <h2 className="text-xs font-black text-emerald-500 uppercase tracking-[0.5em] mb-12">Formation Académique</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { year: "2025 - 2026", title: "Licence 3 (DAII)", school: "EMIT Fianarantsoa", desc: "Spécialisation Développement d'Applications Internet & Intranet." },
            { year: "2024 - 2025", title: "Licence 2 (DAII)", school: "EMIT Fianarantsoa", desc: "Architecture logicielle et bases de données avancées." },
            { year: "2023 - 2024", title: "Licence 1 (DAII)", school: "EMIT Fianarantsoa", desc: "Bases de l'algorithmique et développement web." },
            { year: "2022 - 2023", title: "Baccalauréat Scientifique", school: "Série D", desc: " bases mathématiques solides." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all group">
              <span className="text-[10px] font-black text-slate-500">{item.year}</span>
              <h3 className="text-white font-bold mt-2 mb-1 uppercase tracking-tight text-sm">{item.title}</h3>
              <p className="text-emerald-400 text-[10px] font-bold mb-4 uppercase">{item.school}</p>
              <p className="text-slate-500 text-xs italic group-hover:text-slate-300 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION SKILLS + BUT --- */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-24 bg-white/[0.01]">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.5em]">Mon Objectif</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight italic uppercase tracking-tighter">Propulser vos <span className="text-blue-500">Visions</span> vers le digital</h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Mon but est de concevoir des architectures applicatives robustes et évolutives. Je m'efforce de créer une synergie parfaite entre un backend puissant et une interface frontend fluide pour offrir une expérience utilisateur exceptionnelle.
            </p>
            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest italic">"Le code est l'art de résoudre des problèmes complexes avec élégance."</p>
            </div>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            {skillGroups.map((group, i) => (
              <div key={i} className="space-y-8 p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5">
                <h3 className={`text-sm font-black uppercase tracking-widest ${group.color}`}>{group.title}</h3>
                <div className="space-y-6">
                  {group.skills.map((skill, si) => (
                    <div key={si} className="group">
                      <div className="flex justify-between text-[10px] font-black uppercase mb-2 tracking-tighter">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-white">{skill.level}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full ${skill.barColor} rounded-full transition-all duration-1000`} style={{ width: skill.level }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION PROJETS --- */}
      <section id="projets" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-xs font-black text-cyan-500 uppercase tracking-[0.5em] mb-12 text-center">Réalisations</h2>
        
        <div className="mb-16 grid lg:grid-cols-2 gap-12 items-center bg-white/[0.02] p-8 md:p-12 rounded-[3rem] border border-white/5">
          <div className="space-y-6">
            <span className="text-emerald-500 font-black text-[10px] tracking-widest uppercase">Projet Majeur</span>
            <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase">Scooter Pro</h3>
            <p className="text-slate-400 leading-relaxed">
              Application métier complète pour la gestion commerciale. Inclut la gestion des stocks, le suivi des ventes en temps réel et un système complexe de gestion des crédits clients.
            </p>
            <div className="flex gap-3 flex-wrap">
              {['Spring Boot', 'React JS', 'PostgreSQL', 'Tailwind'].map(t => (
                <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold uppercase">{t}</span>
              ))}
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl group cursor-pointer" onClick={() => setActiveImg(prev => (prev + 1) % scooterScreenshots.length)}>
            {scooterScreenshots.map((img, idx) => (
              <img key={idx} src={img.src} className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${activeImg === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} alt={img.title} />
            ))}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">{scooterScreenshots[activeImg].title}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Stage L2 • Java Swing</span>
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🍷</div>
            </div>
            <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter">Lazan'ny Betsileo</h4>
            <p className="text-slate-500 text-sm mt-4 leading-relaxed italic text-justify">Logiciel desktop robuste pour la gestion des ventes et la facturation automatique au sein de la cave viticole.</p>
          </div>

          <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[9px] font-black text-orange-400 uppercase tracking-widest">Web L1 • PHP/MySQL</span>
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">⛽</div>
            </div>
            <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter">Station Service</h4>
            <p className="text-slate-500 text-sm mt-4 leading-relaxed italic text-justify">Plateforme web de suivi de consommation de carburant, gestion des lubrifiants et inventaire des stocks.</p>
          </div>
        </div>
      </section>

      {/* --- SECTION CONTACT --- */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-9xl font-black text-white mb-4 uppercase tracking-tighter italic leading-none">Let's <span className="text-emerald-500">Connect</span></h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">Disponible pour des stages ou des projets ou travail.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="mailto:randrianarivosafidimijoropatri@gmail.com" className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all text-center group">
            <div className="text-2xl mb-4">📧</div>
            <h4 className="text-[9px] font-black uppercase text-slate-500 mb-2 tracking-widest">Email</h4>
            <p className="text-white font-bold group-hover:text-emerald-400 text-xs break-all">randrianarivosafidimijoropatri@gmail.com</p>
          </a>
          <a href="tel:+261341699133" className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all text-center group">
            <div className="text-2xl mb-4">📞</div>
            <h4 className="text-[9px] font-black uppercase text-slate-500 mb-2 tracking-widest">Téléphone</h4>
            <p className="text-white font-bold group-hover:text-cyan-400">+261 34 16 991 33</p>
          </a>
          <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 text-center flex flex-col justify-center">
            <div className="text-2xl mb-4 text-red-500">📍</div>
            <h4 className="text-[9px] font-black uppercase text-slate-500 mb-2 tracking-widest">Adresse</h4>
            <p className="text-white font-bold text-xs uppercase italic">lot:672/3710, Fianarantsoa, Madagascar</p>
          </div>

          <a href="#" className="p-10 rounded-[2.5rem] bg-white/[0.03] border-2 border-blue-500/40 hover:bg-blue-500/10 transition-all text-center group">
            <div className="text-2xl mb-4">🔗</div>
            <h4 className="text-[9px] font-black uppercase text-slate-500 mb-2 tracking-widest">LinkedIn</h4>
            <p className="text-blue-400 font-bold text-xs uppercase underline">Se connecter</p>
          </a>
          <a href="https://www.facebook.com/najoropatrick.safidimijoropatrick" className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:bg-blue-600/10 transition-all text-center group">
            <div className="text-2xl mb-4">📘</div>
            <h4 className="text-[9px] font-black uppercase text-slate-500 mb-2 tracking-widest">Facebook</h4>
            <p className="text-white font-bold text-xs uppercase underline">Voir le profil</p>
          </a>
          <a href="#" className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:bg-slate-500/10 transition-all text-center group">
            <div className="text-2xl mb-4">🐦</div>
            <h4 className="text-[9px] font-black uppercase text-slate-500 mb-2 tracking-widest">Twitter / X</h4>
            <p className="text-white font-bold text-xs uppercase underline">Suivre</p>
          </a>
        </div>
      </section>

      {/* --- FOOTER AVEC COMPTEUR DE VISITES --- */}
      <footer className="py-20 text-center border-t border-white/5 space-y-6">
        <p className="text-[9px] font-black text-slate-600 uppercase tracking-[1em]">
          © 2026 NAJORO • EXPERT FULLSTACK
        </p>
        <div className="flex flex-col items-center gap-3 pt-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest opacity-60">
            Merci de votre visite ! Vous êtes le visiteur n° :
          </p>
          <img 
            src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fnajoro-portfolio.vercel.app&count_bg=%2310b981&title_bg=%231e293b&icon=&icon_color=%23E7E7E7&title=Visites&edge_flat=false" 
            alt="Compteur de visites"
            className="hover:scale-110 transition-transform duration-300"
          />
        </div>
      </footer>

      {/* MENU MOBILE OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-[200] flex flex-col items-center justify-center gap-10 text-3xl font-black uppercase tracking-widest transition-all backdrop-blur-xl">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 text-emerald-500 text-5xl">×</button>
          {['parcours', 'skills', 'projets', 'contact'].map(item => (
            <button key={item} onClick={() => scrollToSection(item === 'skills' ? 'skills' : item)} className="text-white hover:text-emerald-400 transition-colors">{item}</button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;