import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">СтрахЗащита</span>
            </div>
            <p className="text-gray-400 mb-4">
              Надежное страхование для вашего спокойствия. Более 12 лет защищаем
              интересы наших клиентов.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Facebook" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Twitter" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Youtube" className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ОСАГО
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  КАСКО
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Недвижимость
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ипотека
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ДМС
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Путешествия
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Наши партнеры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Вакансии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Новости
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Блог
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" className="w-4 h-4" />
                <span>8 (800) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" className="w-4 h-4" />
                <span>info@strakhzashchita.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" className="w-4 h-4" />
                <span>г. Москва, ул. Тверская, 12</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" className="w-4 h-4" />
                <span>
                  Пн-Пт: 9:00-19:00
                  <br />
                  Сб-Вс: 10:00-16:00
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 СтрахЗащита. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
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
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
