/* 

Stretch 1: Write a function that would allow you to do this using a closure:

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

*/

// Create Base Function
function createBase(baseNum) {
  // Return a function that takes a starting number to add to
  return (addAmount) => {
    // Add the original base number to the new starting number
    return (addAmount += baseNum);
  };
}

// Store the returned function from createBase() in addSix
var addSix = createBase(6);

// Log test Cases
console.log("Add 6 to 10:", addSix(10));
console.log("Add 6 to 21:", addSix(21));

// One more base test for good measure...
var addFive = createBase(5);
console.log("Add 5 to 32", addFive(32));
console.log("Add 5 to 60", addFive(60));

// This felt sooooo good to figure out :-)
// At least, I hope this is the right way to do it...
