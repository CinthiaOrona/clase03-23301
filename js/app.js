"use strict";

/* Login */
const boton = document.getElementById('boton');
boton.addEventListener('click', function () {
  saludar();
});

/* Mensaje bienvenida */
function saludar() {
  const mensaje = document.getElementById('saludo');

  let nombre = prompt('¿Cuál es tu nombre?');
  mensaje.innerHTML = `Hola ${nombre}, bienvenido a mi sitio web`;
}
