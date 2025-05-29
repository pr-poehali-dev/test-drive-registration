import Icon from "@/components/ui/icon";
import RegistrationForm from "./RegistrationForm";

const HeroSection = () => {
  return (
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
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
