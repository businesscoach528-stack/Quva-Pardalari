import { motion } from "framer-motion";
import { Ruler, Scissors, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const services = [
    {
      icon: <Ruler className="h-8 w-8 text-primary" />,
      title: "O'lchov",
      description: "Uyingizga borib, derazalarni aniq o'lchab kelish xizmati.",
    },
    {
      icon: <Scissors className="h-8 w-8 text-primary" />,
      title: "Tikuv",
      description: "Yuqori sifatli matolardan, didingizga mos dizaynda tikib berish.",
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "O'rnatish",
      description: "Tayyor bo'lgan pardalarni sifatli va ishonchli o'rnatib berish.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
              Biz haqimizda
            </h2>
            <div className="w-20 h-1 bg-primary/30 mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
              Bizning ustaxonamiz <strong className="font-semibold text-primary">30 yildan</strong> buyon Farg'ona viloyati Quva tumanida o'z faoliyatini olib boradi. Avloddan avlodga o'tib kelayotgan hunarmandchilik sirlari, har bir chokdagi e'tibor va mehr mijozlarimizning uylariga fayz bag'ishlaydi.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-light">
              Biz uchun parda shunchaki mato emas – u xonadonning yuragi, yorug'likni boshqaruvchi san'at asaridir. Shuning uchun ham biz faqat eng sifatli matolardan foydalanamiz va har bir buyurtmaga alohida yondashamiz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-none shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                        {service.icon}
                      </div>
                      <h3 className="font-serif text-xl mb-2 text-primary">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/classic-1.png"
                alt="Ustaxona jarayoni"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 border-4 border-white/20 rounded-3xl m-4 pointer-events-none" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent rounded-full -z-10 blur-2xl opacity-60" />
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-secondary rounded-full -z-10 blur-2xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
