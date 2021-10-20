/*IMPORTACIÓN DE MÓDULOS*/

import data from './data/ghibli/ghibli.js';
import {sortData} from "./data.js";
import {filterData} from "./data.js";

/*ESTABLECIMIENTO DE VARIABLES*/
let films = data.films;
let printMovie= document.getElementById("posterFilms");
let currentFilms = films;

/*CONFIGURACIÓN DE LAS TARJETAS QUE SE MOSTRARÁN EN EL HTML*/
const drawCard = (films) => {
    return `
     <section class="movieCard">
        <img class= "moviePoster" alt="Poster de la película" id="poster" src="${films.poster}">
        <figcaption class="movieName">${films.title}</figcaption>
        <figcaption class="movieYear">(${films.release_date})</figcaption>
        <figcaption class="movieScore">${films.rt_score}</figcaption>
        
        
      
     </section>`
    };

/*FUNCIÓN QUE IMPRIME LAS TARJETAS CON LAS PELÍCULAS
    const showingMovies = (filmsSelected) => {
     printedMovies.innerHTML ="";
     filmsSelected.forEach((currentFilm) => {
        printedMovies.innerHTML += drawCard(currentFilm);
     })
     
    }
    showingMovies(films);
*/


for (let i=0; i < films.length; i++) {
    printMovie.innerHTML += drawCard(films[i]);
}



/*const sortBy = "rt_score";*/
const orderSelected = document.querySelector(".combo-box-order");

orderSelected.addEventListener("change", (event) => {
  const chosenOrder = sortData(data, event.target.value, event.target.value);
  const print = (currentFilms) => {
    printMovie.innerHTML = "";
    for (let i = 0; i < currentFilms.length; i++) {
      printMovie.innerHTML += drawCard(films[i]);
    }
  }
  print(chosenOrder);
});


const filterSelected = document.querySelector(".combo-box-filter");

filterSelected.addEventListener("change", (event) => {
const chosenFilter = filterData(data, event.target.value, event.target.value);
const print = (currentFilms) => {
  printMovie.innerHTML = "";
  for (let i = 0; i < currentFilms.length; i++) {
    printMovie.innerHTML += drawCard(films[i]);
  }
}
print(chosenFilter);
});
