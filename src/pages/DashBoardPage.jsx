import {
  FaUserMd,
  FaUserInjured,
  FaCalendarAlt,
  FaChartBar,
} from "react-icons/fa";
import { Consulta } from "../components/Graficos/Consultas/Consulta";
import { useState, useEffect } from "react";
import { buscarUsuarios } from "../api/crudUsuarios/getUsuariosApi";

export const DashBoardPage = () => {
  const [pacientes, setPacientes] = useState([]);
  const [medicos, setMedicos] = useState([]);
  const [consultas, setConsultas] = useState([]);
  
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const dataMedicos = await buscarUsuarios("medicos");
        setMedicos(dataMedicos);
        const dataPacientes = await buscarUsuarios("pacientes");
        setPacientes(dataPacientes);
        const dataConsultas = await buscarUsuarios("consultas");
        setConsultas(dataConsultas);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };
  
    fetchUsuarios();
  }, []);

  return (
    <div className="min-h-screen flex font-sans sm:mt-15 md:mt-15 lg:mt-0 xl:mt-0 mt-15">
      <div className="flex-grow p-6">
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-text)] mb-6">
            Dashboard
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-6">
            <div className="bg-[var(--color-bg-secondary)] shadow-md rounded-lg p-5 pb-10 pt-10 flex items-center justify-between transition-all transform duration-400">
              <div className="">
                <div className="text-[var(--color-text)] text-sm">Médicos</div>
                <div className="text-3xl font-bold text-[var(--color-text-secondary)]">
                  {medicos.length}
                </div>
              </div>
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <FaUserMd className="h-7 w-7" />
              </div>
            </div>
            <div className="bg-[var(--color-bg-secondary)] shadow-md rounded-lg p-5 pb-10 pt-10 flex items-center justify-between transition-all transform duration-400">
              <div>
                <div className="text-[var(--color-text)] text-sm">
                  Pacientes
                </div>
                <div className="text-3xl font-bold text-[var(--color-text-secondary)]">
                  {pacientes.length}
                </div>
              </div>
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
                <FaUserInjured className="h-7 w-7" />
              </div>
            </div>

            <div className="bg-[var(--color-bg-secondary)] shadow-md rounded-lg p-5 pb-10 pt-10 flex items-center justify-between transition-all transform duration-400">
              <div>
                <div className="text-[var(--color-text)] text-sm">
                  Consultas
                </div>
                <div className="text-3xl font-bold text-[var(--color-text-secondary)]">
                  {consultas.length}
                </div>
              </div>
              <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
                <FaCalendarAlt className="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="flex bg-[var(--color-bg-secondary)] h-[348px] flex-col shadow-md rounded-lg p-8">
            <h3 className="text-xl h-[10%] font-semibold text-[var(--color-text)]">
              Consultas:
            </h3>
            <div className="rounded-md flex items-center h-[90%] justify-center">
              <Consulta/>
            </div>
          </div>
          <div className="bg-[var(--color-bg-secondary)] shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
              Médicos Cadastrados:
            </h3>
            <div className="h-64 rounded-md flex items-center justify-center ">
              <FaChartBar className="text-5xl text-[var(--color-text-secondary)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
