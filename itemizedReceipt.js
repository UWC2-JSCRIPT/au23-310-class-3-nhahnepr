// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price
const logReceipt = (...items) => {
  let total = 0;
  items.forEach((item)=>{
      total += item.price;
      console.log(item.descr);
  })
  let totalPlusTax = (total + total * 0.1).toFixed(2);
// Added a subtotal and total
  console.log(`subtotal: ${total}`);
  console.log(`total: ${totalPlusTax}`);
};

// Made some objects for menu items
const obj1 = {descr: "Burrito", price: 5.99};
const obj2 = {descr: "Chips and Salsa", price: 2.99};
const obj3 = {descr: "Mystery Meat", price: 21.99};
const obj4 = {descr: "Sprite", price: 1.99};
logReceipt(obj1, obj4, obj2);


// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
