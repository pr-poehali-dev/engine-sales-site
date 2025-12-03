import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onWhatsApp: () => void;
  onCall: () => void;
}

const HeroSection = ({ onWhatsApp, onCall }: HeroSectionProps) => {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground">Проверено временем</Badge>
              <h2 className="text-5xl font-bold mb-6">Контрактные двигатели из Японии и Европы</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Более 10 лет на рынке. Гарантия качества до 6 месяцев. Доставка по всей России.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={onWhatsApp} className="gap-2 bg-accent hover:bg-accent/90">
                  <Icon name="MessageCircle" size={20} />
                  Написать в WhatsApp
                </Button>
                <Button size="lg" variant="outline" onClick={onCall} className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Icon name="Phone" size={20} />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/0e83d659-1214-4b0e-b1b5-0c0276cd8619/files/59a3911d-719e-4327-bf03-59df8bb3b395.jpg"
                alt="Автомобильный двигатель"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Наши преимущества</h3>
            <p className="text-lg text-muted-foreground">Почему выбирают Альянс Моторс</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center hover:shadow-lg transition-shadow bg-card rounded-lg">
              <div className="p-6">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="ShieldCheck" className="text-accent" size={32} />
                </div>
                <h4 className="text-xl mb-2 font-semibold">Гарантия качества</h4>
                <p className="text-sm text-muted-foreground">
                  До 6 месяцев гарантии на все двигатели. Проверка перед отправкой.
                </p>
              </div>
            </div>
            <div className="text-center hover:shadow-lg transition-shadow bg-card rounded-lg">
              <div className="p-6">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Globe" className="text-accent" size={32} />
                </div>
                <h4 className="text-xl mb-2 font-semibold">Прямые поставки</h4>
                <p className="text-sm text-muted-foreground">
                  Контрактные двигатели напрямую из Японии и Европы без посредников.
                </p>
              </div>
            </div>
            <div className="text-center hover:shadow-lg transition-shadow bg-card rounded-lg">
              <div className="p-6">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Truck" className="text-accent" size={32} />
                </div>
                <h4 className="text-xl mb-2 font-semibold">Доставка по РФ</h4>
                <p className="text-sm text-muted-foreground">
                  Быстрая доставка в любой регион России. Надёжная упаковка.
                </p>
              </div>
            </div>
            <div className="text-center hover:shadow-lg transition-shadow bg-card rounded-lg">
              <div className="p-6">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Users" className="text-accent" size={32} />
                </div>
                <h4 className="text-xl mb-2 font-semibold">Опыт 10+ лет</h4>
                <p className="text-sm text-muted-foreground">
                  Более 10 лет на рынке. Тысячи довольных клиентов по всей России.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
