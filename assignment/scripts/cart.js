console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;
console.log(basket);

function addItem(item) {
  if (basket.length < maxItems) {
    basket.push(item);
    return true;
  } else {
    return false;
  }
}

console.log(addItem('corn'));
console.log(addItem('bread'));
console.log(addItem('milk'));
console.log('Should have 3 true statements above.');
console.log(basket);

function listItems(basket) {
  for (item of basket) {
    console.log('The basket contains:', item);
  }
  return 'Listed Items in Function';
}

console.log(listItems(basket));

function empty(basket) {
  while (basket.length >= 1) {
    basket.pop();
  }
  return 'Cleared Basket';
}
console.log(empty(basket));
console.log('The array should be empty:', basket);

//Stretch Goals

function isFull(basketArr) {
  if (basketArr.length < maxItems) {
    return false;
  } else {
    return true;
  }
}
console.log(isFull(basket));
console.log(isFull(['a', 'b', 'c', 'd', 'e']));

function removeItem(item, basket) {
  if (basket.indexOf(item) >= 0) {
    basket.slice(basket.indexOf, 1);
    return item;
  } else {
    return null;
  }
}

console.log(removeItem('corn', basket));
console.log('Above should read: null.');
console.log(removeItem('a', ['a', 'b', 'c', 'd', 'e']));
console.log("Above should read 'a'.");
