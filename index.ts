const make_shirt = (size: string, text: string): string => {
  return `A ${size} size shirt with the text "${text}"`;
};

const order_summary: string = make_shirt('large', 'I love JS!');

console.log(order_summary);
