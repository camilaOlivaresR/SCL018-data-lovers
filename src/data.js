// estas funciones son de ejemplo
/*
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
*/

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
  /*
  else if (sortOrder === "release_date") {
  return movieSort.reverse();
  }
  */
  return movieSort;
};

export const filterData = (newFilms, director) => {
  //const infoGhibli = data.films;

  
    return newFilms.filter(newFilms =>newFilms.director === director);
    //funcion flecha simplificada

    //también funciona: return films.director.includes("Hayao Miyazaki");
  
};


/*

export const genderFilter = (data) => {
  
  const femalePerson = data.films.forEach(function (e) {
    const females = e.people.filter((element) => element.gender === "Female");
    return females;
  });
  return femalePerson;
};
*/