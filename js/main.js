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
exibir();

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
}
