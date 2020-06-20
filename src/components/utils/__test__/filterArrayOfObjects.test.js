import filterArrayOfObjects from '../filterArrayOfObjects';

describe('filterArrayOfObjects function works properly', () => {
  const array = [
    { lName: 'Hsu', fName: 'Erica' },
    { lName: 'Chen', fName: 'Megan' },
    { lName: 'Shen', fName: 'Erin' },
  ];

  test('case 1', () => {
    const field = 'lName';
    const filterString = 'en';
    expect(filterArrayOfObjects(array, field, filterString)).toEqual([
      { lName: 'Chen', fName: 'Megan' },
      { lName: 'Shen', fName: 'Erin' },
    ]);
  });

  test('case 2', () => {
    const field = 'fName';
    const filterString = 'er';
    expect(filterArrayOfObjects(array, field, filterString)).toEqual([
      { lName: 'Hsu', fName: 'Erica' },
      { lName: 'Shen', fName: 'Erin' },
    ]);
  });

  test('case 3', () => {
    const field = 'fName';
    const filterString = 'twa';
    expect(filterArrayOfObjects(array, field, filterString)).toEqual([]);
  });
});
