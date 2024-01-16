// Sums up all digits from 1 to n

function addUpTo1(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
addUpTo1(1000000000);
let t2 = performance.now();

let T1 = performance.now();
addUpTo2(1000000000);
let T2 = performance.now();

console.log("Time elapsed 1: " + (t2 - t1) / 1000 + "seconds.");
console.log("Time elapsed 2: " + (T2 - T1) / 1000 + "seconds.");
