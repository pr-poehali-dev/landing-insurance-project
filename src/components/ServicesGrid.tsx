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
    <section
      id="services"
      className="py-32 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Что мы предлагаем
          </h2>
          <p className="text-2xl lg:text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Полный спектр страховых услуг для физических и юридических лиц
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-500 cursor-pointer group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:scale-105"
            >
              <CardHeader className="text-center pb-6 pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-lg">
                  <Icon
                    name={service.icon as any}
                    className="w-10 h-10 text-white"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center px-6 pb-8">
                <p className="text-slate-600 text-lg leading-relaxed">
                  {service.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
