/// Vamos resolver uma tabuada
/// pega o elemento utilizando o ID

let valor = document.getElementById('recebeValor')
///Perga o elemento utilizando o atributo name
let resultado = document.getElementsByName('resultado')


const tabuada = () => {
    // value - guardar o valor que está sendo digitado dentro da variável
    let guardavalor = valor.value;

    if(guardarValor == ''){
        resultado.innerHTML = "Insira um valor valido"
        resultado.style.color = "red"
    }else{
        resultado.style.color = "black"
    for (i = 0; i <= 10; i++){
        let resultadoTabuada = guardaValor * i;

 console.log(guardavalor, 'x', i, '=', resultadoTabuada)

 resultado.innerHTML = += ${guardaValor} x ${i} = $ {guardaValor * i} <br/>

}
}

const Limpar = () => {
resultado,innerHTML = '';

}
// innerHTML
