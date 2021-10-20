// estas funciones son de ejemplo
/*
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
*/


export const sortData = (data, sortBy, sortOrder) => {

/*const dataGhibli = data.films;*/

const movieSort = data.films.sort(function (a,b){

  if (a [sortBy] > b [sortBy]) {
  return 1;
}
if (a [sortBy] < b [sortBy]) {
  return -1;
}
return 0;
});

if (sortOrder === "rt_score") {
  return movieSort.reverse();
  }
/*
  else if (sortOrder === "release_date") {
  return movieSort.reverse();
  }
  */
return movieSort;

}


export const filterData = (data) => {

 
  const movieFilter = data.films.filter(function (films){

    return films.director === "Hayao Miyazaki";
   // return films.gender === "female";
   //también funciona: return films.director.includes("Hayao Miyazaki")

  });
  return movieFilter; 
  
}

/*
export const filterData = (data) => {

  const movieFilter = data.films.filter(filtering)
  function filtering(input, selector) {
    return director === "Hayao Miyazaki";
  }
  return movieFilter;
}

/*
export const filterData = (data, director) => {
 const filterResult = data.filter((film) => films.director === "Hayao Miyazaki")
  return filterResult;
};
*/