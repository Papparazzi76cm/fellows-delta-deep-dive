import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';
import albumImage from '@/assets/album-placeholder.jpg';

const albums = [
  {
    title: "Blues Recording",
    year: "2025",
    description: "Un regreso crudo a la raíz, grabado en una sola noche en Estudio Meridiano. Blues eléctrico de altos vuelos.",
    cover: albumImage,
    bandcampUrl: "#"
  },
  {
    title: "Sesiones Delta Vol. 3",
    year: "2021", 
    description: "Guitarra, armónica y voz, sin trampa ni cartón. Una sesión directa al alma desde La Leñera.",
    cover: albumImage,
    bandcampUrl: "#"
  },
  {
    title: "The Conquer of the Moon",
    year: "2016",
    description: "Un viaje sonoro por territorios del blues, el folk y el minimalismo eléctrico.",
    cover: albumImage,
    bandcampUrl: "#"
  }
];

const DiscographySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('discography');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="discography" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-accent">
            Escucha nuestros discos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada álbum es un viaje directo al corazón del Delta, sin artificios ni pretensiones
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {albums.map((album, index) => (
            <div
              key={album.title}
              className={`transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
            >
              <Card className="card-hover bg-gradient-to-b from-card to-muted border-border/50 h-full">
                <CardContent className="p-6">
                  {/* Album Cover */}
                  <div className="relative mb-6 overflow-hidden rounded-lg group">
                    <img 
                      src={album.cover} 
                      alt={`${album.title} cover`}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Album Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-foreground">
                        {album.title}
                      </h3>
                      <p className="text-accent font-semibold">
                        {album.year}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {album.description}
                    </p>

                    <Button className="btn-accent w-full group">
                      <Music className="mr-2 h-4 w-4 group-hover:animate-wave" />
                      Escúchalo en Bandcamp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscographySection;