// // https://leetcode.com/problems/calculate-digit-sum-of-a-string/

// // 2243. Calculate Digit Sum of a String
// // Easy

// // 160

// // 20

// // Add to List

// // Share
// // You are given a string s consisting of digits and an integer k.

// // A round can be completed if the length of s is greater than k. In one round, do the following:

// // Divide s into consecutive groups of size k such that the first k characters are in the first group, the next k characters are in the second group, and so on. Note that the size of the last group can be smaller than k.
// // Replace each group of s with a string representing the sum of all its digits. For example, "346" is replaced with "13" because 3 + 4 + 6 = 13.
// // Merge consecutive groups together to form a new string. If the length of the string is greater than k, repeat from step 1.
// // Return s after all rounds have been completed.

// // Example 1:

// // Input: s = "11111222223", k = 3
// // Output: "135"
// // Explanation:
// // - For the first round, we divide s into groups of size 3: "111", "112", "222", and "23".
// //   ​​​​​Then we calculate the digit sum of each group: 1 + 1 + 1 = 3, 1 + 1 + 2 = 4, 2 + 2 + 2 = 6, and 2 + 3 = 5.
// //   So, s becomes "3" + "4" + "6" + "5" = "3465" after the first round.
// // - For the second round, we divide s into "346" and "5".
// //   Then we calculate the digit sum of each group: 3 + 4 + 6 = 13, 5 = 5.
// //   So, s becomes "13" + "5" = "135" after second round.
// // Now, s.length <= k, so we return "135" as the answer.
// // Example 2:

// // Input: s = "00000000", k = 3
// // Output: "000"
// // Explanation:
// // We divide s into "000", "000", and "00".
// // Then we calculate the digit sum of each group: 0 + 0 + 0 = 0, 0 + 0 + 0 = 0, and 0 + 0 = 0.
// // s becomes "0" + "0" + "0" = "000", whose length is equal to k, so we return "000".

// // Constraints:

// // 1 <= s.length <= 100
// // 2 <= k <= 100
// // s consists of digits only.

// // var digitSum = function (s, k) {
// //   //   console.log(s.split("t", 2));
// //   //   let divvy = Math.ceil(s.length / k);
// //   //   console.log(divvy);
// //   const sumWithin = (s, k) => {
// //     let mine = [];
// //     let res1 = [];
// //     for (let i = 0; i < s.length; i += k) {
// //       mine.push(s.slice(i, i + k));
// //     }
// //     // console.log(mine);
// //     for (let str of mine) {
// //       let sum = str
// //         .split("")
// //         .reduce((prev, curr) => parseInt(prev) + parseInt(curr));
// //       res1.push(sum);
// //     }
// //     //   console.log(res1);
// //     let res2 = res1.join("").toString();
// //     // console.log(res2);
// //     if (res2.length > k) {
// //       sumWithin(res2, k);
// //     } else return;
// //   };

// //   if (s.length <= k) {
// //     return s;
// //   } else sumWithin(s, k);
// // };

// // const getDigitsSum = (digits) => [...digits].reduce((acc, d) => acc + +d, 0);
// // +d makes the str a digit then adds

var digitSum = (s, k) => {
  if (s.length <= k) return s;

  let myNum = "";

  while (s.length) {
    let res = s.slice(0, k);
    myNum += res
      .split("")
      .reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);

    s = s.slice(k);
  }

  return digitSum(myNum, k);
};

digitSum("11111222223", 3);

// var lang = ["hdgd", "sjdud"];
// lang.length = 0;
// lang.push["gi"];
// console.log(lang);

// (function (foo) {
//   console.log(typeof foo);
// })([1, 2, 3]);

// let arr = [1, "Turing", { x: 2 }, [3, 4]];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === "Turing") arr.splice(i, 1);
//   else console.log(arr[i]);
// }

// function Foo() {
//   this.bar = 10;
// }

// Foo.prototype.bar = 42;

// var foo = new Foo();
// console.log("1:", foo.bar);

// delete foo.bar;
// console.log("2:", foo.bar);

// console.log("Hi " + console.log("Man"));

// const x = [1, 2, 3];
// x[-1] = -1;
// console.log(x[x.indexOf(10000)]);

// let a = [1, "a", { x: 1 }, { y: 2 }, [1, 2], { x: 1 }];
// console.log(a.indexOf({ x: 1 }));

// var a = 0;

// a == null ? console.log(a) : console.log("s");

// let sayHello = function (name) {
//   return { say: `welcome ${name}` };
// };

// console.log(sayHello("Name"));
// console.log(Number("10") - 10 == 0);

// setTimeout(() => {

// }, timeout);

// b = [];
// let a = [] + b + "Ture".split("");
// console.log(a);

// var p = new Promise((resolve, reject) => {
//   reject(Error("rurimg"));
// });

// p.catch((error) => console.log(error.message));
// p.catch((error) => console.log(error.message));

// class TuringQueue<T> {
//   private data = [];
//   push = (item: T) => this.data.push(item);
//   pop = (): T => this.data.shift();
// }

// const turingQue = new TuringQueue<number>();
// turingQue.push(0);
// turingQue.push("1");
// console.log(turingQue);
// let a = 1;

// function fr() {
//   console.log(a);
// }

// fr();

// var t = 99;
// t = "Tur";
// console.log(t)
