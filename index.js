// Checkpoint 1 - Programação Imperativa

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".


// Cardapio de opções padronizadas

const readlineSync = require("readline-sync");

console.log(`
  Escolha uma dentre as opções

    1 - Pipoca 
    2 - Macarrão 
    3 - Carne 
    4 - Feijão 
    5 - Brigadeiro 
`);

// Escolha do prato e tratamento para opção inexistente

do {
  opcao = readlineSync.question("Escolha a sua opcao: ");
  if (opcao > 5) {
    console.log("Prato inexistente");
  }
} while (opcao > 5);

// Time

if (opcao == 1) {
  var timep = 10;
} else if (opcao == 2) {
  var timep = 8;
} else if (opcao == 3) {
  var timep = 15;
} else if (opcao == 4) {
  var timep = 12;
} else var timep = 8;

// escolhas e respostas

if (timep) {
  console.log("O tempo programado para preparação é de " + timep + " segundos");
  const time = readlineSync.question("Qual o tempo desejado: ");
  if (time < timep) {
    console.log("Tempo insuficiente");
  } else if (time >= 3 * timep) {
    console.log("Kabumm");
  } else if (time > 2 * timep) {
    console.log("A comida queimou");
  } else console.log("Prato pronto, bom apetite!!!");
}