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

const dataGhibli = data.films;

const resultSort = dataGhibli.sort(function (a,b){

  if (a [sortBy] > b [sortBy]) {
  return -1;
}
if (a [sortBy] < b [sortBy]) {
  return 1;
}
return 0;
});

if (sortOrder === "title") {
  return resultSort.reverse();
  }
  
return resultSort;

}
