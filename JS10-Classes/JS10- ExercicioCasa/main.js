class ContaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
    }

    contaPoupanca() {
        const taxa = 0.015;
        return this.salario - this.salario * taxa;
    }

    contaCorrente() {
        const taxa = 0.036;
        return this.salario - this.salario * taxa;
    }

    contaEstudante() {
        const taxa = 0.012;
        return this.salario - this.salario * taxa;
    }
}


const conta1 = new ContaBancaria("João Silva", 30, 5000, "Masculino", "Agência 001", "Poupança", "12345-6");
const conta2 = new ContaBancaria("Maria Oliveira", 25, 3000, "Feminino", "Agência 002", "Corrente", "54321-0");
const conta3 = new ContaBancaria("Pedro Santos", 20, 1500, "Masculino", "Agência 003", "Estudante", "67890-1");


const novoSalarioPoupanca = conta1.contaPoupanca();
const novoSalarioCorrente = conta2.contaCorrente();
const novoSalarioEstudante = conta3.contaEstudante();


console.log("Conta Poupança:");
console.log(`Nome: ${conta1.nome}, Idade: ${conta1.idade}, Salário Original: R$${conta1.salario.toFixed(2)}, Novo Salário: R$${novoSalarioPoupanca.toFixed(2)}`);
console.log("-------------------------------------------------");

console.log("Conta Corrente:");
console.log(`Nome: ${conta2.nome}, Idade: ${conta2.idade}, Salário Original: R$${conta2.salario.toFixed(2)}, Novo Salário: R$${novoSalarioCorrente.toFixed(2)}`);
console.log("-------------------------------------------------");

console.log("Conta Estudante:");
console.log(`Nome: ${conta3.nome}, Idade: ${conta3.idade}, Salário Original: R$${conta3.salario.toFixed(2)}, Novo Salário: R$${novoSalarioEstudante.toFixed(2)}`);
