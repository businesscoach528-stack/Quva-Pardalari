import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          href="https://t.me/Quva_pardalar?text=Salom,%20parda%20buyurtma%20haqida%20yozmoqchiman"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#0088cc] text-white rounded-full shadow-2xl hover:bg-[#0077b5] hover:scale-110 transition-all duration-300 md:hidden"
          aria-label="Telegram orqali bog'lanish"
        >
          <Send className="w-6 h-6" />
          
          {/* Pulse effect rings */}
          <span className="absolute w-full h-full rounded-full border-2 border-[#0088cc] animate-ping" style={{ animationDuration: '2s' }}></span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
