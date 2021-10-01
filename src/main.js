import {
  example
} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
const printFilm = data.films;

/*
const div = document.getElementById('root');

const drawCard = (film) => {
  div.innerHTML += ` <div>
      <ol>
      <li>Titulo: $(film.title)</li>
      <li>Director: $(film.director)</li>
      <li>Puntaje: $(film.rt_score)</li>
      <li>Productor: $(film.producer)</li>
 </ol>
 </div>`;
};

for (let i = 0; i < films.length; i++) {
  drawCard(films[i]);
}
*/

  for (let i = 0; i < films.length; i++) {
      //template strings
      list += `
  <section class="filmsContainer">
  <figure class="cardImage">                           
      <img alt="Poster" i
