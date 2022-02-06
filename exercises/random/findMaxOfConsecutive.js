// function findMaxConsecutiveOnes(nums: number[]): number {
//     let count: number = 0;
//     let maxCount: number = 0;
// typescript

function findMaxConsecutiveOnes(nums) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    // if (nums[i] === 0) {
    //     count = 0;
    // } else {
    //     count ++;
    // }
    // if (count > maxCount) {
    //     maxCount = count;
    // }
    nums[i] === 0 ? (count = 0) : count++;
    count > maxCount ? (maxCount = count) : (maxCount += 0);
  }
  return maxCount;
}
