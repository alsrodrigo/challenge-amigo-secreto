// Lista que armazenará os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  // 1. Captura o valor do campo de entrada
  let input = document.getElementById("amigo");
  let nome = input.value.trim();

  // 2. Validação: impede valores vazios
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // 3. Adiciona o nome ao array
  amigos.push(nome);

  // 4. Limpa o campo de entrada
  input.value = "";

  // 5. Atualiza a lista visual na tela
  atualizarListaAmigos();
}

// Função para atualizar a <ul> com os nomes dos amigos
function atualizarListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

// Função para sortear aleatoriamente um amigo
function sortearAmigo() {
  // 1. Validação: a lista não pode estar vazia
  if (amigos.length === 0) {
    alert("A lista está vazia. Adicione pelo menos um amigo.");
    return;
  }

  // 2. Gera um índice aleatório
  let indiceSorteado = Math.floor(Math.random() * amigos.length);

  // 3. Obtém o nome sorteado
  let nomeSorteado = amigos[indiceSorteado];

  // 4. Exibe o nome na tela
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Amigo sorteado: <strong>${nomeSorteado}</strong></li>`;
}