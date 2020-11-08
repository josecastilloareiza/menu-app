class Order {
  constructor(orderId, tableId, commensalQty) {
    this.orderId = orderId;
    this.date = new Date();
    this.tableId = tableId;
    this.commensalQty = commensalQty;
  }
}

module.exports = Order;
