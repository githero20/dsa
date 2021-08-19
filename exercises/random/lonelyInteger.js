function lonelyinteger(a) {
  // Write your code here
  // add each element to a set
  // delete every element already in the set (with two appearances)
  // this leaves only the element with no second occurence, print it
  const mySet = new Set();
  for (let num of a) {
    if (mySet.has(num)) {
      mySet.delete(num);
    } else {
      mySet.add(num);
    }
    // I could also swap the order of the if statement to !mySet.has(num)...
  }
  let lonely = mySet.values();
  return lonely.next().value;
  // console.log(lonely.next().value);
}

lonelyinteger([36, 38, 65, 36, 38]);
lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
lonelyinteger([1]);
