
function validaFormulario() {
if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById("email").value)){
  alert("Bem-vindo "  + document.getElementById("email").value + "!");
}else{
alert("E-mail inválido")
}
}


