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

function listItems() {
  for (i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
  return `These are your basket items.`
}

//how come when I console log this function it provides the list items before the text in the console log that is exicuting the function?
//console.log(`The items in my basket are:`, listItems());
//This gives us:
//apples
//oranges
//kiwi
//bananas
//The items in my basket are: These are your basket items.
//how come it doesnt say "The items in my basket are:" and then list the items?

console.log(`Basket is ${basket}`);
console.log('Adding oranges', addItem('oranges'));
console.log('Adding kiwi', addItem('kiwi'));
console.log('Adding bananas', addItem('bananas'));
console.log(`Basket is now ${basket}`);
console.log(listItems());
