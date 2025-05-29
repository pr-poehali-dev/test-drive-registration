import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { popularCars } from "@/constants/cars";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <HeroSection />

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
