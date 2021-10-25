

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

export const genderFilter= (data) => {

   const  femalePerson= data.sortDatafilms.forEach(function(e){
    
    const females = e.people.filter( (element) => element.gender === "Female");
   
});
return femalePerson;
};

