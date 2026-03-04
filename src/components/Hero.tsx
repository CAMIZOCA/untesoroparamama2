import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#f5f2ed]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block font-sans text-sm tracking-[0.2em] uppercase text-stone-500 mb-6">
            Joyería de Leche Materna DIY
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-800 mb-8 leading-tight">
            Un Tesoro <br/>
            <span className="italic font-light text-stone-600">Para Mamá</span>
          </h1>
          <p className="font-serif text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Transforma lo sagrado y pasajero de la lactancia en un recuerdo duradero.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/593999829469"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#d4af37] text-white font-sans text-sm tracking-widest uppercase rounded-full shadow-lg hover:bg-[#c5a028] transition-colors duration-300"
          >
            Pedir mi Kit
          </motion.a>
        </motion.div>
      </div>

      {/* Soft gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fcfbf9] to-transparent pointer-events-none"></div>
    </section>
  );
}
