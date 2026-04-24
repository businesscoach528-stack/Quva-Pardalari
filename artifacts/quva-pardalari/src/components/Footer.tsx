import { Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/80 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-serif text-white mb-2">Quva Pardalari</h2>
            <p className="text-sm font-light">Uyingizga fayz ulashuvchi sifatli pardalar.</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <a
              href="https://t.me/Quva_pardalar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-accent transition-colors mb-4"
            >
              <Send className="w-5 h-5 mr-2" />
              <span className="font-medium">Telegram kanalimiz</span>
            </a>
            <p className="text-sm text-white/50">
              &copy; {currentYear} Quva Pardalari. Barcha huquqlar himoyalangan.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
