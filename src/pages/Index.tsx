import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const carBrands = [
  { name: 'BMW', models: 'Все серии', icon: '🔷' },
  { name: 'Mercedes-Benz', models: 'A-S класс', icon: '⭐' },
  { name: 'Audi', models: 'A1-Q8', icon: '🔘' },
  { name: 'Volkswagen', models: 'Все модели', icon: '🔵' },
  { name: 'Toyota', models: 'Camry, RAV4, Land Cruiser', icon: '🔴' },
  { name: 'Lexus', models: 'ES, RX, NX', icon: '💎' },
  { name: 'Nissan', models: 'Qashqai, X-Trail', icon: '⚫' },
  { name: 'Mazda', models: 'CX-5, 6, 3', icon: '🔶' },
  { name: 'Honda', models: 'Civic, Accord, CR-V', icon: '⬛' },
  { name: 'Hyundai', models: 'Solaris, Creta, Tucson', icon: '🔷' },
  { name: 'Kia', models: 'Rio, Sportage, Optima', icon: '🔴' },
  { name: 'Ford', models: 'Focus, Mondeo, Explorer', icon: '🔵' },
];

const Index = () => {
  const [vinNumber, setVinNumber] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const handleVinSearch = () => {
    if (vinNumber.length > 0) {
      alert(`Поиск двигателя по VIN: ${vinNumber}`);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/79608415201', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+79608415201';
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Settings" className="text-accent" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-foreground">AutoMotors</h1>
                <p className="text-sm text-muted-foreground">Двигатели на все марки</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Button variant="outline" onClick={handleCall} className="gap-2">
                <Icon name="Phone" size={18} />
                8 (960) 841-52-01
              </Button>
              <Button onClick={handleWhatsApp} className="gap-2 bg-accent hover:bg-accent/90">
                <Icon name="MessageCircle" size={18} />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground">Профессиональные поставки</Badge>
              <h2 className="text-5xl font-bold mb-6">Двигатели для вашего автомобиля</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Качественные двигатели на все марки автомобилей. Гарантия, доставка, установка.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleWhatsApp} className="gap-2 bg-accent hover:bg-accent/90">
                  <Icon name="MessageCircle" size={20} />
                  Написать в WhatsApp
                </Button>
                <Button size="lg" variant="outline" onClick={handleCall} className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Icon name="Search" className="mx-auto text-accent mb-4" size={48} />
              <h3 className="text-3xl font-bold mb-3">Поиск по VIN-номеру</h3>
              <p className="text-muted-foreground">
                Введите VIN-номер вашего автомобиля для точного подбора двигателя
              </p>
            </div>
            <Card className="shadow-lg border-2">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Input
                    type="text"
                    placeholder="Введите VIN-номер (17 символов)"
                    value={vinNumber}
                    onChange={(e) => setVinNumber(e.target.value.toUpperCase())}
                    maxLength={17}
                    className="text-lg h-12"
                  />
                  <Button onClick={handleVinSearch} size="lg" className="gap-2 bg-accent hover:bg-accent/90">
                    <Icon name="Search" size={20} />
                    Найти
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3 flex items-center gap-2">
                  <Icon name="Info" size={14} />
                  VIN-номер находится в техпаспорте или на кузове автомобиля
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Каталог по маркам</h3>
            <p className="text-lg text-muted-foreground">Выберите марку автомобиля для подбора двигателя</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {carBrands.map((brand) => (
              <Card
                key={brand.name}
                className="cursor-pointer transition-all hover:shadow-xl hover:scale-105 hover:border-accent"
                onClick={() => setSelectedBrand(brand.name)}
              >
                <CardHeader>
                  <div className="text-4xl mb-2">{brand.icon}</div>
                  <CardTitle className="text-xl">{brand.name}</CardTitle>
                  <CardDescription className="text-sm">{brand.models}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Информация</h3>
          </div>
          <Tabs defaultValue="delivery" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 h-auto">
              <TabsTrigger value="delivery" className="text-base py-3">
                <Icon name="Truck" className="mr-2" size={20} />
                Доставка
              </TabsTrigger>
              <TabsTrigger value="conditions" className="text-base py-3">
                <Icon name="FileCheck" className="mr-2" size={20} />
                Условия
              </TabsTrigger>
            </TabsList>
            <TabsContent value="delivery" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Truck" className="text-accent" />
                    Доставка двигателей
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <Icon name="MapPin" className="text-accent mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">По всей России</h4>
                      <p className="text-muted-foreground">Доставляем в любой регион транспортными компаниями</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Clock" className="text-accent mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Сроки доставки</h4>
                      <p className="text-muted-foreground">От 3 до 14 дней в зависимости от региона</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Package" className="text-accent mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Упаковка</h4>
                      <p className="text-muted-foreground">Надежная упаковка на паллетах, страхование груза</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="conditions" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="FileCheck" className="text-accent" />
                    Условия продажи
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <Icon name="Shield" className="text-accent mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Гарантия качества</h4>
                      <p className="text-muted-foreground">На все двигатели предоставляется гарантия</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Проверка перед отправкой</h4>
                      <p className="text-muted-foreground">Каждый двигатель проходит техническую проверку</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="FileText" className="text-accent mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Документы</h4>
                      <p className="text-muted-foreground">Предоставляем все необходимые документы и сертификаты</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="CreditCard" className="text-accent mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Оплата</h4>
                      <p className="text-muted-foreground">Наличный и безналичный расчет, возможна рассрочка</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Headphones" className="mx-auto mb-4 text-accent" size={56} />
            <h3 className="text-3xl font-bold mb-4">Свяжитесь с нами</h3>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Готовы ответить на все вопросы и помочь с выбором двигателя
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleWhatsApp} className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Icon name="MessageCircle" size={22} />
                WhatsApp: 8 (960) 841-52-01
              </Button>
              <Button size="lg" variant="outline" onClick={handleCall} className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Icon name="Phone" size={22} />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Settings" className="text-accent" size={24} />
                <h4 className="font-bold text-lg">AutoMotors</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональные поставки автомобильных двигателей
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-accent" />
                  8 (960) 841-52-01
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} className="text-accent" />
                  WhatsApp
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Режим работы</h4>
              <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 20:00</p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>© 2024 AutoMotors. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
