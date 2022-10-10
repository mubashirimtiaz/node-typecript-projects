const make_shirt = (
  size: string = 'large',
  text: string = 'I love JavaScript'
): string => {
  if (size === 'large' || size === 'medium') {
    return `A ${size} size shirt with the text "I love JavaScript"`;
  }
  return `A ${size} size shirt with the text "${text}"`;
};
const order_summary: string = make_shirt('small', 'I love JS!');

console.log(order_summary);
