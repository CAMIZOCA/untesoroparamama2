import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#3a3a25] text-[#f5f2ed] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl mb-6">Un Tesoro Para Mamá</h3>
            <p className="font-sans text-sm text-stone-300 leading-relaxed max-w-xs">
              Transformamos lo sagrado y pasajero de la lactancia en un recuerdo duradero.
              Un kit DIY para honrar tu camino de maternidad.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans text-sm font-semibold tracking-widest uppercase mb-6 text-[#d4af37]">Enlaces</h4>
            <ul className="space-y-4 font-sans text-sm text-stone-300">
              <li><a href="#historia" className="hover:text-white transition-colors">Nuestra Historia</a></li>
              <li><a href="#kit" className="hover:text-white transition-colors">El Kit</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Galería</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans text-sm font-semibold tracking-widest uppercase mb-6 text-[#d4af37]">Contacto</h4>
            <div className="flex space-x-6 mb-6">
              <a href="#" className="text-stone-300 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-stone-300 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://wa.me/593999829469" className="text-stone-300 hover:text-white transition-colors">
                <span className="sr-only">WhatsApp</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </a>
            </div>
            <p className="font-sans text-sm text-stone-300 mb-2">
              WhatsApp: +593 999 829 469
            </p>
            <p className="font-sans text-sm text-stone-300">
              ¿Tienes dudas? Escríbenos.
            </p>
          </div>
        </div>
        
        <div className="border-t border-stone-700 mt-12 pt-8 text-center font-sans text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Un Tesoro Para Mamá. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
