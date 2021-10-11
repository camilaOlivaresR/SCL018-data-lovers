import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

let films = data.films;
let printMovie= document.getElementById("posterFilms");

const drawCard = (films) => {
    return `
     <section class="movieCard">
        <img alt="Poster" id="poster" src="${films.poster}">
        <h3>Title: ${films.title}<h3>
     </section>`
    };

for (let i=0; i < films.length; i++) {
    printMovie.innerHTML += drawCard(films[i]);
}
