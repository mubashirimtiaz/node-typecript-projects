class CreateOrder {
  constructor(flavor, address, type) {
    this.flavor = flavor;
    this.address = address;
    this.type = type;
  }
}

const createOrder = new CreateOrder('chocolate', 'A41', 'delivery');

console.log(createOrder);
