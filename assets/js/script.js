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

let flag = false;

btn.addEventListener("click", function(){
  for(let i = 0; i < approvedEmail.length; i++){

    if(!flag){
      if((userEmail.value) === approvedEmail[i]){
      console.log("Email approvata");
      flag = true;
      }else{
        console.log("Email non approvata");
      }
    }
    
  }
})