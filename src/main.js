/*IMPORTACIÓN DE MÓDULOS*/

import data from "./data/ghibli/ghibli.js";
import { sortData, filterData, genderFilter } from "./data.js";


//ESTABLECIMIENTO DE VARIABLES
const films = data.films; // variable que contiene las películas de la data
const printedMovies = document.getElementById("posterFilms"); // variable que contiene la section en html
let newFilms = [...films]; //variable que contiene una copia de las películas de la data

/*CONFIGURACIÓN DE LAS TARJETAS QUE SE MOSTRARÁN EN EL HTML*/
const drawCard = (films) => {
  return `
     <section class="movieCard">
        <img class= "moviePoster" alt="Poster de la película" id="poster" src="${films.poster}">
        <figcaption class="movieName">${films.title}</figcaption>
        <figcaption class="movieYear">(${films.release_date})</figcaption>
        <figcaption class="movieScore">${films.rt_score}</figcaption>
     </section>`;
};

// FUNCIÓN QUE IMPRIME LAS CARTAS
const displayMovies = (filmsSelected) => {
  printedMovies.innerHTML = "";
  filmsSelected.forEach((newFilms) => {
    printedMovies.innerHTML += drawCard(newFilms);
  });
};
displayMovies(newFilms);

/* FUNCIÓN QUE IMPRIME LAS CARTAS CON UN CICLO FOR
for (let i=0; i < films.length; i++) {
    printMovie.innerHTML += drawCard(films[i]);
}
*/

//INSTRUCCIONES PARA IMPRIMIR CARTAS ORDENADAS
const orderSelected = document.querySelector(".combo-box-order");

orderSelected.addEventListener("change", (event) => {
  const chosenOrder = sortData(data, event.target.value, event.target.value);
  const print = (newFilms) => {
    displayMovies(newFilms);
  };

  print(chosenOrder);
});

//INSTRUCCIONES PARA IMPRIMIR CARTAS FILTRADAS
const filterSelected = document.querySelector(".combo-box-filter");

filterSelected.addEventListener("change", (event) => {
  const chosenFilter = filterData(data, event.target.value);
  const print = (newFilms) => {
    displayMovies(newFilms);
  };

  print(chosenFilter);
});

/* FUNCIÓN QUE EXTRAE PERSONAJES FEMENINAS
data.films.forEach(function(e){
    
  const females = e.people.filter( (element) => element.gender === "Female");
  console.log(females);
});
*/

// FILTRANDO PERSONAJES FEMENINOS DE MIYAZAKI

const drawCardPerson = (films) => {
  return `
  <section class="movieCardFilter">
  <img alt="PosterFemale" id="posterFemale" src="${films.img}">
        <h3> ${films.gender}<h3>
        <h3> ${films.name}<h3>
        </section>`
    
};

const selGender = document.querySelector(".combo-box-filter");

selGender.addEventListener("change", (event) => {
  const genderPerson = genderFilter(data, event.target.value);
  console.log(genderPerson);

  const print = (films) => {
      printMovie.innerHTML = "";
      for (let i = 0; i < films.length; i++) {
  printMovie.innerHTML += drawCardPerson(films[i]);
}
    };
    print(genderPerson);
  });
