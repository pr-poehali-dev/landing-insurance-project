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
    <section
      id="benefits"
      className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      <div className="relative container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            Преимущества сотрудничества с нами
          </h2>
          <p className="text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Почему тысячи клиентов выбирают именно нас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={benefit.icon as any}
                  className="w-12 h-12 text-white"
                />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                {benefit.title}
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
