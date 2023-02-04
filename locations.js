const locationCardsContainer = document.querySelector(".container");

fetch("https://rickandmortyapi.com/api/location/")
  .then(response => response.json())
  .then(data => {
    const locations = data.results;
    locations.forEach(location => {
      
      const locationDetailsContainer = document.querySelector(".container");

const locationCard = document.createElement("div");
locationCard.classList.add("card");

const locationCardBody = document.createElement("div");
locationCardBody.classList.add("card-body");

const locationName = document.createElement("h3");
locationName.classList.add("card-title");
locationName.innerHTML = `Nombre de la ubicación: ${location.name}`;

const locationType = document.createElement("h4");
locationType.classList.add("card-text");
locationType.innerHTML = `Tipo: ${location.type}`;

const locationDimension = document.createElement("h4");
locationDimension.classList.add("card-text");
locationDimension.innerHTML = `Dimensión: ${location.dimension}`;

locationCardBody.appendChild(locationName);
locationCardBody.appendChild(locationType);
locationCardBody.appendChild(locationDimension);

locationCard.appendChild(locationCardBody);
locationDetailsContainer.appendChild(locationCard);

      });
  });
  
const borrar = document.getElementById("borrarDatos")
  const saludo = document.getElementById("saludo")
  
  let nombreUsuario = localStorage.getItem("nombreUsuario")
  
  
  function borrarDatos() {
    localStorage.removeItem("nombreUsuario")
    return window.location.href = "login.html"
  
  }