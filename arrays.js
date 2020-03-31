var chocolateBars = ["snikers", "hundred grand", "kitkat", "skittles"];

var candyString = "twix";

function addElementToBeginningOfArray(chocolateBars, candyString) {
  return [candyString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
  chocolateBars.unshift(candyString);
  return chocolateBars;
}

function addElementToTheEndOfArray(chocolateBars, candyString) {
  return [...chocolateBars, candyString];
} 

function destructivelyAddElementToEndOfArray(chocolateBars, candyString) {
  chocolateBars.push(candyString);
  return chocolateBars;
} 

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginnningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1);
}