const favorite_fruits: string[] = ['apple', 'mango', 'banana'];

if (favorite_fruits.includes('grapes')) {
  console.log('I love grapes!');
} else if (favorite_fruits.includes('apple')) {
  console.log('I like apples!');
} else if (favorite_fruits.includes('mango')) {
  console.log('I like mangoes!');
} else if (favorite_fruits.includes('banana')) {
  console.log('I like bananas!');
} else {
  console.log('I like none of these fruits!');
}
