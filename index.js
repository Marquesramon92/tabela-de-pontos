var user1 = { nome: "Ramon", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var user2 = { nome: "Karen", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var user3 = { nome: "Ione", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

function calculaPontos(user) {
  var pontos = user.vitorias * 3 + user.empates;
  return pontos;
}

function adicionarJogador(){
  var newJogador = document.getElementById("nome").value; 
  var newUser = { nome: newJogador, vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
  jogadores.push(newUser)
  exibeJogadoresNaTela(jogadores);
  document.getElementById("nome").value = "";
}
 

var jogadores = [user1, user2, user3];



console.log(jogadores)

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td class = 'nomesUser'>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
      elemento += "<td><button class = 'limpar' onClick='limparTabela(" + i + ")'>Limpar</button></td>";
      elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}
exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i){
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i){
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function limparTabela(i){
  var jogador = jogadores[i];
  jogador.empates = 0;
  jogador.vitorias = 0;
  jogador.derrotas = 0;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
 