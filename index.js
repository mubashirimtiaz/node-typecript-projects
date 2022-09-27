const createList = (...list) => {
  const formatter = new Intl.ListFormat('en');
  console.log(`${formatter.format(list)} are my favorite fruits.`);
};

createList('apple', 'mango', 'banana');
