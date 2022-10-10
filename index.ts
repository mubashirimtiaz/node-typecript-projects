const magicians: string[] = ['David Copperfield', 'David Blaine', 'Teller'];
const make_great = (arr: string[]): string[] => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 'The Great ' + arr[i];
  }
  return arr;
};

const great_magicians: string[] = make_great(magicians);

console.log(great_magicians);
