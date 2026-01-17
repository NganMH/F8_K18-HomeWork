const products = [
  { id: 1, name: "iPhone", price: 2000 },
  { id: 2, name: "Samsung", price: 1500 },
  { id: 3, name: "Xiaomi", price: 1000 },
  { id: 4, name: "Oppo", price: 1200 },
];

const orders = [
  {
    id: 1,
    items: [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 1 },
    ],
  },
  {
    id: 2,
    items: [
      { productId: 1, quantity: 1 },
      { productId: 3, quantity: 3 },
    ],
  },
  {
    id: 3,
    items: [
      { productId: 2, quantity: 2 },
      { productId: 4, quantity: 1 },
    ],
  },
];

function getBestRevenueProduct(products, orders) {
  const productMap = new Map(products.map((p) => [p.id, p]));
  const revenueMap = new Map();

  for (const order of orders) {
    for (const item of order.items) {
      const product = productMap.get(item.productId);
      if (!product) continue;

      const revenue = product.price * item.quantity;
      revenueMap.set(
        item.productId,
        (revenueMap.get(item.productId) || 0) + revenue
      );
    }
  }

  let bestProduct = null;
  let maxRevenue = 0;

  for (const [productId, revenue] of revenueMap.entries()) {
    if (revenue > maxRevenue) {
      maxRevenue = revenue;
      bestProduct = productMap.get(productId);
    }
  }

  return bestProduct;
}

console.log(getBestRevenueProduct(products, orders))

