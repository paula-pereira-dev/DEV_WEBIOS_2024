// main.js

function calcularMedia() {
    // Lendo as 4 notas do usuário
    const nota1 = parseFloat(prompt("Digite a 1ª nota: "));
    const nota2 = parseFloat(prompt("Digite a 2ª nota: "));
    const nota3 = parseFloat(prompt("Digite a 3ª nota: "));
    const nota4 = parseFloat(prompt("Digite a 4ª nota: "));

    // Calculando a média
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Exibindo a mensagem com a média
    console.log(`A média do aluno com as 4 notas é: ${media.toFixed(2)}`);
}

// Chama a função para executar
calcularMedia();
