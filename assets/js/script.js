const approvedEmails = [
  "pierdo.guarnieri@gmail.com",
  "pierdo.guarnieri@outlook.it",
  "stefano.corradi@gmail.com",
  "stefano.corradi@boolean.it",
  "loris.barbiero@boolean.it",
  "loris.barbiero@gmail.com",
  "luca.giardina@boolean.it",
  "luca.giardina@gmail.com"
]

const userEmail = document.getElementById("email");

const btn = document.getElementById("send");

const emailMsg = document.getElementById("emailMsg");

// Salvo il nodo del Main Wrapper per gestire le sue classi; in caso di inserimento di una email sbagliata verrà aggiunta una classe che farà scomparire l'intera pagina.
const mainWrapper = document.querySelector(".pg-main-wrapper");

const gameShow = document.querySelector(".pg-game");

const gameBtn = document.getElementById("play");

const resultMessage = document.getElementById("resultMessage");

// Salvo il nodo delle immagini per gestire le classi che applicano le animazioni
const loadingImg = document.querySelectorAll(".loading");

const symbolOutput = document.getElementById("symbolResult");

const outputHuman = document.getElementById("diceHuman");

const outputComputer = document.getElementById("diceComputer");

let message;

let messageGame;

let symbol;

btn.addEventListener("click", function(){

  // Inizializzazione di flag
  let flag = false;

  // Reset delle classi
  emailMsg.classList.remove("text-success", "text-danger");
  emailMsg.classList.add("d-none");

  // Ciclo for di controllo dell'email
  for(let i = 0; i < approvedEmails.length && !flag; i++){

    if((userEmail.value) === approvedEmails[i]) flag = true;

  }

  // Assegnazione del messaggio e delle classi
  if(flag){
    emailMsg.classList.add("text-success");
    emailMsg.classList.remove("d-none");
    gameShow.classList.remove("d-none")
    message = "Email approvata!";
  }else{
    emailMsg.classList.add("text-danger");
    emailMsg.classList.remove("d-none");
    mainWrapper.classList.add("pg-fadeoff-slow");
    message = "Email non approvata. Il sito scomparirà a breve.";
  }

  // Reset del value e stampa del messaggio
  userEmail.value = "";
  emailMsg.innerHTML = message;
})

gameBtn.addEventListener("click", function(){

  // Reset delle classi dei testi di output
  resultMessage.classList.remove("text-success", "text-danger", "text-warning");
  resultMessage.classList.add("d-none");
  symbolOutput.classList.remove("text-success", "text-danger", "text-warning");
  symbolOutput.classList.add("d-none");

  // Reset delle classi dei testi di output
  resultMessage.classList.add("pg-opacity");
  symbolOutput.classList.add("pg-opacity");

  // Aggiunta delle classi per gestire le animazioni a tutte le immagini
  for(let i = 0; i < loadingImg.length; i++){
    loadingImg[i].classList.remove("d-none");
    loadingImg[i].classList.add("rotate");
  }

  // Generazione dei numeri random
  const diceNumberHuman = Math.floor(Math.random() * 6) + 1;
  const diceNumberComputer = Math.floor(Math.random() * 6) + 1;

  // Calcolo del risultato del gioco
  if(diceNumberHuman > diceNumberComputer){
    resultMessage.classList.add("text-success");
    resultMessage.classList.remove("d-none");
    messageGame = "Hai vinto!"; 
    symbolOutput.classList.add("text-success");
    symbolOutput.classList.remove("d-none");
    symbol = ">";
  }else if(diceNumberHuman < diceNumberComputer){
    resultMessage.classList.add("text-danger");
    resultMessage.classList.remove("d-none");
    messageGame = "Hai perso.";
    symbolOutput.classList.add("text-danger");
    symbolOutput.classList.remove("d-none");
    symbol = "<";
  }else{
    resultMessage.classList.add("text-warning");
    resultMessage.classList.remove("d-none");
    messageGame = "Hai pareggiato.";
    symbolOutput.classList.add("text-warning");
    symbolOutput.classList.remove("d-none");
    symbol = "=";
  }

  // Stampa dei risultati
  outputHuman.innerHTML = diceNumberHuman;
  outputComputer.innerHTML = diceNumberComputer;
  resultMessage.innerHTML = messageGame;
  symbolOutput.innerHTML = symbol;
})