const allCharactersData = JSON.parse(localStorage.getItem('characters'));

const currentCharacter = localStorage.getItem('currentCharacter');

const characterContainer = document.querySelector(".characterDetailContainer");

const characterData = allCharactersData.results.find(character => character.name === currentCharacter);


const renderCharacterInfo = () => {
    const characterSection = document.createElement("section");
    characterSection.setAttribute("class", "characterInfoSection");

    const episodesList = document.querySelector(".episodes-list");
    characterData.episode.forEach(episode => {
          if (!episodesList.innerHTML.includes(episode)) {
            const episodeItem = document.createElement("ul");
            episodeItem.innerText = "";
            episodesList.appendChild(episodeItem);
        }
    });
    const characterInfo = `
        <div class="characterData d-flex p-3">
            <div class="image-container">
                <img src="${characterData.image}" alt="${characterData.name}">
                <div class="character-info">
                    <h2>${characterData.name}</h2>
                    <h2>${characterData.status}</h2>
                    <h2>${characterData.species}</h2>
                    <h2>${characterData.gender}</h2>
                    <h2>${characterData.origin.name}</h2>
                    <h2>${characterData.location.name}</h2>
                </div>
            </div>
            <div class="episodes-container p-3">
                <h2 class="episodes-title">Lista de episodios que aparece</h2>
                ${characterData.episode.map(episode => `<li class="list-group-item">${episode}</li>`).join('')}
            </div>
        </div>
    `;

    characterSection.innerHTML = characterInfo;

    const characterContainer = document.getElementById('characterContainer');

    characterContainer.appendChild(characterSection);
};

renderCharacterInfo();




