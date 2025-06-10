import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Владелец квартиры",
      text: "После затопления квартиры страховая выплата покрыла весь ремонт. Очень благодарна команде СтрахЗащита за оперативность!",
      rating: 5,
    },
    {
      name: "Михаил Сидоров",
      role: "Автовладелец",
      text: "ДТП случилось в выходной, но уже в понедельник получил направление на ремонт. Профессиональный подход!",
      rating: 5,
    },
    {
      name: 'ООО "Техсервис"',
      role: "Директор компании",
      text: "Комплексное страхование бизнеса помогло нам избежать серьезных убытков при пожаре на складе.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600">
            Реальные истории реальных людей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="w-5 h-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
