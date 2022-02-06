Currying:
// From CodeWithMosh 
// Helps you simplify functions with multiple args.
function add (a, b) {
    return a + b;
}

console.log(add (1, 5));

// Can be converted to:
function add(a) {
 return function(b) {
  return a + b;
 }
}
console.log(add(2)(5));
// this simplified it to just one argument as opposed to the two from before.
// same as:

const add2 = a => b => a + b;
console.log(add2(3)(5));