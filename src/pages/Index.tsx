import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DiscographySection from '@/components/DiscographySection';
import LiveSection from '@/components/LiveSection';
import ConcertsSection from '@/components/ConcertsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <DiscographySection />
      <LiveSection />
      <ConcertsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
