var totalCartValue = 0;

const taxRate = 0.1;

function addToCart(itemPrice, discount) {
  const priceAfterDiscount = itemPrice - discount;
  const finalPrice = priceAfterDiscount + priceAfterDiscount * taxRate;

  totalCartValue += finalPrice;

  console.log("Final Price of Item: ₹" + finalPrice.toFixed(2));
}

addToCart(1000, 100);
addToCart(2000, 200);

console.log("Total Cart Value: ₹" + totalCartValue.toFixed(2));
