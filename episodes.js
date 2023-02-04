const EPISODES_URL = "https://rickandmortyapi.com/api/episode";

const renderEpisodesCards = (episodesData) => {
    return episodesData.forEach(episode => {
        
        const episodesContainer = document.querySelector(".episodes-container");

        const episodeCard = document.createElement("div");
        episodeCard.classList.add("card");
    
        const episodeCardBody = document.createElement("div");
        episodeCardBody.classList.add("card-body");
    
        const episodeNumber = document.createElement("h5");
        episodeNumber.classList.add("card-title");
        episodeNumber.innerText = `Episodio número: ${episode.id}`;
    
        const episodeName = document.createElement("p");
        episodeName.classList.add("card-text");
        episodeName.innerText = `Nombre: ${episode.name}`;
    
        const episodeAirDate = document.createElement("p");
        episodeAirDate.classList.add("card-text");
        episodeAirDate.innerText = `Fecha de publicación: ${episode.air_date}`;
    
        episodeCardBody.append(episodeNumber, episodeName, episodeAirDate);
        episodeCard.appendChild(episodeCardBody);
        episodesContainer.appendChild(episodeCard);
    
        episodeCard.addEventListener("click", () => {
            if (localStorage.getItem('currentEpisode')) {
                localStorage.removeItem('currentEpisode');
            }

            localStorage.setItem('currentEpisode', episode.id);
            window.location = "./episodeDetails.html";
        });
    });
}

const getEpisodesData = async () => {
    try {
        const response = await fetch(EPISODES_URL);
        const { results } = await response.json();

        const episodesData = results;
        localStorage.setItem("episodes", JSON.stringify(episodesData));

        return episodesData;
    } catch(e) {
        throw new Error(e)
    }
}

const episodesData = JSON.parse(localStorage.getItem('episodes'));

if (episodesData === null) {
    getEpisodesData().then(
        data => renderEpisodesCards(data)
    );    
}

renderEpisodesCards(episodesData);


const borrar = document.getElementById("borrarDatos")
const saludo = document.getElementById("saludo")

let nombreUsuario = localStorage.getItem("nombreUsuario")


function borrarDatos() {
  localStorage.removeItem("nombreUsuario")
  return window.location.href = "login.html"

}