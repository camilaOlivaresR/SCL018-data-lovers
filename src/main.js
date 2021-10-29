
/*IMPORTACIÓN DE MÓDULOS*/

import data from "./data/ghibli/ghibli.js";
import { sortData, filterData } from "./data.js";

//función que hace correr las imágenes del Slider
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}



//ESTABLECIMIENTO DE VARIABLES
const films = data.films; // variable que contiene las películas de la data
const printedMovies = document.getElementById("posterFilms"); // variable que contiene la section en html
let newFilms = [...films]; //variable que contiene una copia de las películas de la data, hecha con "destructuring", que es ...
// ... una forma de capturar datos de un objeto o array y asignarlos a variables. Disponible desde ES2015

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
  const chosenOrder = sortData(newFilms, event.target.value, event.target.value);
  const print = (newFilms) => {
    displayMovies(newFilms);
  };

  print(chosenOrder);
});

//INSTRUCCIONES PARA IMPRIMIR CARTAS FILTRADAS
const filterSelected = document.querySelector(".combo-box-filter");

filterSelected.addEventListener("change", (event) => {
  const chosenFilter = filterData(newFilms, event.target.value);
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

/* FILTRANDO PERSONAJES FEMENINOS DE MIYAZAKI

const drawCardPerson = (films) => {
  return `
  <section class="movieCardFilter">
  
        <h3>${films.people.map((x)=>  `<img src= "${x.img}" class= "character"/>`)};<h3>
        <h3> ${films.people.map((x)=>  `<img src= "${x.name}" class= "name"/>`)};<h3>
        </section>`
    
};

const femenineGender = document.querySelector(".combo-box-filter");

femenineGender.addEventListener("change", (event) => {
  const genderPerson = genderFilter(data, event.target.value);
  console.log(genderPerson);

  const print = (femalePerson) => {
      printedMovies.innerHTML = "";
      for (let i = 0; i < femalePerson.length; i++) {
  printedMovies.innerHTML += drawCardPerson(femalePerson[i]);
}
    };
    print(genderPerson);
  });
  */

  /*const drawCard = (films) => {
  return `
  <section class="movieCard">
  /* <div class="flip-card">
  <div class="flip-card-inner">
   <div class="flip-card-front"> */
    
   /*
   <div class="flip-card-back"
   <h3> ${films.description}<h3>
   </div>
 </div>
</div> 
</section>`;
};
*/