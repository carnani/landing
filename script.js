function saludo() {
  alert("Hola Mundo");
  var nombre = prompt("ingrese su nombre: ");
  alert("hola " + nombre);
}

var inicio = document.getElementsByClassName("link")[0];

inicio.addEventListener("click", function() {
  saludo();
});
 
var acerca = document.getElementsByClassName("link")[1];

  acerca.addEventListener("click", function() {
   alert("Gracias por visitar la página");
  });