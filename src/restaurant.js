var restaurant = {};
function createRestaurant(name) {
  restaurant.name = name;
  restaurant.menus = {};
    restaurant.menus.breakfast = [];
    restaurant.menus.lunch = [];
    restaurant.menus.dinner = [];
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
