// Função principal
function main() {
    // Variáveis
    let nome = "Rael";
    let idade = 30;
    let altura = 1.75;
    let ativo = true;

    // Imprimindo variáveis
    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("Altura:", altura);
    console.log("Ativo:", ativo);

    // Estruturas de controle: if-else
    if (idade >= 18) {
        console.log(nome + " é maior de idade.");
    } else {
        console.log(nome + " é menor de idade.");
    }

    // Laço de repetição: for
    console.log("Contagem de 1 a 5:");
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }

    // Função
    let resultado = soma(5, 7);
    console.log("A soma de 5 e 7 é:", resultado);

    // Array
    let numeros = [1, 2, 3, 4, 5];
    console.log("Números no array:");
    for (let numero of numeros) {
        console.log(numero);
    }
}

// Função para somar dois números
function soma(a, b) {
    return a + b;
}

// Chamando a função principal
main();