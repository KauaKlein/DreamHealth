import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

const imageUrl = "./assets/consultorio.jpg";

const HomePage = () => {
  return (
    <div className="font-sans w-dvw h-[100%]">
      <div className="container mx-auto max-w px-4 h-[85%]">
        <main className="flex flex-row items-center justify-center gap-12 h-[100%]">
          <div className="flex flex-col w-[50%] text-center md:text-left gap-2">
            <p className="text-md font-semibold text-gray-500">
              SISTEMA PARA CLÍNICAS E CONSULTÓRIOS
            </p>
            <h1 className="text-4xl font-bold text-[var(--color-text)] mb-7">
              Marque consultas, veja seus resultados e fale com o médico, tudo
              em um só lugar. Tenha o controle na palma da sua mão com a
              facilidade que você merece.
            </h1>
            <Link
              to="/cadastro"
              className="flex flex-row items-center justify-center w-[40%] h-[50px] rounded-lg font-semibold text-white bg-[var(--color-primary)] rounded-lg-1x1 hover:bg-[var(--color-hover)] duration-300 transition"
            >
              Consultar <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="w-[50%] mt-8 md:mt-0">
            <img
              src={imageUrl}
              alt="Doutora utilizando o sistema em um notebook"
              className="w-full h-full rounded-xl"
            />
          </div>
        </main>
      </div>
      <div className="flex flex-row justify-end mr-10 h-[15%]">
        <a
          href="https://wa.me/48996665664"
          className=" bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 hover:scale-110 transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale conosco no WhatsApp"
        >
          <FaWhatsapp size={45} />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
