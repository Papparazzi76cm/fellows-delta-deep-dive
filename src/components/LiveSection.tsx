import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Calendar } from 'lucide-react';

const LiveSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('live');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="live" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-accent">
            El blues se vive en directo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada concierto de Fellows es una ceremonia. Cuerdas crujientes, amplificadores a válvulas, 
            luces tenues y una conexión brutal con el público.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-br from-card to-muted border-accent/30 overflow-hidden">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-serif font-bold text-foreground">
                    Experiencia en vivo
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ya sea en un club íntimo o sobre un gran escenario, el viaje es siempre el mismo: 
                    puro, eléctrico y honesto.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="btn-accent group">
                      <Play className="mr-2 h-4 w-4 group-hover:animate-wave" />
                      Ver "My Babe is Gone"
                    </Button>
                    <Button variant="outline" className="btn-outline">
                      <Calendar className="mr-2 h-4 w-4" />
                      Próximas fechas
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  {/* Music Visualizer Mockup */}
                  <div className="bg-primary/20 rounded-lg p-6 border border-accent/30">
                    <div className="flex items-end justify-center space-x-1 h-32">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-accent w-3 animate-wave rounded-t"
                          style={{
                            height: `${Math.random() * 80 + 20}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-center text-accent font-semibold mt-4">
                      🎵 My Babe is Gone - Directo en La Leñera
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LiveSection;