export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-12 pt-12 border-t-2 border-brand-borderDark bg-gradient-to-b from-brand-background to-black">
      <span className="text-text-muted font-extrabold text-xl lg:text-3xl">
        EDUARDO VIANA
      </span>
      <ul className="flex flex-wrap gap-8 items-center justify-center md:gap-16">
        <li className="lg:text-lg cursor-pointer text-text-muted hover:text-white transition-colors duration-300">
          Inicio
        </li>
        <li className="lg:text-lg cursor-pointer text-text-muted hover:text-white transition-colors duration-300">
          Sobre Mí
        </li>
        <li className="lg:text-lg cursor-pointer text-text-muted hover:text-white transition-colors duration-300">
          Proyectos
        </li>
        <li className="bg-brand-primary text-text-base py-2 px-4 rounded-md transition-colors duration-300 cursor-pointer hover:bg-brand-hover">
          Descargar CV
        </li>
      </ul>

      <div className="flex gap-6">
        <img src="/social-icons/facebook.webp" alt="" />
        <img src="/social-icons/instagram.webp" alt="" />
        <img src="/social-icons/linkedin.webp" alt="" />
        <img src="/social-icons/twitter.webp" alt="" />
      </div>

      {/* Bloque inferior con fondo más oscuro */}
      <div className=" w-full py-6 text-center">
        <p className="text-text-muted">
          2025 <span className="text-brand-primary font-extrabold">EduDev</span>{" "}
          Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};
