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
import { useState, useEffect } from "react";
import { consultasMes } from "../../../utils/consultasMes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);
//Registrar oq foi importado, se não reclama

export const Consulta = () => {
  const [graficos, setGraficos] = useState([]);
  const [labels, setLabels] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    //Pega dados do grafico do banco
    const fetchGraficos = async () => {
      const graficosData = await consultasMes();
      setGraficos(graficosData);
    };
    fetchGraficos();

  }, []);

  const cortaMeses = (quantidade) => {
    const mesAtual = new Date().getMonth();
    return graficos.slice(
      Math.max(0, mesAtual - quantidade),
      //Não deixa o index ficar negativo, se o mes atual for janeiro, ele so vai pegar os primeiros
      Math.min(graficos.length, 1 + mesAtual + quantidade)
      //Mesma coisa do de cima mas se for dezembro ele so pega os anteriores
    );
  };

  // Atualiza os labels conforme o tamanho da tela ou quando graficos muda
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 300) {
        setLabels(cortaMeses(0));
      } else if (window.innerWidth <= 400) {
        setLabels(cortaMeses(1));
      } else if (window.innerWidth <= 500) {
        setLabels(cortaMeses(2));
      } else if (window.innerWidth <= 800) {
        setLabels(cortaMeses(3));
      } else if (window.innerWidth <= 1000) {
        setLabels(cortaMeses(4));
      } else {
        setLabels(graficos);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [graficos]);

  useEffect(() => {
    const checkDarkMode = () => {
      // Verifica se a classe "dark" está presente no elemento raiz
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();

    // Adiciona um listener para monitorar mudanças na classe "dark"
    const observer = new MutationObserver(() => checkDarkMode());
    observer.observe(document.documentElement, { attributes: true });

    // Remove o observer ao desmontar o componente
    return () => observer.disconnect();
  }, []);

  const data = {
    labels: labels.map((e) => e.mes),
    datasets: [
      {
        label: "Realizadas",
        data: labels.map((e) => e.quantidade.Realizadas),
        backgroundColor: isDarkMode ? "#4A90E2" : "#36A2EB", // Cor muda com base no modo
        borderWidth: 1,
      },
      {
        label: "A Realizar",
        data: labels.map((e) => e.quantidade.Arealizar),
        backgroundColor: "#FF6384",
      },
      {
        label: "Canceladas",
        data: labels.map((e) => e.quantidade.Canceladas),
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
          color: isDarkMode ? "#FFF" : "#000",
        },
        grid: {
          color: isDarkMode ? "#999999" : "#222",
        },
      },
      y: {
        ticks: {
          color: isDarkMode ? "#e0e0e0" : "#000",
        },
        grid: {
          color: isDarkMode ? "#999999" : "#222",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};
