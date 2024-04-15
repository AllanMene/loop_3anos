
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Que time foi o primeiro campeão mundial em 1951?");

    
    if (respostaTime.toLowerCase() === "palmeiras") {
      alert("Isso mesmo!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
    var respostaTime = prompt("Vai?");

    if (respostaTime.toLowerCase() === "curintia") {
      alert("Kapakapa");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
