import { motion } from "motion/react";
import { Package, Heart, Sparkles, CheckCircle } from "lucide-react";

export default function ProductDetails() {
  const features = [
    {
      icon: <Package className="w-8 h-8 text-[#d4af37]" />,
      title: "Todo Incluido",
      description: "En la caja encontrarás hasta el detalle más pequeño. No necesitas ser una experta ni tener herramientas complicadas."
    },
    {
      icon: <Heart className="w-8 h-8 text-[#d4af37]" />,
      title: "Hecho con Amor",
      description: "El hacer tu propia joya es un acto de empoderamiento y orgullo. Una forma tangible de celebrar tu viaje."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#d4af37]" />,
      title: "Simple y Seguro",
      description: "Hacer tu joya es un proceso sorprendentemente simple. Tendrás todas las indicaciones y materiales."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#d4af37]" />,
      title: "Resultado Profesional",
      description: "Al finalizar sabrás que puedes crear lo que tú te propongas y llenarte de orgullo al ver el resultado final."
    }
  ];

  return (
    <section id="kit" className="py-24 bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-sans text-sm tracking-widest uppercase text-stone-500">El Kit DIY</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 text-stone-800">
            Crea tu propia joya
          </h2>
          <p className="font-sans text-lg text-stone-600 max-w-2xl mx-auto">
            Sabemos que eres una persona con muchas obligaciones, por lo que hemos pensado en todo lo que necesitas.
            Solo debes encontrar el momento adecuado para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-100"
            >
              <div className="mb-6 bg-[#fcfbf9] w-16 h-16 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-stone-800">{feature.title}</h3>
              <p className="font-sans text-stone-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h3 className="font-serif text-3xl mb-6 text-stone-800">Un recuerdo tangible</h3>
              <p className="font-sans text-stone-600 mb-6 leading-relaxed">
                Las joyas de leche materna tienen un valor incalculable, no sólo son adornos, son historias personales, emociones, satisfacción y amor.
              </p>
              <p className="font-sans text-stone-600 mb-8 leading-relaxed">
                Esta joya es un recuerdo tangible que abraza ese momento especial, es una manera de congelar un momento y tenerlo siempre cerca.
              </p>
              <a 
                href="https://wa.me/593999829469"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start px-8 py-3 border border-[#d4af37] text-[#d4af37] font-sans text-sm tracking-widest uppercase rounded-full hover:bg-[#d4af37] hover:text-white transition-colors duration-300"
              >
                Comprar por WhatsApp
              </a>
            </div>
            <div className="h-96 lg:h-auto relative">
               {/* Placeholder for the kit box image */}
              <img 
                src="https://picsum.photos/seed/giftbox/800/600" 
                alt="Kit Un Tesoro Para Mamá" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
