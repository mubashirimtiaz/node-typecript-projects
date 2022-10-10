const describe_city = (
  city: string = 'Karachi',
  country: string = 'Pakistan'
): string => {
  return `${city} is in ${country}`;
};
const result1: string = describe_city('Lahore', 'Pakistan');
const result2: string = describe_city(undefined, 'Ukraine');
const result3: string = describe_city('Peshawar');

console.log(result1);
console.log(result2);
console.log(result3);
