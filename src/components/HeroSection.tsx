import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Music, ShoppingCart } from 'lucide-react';
import heroImage from '@/assets/hero-blues-stage.jpg';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden parallax-container">
      {/* Parallax Background */}
      <div 
        className="parallax-bg"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/80" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 hero-text-glow">
          FELLOWS
        </h1>
        <p className="text-2xl md:text-3xl text-accent font-serif mb-4">
          Electrified Delta Blues desde Valladolid
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          El sonido crudo del Mississippi resucita en el corazón de Castilla
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="btn-accent group">
            <Music className="mr-2 h-5 w-5 group-hover:animate-wave" />
            Escuchar ahora
          </Button>
          <Button variant="outline" className="btn-outline">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Comprar discos
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-parallax-float">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;