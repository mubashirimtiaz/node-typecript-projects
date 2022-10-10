const city_country = (
  city: string = 'Karachi',
  country: string = 'Pakistan'
): string => {
  return `${city}, ${country}`;
};
const result1: string = city_country('Lahore', 'Pakistan');
const result2: string = city_country(undefined, 'Ukraine');
const result3: string = city_country('Peshawar');

console.log(result1);
console.log(result2);
console.log(result3);
