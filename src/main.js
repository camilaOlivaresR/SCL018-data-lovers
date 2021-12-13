//IMPORTACIÓN DE MÓDULOS
import data from "./data/ghibli/ghibli.js";
import { sortData, filterData } from "./data.js";

//SLIDER
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider");
  // Esta variable toma las fotos del slider del html y las guardar en un array.
  let dots = document.getElementsByClassName("dot");
  // Esta variable tomo los puntos del html y los guarda en un array.
  for (i = 0; i < slides.length; i++) {
  //For es un bucle que recorre todo el array de imágenes.
    slides[i].style.display = "none";
  } //La propiedad display junto al style cuando none permiten ocultar elementos del dom.
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    //El ciclo for va activando cada punto mientras itera el array dots.
    dots[i].className = dots[i].className.replace(" active", "");
    //Replace reemplaza.
  
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); 
  //setTimeout es un método.
  //La imagen cambia cada 3 segundos.
}

//ESTABLECIMIENTO DE VARIABLES
const films = data.films; 
// variable que contiene las películas de la data.
const printedMovies = document.getElementById("posterFilms"); 
// variable que contiene la sección en html.
let newFilms = [...films]; 
//variable que contiene una copia de las películas de la data, hecha con "destructuring", que es ...
// ... una forma de capturar datos de un objeto o array y asignarlos a variables. Disponible desde ES2015.

//CONFIGURACIÓN DE LAS TARJETAS QUE SE MOSTRARÁN EN EL HTML
const drawCard = (films) => {
  return `
  <section class="movieCard">

        <img class= "moviePoster" alt="Studio Ghiblis's film's poster" src="${films.poster}">
        <figcaption class="movieName">${films.title}</figcaption>
        <figcaption class="movieYear">(${films.release_date})</figcaption>
        <span class="fa fa-star checked">
        <i class="movieScore">${films.rt_score}</i>
        </span>   
     </section>`;
};
//Esto es un Template string, que es una forma de crear un html desde Javascript.

// FUNCIÓN QUE IMPRIME LAS CARTAS
const displayMovies = (filmsSelected) => {
  printedMovies.innerHTML = "";
  filmsSelected.forEach((newFilms) => {
    printedMovies.innerHTML += drawCard(newFilms);
  });
};
displayMovies(newFilms);
//Con el innerHTML declaramos que el contenido de la section printedMovies sea vacío.
//Luego tomamos las películas seleccionadas (filmsSelected) y le aplicamos el método forEach.
//forEach es una función que ejecuta una acción sobre cada parámetro dado.
//Y la instrucción dice que el HTML se vaya llenando con cada película de newFilms, 
//dibujadas con la plantilla que creamos con la variable drawCard.

//INSTRUCCIONES PARA IMPRIMIR CARTAS ORDENADAS
const orderSelected = document.querySelector(".combo-box-order");

orderSelected.addEventListener("change", (event) => {
  const chosenOrder = sortData(newFilms, event.target.value, event.target.value);
  displayMovies(chosenOrder);
});

/*const orderSelected = document.querySelector(".combo-box-order");

orderSelected.addEventListener("change", (event) => {
  const chosenOrder = sortData(newFilms, event.target.value, event.target.value);
  //event.target.value tomará en específico el valor que elige la usuaria.
  const print = (newFilms) => {
    displayMovies(newFilms);
  };

  print(chosenOrder);
});*/

//INSTRUCCIONES PARA IMPRIMIR CARTAS FILTRADAS
const filterSelected = document.querySelector(".combo-box-filter");

filterSelected.addEventListener("change", (event) => {
const chosenFilter = filterData(newFilms, event.target.value);
displayMovies(chosenFilter);
});


/*const filterSelected = document.querySelector(".combo-box-filter");

filterSelected.addEventListener("change", (event) => {
  const chosenFilter = filterData(newFilms, event.target.value);
  const print = (newFilms) => {
    displayMovies(newFilms);
    console.log(chosenFilter);
  };

  print(chosenFilter);
});*/

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
