//variaveis >>> var nome;
//funções >>>> function nomeAlno (){}

// Funções

function  Contador(){
    //criar uma verificação de se o número digitado é par ou impar

    let impaPar = 4;
    let numero = 1 ;

    //Se for impar, então vamos apresentar na tela todos os impares de 1 até 50
    if(impaPar % 2 == 1){
console.log ("Esse número é impar") 
for(numero; numero <=50; numero ++){
    if(numero % 2 ===1){
        console.log(numero)
    }
}
}else if(impaPar % 2 == 0)

    {
console.log("Esse número é par")
}
for(numero; numero <=50; numero ++){
    if(numero % 2 ===1){
        console.log(numero)

    //Senão (se for par) vamos apresentar na tela todos os numeros pares de 1 até 50
}

//OBS: funcoes são sempre chamadas acompanhadas com parenteses

console.log(Contador)


console.clear()

//arrow function

let BoasVindas = () => {
    return' Welcome Não aguento mais, querimbora'
}

console.log(BoasVindas())



// Os parenteses servem para trazer valores que estão fora da função para dentro dela asim conseguindo trabalhar com varios tipos de valores informados pelo usuario


let soma = (num1 = 2, num2 = 3) =>{
    return num1 + num2;

}

console.log(Soma())


function Clique(){
    let cliques = 0;

    Return cliques++;

}
console.log(Clique())