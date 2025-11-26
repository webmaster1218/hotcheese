import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import Locations from '@/components/Locations';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <MenuSection />
      <Locations />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
