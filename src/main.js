//importación de la data
import data from './data/ghibli/ghibli.js';

//se establece una constante con las películas de la data
const films = data.films;

//se establece una constante con el contenido del div del html
const div = document.getElementById("root");

//se establece una constante que retorna un template string en el html
const showingCards = (films) => {
    return `<div>
    <ul>
    <img src= "${films.poster}">
    <h2>${films.title}</h2>
    <h2>(${films.release_date})</h2>
    </ul>
</div>`;
};
//ciclo for que itera dentro del array de film para mostrar cada película en el template string
for (let i = 0; i < films.length; i++){
    div.innerHTML += showingCards(films[i]);
}