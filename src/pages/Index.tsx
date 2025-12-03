import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import ChatWidget from '@/components/ChatWidget';

const engineData = {
  'Toyota': ['1NZ-FE', '2NZ-FE', '1ZZ-FE', '2ZZ-GE', '3ZZ-FE', '1AZ-FSE', '2AZ-FE', '1AR-FE', '2AR-FE', '3AR-FE', '4AR-FXE', '8AR-FTS', '1GR-FE', '2GR-FE', '3GR-FSE', '2JZ-GE', '2JZ-GTE', '1JZ-GE', '1JZ-GTE', '5VZ-FE', '1UZ-FE', '3UZ-FE', '1VD-FTV', '2KD-FTV', '1KD-FTV', '1CD-FTV', '2C-E', '3C-E'],
  'Volkswagen': ['1.4 TSI (EA111)', '1.4 TSI (EA211)', '1.6 MPI (EA211)', '1.8 TSI (EA888)', '2.0 TSI (EA888)', '2.5 BGP/BGQ', '3.6 VR6', '1.6 TDI (EA288)', '2.0 TDI (EA288)', '1.9 TDI', '2.5 TDI', 'W8', 'W12', 'VR5', 'VR6'],
  'Hyundai': ['G4FA 1.4', 'G4FC 1.6', 'G4FD 1.6 GDI', 'G4FG 1.6 T-GDI', 'G4NA 2.0', 'G4KD 2.0', 'G4KE 2.4', 'G4KJ 2.4 GDI', 'G6BA 2.7', 'G6DB 3.3', 'G6DC 3.5', 'Lambda 3.8', 'Smartstream G2.5', 'D3EA 1.5 CRDi', 'D4EA 2.0 CRDi', 'D4CB 2.5 CRDi', 'D4EB 2.2 CRDi'],
  'Kia': ['G4FA 1.4', 'G4FC 1.6', 'G4FD 1.6 GDI', 'G4FG 1.6 T-GDI', 'G4NA 2.0', 'G4KD 2.0', 'G4KE 2.4', 'G4KJ 2.4 GDI', 'Lambda 3.5', 'Smartstream G1.6 T-GDI', 'Smartstream G2.5', 'D4FB 1.6 CRDi', 'D4EA 2.0 CRDi', 'D4CB 2.5 CRDi', 'D4HA 2.2 CRDi'],
  'BMW': ['N13', 'N20', 'N26', 'B38', 'B46', 'B48', 'N45', 'N46', 'N52', 'N53', 'N54', 'N55', 'S55', 'B58', 'N62', 'N63', 'S63', 'N73', 'N74', 'M20', 'M50', 'M52', 'M54', 'S50', 'S54', 'M57', 'N47', 'N57', 'B47', 'B57'],
  'Lada': ['ВАЗ-2101', 'ВАЗ-2103', 'ВАЗ-2105', 'ВАЗ-2106', 'ВАЗ-2108', 'ВАЗ-2110', 'ВАЗ-2111', 'ВАЗ-2112', 'ВАЗ-21114', 'ВАЗ-21116', 'ВАЗ-21126', 'ВАЗ-21127', 'ВАЗ-21129', 'ВАЗ-21179', 'ВАЗ-11183', 'ВАЗ-11186', 'ВАЗ-21213', 'ВАЗ-21214'],
  'Renault': ['K7M 1.6 8V', 'K4M 1.6 16V', 'K7J 1.4', 'F4R 2.0 16V', 'M4R 2.0', 'H4M 1.6', 'H5F 2.0', 'F9Q 1.9 dCi', 'K9K 1.5 dCi', 'M9R 2.0 dCi', 'R9M 1.6 dCi', 'dCi 110', 'dCi 130', 'TCe 90', 'TCe 100'],
  'Nissan': ['HR12DE', 'HR15DE', 'HR16DE', 'MR18DE', 'MR20DE', 'MR20DD', 'QR20DE', 'QR25DE', 'VQ25DE', 'VQ35DE', 'VQ35HR', 'VQ37VHR', 'VK56DE', 'VK56VD', 'K9K 1.5 dCi', 'M9R 2.0 dCi', 'R9M 1.6 dCi', 'YD25DDTi'],
  'Mitsubishi': ['3A90', '3A91', '3A92', '4A90', '4A91', '4B10', '4B11', '4B12', '4G15', '4G18', '4G63', '4G64', '4G69', '6B31', '6G72', '6G74', '4D56', '4M40', '4M41', '4N13', '4N14', '6A13']
};

const carBrands = [
  { name: 'BMW', models: 'Все серии', icon: '🔷', engines: engineData['BMW'] },
  { name: 'Mercedes-Benz', models: 'A-S класс', icon: '⭐', engines: [] },
  { name: 'Audi', models: 'A1-Q8', icon: '🔘', engines: [] },
  { name: 'Volkswagen', models: 'Все модели', icon: '🔵', engines: engineData['Volkswagen'] },
  { name: 'Toyota', models: 'Camry, RAV4, Land Cruiser', icon: '🔴', engines: engineData['Toyota'] },
  { name: 'Lexus', models: 'ES, RX, NX', icon: '💎', engines: [] },
  { name: 'Nissan', models: 'Qashqai, X-Trail', icon: '⚫', engines: engineData['Nissan'] },
  { name: 'Mazda', models: 'CX-5, 6, 3', icon: '🔶', engines: [] },
  { name: 'Honda', models: 'Civic, Accord, CR-V', icon: '⬛', engines: [] },
  { name: 'Hyundai', models: 'Solaris, Creta, Tucson', icon: '🔷', engines: engineData['Hyundai'] },
  { name: 'Kia', models: 'Rio, Sportage, Optima', icon: '🔴', engines: engineData['Kia'] },
  { name: 'Lada', models: 'Vesta, Granta, Niva', icon: '🟦', engines: engineData['Lada'] },
  { name: 'Renault', models: 'Logan, Duster, Arkana', icon: '🟨', engines: engineData['Renault'] },
  { name: 'Mitsubishi', models: 'Outlander, ASX, Pajero', icon: '🔺', engines: engineData['Mitsubishi'] },
  { name: 'Ford', models: 'Focus, Mondeo, Explorer', icon: '🔵', engines: [] },
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
                <h1 className="text-2xl font-bold text-foreground">Альянс Моторс</h1>
                <p className="text-sm text-muted-foreground">Контрактные двигатели с гарантией</p>
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
              <Badge className="mb-4 bg-accent text-accent-foreground">Проверено временем</Badge>
              <h2 className="text-5xl font-bold mb-6">Контрактные двигатели из Японии и Европы</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Более 10 лет на рынке. Гарантия качества до 6 месяцев. Доставка по всей России.
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

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Наши преимущества</h3>
            <p className="text-lg text-muted-foreground">Почему выбирают Альянс Моторс</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="ShieldCheck" className="text-accent" size={32} />
                </div>
                <CardTitle className="text-xl mb-2">Гарантия качества</CardTitle>
                <CardDescription>
                  До 6 месяцев гарантии на все двигатели. Проверка перед отправкой.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Globe" className="text-accent" size={32} />
                </div>
                <CardTitle className="text-xl mb-2">Прямые поставки</CardTitle>
                <CardDescription>
                  Контрактные двигатели напрямую из Японии и Европы без посредников.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Truck" className="text-accent" size={32} />
                </div>
                <CardTitle className="text-xl mb-2">Доставка по РФ</CardTitle>
                <CardDescription>
                  Быстрая доставка в любой регион России. Надёжная упаковка.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Users" className="text-accent" size={32} />
                </div>
                <CardTitle className="text-xl mb-2">Опыт 10+ лет</CardTitle>
                <CardDescription>
                  Более 10 лет на рынке. Тысячи довольных клиентов по всей России.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Icon name="Search" className="mx-auto text-accent mb-4" size={48} />
              <h3 className="text-3xl font-bold mb-3">Точный подбор по VIN</h3>
              <p className="text-muted-foreground">
                Введите VIN-номер вашего автомобиля для точного подбора двигателя
              </p>
            </div>
            <Card className="shadow-lg border-2 border-accent/50">
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
                  {brand.engines && brand.engines.length > 0 && (
                    <Badge variant="secondary" className="mt-2">
                      {brand.engines.length} моделей
                    </Badge>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>

          {selectedBrand && carBrands.find(b => b.name === selectedBrand)?.engines?.length > 0 && (
            <div className="mt-12 animate-fade-in">
              <Card className="border-accent border-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">{carBrands.find(b => b.name === selectedBrand)?.icon}</div>
                      <div>
                        <CardTitle className="text-3xl">{selectedBrand}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          Доступные модели двигателей
                        </CardDescription>
                      </div>
                    </div>
                    <Button variant="outline" onClick={() => setSelectedBrand(null)}>
                      <Icon name="X" size={20} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {carBrands.find(b => b.name === selectedBrand)?.engines.map((engine) => (
                      <Card key={engine} className="hover:border-accent hover:shadow-md transition-all cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2">
                            <Icon name="Zap" size={16} className="text-accent" />
                            <span className="font-semibold text-sm">{engine}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-center text-muted-foreground mb-4">
                      Не нашли нужную модель? Свяжитесь с нами!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button onClick={handleWhatsApp} className="gap-2 bg-accent hover:bg-accent/90">
                        <Icon name="MessageCircle" size={18} />
                        WhatsApp
                      </Button>
                      <Button variant="outline" onClick={handleCall} className="gap-2">
                        <Icon name="Phone" size={18} />
                        Позвонить
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Badge className="mb-4">О компании</Badge>
              <h3 className="text-4xl font-bold mb-6">Альянс Моторс — ваш надёжный партнёр</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Более 10 лет мы занимаемся поставками контрактных двигателей из Японии и Европы. 
                За это время мы заработали репутацию надёжного поставщика качественных запчастей.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-accent mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Прямые поставки</h4>
                    <p className="text-sm text-muted-foreground">Работаем напрямую с проверенными поставщиками</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-accent mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Контроль качества</h4>
                    <p className="text-sm text-muted-foreground">Каждый двигатель проходит тщательную проверку</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-accent mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Большой ассортимент</h4>
                    <p className="text-sm text-muted-foreground">Двигатели на все популярные марки автомобилей</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/0e83d659-1214-4b0e-b1b5-0c0276cd8619/files/59e3809e-e013-4cea-9bd6-2096bd8afb99.jpg"
                alt="Склад двигателей"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Условия работы</h3>
            <p className="text-lg text-muted-foreground">Доставка и гарантии</p>
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

      <section className="py-20 bg-gradient-to-br from-accent to-accent/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-4">Остались вопросы?</h3>
                <p className="text-xl mb-6 text-white/90">
                  Наши специалисты помогут подобрать двигатель и ответят на все вопросы
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={20} />
                    <span>Работаем ежедневно с 9:00 до 20:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={20} />
                    <span>Доставка по всей России</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Award" size={20} />
                    <span>Более 10 лет на рынке</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h4 className="text-2xl font-bold mb-6">Свяжитесь с нами</h4>
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    onClick={handleWhatsApp} 
                    className="w-full gap-2 bg-white text-accent hover:bg-white/90 text-lg h-14"
                  >
                    <Icon name="MessageCircle" size={24} />
                    WhatsApp: 8 (960) 841-52-01
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={handleCall} 
                    className="w-full gap-2 border-white text-white hover:bg-white hover:text-accent text-lg h-14"
                  >
                    <Icon name="Phone" size={24} />
                    Позвонить сейчас
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Settings" className="text-accent" size={28} />
                <h4 className="font-bold text-xl">Альянс Моторс</h4>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Контрактные двигатели из Японии и Европы. Гарантия качества и надёжности.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-2 text-primary-foreground/90">
                  <Icon name="Phone" size={16} className="text-accent" />
                  8 (960) 841-52-01
                </p>
                <p className="flex items-center gap-2 text-primary-foreground/90">
                  <Icon name="MessageCircle" size={16} className="text-accent" />
                  WhatsApp
                </p>
                <p className="flex items-center gap-2 text-primary-foreground/90">
                  <Icon name="MapPin" size={16} className="text-accent" />
                  Доставка по всей РФ
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-sm text-primary-foreground/90">
                <p>Ежедневно</p>
                <p className="font-semibold">с 9:00 до 20:00</p>
                <p className="text-xs mt-4">Без выходных и праздников</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Преимущества</h4>
              <div className="space-y-2 text-sm text-primary-foreground/90">
                <p>✓ Гарантия до 6 месяцев</p>
                <p>✓ Прямые поставки</p>
                <p>✓ Опыт 10+ лет</p>
                <p>✓ Тысячи клиентов</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/70">
            <p>© 2024 Альянс Моторс. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default Index;