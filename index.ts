const magicians: string[] = ['David Copperfield', 'David Blaine', 'Teller'];

const show_magicians = (arr: string[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

const make_great = (arr: string[]): string[] => {
  let great_magicians: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    great_magicians[i] = 'The Great ' + arr[i];
  }
  return great_magicians;
};

const great_magicians: string[] = make_great(magicians);

show_magicians(great_magicians);
show_magicians(magicians);
