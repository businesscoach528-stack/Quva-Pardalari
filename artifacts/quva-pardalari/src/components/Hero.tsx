import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Quva Pardalari Showroom"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-widest uppercase mb-6">
            Quva Pardalari
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif leading-tight mb-6 drop-shadow-lg">
            Zamonaviy Pardalar – Uyingizga Go'zallik
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto drop-shadow-md">
            30 yillik tajriba. O'lchov, tikuv va o'rnatib berish xizmati.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#2A1E14] hover:bg-[#3D2C1F] text-white rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <a
              href="https://t.me/Quva_pardalar?text=Salom,%20parda%20buyurtma%20haqida%20yozmoqchiman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Telegram orqali buyurtma
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
