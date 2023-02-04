
const borrar = document.getElementById("borrarDatos")
const saludo = document.getElementById("saludo")

let nombreUsuario = localStorage.getItem("nombreUsuario")


function borrarDatos() {
  localStorage.removeItem("nombreUsuario")
  return window.location.href = "login.html"

}

