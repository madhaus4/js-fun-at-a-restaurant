function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
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
  return orderList.includes(item);
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
