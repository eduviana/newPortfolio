import Image from "next/image";

export const Hero = () => {
  return (
   

    <section className="flex flex-col md:flex-row items-center my-12 md:my-36 lg:my-48 justify-between">
      <div className="flex flex-col gap-4 w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
        <div className="flex flex-col">
          <span className="text-xl xl:text-2xl font-semibold">Hi I am</span>
          <span className="text-[1.5rem] xl:text-[2rem] font-semibold text-brand-primary">
            Eduardo Viana
          </span>
        </div>

        <div className="flex flex-col w-full md:w-[340px] lg:w-[455px] xl:w-[568px]">
          <span className="font-bold text-[2.40rem] lg:text-5xl xl:text-6xl self-start">
            FRONTEND
          </span>
          <span className="font-bold text-[2.40rem] lg:text-5xl xl:text-6xl self-end">
            DEVELOPER
          </span>

          <p className="my-6 font-normal text-text-muted lg:text-base xl:text-lg tracking-wide">
            I specialize in building fast, responsive, and accessible web
            interfaces using modern technologies. Every project I create is
            focused on delivering real value to users, with attention to detail,
            clean code, and strong visual design principles.
          </p>

          <button className="mt-4 self-start bg-brand-primary text-text-base py-2 px-10 rounded-md transition-colors duration-300 cursor-pointer hover:bg-brand-hover">
            Hire Me
          </button>

          {/* Imagen solo visible en breakpoints < md */}
          <div className="mt-10 md:hidden flex justify-center w-full">
            <div className="relative w-56 aspect-square rounded-full bg-gradient-to-b from-orange-300 to-orange-800 p-1">
              <div className="w-full h-full rounded-full bg-white overflow-hidden">
                <Image
                  src="/perfil-sin-fondo.png"
                  alt="Imagen de perfil"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Imagen visible solo en md y superiores */}
      <div className="hidden md:w-5/12 relative md:flex md:justify-center">
        <div className="relative w-full aspect-square rounded-full bg-gradient-to-b from-orange-300 to-orange-800 p-1">
          <div className="w-full h-full rounded-full bg-white overflow-hidden">
            <Image
              src="/perfil-sin-fondo.png"
              alt="Imagen de perfil"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
