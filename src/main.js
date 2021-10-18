import { example } from "./data.js";
// import data from './data/lol/lol.js';

import data from "./data/ghibli/ghibli.js";
// import data from './data/rickandmorty/rickandmorty.js';

let films = data.films;
let printMovie = document.getElementById("posterFilms");

const drawCard = (films) => {
  return `
     <section class="movieCard">
     <div class="movieFrame">
        <img class= "moviePoster" alt="Poster de la película" id="poster" src="${films.poster}">
        <figcaption class="movieName">${films.title}</figcaption>
        <figcaption class="movieYear">(${films.release_date})</figcaption>
        </div>
     </section>`;
};

for (let i = 0; i < films.length; i++) {
  printMovie.innerHTML += drawCard(films[i]);
}
const filterByGender = document.querySelector("#filterByGender");
