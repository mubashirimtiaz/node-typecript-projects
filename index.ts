interface Car {
  manufacturer: string;
  model: string;
  [key: string]: string | number;
}

const constructCar = (
  manufacturer: string,
  model: string,
  args: { [key: string]: string | number }
) => {
  if (!manufacturer || !model) {
    return 'manufacturer and model are required';
  }
  return {
    manufacturer,
    model,
    ...(args && args),
  };
};

const car: Car | string = constructCar('Tesla', 'Model 3', {
  type: 'AWD',
  color: 'Black',
});
console.log(car);
