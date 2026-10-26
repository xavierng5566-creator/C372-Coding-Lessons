const groomingFee = 50;
const numberofPets = 2;
const gstRate = 0.09;

const subtotal = groomingFee * numberofPets;
const gst = subtotal * gstRate;
const total = subtotal + gst;

// First Method: Concantenation
const message = "The total cost is $" + total;

// Second Method: String Interpolation
const msg = `The total cost is $${total}`;

console.log(message);
console.log(msg);