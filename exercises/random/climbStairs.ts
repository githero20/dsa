// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// https://leetcode.com/problems/climbing-stairs/discuss/25299/Basically-it's-a-fibonacci.

function climbStairs(n: number): number {
  if (n <= 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 2;

  let oneStepBefore: number = 2;
  let twoStepsBefore: number = 1;
  let allWays: number = 0;

  for (let i = 2; i < n; i++) {
    allWays = oneStepBefore + twoStepsBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = allWays;
  }

  console.log(allWays);
  return allWays;
}

climbStairs(5);
