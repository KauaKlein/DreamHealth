import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
//É só para gerar números aleatórios para os dados do gráfico
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);
//Registrar oq foi importado, se não reclama

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const CortaMeses = (quantidade) => {
  //Quantidade é a quantidade de meses antes e depois que serao adicionados
  const mesAtual = new Date().getMonth();
  return meses.slice(mesAtual - quantidade, 1 + mesAtual + quantidade);
};

export const Consulta = () => {
  const [labels, setLabels] = useState(meses);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 300) {
        setLabels(CortaMeses(0));
      } else if (window.innerWidth <= 400) {
        setLabels(CortaMeses(1));
      } else if (window.innerWidth <= 500) {
        setLabels(CortaMeses(2));
      } else if (window.innerWidth <= 800) {
        setLabels(CortaMeses(3));
      } else if (window.innerWidth <= 1000) {
        setLabels(CortaMeses(4));
      } else {
        setLabels(meses);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const checkDarkMode = () => {
      // Verifica se a classe "dark" está presente no elemento raiz
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Verifica o modo ao montar o componente
    checkDarkMode();

    // Adiciona um listener para monitorar mudanças na classe "dark"
    const observer = new MutationObserver(() => checkDarkMode());
    observer.observe(document.documentElement, { attributes: true });

    // Remove o observer ao desmontar o componente
    return () => observer.disconnect();
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Realizadas",
        data: labels.map(() => faker.number.int({ min: 30, max: 80 })),
        //É onde bota o valor, neste caso, esta gerando um número aleatório
        backgroundColor: isDarkMode ? "#4A90E2" : "#36A2EB", // Cor muda com base no modo
        borderWidth: 1,
      },
      {
        label: "A Realizar",
        data: labels.map(() => faker.number.int({ min: 40, max: 70 })),
        backgroundColor: "#FF6384",
      },
      {
        label: "Canceladas",
        data: labels.map(() => faker.number.int({ min: 10, max: 40 })),
        backgroundColor: "#FFCE56",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom", // Posição da legenda
        labels: {
          color: isDarkMode ? "#e0e0e0" : "#000", // Cor da legenda muda com base no modo
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDarkMode ? "#FFF" : "#000", // Cor das labels no eixo X
        },
        grid: {
          color: isDarkMode ? "#999999" : "#222", // Cor das linhas da grade no eixo X
        },
      },
      y: {
        ticks: {
          color: isDarkMode ? "#e0e0e0" : "#000", // Cor das labels no eixo Y
        },
        grid: {
          color: isDarkMode ? "#999999" : "#222", // Cor das linhas da grade no eixo Y
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};
