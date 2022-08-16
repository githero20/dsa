// // const check = () => {
// //   throw new Error("Oh, it's an error");
// // };
// // const hello = (name = check()) => console.log(`hello_${name}`);
// // hello(undefined);

// function f(a) {
//   const res = [];
//   while (a.length) {
//     const el = a.shift();
//     if (Array.isArray(el)) {
//       a = el.concat(a);
//     } else {
//       res.push(el);
//     }
//   }
//   console.log(res);
//   console.log(a);
//   return res;
// }

// // A function to spread all arrays within an array. i.e. to merge the parent and sub-arrays into one array

// f([1, 2, [3, 4]]);

// const a = (function() {
//   return parseInt("1")
// })()

// let p1 = new Promise((resolve, reject) => {
//   resolve("foo");
// });
// let p2 = new Promise((resolve, reject) => {
//   reject("bar");
// });
// p1.then((val) => {
//   console.log(val);
//   return p2;
// })
//   .then((val) => {
//     console.log("ba");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// class MyList extends Array {
//   constructor(someArg) {
//     super(someArg);
//     this.someArg = [...someArg];
//   }
// }

// let theList = new MyList("foo");

// console.log(theList);

// function foo(obj) {
//   return {
//     a: obj.bar,
//     b: obj.baz,
//   };
// }

// const { a } = foo({ bar: 27, baz: 41 });

// console.log(a);

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100);
// }

// let i = 3;
// let j = 4;
// let k = 1;

// for (i = 0; i < 3; i++) {
//   k += j;
//   j = j - 1;
// }

// console.log(k);

console.log("first" * 3);
