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

let flag = false;

btn.addEventListener("click", function(){
  for(let i = 0; i < approvedEmail.length; i++){

    if(!flag){
      if((userEmail.value) === approvedEmail[i]){
        emailMsg.classList.add("text-success");
        emailMsg.classList.remove("d-none");
        emailMsg.append("Email approvata!");
        flag = true;
      }else{
        emailMsg.classList.add("text-danger");
        emailMsg.classList.remove("d-none");
        emailMsg.innerHTML = "Email non approvata."
      }
    }
    
  }
  userEmail.value = "";
})