function takeOrder(order, deliveryOrders) {
  deliveryOrders.push(order);
  if (deliveryOrders.length > 3) {
    deliveryOrders.pop(order);
  }
}

function refundOrder(orderNum, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (orderNum === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i, 1);
    }
  }
}

function listItems(deliveryOrders) {
  var nameList = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item) {
      nameList.push(deliveryOrders[i].item);
    }
  }
  return nameList.join(', ');
}

function searchOrder(deliveryOrders, item) {
  var orderList = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    orderList.push(deliveryOrders[i].item);
  }
  if (orderList.includes(item)) {
    return true;
  }
  return false;
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
