import { motion } from "framer-motion";
import { MessageCircle, Layers, PiggyBank, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Advantages() {
  const advantages = [
    {
      icon: <MessageCircle className="w-10 h-10 text-primary" />,
      title: "Bepul maslahat",
      description: "Dizaynerlarimiz uyingiz interyeriga mos pardani tanlashda yordam berishadi.",
    },
    {
      icon: <Layers className="w-10 h-10 text-primary" />,
      title: "Sifatli matolar",
      description: "Turkiya, Xitoy va Yevropaning eng sara, uzoq yillar xizmat qiladigan matolari.",
    },
    {
      icon: <PiggyBank className="w-10 h-10 text-primary" />,
      title: "Hamyonbop narxlar",
      description: "To'g'ridan-to'g'ri tikuv sexidan, o'rtakashlarsiz – eng maqbul narxlar kafolati.",
    },
    {
      icon: <Truck className="w-10 h-10 text-primary" />,
      title: "Tez yetkazib berish",
      description: "Kelishilgan muddatda tayyorlab, xonadoningizga yetkazib va o'rnatib beramiz.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/40 blur-3xl opacity-50" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-white/60 blur-3xl opacity-60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-primary mb-6"
          >
            Afzalliklarimiz
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary/30 mx-auto mb-8 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-none shadow-sm hover:shadow-lg transition-all duration-300 rounded-3xl group">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-secondary/80 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {adv.icon}
                  </div>
                  <h3 className="font-serif text-xl mb-3 text-primary">{adv.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {adv.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
