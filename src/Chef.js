class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(name, morning) {
    if (morning === true) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }

  createRestaurant(item) {
    return `Yes, we're serving ${item} today!`;
  }

}

module.exports = Chef;
