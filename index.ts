const guests: string[] = ['John', 'Jane', 'Mary'];

guests.forEach((guest: string): void => {
  console.log(
    `Hello ${guest}, Hope you are doing well. I am arranging a dinner on 15th of this month and you are invited .🥳`
  );
});

console.log(`Hurrah! I have invited ${guests.length} guests`);
