const describe_city = (city = 'Karachi', country = 'Pakistan') => {
  return `${city} is in ${country}`;
};
const result1 = describe_city('Lahore', 'Pakistan');
const result2 = describe_city(undefined, 'Ukraine');
const result3 = describe_city('Peshawar');

console.log(result1);
console.log(result2);
console.log(result3);
