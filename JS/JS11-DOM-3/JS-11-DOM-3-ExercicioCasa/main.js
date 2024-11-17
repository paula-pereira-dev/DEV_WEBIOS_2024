
const inputSalario = document.getElementById("salario");
const botaoCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

function calcularNovoSalario() {
    const salarioAtual = parseFloat(inputSalario.value);

    if (isNaN(salarioAtual) || salarioAtual <= 0) {
        resultado.textContent = "Por favor, insira um salário válido.";
        return;
    }

    const aumentoPercentual = 0.17;
    const reajusteFixo = 215;
    const novoSalario = salarioAtual + (salarioAtual * aumentoPercentual) + reajusteFixo;

    
    resultado.textContent = `O novo salário é R$${novoSalario.toFixed(2)}`;
}


botaoCalcular.addEventListener("click", calcularNovoSalario);
