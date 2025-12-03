import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface FooterSectionProps {
  onWhatsApp: () => void;
  onCall: () => void;
}

const FooterSection = ({ onWhatsApp, onCall }: FooterSectionProps) => {
  return (
    <>
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
                    onClick={onWhatsApp} 
                    className="w-full gap-2 bg-white text-accent hover:bg-white/90 text-lg h-14"
                  >
                    <Icon name="MessageCircle" size={24} />
                    WhatsApp: 8 (960) 841-52-01
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={onCall} 
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
    </>
  );
};

export default FooterSection;
