const host: string = 'Mubashir';

const guests: string[] = ['John', 'Jane', 'Mary'];

const guestWhoCantMakeIt: string = 'Jane';

const inviteToDinner = (): void => {
  let loop: boolean = false;
  guests.forEach((guest: string): void | boolean => {
    console.log(
      `Hello ${guest}, Hope you are doing well. I am arranging a dinner on 15th of this month and you are invited .🥳`
    );
    if (guest === guestWhoCantMakeIt) {
      console.log(`Sorry ${host}, ${guest} here, I can't come. 😔`);
      guests.splice(guests.indexOf(guest), 1, 'Sara');
      loop = true;
    }
  });
  if (loop) {
    inviteToDinner();
    return;
  }
  console.log(`Yay!!🥳, I have found a bigger dinner table. 🥳`);
  guests.unshift('Mike');
  guests.splice(Math.round(guests.length / 2), 0, 'Sunny');
  guests.push('Raza');

  guests.forEach((guest) => {
    console.log(
      `Hello ${guest}, Hope you are doing well. I am arranging a dinner on 15th of this month and you are invited .🥳`
    );
  });
};

inviteToDinner();
