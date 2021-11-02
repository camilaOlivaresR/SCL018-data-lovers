// estas funciones son de ejemplo
/*
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
*/
// Nuestras 2 funciones son funciones expresadas, que se generan cuando a una variable le asigno
// el valor de una función anónima, en este caso una función flecha

export const sortData = (newFilms, sortBy, sortOrder) => {
  //const dataGhibli = data.films;

  //console.log(newFilms);

  const movieSort = newFilms.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
      return 0;
    });

    if (sortOrder === "rt_score") {
      return movieSort.reverse();
  }
  
  return movieSort;
};

export const filterData = (newFilms, director) => {

  
  return newFilms.filter(newFilms => newFilms.director === director);


    //también funciona: return films.director.includes("Hayao Miyazaki");
  
   
};


/* FUNCIÓN QUE EXTRAE PERSONAJES FEMENINAS
data.films.forEach(function(e){
    
  const females = e.people.filter( (element) => element.gender === "Female");
  console.log(females);
});
*/


