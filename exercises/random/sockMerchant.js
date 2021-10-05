function sockMerchant(n, ar) {
  // Write your code here
  // One option is to sort the array, then compare the present value with the future one
  // I'd rather use a set or map to reduce time complexity
  let mySet = new Set();
  // create an empty set
  let pairNos = 0;
  // for (let num of ar) {
  // this returns a wrong result, wild
  for (let num = 0; num < ar.length; num++) {
    if (!mySet.has(ar[num])) {
      mySet.add(ar[num]);
    } else {
      pairNos++;
      mySet.delete(ar[num]);
      // remember that a set cannot contain two instances of the same value,
      // so here, if it matches the condition (if it has the value), the
      // proposed value (that only instance of it) is deleted.
      // and if it encounters that value again, it'll be like it was never
      // in the set
    }
  }
  return pairNos;
}

function sockMerchant(n, ar) {
  // Write your code here
  let pairNos = 0;
  let sockSet = new Set();
  for (let color of ar) {
    if (!sockSet.has(color)) {
      sockSet.add(color);
    } else {
      pairNos++;
      sockSet.delete(color);
    }
  }
  return pairNos;
}
