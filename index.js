const city_country = (city = 'Karachi', country = 'Pakistan') => {
  return `${city}, ${country}`;
};
const result1 = city_country('Lahore', 'Pakistan');
const result2 = city_country(undefined, 'Ukraine');
const result3 = city_country('Peshawar');

console.log(result1);
console.log(result2);
console.log(result3);
