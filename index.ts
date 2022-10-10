class CreateOrder<T> {
  constructor(public flavor: T, public address: T, public type: T) {}
}

const createOrder: CreateOrder<string> = new CreateOrder<string>(
  'chocolate',
  'A41',
  'delivery'
);

console.log(createOrder);
