import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    car: "",
    date: "",
  });

  const popularCars = [
    {
      name: "BMW X5",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=250&fit=crop",
      price: "от 5 500 000 ₽",
    },
    {
      name: "Mercedes-Benz C-Class",
      image:
        "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=250&fit=crop",
      price: "от 3 200 000 ₽",
    },
    {
      name: "Audi A4",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=250&fit=crop",
      price: "от 2 800 000 ₽",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Car" size={32} className="text-blue-400" />
            <span className="text-white text-xl font-bold">AutoDrive</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Почувствуй
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {" "}
                  мощь
                </span>
                <br />
                премиальных автомобилей
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Запишись на бесплатный тест-драйв и ощути адреналин от вождения
                автомобилей мирового класса
              </p>
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={20} className="text-green-400" />
                  <span>Страховка включена</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={20} className="text-blue-400" />
                  <span>30-60 минут</span>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <Card className="bg-white/95 backdrop-blur-md shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-800">
                  Записаться на тест-драйв
                </CardTitle>
                <CardDescription className="text-center">
                  Заполните форму и мы подберем идеальное время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, car: value })
                      }
                      required
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Выберите автомобиль" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bmw-x5">BMW X5</SelectItem>
                        <SelectItem value="mercedes-c-class">
                          Mercedes-Benz C-Class
                        </SelectItem>
                        <SelectItem value="audi-a4">Audi A4</SelectItem>
                        <SelectItem value="lexus-es">Lexus ES</SelectItem>
                        <SelectItem value="volvo-xc90">Volvo XC90</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="h-12"
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold"
                  >
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на тест-драйв
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Cars Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Популярные модели для тест-драйва
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {popularCars.map((car, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {car.name}
                  </h3>
                  <p className="text-blue-400 text-lg font-bold mb-4">
                    {car.price}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-white/30 text-white hover:bg-white/10"
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <Icon
                name="Shield"
                size={48}
                className="mx-auto mb-4 text-green-400"
              />
              <h3 className="text-xl font-semibold mb-2">Полная страховка</h3>
              <p className="text-gray-300">
                Все автомобили застрахованы. Вы можете сосредоточиться на
                впечатлениях
              </p>
            </div>

            <div className="text-white">
              <Icon
                name="Users"
                size={48}
                className="mx-auto mb-4 text-blue-400"
              />
              <h3 className="text-xl font-semibold mb-2">
                Опытные инструкторы
              </h3>
              <p className="text-gray-300">
                Профессиональные инструкторы помогут вам освоиться с любым
                автомобилем
              </p>
            </div>

            <div className="text-white">
              <Icon
                name="MapPin"
                size={48}
                className="mx-auto mb-4 text-purple-400"
              />
              <h3 className="text-xl font-semibold mb-2">Удобные маршруты</h3>
              <p className="text-gray-300">
                Специально разработанные маршруты для максимального удовольствия
                от вождения
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/20 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" size={24} className="text-blue-400" />
                <span className="text-white text-lg font-bold">AutoDrive</span>
              </div>
              <p className="text-gray-400">
                Ваш путь к автомобилю мечты начинается здесь
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@autodrive.ru</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Время работы</h4>
              <div className="space-y-1 text-gray-400">
                <p>Пн-Пт: 9:00 - 21:00</p>
                <p>Сб-Вс: 10:00 - 20:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoDrive. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
