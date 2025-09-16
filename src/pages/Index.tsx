import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-montserrat font-bold text-2xl text-primary">
              ВкусДоставка
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#menu" className="font-open-sans text-foreground hover:text-primary transition-colors">Меню</a>
              <a href="#delivery" className="font-open-sans text-foreground hover:text-primary transition-colors">Доставка</a>
              <a href="#about" className="font-open-sans text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="font-open-sans text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 font-open-sans">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                Готовые обеды с<br />
                <span className="text-primary">доставкой</span>
              </h1>
              <p className="font-open-sans text-xl text-muted-foreground mb-8 leading-relaxed">
                Вкусная и полезная еда каждый день. Готовим с душой, 
                доставляем с заботой по всему городу.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-open-sans text-lg px-8 py-3">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Посмотреть меню
                </Button>
                <Button variant="outline" size="lg" className="font-open-sans text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Clock" size={20} className="mr-2" />
                  Быстрая доставка
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="/img/f1ac6bc6-d063-45e5-9889-d16e932cd020.jpg" 
                alt="Аппетитные готовые обеды" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-foreground mb-4">
              Наше меню
            </h2>
            <p className="font-open-sans text-xl text-muted-foreground max-w-2xl mx-auto">
              Разнообразие вкусов на каждый день. Все блюда готовятся из свежих продуктов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Бизнес-ланч",
                description: "Сбалансированный обед из трёх блюд: суп, горячее и салат",
                price: "450 ₽",
                image: "/img/54341eb9-e750-4be3-8503-4665929156b7.jpg"
              },
              {
                title: "Здоровый боул",
                description: "Киноа, авокадо, курица гриль и свежие овощи",
                price: "520 ₽",
                image: "/img/f1ac6bc6-d063-45e5-9889-d16e932cd020.jpg"
              },
              {
                title: "Домашняя паста",
                description: "Спагетти с томатным соусом и пармезаном",
                price: "380 ₽",
                image: "/img/54341eb9-e750-4be3-8503-4665929156b7.jpg"
              }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="font-open-sans text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-montserrat font-bold text-2xl text-primary">{item.price}</span>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/4abf46b5-3fac-4263-9a04-e710dc908168.jpg" 
                alt="Доставка еды" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-montserrat font-bold text-4xl text-foreground mb-6">
                Быстрая доставка
              </h2>
              <p className="font-open-sans text-lg text-muted-foreground mb-8">
                Доставляем горячие обеды по всему городу в специальных термосумках. 
                Ваша еда останется свежей и тёплой.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "Clock",
                    title: "30-45 минут",
                    description: "Среднее время доставки"
                  },
                  {
                    icon: "MapPin",
                    title: "Вся Москва",
                    description: "Доставляем по всему городу"
                  },
                  {
                    icon: "Shield",
                    title: "Безопасно",
                    description: "Соблюдаем все санитарные нормы"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={item.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg">{item.title}</h3>
                      <p className="font-open-sans text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-foreground mb-6">
              О нашей компании
            </h2>
            <p className="font-open-sans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Мы готовим домашнюю еду с 2018 года. Наша команда поваров использует только 
              свежие продукты от проверенных поставщиков. Каждое блюдо готовится с любовью 
              и заботой о вашем здоровье.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Heart",
                title: "С любовью",
                description: "Готовим каждое блюдо как для своей семьи"
              },
              {
                icon: "Leaf",
                title: "Свежие продукты",
                description: "Только качественные ингредиенты от фермеров"
              },
              {
                icon: "Users",
                title: "Опытные повара",
                description: "Команда профессионалов с многолетним опытом"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={item.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-4">{item.title}</h3>
                <p className="font-open-sans text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-foreground mb-4">
              Контакты
            </h2>
            <p className="font-open-sans text-xl text-muted-foreground">
              Свяжитесь с нами для заказа или по любым вопросам
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Phone",
                title: "Телефон",
                info: "+7 (495) 123-45-67",
                description: "Ежедневно с 9:00 до 22:00"
              },
              {
                icon: "Mail",
                title: "Email",
                info: "hello@vkusdostavka.ru",
                description: "Ответим в течение часа"
              },
              {
                icon: "MapPin",
                title: "Адрес",
                info: "ул. Тверская, 15",
                description: "Москва, Россия"
              },
              {
                icon: "Clock",
                title: "Режим работы",
                info: "9:00 - 22:00",
                description: "Без выходных"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">{item.title}</h3>
                <p className="font-open-sans font-medium text-foreground mb-1">{item.info}</p>
                <p className="font-open-sans text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-open-sans text-lg px-8 py-3">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать сейчас
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="font-montserrat font-bold text-2xl mb-4">ВкусДоставка</div>
            <p className="font-open-sans text-accent-foreground/80 mb-6">
              Вкусная еда с доставкой на дом
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-accent-foreground/20">
              <p className="font-open-sans text-sm text-accent-foreground/60">
                © 2024 ВкусДоставка. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;