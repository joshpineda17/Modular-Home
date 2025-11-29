import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import HowItWorksSection from '@/components/sections/how-it-works';
import ContextSection from '@/components/sections/context';
import RoadmapSection from '@/components/sections/roadmap';
import EcosystemSection from '@/components/sections/ecosystem';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ContextSection />
        <RoadmapSection />
        <HowItWorksSection />
        <EcosystemSection />
      </main>
      <Footer />
    </div>
  );
}
