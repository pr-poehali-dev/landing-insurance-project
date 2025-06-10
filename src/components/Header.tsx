import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Icon name="Shield" className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">СтрахЗащита</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#services"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Услуги
          </a>
          <a
            href="#benefits"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Преимущества
          </a>
          <a
            href="#reviews"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Отзывы
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Icon name="Phone" className="w-4 h-4 text-blue-600" />
            <span className="font-semibold text-gray-900">
              8 (800) 555-0123
            </span>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Calculator" className="w-4 h-4 mr-2" />
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
