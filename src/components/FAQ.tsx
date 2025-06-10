import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Как долго оформляется страховой полис?",
      answer:
        "Большинство полисов оформляется в течение 15-30 минут. ОСАГО можно получить сразу в электронном виде, более сложные виды страхования могут потребовать до 1-2 дней для изучения рисков.",
    },
    {
      question: "Какие документы нужны для страхования недвижимости?",
      answer:
        "Для страхования квартиры или дома потребуются: паспорт собственника, документы на недвижимость (свидетельство или выписка из ЕГРН), справка о рыночной стоимости объекта.",
    },
    {
      question: "Что делать при наступлении страхового случая?",
      answer:
        "Немедленно обратитесь в нашу службу поддержки по телефону 8 (800) 555-0123. Зафиксируйте обстоятельства происшествия, сохраните документы. Наш специалист проведет вас через весь процесс урегулирования.",
    },
    {
      question: "Можно ли оплачивать страховку частями?",
      answer:
        "Да, мы предлагаем рассрочку для большинства видов страхования. ОСАГО можно разделить на 4 платежа, КАСКО - до 12 месяцев. Никаких переплат и скрытых комиссий.",
    },
    {
      question: "В каких случаях могут отказать в выплате?",
      answer:
        "Отказ возможен только при нарушении условий договора: умышленные действия, сокрытие важной информации при заключении договора, нарушение правил эксплуатации застрахованного объекта.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600">
            Ответы на самые популярные вопросы наших клиентов
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
