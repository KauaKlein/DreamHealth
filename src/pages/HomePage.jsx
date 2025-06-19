import { FiHeart, FiUserCheck, FiFileText } from 'react-icons/fi';

const HomePage = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">


        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Nossos Serviços</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Cuidado completo para o seu bem-estar
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Soluções integradas de saúde, da prevenção ao diagnóstico preciso.
          </p>
        </div>


        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">


          <div className="bg-white rounded-2xl shadow-soft-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-indigo-100 text-indigo-600 mb-6">
              <FiUserCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Consultas Médicas</h3>
            <p className="mt-4 text-gray-600">
              Atendimento com clínicos gerais e especialistas para um acompanhamento contínuo e focado na sua saúde.
            </p>
          </div>


          <div className="bg-white rounded-2xl shadow-soft-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-indigo-100 text-indigo-600 mb-6">
              <FiHeart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Saúde Mental</h3>
            <p className="mt-4 text-gray-600">
              Sessões de psicologia e psiquiatria para promover o equilíbrio emocional e o bem-estar mental.
            </p>
          </div>


          <div className="bg-white rounded-2xl shadow-soft-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-indigo-100 text-indigo-600 mb-6">
              <FiFileText className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Exames e Diagnóstico</h3>
            <p className="mt-4 text-gray-600">
              Realização de exames laboratoriais e de imagem com tecnologia de ponta para um diagnóstico rápido e preciso.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default HomePage;