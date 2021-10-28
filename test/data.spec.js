import { sortData, filterData } from '../src/data.js';



describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  // se usa toEqual en vez de toBe porque el primero se usa para datos compuestos y el otro para primitivos
  // toEqual y toBe son "matchers" de Jest. Sirven para testear valores. 
  // toEqual compara características y toBe compara identidad exacta. 

  it('returns `an ordered list of films, in descending alphabetical position`', () => {
    const data = [
      { title: 'The Cat Returns', release_date: '2002', rt_score: '89' },
      { title: 'The Tale of the Princess Kaguya', release_date: '2013', rt_score: '100' },
      { title: 'Spirited Away', release_date: '2001', rt_score: '97' },
      { title: 'Only Yesterday', release_date: '1991', rt_score: '100' },
      { title: 'My Neighbor Totoro', release_date: '1988', rt_score: '93' },
    ]
    
    const result = [
      { title: 'My Neighbor Totoro', release_date: '1988', rt_score: '93' },
      { title: 'Only Yesterday', release_date: '1991', rt_score: '100' },
      { title: 'Spirited Away', release_date: '2001', rt_score: '97' },
      { title: 'The Cat Returns', release_date: '2002', rt_score: '89' },
      { title: 'The Tale of the Princess Kaguya', release_date: '2013', rt_score: '100' },
    ]

    expect(sortData(data, 'title')).toEqual(result);

  });

  it('returns `a list of films ordered by launching year, in ascending numerical position`', () => {

    const data = [
      { title: 'The Cat Returns', release_date: '2002', rt_score: '89' },
      { title: 'The Tale of the Princess Kaguya', release_date: '2013', rt_score: '100' },
      { title: 'Spirited Away', release_date: '2001', rt_score: '97' },
      { title: 'Only Yesterday', release_date: '1991', rt_score: '100' },
      { title: 'My Neighbor Totoro', release_date: '1988', rt_score: '93' },
    ]
    const result = [
      { title: 'My Neighbor Totoro', release_date: '1988', rt_score: '93' },
      { title: 'Only Yesterday', release_date: '1991', rt_score: '100' },
      { title: 'Spirited Away', release_date: '2001', rt_score: '97' },
      { title: 'The Cat Returns', release_date: '2002', rt_score: '89' },
      { title: 'The Tale of the Princess Kaguya', release_date: '2013', rt_score: '100' },
    
    ]
    
    expect(sortData(data, 'release_date', 'release_date')).toEqual(result);
  });

  it('returns `an ordered list ordered by score, in descending numerical position`', () => {
    const data = [
      { title: 'The Cat Returns', release_date: '2002', rt_score: 89 },
      { title: 'The Tale of the Princess Kaguya', release_date: '2013', rt_score: 100 },
      { title: 'Spirited Away', release_date: '2001', rt_score: 97 },
      { title: 'Only Yesterday', release_date: '1991', rt_score: 100 },
      { title: 'My Neighbor Totoro', release_date: '1988', rt_score: 93 },
    ]

const result = [
  { title: 'The Tale of the Princess Kaguya', release_date: '2013', rt_score: 100 },
  { title: 'Only Yesterday', release_date: '1991', rt_score: 100 },
  { title: 'Spirited Away', release_date: '2001', rt_score: 97 },
  { title: 'My Neighbor Totoro', release_date: '1988', rt_score: 93 },
  { title: 'The Cat Returns', release_date: '2002', rt_score: 89 },
  
 
]

    expect(sortData(data, 'rt_score', data.reverse())).toEqual(result);


      });

    
      describe('anotherExample', () => {
        it('is a function', () => {
          expect(typeof anotherExample).toBe('function');
        });
  
        it('returns `anotherExample`', () => {
          expect(anotherExample()).toBe('OMG');
        });
      });

})
