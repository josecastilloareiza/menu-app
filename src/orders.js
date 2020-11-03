class Order {
  constructor(data) {
    this.orderId = data.orderId;
    this.date = new Date();
    this.tableId = data.tableId;
    this.commensalQty = data.commensalQty;
  }
}

function OrderFactory() {
  this.createOrder = (orderData) => {
    const order = new Order(orderData);
    return order;
  };
}

function run() {
  const orders = [];
  const factory = new OrderFactory();
  orders.push(factory.createOrder({ orderId: 1, tableId: 1, commensalQty: 4 }));
  orders.push(factory.createOrder({ orderId: 2, tableId: 2, commensalQty: 2 }));
  orders.push(factory.createOrder({ orderId: 3, tableId: 8, commensalQty: 1 }));
  console.warn(orders);
}

run();
