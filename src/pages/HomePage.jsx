import { FiHeart, FiUserCheck, FiFileText } from "react-icons/fi";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col justify-center items-center lg:p-10 md:p-8 sm:p-6 p-4">
        <div className="text-center">
          <h2 className="text-base font-semibold text-[var(--color-primary)] tracking-wide">
            NOSSOS SERVIÇOS
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-[var(--color-text)] sm:text-4xl">
            Cuidado completo para o seu bem-estar
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-[var(--color-text-secondary)]">
            Soluções integradas de saúde, da prevenção ao diagnóstico preciso.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <div className="bg-[var(--color-bg-secondary)] rounded-2xl shadow-soft-lg p-8  transform hover:-translate-y-2 transition-all duration-400 ease-in-out">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-[var(--color-primary)] text-[var(--color-text-secondary)] mb-6">
              <FiUserCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text)]">
              Consultas Médicas
            </h3>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              Atendimento com clínicos gerais e especialistas para um
              acompanhamento contínuo e focado na sua saúde.
            </p>
          </div>

          <div className="bg-[var(--color-bg-secondary)] rounded-2xl shadow-soft-lg p-8 transform hover:-translate-y-2 transition-all duration-400 ease-in-out">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-[var(--color-primary)] text-[var(--color-text-secondary)] mb-6">
              <FiHeart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text)]">
              Saúde Mental
            </h3>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              Sessões de psicologia e psiquiatria para promover o equilíbrio
              emocional e o bem-estar mental.
            </p>
          </div>

          <div className="bg-[var(--color-bg-secondary)] rounded-2xl shadow-soft-lg p-8 transform hover:-translate-y-2 transition-all duration-400 ease-in-out">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-[var(--color-primary)] text-[var(--color-text-secondary)] mb-6">
              <FiFileText className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text)]">
              Exames e Diagnóstico
            </h3>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              Realização de exames laboratoriais e de imagem com tecnologia de
              ponta para um diagnóstico rápido e preciso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
