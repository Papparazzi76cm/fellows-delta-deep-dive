import { useState, useEffect } from 'react';
import studioImage from '@/assets/studio-session.jpg';

const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="relative py-24 parallax-container">
      {/* Parallax Background */}
      <div 
        className="parallax-bg opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: `url(${studioImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Section Overlay */}
      <div className="section-overlay" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-12 text-accent">
              Una guitarra, una voz, y un río de blues
            </h2>
          </div>
          
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <strong className="text-accent">Fellows</strong> nace en Valladolid como un homenaje visceral 
                al blues más primitivo, ese que nació entre campos de algodón y caminos polvorientos 
                del Delta del Mississippi.
              </p>
              
              <p>
                Este dúo combina la crudeza del blues acústico con la electricidad del garage rock 
                más honesto. Sus influencias van desde <em className="text-accent">Lightnin' Hopkins</em>, 
                <em className="text-accent"> Sam Collins</em> o <em className="text-accent">John Lee Hooker</em> hasta 
                el espíritu DIY más contemporáneo.
              </p>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Grabado en sesiones íntimas en lugares como <strong className="text-bronze">Estudio Meridiano</strong> o 
                <strong className="text-bronze"> La Leñera</strong>, su música es directa, imperfecta, humana.
              </p>
              
              <p className="text-accent font-serif text-xl italic">
                Fellows no busca el artificio. Fellows suena a madera, válvula, humo y piel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;