// estas funciones son de ejemplo

export const sortData= (data, sortBy, sortOrder) => {
  
  const dataGhibli = data.films;
  
  const resultSort = dataGhibli.sort(function(a,b) {
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    return 0;
  });
 
  if (sortOrder ==='best-movie') {
    return resultSort.reverse();
  }
 else if (sortOrder === 'newest-score') {
   return resultSort.reverse();
 }
return resultSort;
}


