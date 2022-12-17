// Write your code here
const getCommon = (arr) => {
  if (arr.length === 0 || arr === null) return;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let initSum = arr.reduce((prev, curr) => prev + curr);
  let length = arr.length;
  // let initNo = min;

  for (let i = min; i <= max; i++) {
    let newSum = 0;
    for (let j = 0; j < length; j++) {
      arr[j] = i;
      newSum += arr[j];
    }
    if (newSum > initSum) {
      return i;
    }
  }
};
