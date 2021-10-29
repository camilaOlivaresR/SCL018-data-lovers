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

  const movieSort = newFilms.sort(function (a, b) {
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

  const movieFilter = newFilms.filter(function (newFilms) {
    return newFilms.director === director;

    //también funciona: return films.director.includes("Hayao Miyazaki");
  });
  
  return movieFilter;
  
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