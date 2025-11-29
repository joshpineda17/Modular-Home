import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FutureSection from '@/components/sections/future';

export default function FuturePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <FutureSection />
      </main>
      <Footer />
    </div>
  );
}
