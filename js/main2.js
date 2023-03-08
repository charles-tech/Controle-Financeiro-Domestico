const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");



form.addEventListener("submit",(evento)=>{
    evento.preventDefault();

    const valorRenda = evento.target.elements['valorRenda'];
    const valorMercado = evento.target.elements['valorMercado'];
    const valorLazer = evento.target.elements['valorLazer'];
    const valorAluguel = evento.target.elements['valorAluguel'];
    const valorInvestidomento = evento.target.elements['valorInvestidomento'];

    const itemAtual ={
        "valorRenda": valorRenda.value,
        "valorMercado": valorMercado.value,
        "valorLazer": valorLazer.value,
        "valorAluguel": valorAluguel.value,
        "valorInvestidomento": valorInvestidomento.value

    }

    criarElemento(itemAtual)

    itens.push(itemAtual)
    console.log(itens)


    valorRenda.value = ""
    valorMercado.value = ""

})

function criarElemento(item){
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.valorMercado
    numeroItem.innerHTML = item.valorLazer
    numeroItem.innerHTML = item.valorAluguel
    numeroItem.innerHTML = item.valorRenda
    novoItem.appendChild(numeroItem)



    lista.appendChild(novoItem)
}