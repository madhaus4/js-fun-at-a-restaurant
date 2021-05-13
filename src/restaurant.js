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
  console.log(restaurant);
  console.log(restaurant.menus);
  // if (restaurant.menus.breakfast[0].name !== food || restaurant.menus.lunch[0].name !== food || restaurant.menus.dinner[0].name !== food)
  // {
  //     return `Sorry, we don't sell ${food}, try adding a new recipe!`;
  // } else
  if (restaurant.menus.breakfast[0].name === food && type === 'breakfast') {
    restaurant.menus.breakfast.pop();
    return `No one is eating our ${food} - it has been removed from the ${type} menu!`;
  } else if (restaurant.menus.lunch[0].name === food && type === 'lunch') {
    restaurant.menus.lunch.pop();
    return `No one is eating our ${food} - it has been removed from the ${type} menu!`;
  } else if (restaurant.menus.dinner[0].name === food && type === 'dinner') {
    restaurant.menus.dinner.pop();
    return `No one is eating our ${food} - it has been removed from the ${type} menu!`;
  }
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
