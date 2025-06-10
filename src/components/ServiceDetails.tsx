import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServiceDetails = () => {
  const services = [
    {
      title: "ОСАГО",
      desc: "Обязательное автострахование. Простое оформление онлайн, минимальные сроки выплат, удобная рассрочка.",
      features: [
        "Покрытие по всей России",
        "Оформление за 15 минут",
        "Рассрочка без переплат",
      ],
      cta: "Рассчитать ОСАГО",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop",
    },
    {
      title: "КАСКО",
      desc: "Полная защита автомобиля от ДТП, угона, повреждений. Индивидуальные условия и скидки постоянным клиентам.",
      features: [
        "Защита от всех рисков",
        "Ремонт у официального дилера",
        "Эвакуатор 24/7",
      ],
      cta: "Узнать цену КАСКО",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=250&fit=crop",
    },
    {
      title: "Защита недвижимости",
      desc: "Надежная защита дома и квартиры от пожара, затопления, кражи. Страхование строящихся объектов.",
      features: [
        "Защита от всех рисков",
        "Покрытие до 10 млн рублей",
        "Быстрое урегулирование",
      ],
      cta: "Защитить жилье",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наши услуги подробно
          </h2>
          <p className="text-xl text-gray-600">
            Полная информация о самых популярных видах страхования
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Icon
                        name="CheckCircle"
                        className="w-5 h-5 text-green-500"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  {service.cta}
                </Button>
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
