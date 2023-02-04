const episodes = JSON.parse(localStorage.getItem('episodes'));
const currentEpisodeId = JSON.parse(localStorage.getItem("currentEpisode"));

const episodeDetailsContainer = document.querySelector(".container");

const episodeData = episodes.find(episode => episode.id === currentEpisodeId);

const renderEpisode = episode => {
    const episodeNumber = document.createElement("h3");
    episodeNumber.innerHTML = `Episodio número: ${episode.episode}`;

    const episodeName = document.createElement("h4");
    episodeName.innerHTML = `Nombre: ${episode.name}`;

    const episodeAirDate = document.createElement("h4");
    episodeAirDate.innerHTML = `Fecha de publicación: ${episode.air_date}`;

    episodeDetailsContainer.append(episodeNumber, episodeName, episodeAirDate);

    const charactersList = document.createElement("ul");

    episode.characters.forEach(async (character) => {
        const response = await fetch(character);
        const data = await response.json();

        const characterItem = document.createElement("li");
        characterItem.innerText = data && data.name;
        charactersList.appendChild(characterItem);
    });

    episodeDetailsContainer.appendChild(charactersList);
}

renderEpisode(episodeData);
