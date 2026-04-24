import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { id: "klassik", label: "Klassik pardalar" },
  { id: "zamonaviy", label: "Zamonaviy pardalar" },
  { id: "ofis", label: "Ofis pardalari" },
];

const products = [
  {
    id: 1,
    categoryId: "klassik",
    name: "Klassik baxmal parda",
    image: "/images/classic-1.png",
  },
  {
    id: 2,
    categoryId: "klassik",
    name: "Qirollik zar pardasi",
    image: "/images/classic-2.png",
  },
  {
    id: 3,
    categoryId: "klassik",
    name: "An'anaviy burmali parda",
    image: "/images/classic-3.png",
  },
  {
    id: 4,
    categoryId: "zamonaviy",
    name: "Zamonaviy tyul parda",
    image: "/images/modern-1.png",
  },
  {
    id: 5,
    categoryId: "zamonaviy",
    name: "Minimalist zig'ir parda",
    image: "/images/modern-2.png",
  },
  {
    id: 6,
    categoryId: "zamonaviy",
    name: "Yorug'lik o'tkazuvchi parda",
    image: "/images/modern-3.png",
  },
  {
    id: 7,
    categoryId: "ofis",
    name: "Ofis zebra jaluzi",
    image: "/images/office-1.png",
  },
  {
    id: 8,
    categoryId: "ofis",
    name: "Zamonaviy roleta",
    image: "/images/office-2.png",
  },
  {
    id: 9,
    categoryId: "ofis",
    name: "Vertikal matoli jaluzi",
    image: "/images/office-3.png",
  },
];

export default function Catalog() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-primary mb-6"
          >
            Mahsulotlar / Katalog
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary/30 mx-auto mb-8 rounded-full"
          />
        </div>

        <Tabs defaultValue="klassik" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="h-auto p-1 bg-secondary/50 rounded-full">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-6 py-3 rounded-full text-base font-medium data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
                  .filter((p) => p.categoryId === category.id)
                  .map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="group overflow-hidden rounded-3xl border-none shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-serif text-2xl text-primary mb-4 text-center">
                            {product.name}
                          </h3>
                          <Button
                            asChild
                            className="w-full bg-secondary hover:bg-primary hover:text-white text-primary rounded-full transition-colors duration-300"
                          >
                            <a
                              href={`https://t.me/Quva_pardalar?text=Salom,%20${encodeURIComponent(product.name)}%20haqida%20ma'lumot%20olmoqchiman`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ShoppingBag className="w-4 h-4 mr-2" />
                              Buyurtma berish
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
