import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Защитите себя и свое имущество{" "}
              <span className="text-blue-600">надежно</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Страхование от ведущих компаний с персональным подходом. Более 10
              лет на рынке, тысячи довольных клиентов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Calculator" className="w-5 h-5 mr-2" />
                Рассчитать стоимость
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
                Получить консультацию
              </Button>
            </div>
            <div className="flex items-center space-x-6 mt-8">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">
                  Оформление за 15 минут
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">
                  100% гарантия выплат
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
              alt="Страховой агент"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Icon
                  name="Star"
                  className="w-5 h-5 text-yellow-500 fill-current"
                />
                <span className="font-semibold">4.9/5</span>
              </div>
              <p className="text-sm text-gray-600">Рейтинг клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
