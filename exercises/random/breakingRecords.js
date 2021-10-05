function breakingRecords(scores) {
  // Write your code here
  // create empty values for
  let min = scores[0];
  let max = scores[0];
  let countMin = 0;
  let countMax = 0;
  for (let i = 1; i < scores.length; i++) {
    // min += scores[0];
    // max += scores[0];
    if (min > scores[i]) {
      min = scores[i];
      countMin++;
    } else if (max < scores[i]) {
      max = scores[i];
      countMax++;
    }
  }
  return [countMax, countMin];
  // console.log(countMax, countMin);
  // Fastest algorithm I've ever implemented on HR
  // Coming just 1 day after my GS assessment, so maybe I'm still hot.
}
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
