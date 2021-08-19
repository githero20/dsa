function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  // seems like while loops take the longest time to run

  // first check the conditions of your loop
  if (a < s < t < b) {
    let counterA = 0;
    let counterB = 0;
    // now for each value in the array, add the respective tree's                 // coordinates to the array
    // then check to see that it is within the s - t range

    for (let apple of apples) {
      apple += a;
      if (apple >= s && apple <= t) {
        counterA++;
      }
    }
    for (let orange of oranges) {
      orange += b;
      if (orange >= s && orange <= t) {
        counterB++;
      }
    }
    // return counterA;
    // return counterB;
    console.log(counterA);
    console.log(counterB);
  }
}
