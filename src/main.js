import {scoreMovie} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';


let films = data.films;
let printMovie = document.getElementById("posterFilms");

const drawCard = (films) => {
    return `
     <section class="movieCard">
        <img alt="Poster" id="poster" src="${films.poster}">
      
        <h4> ${films.title}<h4>
        <h5> ${films.release_date}<h5>
       
     </section>`
};

for (let i = 0; i < films.length; i++) {
    printMovie.innerHTML += drawCard(films[i]);
}


/*let scoreOFMovie = document.getElementById("order");
scoreOFMovie.addEventListener("click", function () {
    document.getElementsById("posterFilms")[0].innerHTML = "";
    


});*/


const sortBy = "data.films.rt_score";
const orderOption = document.querySelector(".combo-box-order");

orderOption.addEventListener("change", (event) => {
  const chosenOrder = sortData(data, sortBy, event.target.value);
  const print = (films) => {
  printMovie.innerHTML = "";
  for (let i = 0; i < films.length; i++) {
    printMovie.innerHTML += drawCard(films[i]);
  };
}
print (chosenOrder);
});
