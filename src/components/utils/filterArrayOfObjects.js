const filterArrayOfObjects = (array, field, filterString) => {
  return array.filter((item) => {
    return item[field].toLowerCase().includes(filterString.toLowerCase());
  });
};

export default filterArrayOfObjects;
