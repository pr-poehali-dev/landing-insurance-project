import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight">
                Защитите себя и свое имущество{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  надежно
                </span>
              </h1>
              <p className="text-2xl lg:text-3xl text-slate-300 leading-relaxed max-w-2xl">
                Страхование от ведущих компаний с персональным подходом. Более
                10 лет на рынке, тысячи довольных клиентов.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-xl px-10 py-6 h-auto shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <Icon name="Calculator" className="w-6 h-6 mr-3" />
                Рассчитать стоимость
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 text-white hover:bg-white hover:text-slate-900 text-xl px-10 py-6 h-auto transition-all duration-300 hover:scale-105"
              >
                <Icon name="MessageCircle" className="w-6 h-6 mr-3" />
                Получить консультацию
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-12 pt-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Icon name="Clock" className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg text-slate-300">
                  Оформление за 15 минут
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Icon name="Shield" className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg text-slate-300">
                  100% гарантия выплат
                </span>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-3xl rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&h=500&fit=crop"
                alt="Страховой агент"
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <Icon
                    name="Star"
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                  <span className="font-bold text-white text-xl">4.9/5</span>
                </div>
                <p className="text-slate-300 text-lg">Рейтинг клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
