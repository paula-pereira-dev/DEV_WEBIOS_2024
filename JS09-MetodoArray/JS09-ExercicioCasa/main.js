ex 01
let numeros = [17, 43, 8, 4, 97, 56, 29, 95 ]

function ImparPar(valor) {
    if (valor % 2 === 0) {
        console.log(valor + " é par");
      } else {
        console.log(valor + " é ímpar");
      }
    }
    numeros.forEach(ImparPar);

ex 02

let numeros = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88,82, 61, 59]

let FiltraNumero = numeros.filter(valor => valor > 20 && valor < 80)

console.log(FiltraNumero)
