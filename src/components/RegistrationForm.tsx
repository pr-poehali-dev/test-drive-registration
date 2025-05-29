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
import { FormData } from "@/types";

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    car: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
  };

  return (
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
          <Input
            placeholder="Ваше имя"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="h-12"
            required
          />
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
          <Select
            onValueChange={(value) => setFormData({ ...formData, car: value })}
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
          <Input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="h-12"
            min={new Date().toISOString().split("T")[0]}
            required
          />
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
  );
};

export default RegistrationForm;
