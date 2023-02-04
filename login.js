
document.querySelector("#entrar").addEventListener("click", loguear)
const form = document.getElementById("form")

const usuariosArray = []
inicializarLocalStorage()

function loguear(e) {
    e.preventDefault()
    let users = JSON.parse(localStorage.getItem("Usuarios")),

        mail = document.querySelector("#mail").value;
    password = document.querySelector("#password").value;

    if (mail <= 0 && password <= 0) {
        return alert("El campo no puede estar vacio")
    }

    const user = users.find((value) => value.mail == mail && value.password == password)

    if (user) {
        window.location = "bienvenida.html"

    } else {
        alert("Usuario o password incorrectos")
    }

    const login = () => {
        const URL = "https://api-auth-moby.herokuapp.com/api/user/login"

        const data = {
            mail: document.querySelector("#mail").value,
            password: document.querySelector("#password").value
        }

        fetch(URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .catch(error => console.error("Error:", error))
            .then(response => console.log("Exito:", response))

          
    }
    login()
}

function inicializarLocalStorage() {
    const usuarios = localStorage.getItem("Usuarios")
    if (!usuarios) {
        localStorage.setItem("Usuarios", JSON.stringify(usuariosArray))
    }
}



