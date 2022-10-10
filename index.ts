const car: string = 'Honda Civic';

const statements: string[] = [
  `I drive a ${car}`,
  `I would like to own a ${car}`,
  `${car} is a great car`,
];

statements.forEach((statement: string): void => {
  console.log(statement);
});
