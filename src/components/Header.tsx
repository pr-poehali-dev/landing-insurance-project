import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/20 shadow-lg">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
            <Icon name="Shield" className="w-7 h-7 text-white" />
          </div>
          <span className="text-2xl font-black text-slate-900">
            СтрахЗащита
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-slate-600 hover:text-blue-600 transition-colors text-lg font-medium"
          >
            Услуги
          </a>
          <a
            href="#benefits"
            className="text-slate-600 hover:text-blue-600 transition-colors text-lg font-medium"
          >
            Преимущества
          </a>
          <a
            href="#reviews"
            className="text-slate-600 hover:text-blue-600 transition-colors text-lg font-medium"
          >
            Отзывы
          </a>
          <a
            href="#contact"
            className="text-slate-600 hover:text-blue-600 transition-colors text-lg font-medium"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-3">
            <Icon name="Phone" className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-slate-900 text-lg">
              8 (800) 555-0123
            </span>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-6 py-3 h-auto shadow-lg transition-all duration-300 hover:scale-105">
            <Icon name="Calculator" className="w-5 h-5 mr-2" />
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
