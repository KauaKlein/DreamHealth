const Consultar = () => {
  return (
    <div className="bg-[var(--color-bg-secondary)] p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Acesso Rápido</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="bg-[var(--color-primary)] text-white font-bold py-4 px-6 rounded-lg hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] duration-200 transition-all text-left">
          <span className="text-xl">+ Agendar Nova Consulta</span>
          <p className="font-normal mt-1">
            Encontre um horário para um paciente.
          </p>
        </button>
        <button className="bg-[var(--color-input)] text-[var(--color-text)] font-bold py-4 px-6 rounded-lg hover:bg-[var(--color-hover-secondary)] transition-all text-left">
          <span className="text-xl">&#128269; Buscar Paciente</span>
          <p className="font-normal text-[var(--color-text-secondary)] mt-1">
            Acesse o histórico e dados.
          </p>
        </button>
        <button className="bg-[var(--color-input)] text-[var(--color-text)] font-bold py-4 px-6 rounded-lg hover:bg-[var(--color-hover-secondary)] transition-all text-left">
          <span className="text-xl">&#128197; Ver Agenda do Dia</span>
          <p className="font-normal text-[var(--color-text-secondary)] mt-1">
            Visualize todas as consultas de hoje.
          </p>
        </button>
        <button className="bg-[var(--color-input)] text-[var(--color-text)] font-bold py-4 px-6 rounded-lg hover:bg-[var(--color-hover-secondary)] transition-all text-left">
          <span className="text-xl">&#128100; Cadastrar Novo Paciente</span>
          <p className="font-normal text-[var(--color-text-secondary)] mt-1">
            Adicione um novo paciente ao sistema.
          </p>
        </button>
      </div>
    </div>
  );
};

export default Consultar;
