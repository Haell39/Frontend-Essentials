// 1. Variáveis e Tipos de Dados
let nome = "Rafael"; // String
const idade = 25; // Number
let estaEstudando = true; // Boolean

console.log(nome, idade, estaEstudando); // Saída: Rafael 25 true

// 2. Funções
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao(nome)); // Saída: Olá, Rafael!

// 3. Condicionais
function verificarIdade(idade) {
  if (idade >= 18) {
    console.log("Você é maior de idade.");
  } else {
    console.log("Você é menor de idade.");
  }
}

verificarIdade(idade); // Saída: Você é maior de idade.

// 4. Loops
for (let i = 0; i < 5; i++) {
  console.log(`Número: ${i}`);
}
// Saída: Número: 0, Número: 1, Número: 2, Número: 3, Número: 4

// 5. Arrays
let frutas = ["Maçã", "Banana", "Laranja"];
frutas.push("Uva"); // Adiciona "Uva" ao array
console.log(frutas[2]); // Saída: Laranja

// 6. Objetos
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
  acelerar: function () {
    console.log("O carro está acelerando...");
  }
};

console.log(carro.marca); // Saída: Toyota
carro.acelerar(); // Saída: O carro está acelerando...

// 7. Manipulação de DOM
document.getElementById("minhaDiv").innerText = "Texto atualizado com JavaScript";

// 8. Funções Assíncronas e Promises
function buscarDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dados recebidos com sucesso!");
    }, 2000);
  });
}

async function mostrarDados() {
  try {
    const dados = await buscarDados();
    console.log(dados); // Saída: Dados recebidos com sucesso!
  } catch (error) {
    console.error("Erro ao buscar dados", error);
  }
}

mostrarDados();
