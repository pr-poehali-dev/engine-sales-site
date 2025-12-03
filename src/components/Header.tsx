import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onCall: () => void;
  onWhatsApp: () => void;
}

const Header = ({ onCall, onWhatsApp }: HeaderProps) => {
  return (
    <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Settings" className="text-accent" size={32} />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Альянс Моторс</h1>
              <p className="text-sm text-muted-foreground">Контрактные двигатели с гарантией</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" onClick={onCall} className="gap-2">
              <Icon name="Phone" size={18} />
              8 (960) 841-52-01
            </Button>
            <Button onClick={onWhatsApp} className="gap-2 bg-accent hover:bg-accent/90">
              <Icon name="MessageCircle" size={18} />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
