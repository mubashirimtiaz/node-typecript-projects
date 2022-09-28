const constructCar = (manufacturer, model, args) => {
  if (!manufacturer || !model) {
    return 'manufacturer and model are required';
  }
  return {
    manufacturer,
    model,
    ...(args && args),
  };
};

const car = constructCar('Tesla', 'Model 3', { type: 'AWD', color: 'Black' });
console.log(car);
