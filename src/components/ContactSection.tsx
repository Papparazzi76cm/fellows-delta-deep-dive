import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Instagram, Facebook, Music2 } from 'lucide-react';

const ContactSection = () => {
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

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-background to-card">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-accent">
            Síguenos, comparte y escríbenos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fellows es música, pero también comunidad. Síguenos en redes, comparte nuestros discos, 
            ven a los conciertos o escríbenos si quieres colaborar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            {/* Email */}
            <Card className="card-hover bg-gradient-to-br from-card to-muted border-accent/20 group">
              <CardContent className="p-6 text-center">
                <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-4">Contacto directo</p>
                <Button variant="outline" className="btn-outline w-full text-sm">
                  fellowstheband@gmail.com
                </Button>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="card-hover bg-gradient-to-br from-card to-muted border-accent/20 group">
              <CardContent className="p-6 text-center">
                <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <Instagram className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">Instagram</h3>
                <p className="text-sm text-muted-foreground mb-4">Fotos y stories</p>
                <Button variant="outline" className="btn-outline w-full text-sm">
                  @fellows_bluesband
                </Button>
              </CardContent>
            </Card>

            {/* Facebook */}
            <Card className="card-hover bg-gradient-to-br from-card to-muted border-accent/20 group">
              <CardContent className="p-6 text-center">
                <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <Facebook className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">Facebook</h3>
                <p className="text-sm text-muted-foreground mb-4">Eventos y noticias</p>
                <Button variant="outline" className="btn-outline w-full text-sm">
                  Fellows the Band
                </Button>
              </CardContent>
            </Card>

            {/* Bandcamp */}
            <Card className="card-hover bg-gradient-to-br from-card to-muted border-accent/20 group">
              <CardContent className="p-6 text-center">
                <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <Music2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">Bandcamp</h3>
                <p className="text-sm text-muted-foreground mb-4">Música y compras</p>
                <Button variant="outline" className="btn-outline w-full text-sm">
                  fellowstheband
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quote */}
          <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <blockquote className="text-2xl md:text-3xl font-serif italic text-accent mb-8">
              "Seguimos el camino del blues, porque el blues fue primero."
            </blockquote>
            <p className="text-muted-foreground">
              © Fellows 2025 · Web diseñada con alma y distorsión.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;