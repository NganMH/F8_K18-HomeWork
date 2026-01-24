const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
    { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
    { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
    { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 }
];

const orders = [];
let currentOrderId = 1;

//CREATE ORDER

function createOrder(productId, orderQuantity) {
    if (productId == null || orderQuantity == null || orderQuantity <= 0) {
        throw new Error("Invalid input");
    }

    const product = products.find(p => p.id === productId);
    if (!product) {
        throw new Error("Product not found");
    }

    if (product.remaining < orderQuantity) {
        console.log("out of stock");
        return;
    }

    product.remaining -= orderQuantity;

    const newOrder = {
        id: currentOrderId++,
        productId: productId,
        quantity: orderQuantity
    };

    orders.push(newOrder);
    console.log(`-> Order #${newOrder.id} created successfully!`);
    return newOrder;
}

//UPDATE ORDER

function updateOrder(orderId, newQuantity) {
    if (newQuantity == null || newQuantity <= 0) {
        throw new Error("Invalid quantity");
    }

    const order = orders.find(o => o.id === orderId);
    if (!order) {
        throw new Error("not found");
    }

    const product = products.find(p => p.id === order.productId);
    const diff = newQuantity - order.quantity;

    // Increase quantity
    if (diff > 0) {
        if (product.remaining < diff) {
            console.log("out of stock");
            return;
        }
        product.remaining -= diff;
    }
    // Decrease quantity
    else {
        product.remaining += Math.abs(diff);
    }

    order.quantity = newQuantity;
    console.log(`-> Order #${orderId} updated successfully!`);
}

//DELETE ORDER

function deleteOrder(orderId) {
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) {
        throw new Error("not found");
    }

    const order = orders[orderIndex];
    const product = products.find(p => p.id === order.productId);

    product.remaining += order.quantity;
    orders.splice(orderIndex, 1);

    console.log(`-> Order #${orderId} deleted successfully!`);
}

createOrder(1, 5);
createOrder(5, 10);
updateOrder(1, 8);
updateOrder(1, 3);
updateOrder(1, 100);
deleteOrder(2);

console.log("Products:", products);
console.log("Orders:", orders);
