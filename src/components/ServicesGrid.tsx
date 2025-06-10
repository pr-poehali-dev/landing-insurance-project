import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesGrid = () => {
  const services = [
    {
      icon: "Car",
      title: "ОСАГО",
      desc: "Обязательное страхование автогражданской ответственности",
    },
    {
      icon: "Shield",
      title: "КАСКО",
      desc: "Добровольное страхование автомобиля от всех рисков",
    },
    {
      icon: "Home",
      title: "Недвижимость",
      desc: "Защита дома и квартиры от пожара, затопления, кражи",
    },
    {
      icon: "Key",
      title: "Ипотека",
      desc: "Страхование ипотечных рисков и жизни заемщика",
    },
    {
      icon: "Heart",
      title: "ДМС",
      desc: "Добровольное медицинское страхование для всей семьи",
    },
    {
      icon: "Plane",
      title: "Путешествия",
      desc: "Медицинская помощь и защита в поездках",
    },
    {
      icon: "Building",
      title: "Бизнес",
      desc: "Комплексное страхование для юридических лиц",
    },
    {
      icon: "Users",
      title: "Жизнь",
      desc: "Страхование жизни и здоровья на любой срок",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Что мы предлагаем
          </h2>
          <p className="text-xl text-gray-600">
            Полный спектр страховых услуг для физических и юридических лиц
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Icon
                    name={service.icon as any}
                    className="w-8 h-8 text-blue-600"
                  />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
