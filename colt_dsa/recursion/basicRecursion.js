// // a basic recursion example
// function countdown(num) {
//   // base case
//   if (num <= 0) {
//     console.log("all done!");
//     return;
//   }

//   console.log(num);
//   num--;
//   countdown(num);
// }

// countdown(5);

// function sumRange(num) {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// }

// getting factorial using iteration
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }

  console.log(total);
  return total;
}

// getting factorial using recursion
function factorial(num) {
  // base case
  if (num === 1) return 1;

  return num * factorial(num - 1);
}

factorial(5);

// maximum call stack size exceeded === stack overflow
// usually happens when there is a recursiive call that
// has a bad base case or does not return

// A stack overflow is a type of buffer overflow error
// that occurs when a computer program tries to use more
// memory space in the call stack than has been allocated
// to that stack. The call stack, also referred to as the
// stack segment, is a fixed-sized buffer that stores local
// function variables and return address data during program
// execution.
