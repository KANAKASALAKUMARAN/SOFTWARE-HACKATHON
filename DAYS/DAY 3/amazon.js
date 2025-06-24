const basketball = 2099;
const tshirt = 799;
const toaster = 1899;

console.log("======================================");
console.log("       Order Summary");
console.log("======================================");
const totalProductCost = basketball + tshirt + toaster;
console.log(" Cost of products (before shipping & tax): $" + (totalProductCost / 100).toFixed(2));

const shipping = 499;
const totalBeforeTax = totalProductCost + shipping;
console.log(" Total before tax:     $" + (totalBeforeTax / 100).toFixed(2));

const tax = Math.round(totalBeforeTax * 0.10);
console.log(" Tax (10%):            $" + (tax / 100).toFixed(2));

console.log("======================================");
const orderTotal = totalBeforeTax + tax;
console.log(" Order Total:          $" + (orderTotal / 100).toFixed(2));

const roundedDown = Math.floor(2.8);
console.log(" Rounded down:          " + roundedDown);

const roundedUp = Math.ceil(2.2);
console.log(" Rounded up:            " + roundedUp);
console.log("--------------------------------------");