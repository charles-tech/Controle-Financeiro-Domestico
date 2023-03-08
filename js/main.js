const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento) => {
  console.log(
    elemento.valorRenda,
    elemento.valorMercado,
    elemento.valorLazer,
    elemento.valorAluguel,
    elemento.valorInvestidomento,
    elemento.valorMes
  );
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const valorRenda = evento.target.elements["valorRenda"];
  const valorMercado = evento.target.elements["valorMercado"];
  const valorLazer = evento.target.elements["valorLazer"];
  const valorAluguel = evento.target.elements["valorAluguel"];
  const valorInvestidomento = evento.target.elements["valorInvestidomento"];
  const valorMes = evento.target.elements["valorMes"];

  const itemAtual = {
    valorRenda: valorRenda.value,
    valorMercado: valorMercado.value,
    valorLazer: valorLazer.value,
    valorAluguel: valorAluguel.value,
    valorInvestidomento: valorInvestidomento.value,
    valorMes: valorMes.value,
  };

  itens.push(itemAtual);
  localStorage.setItem("itens", JSON.stringify(itens));

  valorRenda.value = "";
  valorMercado.value = "";
  valorLazer.value = "";
  valorAluguel.value = "";
  valorInvestidomento.value = "";
  valorMes.value = "";
});

function exibir() {
  const itensCarregado = JSON.parse(localStorage.getItem("itens"));

  const valorRenda = document.getElementById("resultadoRenda");
  const valorMercado = document.getElementById("resultadoMercado");
  const valorLazer = document.getElementById("resultadoLazer");
  const valorAluguel = document.getElementById("resultadoAluguel");
  const valorInvestidomento = document.getElementById("resultadoInvestimento");
  const valorMes = document.getElementById("resultadoMes");

  itensCarregado.map((elemento) => {
    valorRenda.innerHTML += `<p>R$: ${elemento.valorRenda}</p>`;
    valorMercado.innerHTML += `<p>R$: ${elemento.valorMercado}</p>`;
    valorLazer.innerHTML += `<p>R$: ${elemento.valorLazer}</p>`;
    valorAluguel.innerHTML += `<p>R$: ${elemento.valorAluguel}</p>`;
    valorInvestidomento.innerHTML += `<p>R$: ${elemento.valorInvestidomento}</p>`;
    valorMes.innerHTML += `<p>Mês: ${elemento.valorMes}</p>`;
  });

  const totalRendaFamiliar = Object.values(itensCarregado).reduce(
    (t, { valorRenda }) => parseFloat(t) + parseFloat(valorRenda),
    0
  );

  const totalMercado = Object.values(itensCarregado).reduce(
    (t, { valorMercado }) => parseFloat(t) + parseFloat(valorMercado),
    0
  );

  const totalLazer = Object.values(itensCarregado).reduce(
    (t, { valorLazer }) => parseFloat(t) + parseFloat(valorLazer),
    0
  );

  const totalAluguel = Object.values(itensCarregado).reduce(
    (t, { valorAluguel }) => parseFloat(t) + parseFloat(valorAluguel),
    0
  );

  const totalInvestimento = Object.values(itensCarregado).reduce(
    (t, { valorInvestidomento }) =>
      parseFloat(t) + parseFloat(valorInvestidomento),
    0
  );

  const totalShowRendaFamiliar = document.getElementById("somaRenda");
  const totalShowMercado = document.getElementById("somaMercado");
  const totalShowLazer = document.getElementById("somaLazer");
  const totalShowAluguel = document.getElementById("somaAluguel");
  const totalShowInvestimento = document.getElementById("somaInvestimento");

  totalShowRendaFamiliar.innerHTML = `<p>Renda Familiar (R$: ${totalRendaFamiliar})</p>`;
  totalShowMercado.innerHTML = `<p>Valor Mercado (R$: ${totalMercado})</p>`;
  totalShowLazer.innerHTML = `<p>Valor Lazer (R$: ${totalLazer})</p>`;
  totalShowAluguel.innerHTML = `<p>Valor Aluguel (R$: ${totalAluguel})</p>`;
  totalShowInvestimento.innerHTML = `<p>Valor do Investimento (R$: ${totalInvestimento})</p>`;
  console.log(totalShowRendaFamiliar);
}
exibir();
