document.getElementById("enviar").addEventListener("click",validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("tel").value != ""){
  alert("Pronto! Você receberá as novidades por email.")

  }else{

alert("Por favor, preencha os campos NOME, EMAIL e CONTATO para proseguir!")

  }

}