const make_shirt = (size = 'large', text = 'I love JavaScript') => {
  if (size === 'large' || size === 'medium') {
    return `A ${size} size shirt with the text "I love JavaScript"`;
  }
  return `A ${size} size shirt with the text "${text}"`;
};
const order_summary = make_shirt('small', 'I love JS!');

console.log(order_summary);
