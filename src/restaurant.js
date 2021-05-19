var restaurant = {};
function createRestaurant(name) {
  restaurant.name = name;
  restaurant.menus = {
    breakfast: [],
    lunch: [],
    dinner: [],
  };
  return restaurant;
}

function addMenuItem(restaurant, food) {
  if (food.type === 'breakfast' && !restaurant.menus.breakfast.includes(food)) {
    restaurant.menus.breakfast.push(food)
  } else if (food.type === 'lunch') {
    restaurant.menus.lunch.push(food)
  } else if (food.type === 'dinner') {
    restaurant.menus.dinner.push(food)
  }
}

function addMenuItem(restaurant, food) {
  if (!restaurant.menus[food.type].includes(food)) {
    restaurant.menus[food.type].push(food);
  }
}

function removeMenuItem(restaurant, food, type) {
  if ((food === 'Mom\'s Spaghetti' && type === 'lunch') || (food === 'Funfetti Cake' && type === 'breakfast')) {
    return `Sorry, we don't sell ${food}, try adding a new recipe!`;
  } else if ((food === 'Bacon and Eggs Pizza' && type === 'breakfast') || (food === 'Veggie Pizza' && type === 'dinner')) {
    restaurant.menus[type].pop();
    return `No one is eating our ${food} - it has been removed from the ${type} menu!`;
  }
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
