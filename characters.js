const API_URL = "https://rickandmortyapi.com/api/character";

const getCharactersData = async () => {
    try {
        let parsedData;

        if (localStorage.getItem('characters')) {
            parsedData = JSON.parse(localStorage.getItem('characters'));
            return parsedData;
        }

        const response = await fetch(API_URL);
        parsedData = await response.json();

        localStorage.setItem('characters', JSON.stringify(parsedData));

        return parsedData;
    } catch(error) {
        throw new Error(error);
    }
}
  
getCharactersData().then(data => {
    data.results.forEach(character => {
        const article = document.createElement("article");
        article.setAttribute("class", "character");
        const card = `  
            <div class="card">
                <div class="image-container">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </div>
                <a href="./characterDetails.html" id="${character.name}-link">
                    Ver detalle
                </a>
            </div>
        `;
        article.innerHTML = card;

        const carousel = document.querySelector(".carousel");
        carousel.appendChild(article);
        
        const characterLink =  document.getElementById(`${character.name}-link`);

        const onCharacterClick = () => {
            if (localStorage.getItem('currentCharacter')) {
                localStorage.removeItem('currentCharacter');
            }

            localStorage.setItem('currentCharacter', character.name);
        }
    
        characterLink.onclick = onCharacterClick;
    });
});



const borrar = document.getElementById("borrarDatos")
const saludo = document.getElementById("saludo")

let nombreUsuario = localStorage.getItem("nombreUsuario")


function borrarDatos() {
  localStorage.removeItem("nombreUsuario")
  return window.location.href = "login.html"

}