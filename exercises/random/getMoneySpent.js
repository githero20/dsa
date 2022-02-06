function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let sum = [];
  let ans = -1;

  for (let i of keyboards) {
    for (let j of drives) {
      let temp = i + j;
      if (temp > ans && temp <= b) {
        ans = temp;
      }
      //   if (i + j <= b) {
      //     sum.push(i + j);
      //   } else {
      //     sum.push(-1);
      //   }
    }
  }
  return ans;

  //   return Math.max(...sum);
}

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60));
