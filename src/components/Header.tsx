import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;
