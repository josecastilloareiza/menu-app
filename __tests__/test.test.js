const Order = require('../src/orders/order');
const OrderFactory = require('../src/orders/orders');

describe('Factory test', () => {
  test('Create order should return an Order', () => {
    const mockOrder = new Order(1, 2, 3);
    const orderFactory = new OrderFactory();
    const newOrder = orderFactory.createOrder(1, 2, 3);
    expect(newOrder).toStrictEqual(mockOrder);
  });
});
