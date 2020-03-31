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

function accessElementInArray(chocolateBars, index) {
  return(chocolateBars[2]);
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  chocolateBars.slice(3, chocolateBars.length - 2);
  return chocolateBars;
}

