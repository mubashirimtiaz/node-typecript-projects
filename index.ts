const createSandwich = (...items: string[]): string => {
  // const formatter = new Intl.ListFormat('en', {
  //   style: 'long',
  //   type: 'conjunction',
  // });
  return `Sandwich with ${items}`;
};

const sandwich1: string = createSandwich('cheese', 'tomato', 'lettuce');
const sandwich2: string = createSandwich('cheese');
const sandwich3: string = createSandwich(
  'cheese',
  'tomato',
  'lettuce',
  'bacon',
  'onion'
);

console.log(sandwich1);
console.log(sandwich2);
console.log(sandwich3);
