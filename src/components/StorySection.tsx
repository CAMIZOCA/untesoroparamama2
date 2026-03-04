import { motion } from "motion/react";
import storyImg from "../assets/story.jpg";

export default function StorySection() {
  return (
    <section id="historia" className="py-24 bg-[#fcfbf9] text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Más que un alimento,<br />
              <span className="italic text-stone-500">un vínculo irrompible.</span>
            </h2>
            <p className="font-sans text-lg text-stone-600 mb-6 leading-relaxed">
              La lactancia es una etapa en tu vida, pasajera pero profundamente significativa.
              La leche materna es mucho más que un alimento, es un tejido vivo y conexión que compartes con tu bebé.
            </p>
            <p className="font-sans text-lg text-stone-600 mb-6 leading-relaxed">
              Cada gota está compuesta de amor, perseverancia, dedicación, ternura y sacrificios que generan un vínculo irrompible.
            </p>
            <p className="font-sans text-lg text-stone-600 mb-6 leading-relaxed">
              Para muchas madres la lactancia es un viaje lleno de desafíos, esfuerzo y dedicación. Elegirla te hace más humana, más fuerte y resiliente.
              Superar las dificultades iniciales, las noches sin dormir y mantener la lactancia son actos de amor y perseverancia.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#d4af37] transform rotate-3 rounded-2xl opacity-20"></div>
            <img 
              src={storyImg} 
              alt="Madre amamantando - Placeholder" 
              className="relative rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/5]"
            />
            <div className="absolute bottom-[-20px] right-[-20px] bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="font-serif italic text-stone-800 text-lg">
                "Una medalla de honor, un símbolo de resiliencia, amor y abundancia."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
