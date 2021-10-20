// estas funciones son de ejemplo

export const sortData = (data, sortBy, sortOrder) => {
  
  const movieSort = data.films.sort(function(a,b) {
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

return movieSort;
}


