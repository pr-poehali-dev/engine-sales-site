import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CatalogSection from '@/components/CatalogSection';
import FooterSection from '@/components/FooterSection';
import ChatWidget from '@/components/ChatWidget';

const Index = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/79608415201', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+79608415201';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCall={handleCall} onWhatsApp={handleWhatsApp} />
      <HeroSection onWhatsApp={handleWhatsApp} onCall={handleCall} />
      <CatalogSection onWhatsApp={handleWhatsApp} onCall={handleCall} />
      <FooterSection onWhatsApp={handleWhatsApp} onCall={handleCall} />
      <ChatWidget />
    </div>
  );
};

export default Index;
