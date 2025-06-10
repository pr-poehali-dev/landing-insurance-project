const Statistics = () => {
  const stats = [
    {
      number: "12+",
      label: "лет на рынке",
      desc: "Успешной работы в сфере страхования",
    },
    {
      number: "50,000+",
      label: "довольных клиентов",
      desc: "Получили выплаты вовремя и в полном объеме",
    },
    {
      number: "15",
      label: "наград и сертификатов",
      desc: "За качество обслуживания и надежность",
    },
    {
      number: "98%",
      label: "положительных отзывов",
      desc: "Клиенты рекомендуют нас друзьям",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30"></div>
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]"></div>

      <div className="relative container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            Почему нам доверяют
          </h2>
          <p className="text-2xl lg:text-3xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Наши достижения говорят сами за себя
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-7xl lg:text-8xl font-black text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-blue-100 mb-4">
                {stat.label}
              </div>
              <div className="text-blue-200 text-lg leading-relaxed">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
