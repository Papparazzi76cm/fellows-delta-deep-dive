import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';

const concerts = [
  {
    date: "12 octubre 2025",
    venue: "Sala Porta Caeli",
    city: "Valladolid", 
    time: "21:00h",
    ticketUrl: "#",
    ticketPlatform: "Wegow"
  },
  {
    date: "22 noviembre 2025",
    venue: "Babylon Club",
    city: "León",
    time: "22:00h",
    ticketUrl: "#",
    ticketPlatform: "Instagram"
  }
];

const ConcertsSection = () => {
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

    const section = document.getElementById('concerts');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="concerts" className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-accent">
            Agenda de conciertos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Quieres vernos en directo? Estas son las próximas fechas confirmadas. 
            Guarda la fecha, comparte y acompáñanos a una noche de blues inolvidable.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {concerts.map((concert, index) => (
            <div
              key={`${concert.date}-${concert.venue}`}
              className={`transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
            >
              <Card className="card-hover bg-gradient-to-r from-card to-muted border-accent/20 overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    {/* Date */}
                    <div className="flex items-center space-x-3">
                      <div className="bg-accent/20 p-3 rounded-lg">
                        <Calendar className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-foreground">
                          {concert.date}
                        </p>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {concert.time}
                        </div>
                      </div>
                    </div>

                    {/* Venue */}
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                        {concert.venue}
                      </h3>
                      <div className="flex items-center text-accent">
                        <MapPin className="h-4 w-4 mr-1" />
                        {concert.city}
                      </div>
                    </div>

                    {/* Tickets */}
                    <div className="flex justify-end">
                      <Button className="btn-accent group">
                        <Ticket className="mr-2 h-4 w-4 group-hover:animate-wave" />
                        {concert.ticketPlatform}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Add to Calendar Section */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground mb-4">
            Añade nuestros conciertos a tu calendario
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="btn-outline">
              Google Calendar
            </Button>
            <Button variant="outline" className="btn-outline">
              Apple Calendar
            </Button>
            <Button variant="outline" className="btn-outline">
              Outlook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConcertsSection;