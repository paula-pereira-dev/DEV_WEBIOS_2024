//let frutas = ["banana", "melancia", "morango", "manga", "uva", "pitaya", "goiaba", "abacaxi"] // Coloque o nome de 8 frutas

//frutas.forEach((valor, indice) => {
 //   console.log(valor); // conteudo da posição
 //   console.log(indice); // numero da posição

//})





//frutas.forEach(Percorrer)
///   conteudo, indice
//function Percorrer(valor, indice){
//    console.log(valor); //valor da posição
//console.log(indice) //numero da posição
//}


//for(i = 0;  <= frutas.length ; i++){
//    console.log(frutas[i]); //valor da posição
//    console.log(i) //numero da posição
//}


let numeros = [4, 18, 44, 56, 36, 25,  ]

//trazer a raiz quadrada de cada numero
let numerosDois = numeros.map(Math.sqrt)
let menorNumero = Math.min.apply(Math, numeros)
// console.log(numeros)
// console.log(numerosDois)
console.log(menorNumero)


// criando um novo array onde ira conter apenas os número maiores ou iguais a 16
let filtraNumero = numeros.filter((valor) => {
    return valor >= 16
})

console.log(numeros)
console.log(filtraNumero)

console.clear()


// trabalhando com array de objeto


let tarefa = [
    {
        tarefa: "Dormir",
        isFeita: true
    },
    {
        tarefa: "limpar",
        isFeita: false
    },
    {
        tarefa: "torcer",
        isFeita: true
    }
]


// retorne apenas as tarefas que estão marcadas como true
//find

console.log(tarefa.find((item) => {
    return item.isFeita == true
}))