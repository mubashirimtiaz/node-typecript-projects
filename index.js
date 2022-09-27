const magicians = ['David Copperfield', 'David Blaine', 'Teller'];
const make_great = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 'The Great ' + arr[i];
  }
  return arr;
};

const great_magicians = make_great(magicians);

console.log(great_magicians);
