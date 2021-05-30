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
  console.log(`The items in your basket are:`);
  for (i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
  return `This is the end of your list.`;
}

function listItemsForOfLoop() {
  console.log(`The items in your basket are:`);
  for (item of basket) {
      console.log(item);
    }
    return `This is the end of your list.`
}
//wanted to try a for of loop as well :)

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
console.log(listItemsForOfLoop());
