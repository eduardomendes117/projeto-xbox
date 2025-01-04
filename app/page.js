"use client"; // Garantir que o código seja executado no lado do cliente

import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null); // Para controlar qual item está aberto

  useEffect(() => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header, index) => {
      header.addEventListener("click", () => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Alterna o índice
      });
    });

    // Limpar os event listeners
    return () => {
      accordionHeaders.forEach((header) => {
        header.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="inset-0 bg-gradient-to-t from-[#0D100C] to-[#0D100C]">
      <header className="max-w-screen-xl w-full p-6 mx-auto flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between items-center text-xs sm:text-sm font-medium">
        <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-16">
          <Image
            width={112}
            height={32}
            src="/image/logo-xbox.png"
            alt="logo xbox"
          />
          <nav className="flex gap-2 md:gap-5 text-xs md:text-sm">
            <button className="py-2 px-3 bg-gray-50/10 rounded-full">
              VISÃO GERAL
            </button>
            <button className="py-2 px-3 md:bg-transparent bg-gray-50/10 rounded-full">
              JOGOS
            </button>
            <button className="py-2 px-3 md:bg-transparent bg-gray-50/10 rounded-full">
              GALERIA
            </button>
            <button className="py-2 px-3 md:bg-transparent bg-gray-50/10 rounded-full">
              UNBOX
            </button>
          </nav>
        </div>
        <a className="bg-[#9bf00b] text-black py-3 px-8" href="#">
          VER DISPONIBILIDADE
        </a>
      </header>

      <main>
        <section className="relative flex flex-col items-center justify-center gap-5 font-bold p-5 md:p-20 ">
          <h1 className="relative z-20 text-3xl lg:text-5xl">Xbox series X</h1>
          <h2 className="relative z-20 text-[#9bf00b]">PEDIDO ANTECIPADO</h2>
          <div className="relative w-full h-[calc(100vw*0.61)] max-w-[1224px]">
            <Image
              className="absolute inset-0 z-0 w-full h-full object-cover"
              width={1224}
              height={753}
              src="/image/xbox.png"
              quality={100}
              alt="Xbox X"
            />

            <div className="absolute inset-0 bg-grad z-10"></div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto flex flex-wrap gap-10 justify-around items-center p-5 sm:p-8">
          <div className="flex flex-col gap-5 w-96">
            <h2 className="text-[#9bf00b] text-3xl lg:text-5xl font-medium">
              Desempenho <br />
              <span className="text-white">aperfeiçoado</span>
            </h2>
            <p className="text-[#77777]">
              O controle sem fio Xbox traz um design elegante, conforto refinado
              e compartilhamento instantâneo para um favorito comum.
            </p>
          </div>

          <Image
            width={500}
            height={348}
            className="w-52 sm:w-80 md:w-96 lg:w-80 xl:w-96"
            src="/image/controle-xbox.png"
            alt="controle xbox"
          />
        </section>

        <section className="flex justify-center flex-wrap gap-6 lg:gap-0 px-4 my-20 max-w-full">
  <Image
    width={480}
    height={800}
    className="w-full sm:w-72 md:w-80 lg:w-72 xl:w-80 object-contain"
    src="/image/1.png"
    alt="Imagem 1"
  />
  <Image
    width={480}
    height={800}
    className="w-full sm:w-72 md:w-80 lg:w-72 xl:w-80 object-contain"
    src="/image/2.png"
    alt="Imagem 2"
  />
  <Image
    width={480}
    height={800}
    className="w-full sm:w-72 md:w-80 lg:w-72 xl:w-80 object-contain"
    src="/image/3.png"
    alt="Imagem 3"
  />
  <Image
    width={480}
    height={800}
    className="w-full sm:w-72 md:w-80 lg:w-72 xl:w-80 object-contain"
    src="/image/4.png"
    alt="Imagem 4"
  />
</section>

      </main>

      <footer className="max-w-screen-xl mx-auto flex flex-col gap-10 justify-around px-8">
        <h2 className="text-[#9bf00b] text-2xl lg:text-5xl font-medium">
          Perguntas <span className="text-white">frequentes</span>
        </h2>

        <div className="space-y-4">
          <div className="accordion-item">
            <button className="accordion-header w-full text-left text-white font-bold py-2 flex justify-between items-center">
              <span>
                Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?
              </span>
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === 0 ? "rotate-180 text-[#9bf00b]" : ""
                }`}
              >
                <IoIosArrowDown className="text-2xl" />
              </span>
            </button>
            <div
              className={`accordion-content py-2 text-white/50 ${
                activeIndex === 0 ? "" : "hidden"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <hr className="border-white/50" />

          <div className="accordion-item">
            <button className="accordion-header w-full text-left text-white font-bold py-2 flex justify-between items-center">
              <span>O que está incluído no Xbox Series X?</span>
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === 1 ? "rotate-180 text-[#9bf00b]" : ""
                }`}
              >
                <IoIosArrowDown className="text-2xl" />
              </span>
            </button>
            <div
              className={`accordion-content py-2 text-white/50 ${
                activeIndex === 1 ? "" : "hidden"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <hr className="border-white/50" />

          <div className="accordion-item">
            <button className="accordion-header w-full text-left text-white font-bold py-2 flex justify-between items-center">
              <span>Como sei se minha TV é compatível com 4K?</span>
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === 2 ? "rotate-180 text-[#9bf00b]" : ""
                }`}
              >
                <IoIosArrowDown className="text-2xl" />
              </span>
            </button>
            <div
              className={`accordion-content py-2 text-white/50 ${
                activeIndex === 2 ? "" : "hidden"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>

        <div className="flex py-10 items-center justify-between">
          <Image
            width={112}
            height={32}
            src="/image/logo-xbox.png"
            alt="logo xbox"
          />

          <div className="flex flex-col gap-2 md:flex-row md:gap-5 text-xs">
            <p>&copy; Microsoft 2022</p>
            <p>Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
