import { buscarUsuarios } from "../api/crudUsuarios/getUsuariosApi";

export async function consultasMes() {
  const consultas = await buscarUsuarios("consultas");
  const grafico = [
    {
      mes: "Janeiro",
      quantidade: { Realizadas: 0, Arealizar: 0, Canceladas: 0, Total: 0 },
    },
    {
      mes: "Fevereiro",
      quantidade: { Realizadas: 0, Arealizar: 0, Canceladas: 0, Total: 0 },
    },
    {
      mes: "Março",
      quantidade: { Realizadas: 0, Arealizar: 0, Canceladas: 0, Total: 0 },
    },
    {
      mes: "Abril",
      quantidade: { Realizadas: 0, Arealizar: 0, Canceladas: 0, Total: 0 },
    },
    {
      mes: "Maio",
      quantidade: { Realizadas: 0, Arealizar: 0, Canceladas: 0, Total: 0 },
    },
    {
      mes: "Junho",
      quantidade: { Realizadas: 0, Arealizar: 0, Canceladas: 0, Total: 0 },
    },
    {
      mes: "Julho",
      quantidade: { Realizadas: 0, Arealizar: 0, Canceladas: 0, Total: 0 },
    },
    {
      mes: "Agosto",
      quantidade: { Realizadas: 0, Arealizar: 0, Canceladas: 0, Total: 0 },
    },
    {
      mes: "Setembro",
      quantidade: { Realizadas: 0, Arealizar: 0, Canceladas: 0, Total: 0 },
    },
    {
      mes: "Outubro",
      quantidade: { Realizadas: 0, Arealizar: 0, Canceladas: 0, Total: 0 },
    },
    {
      mes: "Novembro",
      quantidade: { Realizadas: 0, Arealizar: 0, Canceladas: 0, Total: 0 },
    },
    {
      mes: "Dezembro",
      quantidade: { Realizadas: 0, Arealizar: 0, Canceladas: 0, Total: 0 },
    },
  ];
  consultas.map((e) => {
    const indexMes = parseInt(e.data_consulta.slice(5, 7), 10) - 1;
    //Recebe o valor de cada consulta, deixa apenas o mes e transforma em inteiro
    //- 1 é pq o index de array começa em 0 e dessa foram considero Janeiro como 0
    switch(e.estado) {
        case "Realizada":
            grafico[indexMes].quantidade.Realizadas += 1;
            break;
        case "A Realizar":
            grafico[indexMes].quantidade.Arealizar += 1;
            break;
        case "Cancelada":
            grafico[indexMes].quantidade.Canceladas += 1;
            break;
    }
  });
  return grafico;
}
