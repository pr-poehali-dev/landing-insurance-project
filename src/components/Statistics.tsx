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
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Почему нам доверяют
          </h2>
          <p className="text-xl text-blue-100">
            Наши достижения говорят сами за себя
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-blue-100 mb-2">
                {stat.label}
              </div>
              <div className="text-blue-200 text-sm">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
