import { motion } from "framer-motion";
import { Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-1/2 p-10 md:p-16 bg-primary text-white flex flex-col justify-center relative overflow-hidden">
            {/* Subtle texture/pattern overlay could go here */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Bog'lanish</h2>
              <p className="text-white/80 font-light mb-10">
                Savollaringiz bormi yoki buyurtma bermoqchimisiz? Biz bilan hoziroq bog'laning.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1 uppercase tracking-wider">Telefon raqam</p>
                    <a href="tel:+998996424139" className="text-xl font-medium hover:text-accent transition-colors">
                      +998 99 642 4139
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1 uppercase tracking-wider">Manzil</p>
                    <p className="text-xl font-medium">
                      Farg'ona viloyati,<br />Quva tumani
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center items-center text-center bg-secondary/20">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">Telegram orqali yozing</h3>
              <p className="text-muted-foreground mb-8">
                Katalog, narxlar va maslahat olish uchun Telegram orqali murojaat qiling. Biz tezda javob beramiz.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-full py-6 text-lg shadow-md hover:shadow-lg transition-all"
              >
                <a
                  href="https://t.me/Quva_pardalar?text=Salom,%20parda%20buyurtma%20haqida%20yozmoqchiman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram'ga o'tish
                </a>
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
