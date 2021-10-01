
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


const movieList = function(films) {
  let list = '';
  //reemplazamos el contenido de filmCard con una cadena vacía
  document.getElementById('filmCard').innerHTML = '';

  for (let i = 0; i < films.length; i++) {
      //template strings
      list += `
  <section class="filmsContainer">
  <figure class="cardImage">                           
      <img alt="Poster" id="poster" class="poster" src="${films[i].poster}">
  </figure>
  <section class="cardContainer-inner">
      <h2 id="title" class="cardTitle">${films[i].title}</h2>
      <h3 id="director" class="cardDirector">Director: ${films[i].director}</h3>
      <h3 id="score" class="cardYear">(${films[i].rt_score})</h3>
  </section>
  </section>`
  }
  //el contenido de filmCard ahora contiene los valores de la variable list
  document.getElementById('filmCard').innerHTML = list;
}
movieList(printFilm)

const filmCard = document.getElementById("filmCard");