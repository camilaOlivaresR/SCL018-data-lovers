import { sortData, filterData } from '../src/data.js';

const data = [
  { title: 'The Cat Returns', director: 'Hiroyuki Morita', release_date: '2002', rt_score: '89' },
  { title: 'The Tale of the Princess Kaguya', director: 'Isao Takahata', release_date: '2013', rt_score: '100' },
  { title: 'Spirited Away', director: 'Hayao Miyazaki', release_date: '2001', rt_score: '97' },
  { title: 'Only Yesterday', director: 'Isao Takahata', release_date: '1991', rt_score: '100' },
  { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', release_date: '1988', rt_score: '93' },

]

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  // se usa toEqual en vez de toBe porque el primero se usa para datos compuestos y el otro para primitivos
  // toEqual y toBe son "matchers" de Jest. Sirven para testear valores. 
  // toEqual compara características y toBe compara identidad exacta. 

  it('should return `an ordered list of films, in descending alphabetical position`', () => {
    
    
    const result = [
      { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', release_date: '1988', rt_score: '93' },
      { title: 'Only Yesterday', director: 'Isao Takahata', release_date: '1991', rt_score: '100' },
      { title: 'Spirited Away', director: 'Hayao Miyazaki', release_date: '2001', rt_score: '97' },
      { title: 'The Cat Returns', director: 'Hiroyuki Morita', release_date: '2002', rt_score: '89' },
      { title: 'The Tale of the Princess Kaguya', director: 'Isao Takahata', release_date: '2013', rt_score: '100' },
    ]

    expect(sortData(data, 'title')).toEqual(result);

  });

  it('should return `a list of films ordered by launching year, in ascending numerical position`', () => {

    const result = [
      { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', release_date: '1988', rt_score: '93' },
      { title: 'Only Yesterday', director: 'Isao Takahata', release_date: '1991', rt_score: '100' },
      { title: 'Spirited Away', director: 'Hayao Miyazaki', release_date: '2001', rt_score: '97' },
      { title: 'The Cat Returns', director: 'Hiroyuki Morita', release_date: '2002', rt_score: '89' },
      { title: 'The Tale of the Princess Kaguya', director: 'Isao Takahata', release_date: '2013', rt_score: '100' },
    
    ]
    
    expect(sortData(data, 'release_date', 'release_date')).toEqual(result);
  });

  it('should return `an ordered list ordered by score, in descending numerical position`', () => {
 

const result = [

  { title: 'The Cat Returns', director: 'Hiroyuki Morita', release_date: '2002', rt_score: '89' },
  { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', release_date: '1988', rt_score: '93' },
  { title: 'Spirited Away', director: 'Hayao Miyazaki', release_date: '2001', rt_score: '97' },
  { title: 'Only Yesterday', director: 'Isao Takahata', release_date: '1991', rt_score: '100' },
  { title: 'The Tale of the Princess Kaguya', director: 'Isao Takahata', release_date: '2013', rt_score: '100' },
  
]

    expect(sortData(data, 'rt_score')).toEqual(result);




      });


    
      describe('filterData', () => {
        it('is a function', () => {
          expect(typeof filterData).toBe('function');
        });
  
        it('should return `only the films directed by Hayao Miyazaki`', () => {

          const result = [
            { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', release_date: '1988', rt_score: '93' },
            { title: 'Spirited Away', director: 'Hayao Miyazaki', release_date: '2001', rt_score: '97' },
           
          ]
          expect(filterData(data, 'Hayao Miyazaki')).toEqual(result);
        });
      });

})
