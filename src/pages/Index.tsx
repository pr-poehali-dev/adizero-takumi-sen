import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedColor, setSelectedColor] = useState("white");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    size: "",
    color: "",
  });
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slides = [
    {
      image: "/img/efe4a6f9-9bdb-4e79-8f20-c229a0d367f4.jpg",
      title: "Основной вид",
    },
    {
      image: "/img/efe4a6f9-9bdb-4e79-8f20-c229a0d367f4.jpg",
      title: "Боковой вид",
    },
    {
      image: "/img/efe4a6f9-9bdb-4e79-8f20-c229a0d367f4.jpg",
      title: "Вид сверху",
    },
  ];

  const colors = [
    {
      name: "Белый",
      value: "white",
      color: "bg-white border-2 border-gray-200",
    },
    { name: "Черный", value: "black", color: "bg-gray-900" },
    { name: "Красный", value: "red", color: "bg-red-600" },
  ];

  const features = [
    {
      icon: "Weight",
      title: "Невероятно легкие",
      description:
        "Всего 210 грамм благодаря ультралегким материалам и оптимизированной конструкции.",
    },
    {
      icon: "Zap",
      title: "Максимальная отзывчивость",
      description:
        "Промежуточная подошва обеспечивает исключительную энергию возврата.",
    },
    {
      icon: "Target",
      title: "Идеальная посадка",
      description:
        "Анатомический дизайн верха обеспечивает плотное прилегание без дискомфорта.",
    },
  ];

  const testimonials = [
    {
      name: "Алексей Петров",
      role: "Мастер спорта по легкой атлетике",
      text: "Использовал TAKUMI SEN 10 на последних соревнованиях. Невероятно легкие и отзывчивые кроссовки. Личный рекорд на 10 км улучшил на 28 секунд!",
      rating: 5,
    },
    {
      name: "Елена Смирнова",
      role: "Кандидат в мастера спорта",
      text: "Потрясающая амортизация и сцепление с дорогой. Особенно понравилась посадка - нога как влитая.",
      rating: 5,
    },
    {
      name: "Дмитрий Иванов",
      role: "Тренер по бегу",
      text: "Рекомендую эти кроссовки всем своим подопечным для соревнований. Лучшая модель в линейке Adizero.",
      rating: 5,
    },
  ];

  const faqItems = [
    {
      question: "Для каких дистанций подходят эти кроссовки?",
      answer:
        "ADIZERO TAKUMI SEN 10 разработаны специально для соревнований на дистанциях от 5 до 10 километров.",
    },
    {
      question: "Как выбрать правильный размер?",
      answer:
        "Рекомендуем выбирать свой обычный размер беговых кроссовок. Если вы между размерами, лучше взять больший.",
    },
    {
      question: "Можно ли использовать эти кроссовки для тренировок?",
      answer:
        "Кроссовки можно использовать для ключевых тренировок, но для обычных тренировок рекомендуем модели с большим ресурсом.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrderSubmitted(true);
    // Здесь был бы запрос на сервер
    setTimeout(() => {
      setIsOrderSubmitted(false);
    }, 3000);
  };

  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">ADIZERO</div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => smoothScroll("features")}
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              Характеристики
            </button>
            <button
              onClick={() => smoothScroll("gallery")}
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              Галерея
            </button>
            <button
              onClick={() => smoothScroll("tech")}
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              Технологии
            </button>
            <button
              onClick={() => smoothScroll("order")}
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              Заказать
            </button>
          </nav>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-2 px-4 shadow-md">
            <button
              onClick={() => {
                smoothScroll("features");
                setMobileMenuOpen(false);
              }}
              className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
            >
              Характеристики
            </button>
            <button
              onClick={() => {
                smoothScroll("gallery");
                setMobileMenuOpen(false);
              }}
              className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
            >
              Галерея
            </button>
            <button
              onClick={() => {
                smoothScroll("tech");
                setMobileMenuOpen(false);
              }}
              className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
            >
              Технологии
            </button>
            <button
              onClick={() => {
                smoothScroll("order");
                setMobileMenuOpen(false);
              }}
              className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
            >
              Заказать
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              ADIZERO TAKUMI SEN 10
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-orange-400">
              Скорость. Легкость. Контроль.
            </p>
            <p className="text-gray-300 mb-8 text-lg">
              Идеальные кроссовки для соревнований на 5-10 км, созданные для
              максимальной эффективности каждого шага.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => smoothScroll("order")}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
              >
                Заказать сейчас
              </Button>
              <Button
                onClick={() => smoothScroll("features")}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
              >
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative z-10 flex justify-center">
            <div className="animate-pulse duration-3000">
              <img
                src="/img/efe4a6f9-9bdb-4e79-8f20-c229a0d367f4.jpg"
                alt="ADIZERO TAKUMI SEN 10"
                className="w-full max-w-md hover:scale-105 transition-transform duration-300 filter drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Превосходство в каждой детали
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Инновационные технологии для максимальной производительности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Icon name={feature.icon} className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Галерея
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Оцените дизайн и технологии ADIZERO TAKUMI SEN 10
            </p>
          </div>
          
          <div className="relative h-96 md:h-[32rem] mb-8 bg-white rounded-xl overflow-hidden shadow-lg">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="h-full w-full flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full object-contain"
                  />
                </div>
              </div>
            ))}
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-md"
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-md"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-xl font-medium mb-4 text-gray-900">Доступные цвета</h3>
            <div className="flex justify-center space-x-4">
              {colors.map((color) => (
                <div
                  key={color.value}
                  className={`cursor-pointer transition-transform hover:scale-110 ${
                    selectedColor === color.value ? 'scale-110 ring-2 ring-blue-600' : ''
                  }`}
                  onClick={() => setSelectedColor(color.value)}
                >
                  <div className={`w-16 h-16 rounded-full ${color.color}`}></div>
                  <p className="mt-2 text-sm text-gray-700">{color.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Инновационные технологии
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Что делает ADIZERO TAKUMI SEN 10 особенными
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Lightstrike PRO</h3>
              <p className="text-gray-600 text-lg">
                Наша самая легкая и отзывчивая промежуточная подошва, обеспечивающая исключительную амортизацию и возврат энергии.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-green-500 mt-1" size={16} />
                  <span className="text-gray-700">На 15% легче стандартной пены Lightstrike</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-green-500 mt-1" size={16} />
                  <span className="text-gray-700">Оптимизированная геометрия для максимальной эффективности</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-green-500 mt-1" size={16} />
                  <span className="text-gray-700">Идеальный баланс между мягкостью и отзывчивостью</span>
                </div>
              </div>
            </div>
            <div className="">
              <img
                src="/img/efe4a6f9-9bdb-4e79-8f20-c229a0d367f4.jpg"
                alt="Lightstrike PRO технология"
                className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Заказать ADIZERO TAKUMI SEN 10
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Оставьте свои данные, и мы свяжемся с вами для подтверждения заказа.
                </p>
                
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="size">Размер</Label>
                    <Select value={formData.size} onValueChange={(value) => setFormData({...formData, size: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите размер" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="39">39 (EU) / 6 (UK)</SelectItem>
                        <SelectItem value="40">40 (EU) / 6.5 (UK)</SelectItem>
                        <SelectItem value="41">41 (EU) / 7.5 (UK)</SelectItem>
                        <SelectItem value="42">42 (EU) / 8 (UK)</SelectItem>
                        <SelectItem value="43">43 (EU) / 9 (UK)</SelectItem>
                        <SelectItem value="44">44 (EU) / 9.5 (UK)</SelectItem>
                        <SelectItem value="45">45 (EU) / 10.5 (UK)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="color">Цвет</Label>
                    <Select value={formData.color} onValueChange={(value) => setFormData({...formData, color: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите цвет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="white">Белый</SelectItem>
                        <SelectItem value="black">Черный</SelectItem>
                        <SelectItem value="red">Красный</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6">
                    Отправить заказ
                  </Button>
                </form>
              </div>
              
              <div className="md:w-1/2 bg-gray-50 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">ADIZERO TAKUMI SEN 10</h3>
                  <p className="text-gray-600 mb-4">Гоночные кроссовки для соревнований на 5-10 км</p>
                  <div className="flex items-center mb-4">
                    <div className="text-3xl font-bold text-orange-600">19,999 ₽</div>
                    <Badge className="ml-4 bg-green-100 text-green-800">В наличии</Badge>
                  </div>
                  <div className="flex items-center text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="fill-current" size={16} />
                    ))}
                    <span className="ml-2 text-gray-600">4.8 (156 отзывов)</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Icon name="Truck" className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Бесплатная доставка</h4>
                      <p className="text-gray-600 text-sm">При заказе от 5,000 ₽</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Icon name="RotateCcw" className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Возврат</h4>
                      <p className="text-gray-600 text-sm">30 дней на возврат</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Icon name="Shield" className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Гарантия</h4>
                      <p className="text-gray-600 text-sm">2 года гарантии производителя</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Отзывы спортсменов
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Что говорят профессиональные бегуны о TAKUMI SEN 10
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                      <Icon name="User" className="text-gray-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="fill-current" size={16} />
                    ))}
                  </div>
                  <p className="text-gray-700">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Частые вопросы
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Все, что вам нужно знать о ADIZERO TAKUMI SEN 10
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-4">ADIZERO</div>
              <p className="text-gray-400">
                ADIZERO TAKUMI SEN 10 - кроссовки для тех, кто стремится к совершенству.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Меню</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => smoothScroll('features')} 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Характеристики
                </button>
                <button 
                  onClick={() => smoothScroll('gallery')} 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Галерея
                </button>
                <button 
                  onClick={() => smoothScroll('tech')} 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Технологии
                </button>
                <button 
                  onClick={() => smoothScroll('order')} 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Заказать
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-1" />
                  <span>Москва, ул. Спортивная, 12</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Phone" size={16} className="mt-1" />
                  <span>+7 (800) 555-35-35</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Mail" size={16} className="mt-1" />
                  <span>info@adizero.ru</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Подписаться</h3>
              <p className="text-gray-400 mb-4">
                Будьте в курсе новинок и специальных предложений
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="bg-gray-800 text-white border-gray-700 focus:border-orange-500"
                />
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Adizero Russia. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Order Success Modal */}
      {isOrderSubmitted && (
        <Dialog open={isOrderSubmitted} onOpenChange={setIsOrderSubmitted}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" className="text-green-500" size={32} />
              </div>
              <DialogTitle className="text-center text-2xl">Спасибо за заказ!</DialogTitle>
              <DialogDescription className="text-center">
                Ваш заказ на ADIZERO TAKUMI SEN 10 успешно оформлен. Наш менеджер свяжется с вами в ближайшее время.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center mt-4">
              <Button 
                onClick={() => setIsOrderSubmitted(false)} 
                className="bg-orange-600 hover:bg-orange-700"
              >
                Закрыть
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Превосходство в каждой детали
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Инновационные технологии для максимальной производительности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-50 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Icon
                      name={feature.icon}
                      className="text-blue-600"
                      size={24}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Галерея
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Оцените дизайн и технологии ADIZERO TAKUMI SEN 10
            </p>
          </div>

          <div className="relative h-96 md:h-[32rem] mb-8 bg-white rounded-xl overflow-hidden shadow-lg">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="h-full w-full flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full object-contain"
                  />
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + slides.length) % slides.length,
                )
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-md"
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % slides.length)
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-md"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-blue-600" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl font-medium mb-4 text-gray-900">
              Доступные цвета
            </h3>
            <div className="flex justify-center space-x-4">
              {colors.map((color) => (
                <div
                  key={color.value}
                  className={`cursor-pointer transition-transform hover:scale-110 ${
                    selectedColor === color.value
                      ? "scale-110 ring-2 ring-blue-600"
                      : ""
                  }`}
                  onClick={() => setSelectedColor(color.value)}
                >
                  <div
                    className={`w-16 h-16 rounded-full ${color.color}`}
                  ></div>
                  <p className="mt-2 text-sm text-gray-700">{color.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Инновационные технологии
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Что делает ADIZERO TAKUMI SEN 10 особенными
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Lightstrike PRO
              </h3>
              <p className="text-gray-600 text-lg">
                Наша самая легкая и отзывчивая промежуточная подошва,
                обеспечивающая исключительную амортизацию и возврат энергии.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon
                    name="Check"
                    className="text-green-500 mt-1"
                    size={16}
                  />
                  <span className="text-gray-700">
                    На 15% легче стандартной пены Lightstrike
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="Check"
                    className="text-green-500 mt-1"
                    size={16}
                  />
                  <span className="text-gray-700">
                    Оптимизированная геометрия для максимальной эффективности
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="Check"
                    className="text-green-500 mt-1"
                    size={16}
                  />
                  <span className="text-gray-700">
                    Идеальный баланс между мягкостью и отзывчивостью
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <img
                src="/img/efe4a6f9-9bdb-4e79-8f20-c229a0d367f4.jpg"
                alt="Lightstrike PRO технология"
                className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Заказать ADIZERO TAKUMI SEN 10
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Оставьте свои данные, и мы свяжемся с вами для подтверждения
                  заказа.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="size">Размер</Label>
                    <Select
                      value={formData.size}
                      onValueChange={(value) =>
                        setFormData({ ...formData, size: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите размер" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="39">39 (EU) / 6 (UK)</SelectItem>
                        <SelectItem value="40">40 (EU) / 6.5 (UK)</SelectItem>
                        <SelectItem value="41">41 (EU) / 7.5 (UK)</SelectItem>
                        <SelectItem value="42">42 (EU) / 8 (UK)</SelectItem>
                        <SelectItem value="43">43 (EU) / 9 (UK)</SelectItem>
                        <SelectItem value="44">44 (EU) / 9.5 (UK)</SelectItem>
                        <SelectItem value="45">45 (EU) / 10.5 (UK)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="color">Цвет</Label>
                    <Select
                      value={formData.color}
                      onValueChange={(value) =>
                        setFormData({ ...formData, color: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите цвет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="white">Белый</SelectItem>
                        <SelectItem value="black">Черный</SelectItem>
                        <SelectItem value="red">Красный</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6"
                  >
                    Отправить заказ
                  </Button>
                </form>
              </div>

              <div className="md:w-1/2 bg-gray-50 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    ADIZERO TAKUMI SEN 10
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Гоночные кроссовки для соревнований на 5-10 км
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="text-3xl font-bold text-orange-600">
                      19,999 ₽
                    </div>
                    <Badge className="ml-4 bg-green-100 text-green-800">
                      В наличии
                    </Badge>
                  </div>
                  <div className="flex items-center text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="fill-current"
                        size={16}
                      />
                    ))}
                    <span className="ml-2 text-gray-600">
                      4.8 (156 отзывов)
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Icon
                        name="Truck"
                        className="text-orange-600"
                        size={20}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Бесплатная доставка
                      </h4>
                      <p className="text-gray-600 text-sm">
                        При заказе от 5,000 ₽
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Icon
                        name="RotateCcw"
                        className="text-orange-600"
                        size={20}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Возврат</h4>
                      <p className="text-gray-600 text-sm">
                        30 дней на возврат
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Icon
                        name="Shield"
                        className="text-orange-600"
                        size={20}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Гарантия</h4>
                      <p className="text-gray-600 text-sm">
                        2 года гарантии производителя
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Отзывы спортсменов
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Что говорят профессиональные бегуны о TAKUMI SEN 10
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gray-50 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                      <Icon name="User" className="text-gray-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="fill-current"
                        size={16}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Частые вопросы
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Все, что вам нужно знать о ADIZERO TAKUMI SEN 10
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-4">
                ADIZERO
              </div>
              <p className="text-gray-400">
                ADIZERO TAKUMI SEN 10 - кроссовки для тех, кто стремится к
                совершенству.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Меню</h3>
              <div className="space-y-2">
                <button
                  onClick={() => smoothScroll("features")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Характеристики
                </button>
                <button
                  onClick={() => smoothScroll("gallery")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Галерея
                </button>
                <button
                  onClick={() => smoothScroll("tech")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Технологии
                </button>
                <button
                  onClick={() => smoothScroll("order")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Заказать
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-1" />
                  <span>Москва, ул. Спортивная, 12</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Phone" size={16} className="mt-1" />
                  <span>+7 (800) 555-35-35</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Mail" size={16} className="mt-1" />
                  <span>info@adizero.ru</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Подписаться</h3>
              <p className="text-gray-400 mb-4">
                Будьте в курсе новинок и специальных предложений
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Ваш email"
                  className="bg-gray-800 text-white border-gray-700 focus:border-orange-500"
                />
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Adizero Russia. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Order Success Modal */}
      {isOrderSubmitted && (
        <Dialog open={isOrderSubmitted} onOpenChange={setIsOrderSubmitted}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" className="text-green-500" size={32} />
              </div>
              <DialogTitle className="text-center text-2xl">
                Спасибо за заказ!
              </DialogTitle>
              <DialogDescription className="text-center">
                Ваш заказ на ADIZERO TAKUMI SEN 10 успешно оформлен. Наш
                менеджер свяжется с вами в ближайшее время.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center mt-4">
              <Button
                onClick={() => setIsOrderSubmitted(false)}
                className="bg-orange-600 hover:bg-orange-700"
              >
                Закрыть
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;