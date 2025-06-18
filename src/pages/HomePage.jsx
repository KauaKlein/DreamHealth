import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';


const imageUrl = './assets/consultorio.jpg'; 

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-1">


        <main className="flex flex-col md:flex-row items-center gap-12 py-16 md:py-24">
          
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              SISTEMA PARA CLÍNICAS E CONSULTÓRIOS
            </p>
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Marque consultas, veja seus resultados e fale com o médico, tudo em um só lugar. Tenha o controle na palma da sua mão com a facilidade que você merece.
            </h1>
            
        
            <Link to="/dashboard" className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-indigo-600 rounded-lg-1x1 hover:bg-indigo-700 transition-colors">
             Consultar <FaArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src={imageUrl} 
              alt="Doutora utilizando o sistema em um notebook" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </main>
      </div>

      <a
        href="https://wa.me/48996665664"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default HomePage;