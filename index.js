const make_shirt = (size, text) => {
  return `A ${size} size shirt with the text "${text}"`;
};

const order_summary = make_shirt('large', 'I love JS!');

console.log(order_summary);
