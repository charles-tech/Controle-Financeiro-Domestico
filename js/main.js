const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];


itens.forEach(elemento => {
    console.log(elemento.valorRenda, elemento.valorMercado, elemento.valorLazer, elemento.valorAluguel, elemento.valorInvestidomento,elemento.valorTeste)
});


form.addEventListener("submit",(evento)=>{
    evento.preventDefault();

    const valorRenda = evento.target.elements['valorRenda'];
    const valorMercado = evento.target.elements['valorMercado'];
    const valorLazer = evento.target.elements['valorLazer'];
    const valorAluguel = evento.target.elements['valorAluguel'];
    const valorInvestidomento = evento.target.elements['valorInvestidomento'];

    const teste = parseInt(valorRenda) *2;

    const itemAtual ={
        "valorRenda": valorRenda.value,
        "valorMercado": valorMercado.value,
        "valorLazer": valorLazer.value,
        "valorAluguel": valorAluguel.value,
        "valorInvestidomento": valorInvestidomento.value,
        "valorTeste": teste.value

    }
    


    itens.push(itemAtual)
    localStorage.setItem("itens", JSON.stringify(itens))



    valorRenda.value = ""
    valorMercado.value = ""
    valorLazer.value=""
    valorAluguel.value=""
    valorInvestidomento.value=""

})





