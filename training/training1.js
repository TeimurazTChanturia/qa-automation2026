let vegatebles = ["carrot", "broccoli", "spinach", "pepper", "tomato"];

console.log(vegatebles[0]);
console.log(vegatebles[1]);
console.log(vegatebles[2]);

let Vvegatebles = ["carrot", "brocoli", "pepper"];
Vvegatebles[1] = "tomato";
console.log(Vvegatebles);

function transformProductsToSelectOptions(products) {
  return products.map((product) => ({
    value: product.id,
    label: `${product.title} (${product.price} GEL)`,
  }));
}

const rawProducts = [
  { id: 10, title: "keyboard", price: 120, stock: 5 },
  { id: 11, title: "Mouse", price: 60, stock: 12 },
];

const selectOptions = transformProductsToSelectOptions(rawProducts);
console.log(selectOptions);

function mutateApplyDiscount(products, discountPercent) {
  products.forEach((product) => {
    product.price = product.price * (1 - discountPercent / 100);
    product.hasDiscount = true;
  });
}

const cart = [{ title: "Headphones", price: 100 }];
mutateApplyDiscount(cart, 10);

console.log(cart);

function joinCartWithCoupon(cart, coupon) {
  return {
    items: cart.items,
    subtotal: cart.total,
    discountAmount: coupon ? cart.total * coupon.rate : 0,
    finalTotal: cart.total - (coupon ? cart.total * coupon.rate : 0),
  };
}

const userCart = { items: ["Notbad"], total: 2000 };
const activeCoupon = { code: "SUMMER", rate: 0.15 };

const finalReceipt = joinCartWithCoupon(userCart, activeCoupon);
console.log(finalReceipt);
