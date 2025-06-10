import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "UserCheck",
      title: "Личный подход",
      desc: "Индивидуальное решение для каждого клиента с учетом всех особенностей",
    },
    {
      icon: "Settings",
      title: "Гибкие условия",
      desc: "Возможность подбора индивидуального тарифа и условий страхования",
    },
    {
      icon: "Clock",
      title: "Круглосуточная поддержка",
      desc: "24/7 консультации и помощь в урегулировании страховых случаев",
    },
    {
      icon: "Award",
      title: "Ведущие компании",
      desc: "Работаем только с надежными страховыми компаниями с рейтингом А+",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Преимущества сотрудничества с нами
          </h2>
          <p className="text-xl text-gray-600">
            Почему тысячи клиентов выбирают именно нас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon
                  name={benefit.icon as any}
                  className="w-10 h-10 text-white"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
