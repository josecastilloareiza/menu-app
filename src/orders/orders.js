const Order = require('./order');

class OrderFactory {
  constructor() {
    this.order = {};
  }

  createOrder(orderId, tableId, commensalQty) {
    this.order = new Order(orderId, tableId, commensalQty);
    return this.order;
  }
}

module.exports = OrderFactory;
