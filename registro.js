
const name = document.getElementById("name");
const formulario = document.getElementById("form");
const parrafo = document.getElementById("advertencia")

formulario.addEventListener("submit", e => {
    e.preventDefault()

    mail = document.querySelector("#mail").value;
    password = document.querySelector("#password").value;
    repetirContraseña = document.querySelector("#repetirContraseña").value;

    const registro = () => {
        const URL = "https://api-auth-moby.herokuapp.com/api/user/register"

        const formData = {
            name: document.querySelector("#name").value,
            mail: document.querySelector("#mail").value,
            password: document.querySelector("#password").value
        }

        fetch(URL, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .catch(error => console.error("Error:", error))
            .then(response => console.log("Exito:", response))
            
    }

    registro()
    let entrar = false;

    parrafo.innerHTML = "";
    if (name.length < 6) {
        advertencia += `El nombre no es valido <br>`
        entrar = false;
    }
    if (!entrar) {
        parrafo.innerHTML = "Por favor revise los campos del formulario"
    } else {
        parrafo.innerHTML = "Enviado"
    }

    if (password.length < 4) {
        alert("contraseña muy corta")
        entrar = false;
        return;
    }

    if (repetirContraseña !== password) {
        entrar = false;
        alert("las contraseñas no coinciden")
        return;

    } 





    function guardarDatos() {
        const usuarios = JSON.parse(localStorage.getItem("Usuarios"))

        usuarios.push({
            userId: usuarios.length + 1,
            name: document.querySelector("#name").value,
            mail: document.querySelector("#mail").value,
            password: document.querySelector("#password").value
        })

        localStorage.setItem("Usuarios", JSON.stringify(usuarios))

    }
    guardarDatos()
})





