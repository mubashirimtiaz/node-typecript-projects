const createSandwich = (...items) => {
  const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
  });
  return `Sandwich with ${formatter.format(items)}`;
};

const sandwich1 = createSandwich('cheese', 'tomato', 'lettuce');
const sandwich2 = createSandwich('cheese');
const sandwich3 = createSandwich(
  'cheese',
  'tomato',
  'lettuce',
  'bacon',
  'onion'
);

console.log(sandwich1);
console.log(sandwich2);
console.log(sandwich3);
