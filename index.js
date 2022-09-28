const magicians = ['David Copperfield', 'David Blaine', 'Teller'];

const show_magicians = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

const make_great = (arr) => {
  let great_magicians = [];
  for (let i = 0; i < arr.length; i++) {
    great_magicians[i] = 'The Great ' + arr[i];
  }
  return great_magicians;
};

const great_magicians = make_great(magicians);

show_magicians(great_magicians);
show_magicians(magicians);
