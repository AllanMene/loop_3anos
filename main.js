
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Que time foi o primeiro campeão mundial em 1951?");

    
    if (respostaTime.toLowerCase() === "palmeiras") {
      alert("Isso mesmo! O Athlético PR é o melhor time!");
      continuarPerguntando = true; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
