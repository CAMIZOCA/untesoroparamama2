import { motion } from "motion/react";
import joyaImg01 from "../assets/joya01.png";
import joyaImg02 from "../assets/joya02.png";
import joyaImg03 from "../assets/joya03.png";
import joyaImg04 from "../assets/joya04.png";

export default function Gallery() {
  const images = [
    {
      src: joyaImg01,
      alt: "Collar de leche materna sobre madera",
      caption: "Un vínculo irrompible"
    },
    {
      src: joyaImg02,
      alt: "Collar de leche materna puesto",
      caption: "Llévalo siempre contigo"
    },
    {
      src: joyaImg03,
      alt: "Caja del Kit Un Tesoro Para Mamá",
      caption: "Todo lo que necesitas"
    },
    {
      src: joyaImg04,
      alt: "Logo Un Tesoro Para Mamá",
      caption: "Hecho a mano"
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-[#fcfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-sans text-sm tracking-widest uppercase text-stone-500">Galería</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 text-stone-800">
            Historias hechas joya
          </h2>
          <p className="font-sans text-lg text-stone-600 max-w-2xl mx-auto">
            Cada joya lleva una historia, un relato de un vínculo que trasciende el tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl shadow-md aspect-square cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-serif text-xl italic tracking-wide">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
