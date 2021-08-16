/* 

Stretch 1: Write a function that would allow you to do this using a closure:

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

*/

function createBase(baseNum) {
  return (addAmount) => {
    return (addAmount += baseNum);
  };
}

var addSix = createBase(6);
console.log("Add 6 to 10:", addSix(10));
console.log("Add 6 to 21:", addSix(21));

var addFive = createBase(5);
console.log("Add 5 to 32", addFive(32));
console.log("Add 5 to 60", addFive(60));

// This felt sooooo good to figure out :-)
