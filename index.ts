const magicians: string[] = ['David Copperfield', 'David Blaine', 'Teller'];

const show_magicians = (magicians: string[]): void => {
  magicians.forEach((magician: string): void => {
    console.log(magician);
  });
};

show_magicians(magicians);
