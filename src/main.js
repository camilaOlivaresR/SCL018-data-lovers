import { sortData } from './data.js';

import data from './data/ghibli/ghibli.js';

let films = data.films;
let printMovie = document.getElementById("posterFilms");
//let currentFilms= films;

const drawCard = (films) => {
  return `
  <section class="movieCard">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
     
    
        <img alt="Poster" id="poster" src="${films.poster}">
        <h3> ${films.title}<h3>
        <h3> ${films.release_date}<h3>
        <h3> ${films.rt_score}<h3>
        </div>
        <div class="flip-card-back"
        <h3> ${films.description}<h3>
        </div>
        </div>
      </div>
     </section>`
};

for (let i = 0; i < films.length; i++) {
  printMovie.innerHTML += drawCard(films[i]);
}


/*let scoreOFMovie = document.getElementById("order");
scoreOFMovie.addEventListener("click", function () {
    document.getElementsById("posterFilms")[0].innerHTML = "";
    


});*/


//const sortBy = "rt_score";
const orderSelected = document.querySelector(".combo-box-order");

orderSelected.addEventListener("change", (event) => {
  const chosenOrder = sortData(data, event.target.value, event.target.value);
  const print = (films) => {
    printMovie.innerHTML = "";
    for (let i = 0; i < films.length; i++) {
      printMovie.innerHTML += drawCard(films[i]);
    }
  };
  print(chosenOrder);
});
