// const check = () => {
//   throw new Error("Oh, it's an error");
// };
// const hello = (name = check()) => console.log(`hello_${name}`);
// hello(undefined);

function f(a) {
  const res = [];
  while (a.length) {
    const el = a.shift();
    if (Array.isArray(el)) {
      a = el.concat(a);
    } else {
      res.push(el);
    }
  }
  console.log(res);
  console.log(a);
  return res;
}

f([1, 2, [3, 4]]);
