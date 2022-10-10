const createList = (...list: string[]): void => {
  // const formatter = new Intl.ListFormat('en');
  console.log(`${list} are my favorite fruits.`);
};

createList('apple', 'mango', 'banana');
