console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []
function addItem(item) {
  basket.push (item);
  return true;
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
