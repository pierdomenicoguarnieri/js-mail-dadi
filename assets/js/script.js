const approvedEmail = [
  "pierdo.guarnieri@gmail.com",
  "stefano.corradi@gmail.com",
  "stefano.corradi@boolean.it",
  "pierdo.guarnieri@outlook.it",
  "loris.barbiero@boolean.it",
  "loris.barbiero@gmail.com",
  "luca.giardina@boolean.it",
  "luca.giardina@gmail.com"
]

const userEmail = document.getElementById("email");

const btn = document.getElementById("send");

const emailMsg = document.getElementById("emailMsg");

let message;

btn.addEventListener("click", function(){

  // Inizializzazione di flag
  let flag = false;

  // Reset delle classi
  emailMsg.classList.remove("text-success", "text-danger");
  emailMsg.classList.add("d-none");

  // Ciclo for di controllo dell'email
  for(let i = 0; i < approvedEmail.length && !flag; i++){

    if((userEmail.value) === approvedEmail[i]) flag = true;

  }

  // Assegnazione del messaggio e delle classi
  if(flag){
    emailMsg.classList.add("text-success");
    emailMsg.classList.remove("d-none");
    message = "Email approvata!";
  }else{
    emailMsg.classList.add("text-danger");
    emailMsg.classList.remove("d-none");
    message = "Email non approvata.";
  }

  // Reset del value e stampa del messaggio
  userEmail.value = "";
  emailMsg.innerHTML = message;
})