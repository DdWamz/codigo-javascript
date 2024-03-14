const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Simulação de funções de backend (esses seriam implementados no servidor)
function verificarCPF(cpf) {
  // Lógica fictícia para validação de CPF
  return true; // Simula CPF válido
}

function verificarCartao(cartaoCredito) {
  // Lógica fictícia para validação de cartão de crédito
  return true; // Simula cartão válido
}

function encontrarMotorista(pontoPartida) {
  // Lógica fictícia para encontrar um motorista
  return "Motorista João"; // Simula um motorista encontrado
}

function calcularTempoEstimado(destino) {
  // Lógica fictícia para calcular tempo estimado até o destino
  return 15; // Simula 15 minutos estimados
}

function verificarPlaca(placaCarro) {
  // Lógica fictícia para validação de placa de carro
  return true; // Simula placa válida
}

function mainMenu() {
  rl.question('Escolha uma opção:\n1. Cadastrar Usuário\n2. Solicitar Veículo\n3. Cadastrar Motorista\n4. Sair\n> ', function(answer) {
    switch(answer) {
      case '1':
        cadastrarUsuario();
        break;
      case '2':
        solicitarVeiculo();
        break;
      case '3':
        cadastrarMotorista();
        break;
      case '4':
        console.log('Saindo...');
        rl.close();
        return;
      default:
        console.log('Opção inválida.');
        mainMenu();
    }
  });
}

function cadastrarUsuario() {
  rl.question('Digite seu nome: ', function(nome) {
    rl.question('Digite seu CPF: ', function(cpf) {
      rl.question('Digite os dados do cartão de crédito: ', function(cartaoCredito) {
        if (verificarCPF(cpf) && verificarCartao(cartaoCredito)) {
          console.log('Usuário cadastrado com sucesso!');
        } else {
          console.log('Erro ao cadastrar usuário. Verifique os dados e tente novamente.');
        }
        mainMenu();
      });
    });
  });
}

function solicitarVeiculo() {
  rl.question('Digite o ponto de partida: ', function(pontoPartida) {
    rl.question('Digite o destino: ', function(destino) {
      console.log('Seu motorista está indo até você!');
      console.log('Tempo estimado de chegada: ' + calcularTempoEstimado(destino) + ' minutos.');
      mainMenu();
    });
  });
}

function cadastrarMotorista() {
  rl.question('Digite a placa do carro: ', function(placaCarro) {
    rl.question('Digite seu nome: ', function(nomeMotorista) {
      rl.question('Digite seu CPF: ', function(cpfMotorista) {
        if (verificarCPF(cpfMotorista) && verificarPlaca(placaCarro)) {
          console.log('Motorista cadastrado com sucesso!');
        } else {
          console.log('Erro ao cadastrar motorista. Verifique os dados e tente novamente.');
        }
        mainMenu();
      });
    });
  });
}

// Inicia o menu principal
mainMenu();
