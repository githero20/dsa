function setConverter(arr, k) {
  let counter = 0;
  let conSet = new Set();
  // this creates an empty set
  arr.map((item) => conSet.add(item));
  // this maps the items in the array to the set

  for (let num of conSet) {
    if (conSet.has(k + num)) {
      counter++;
    }
  }
  //seems to be where the problem's coming from
  //arr[i] works, but set[i] seems to not make sense

  // return counter;
  console.log(counter);
}

setConverter([1, 4, 5, 6, 5, 2, 3], 2);
setConverter([1, 1, 1, 3, 4, 2, 7], 2);

//   function convert(arr) {
//     let counter = 0;
//     let k = 2;
//     let conSet = new Set();
//     // this creates an empty set
//     arr.map(item => conSet.add(item));
//     // this maps the items in the array to the set
//     // for (let num of arr) {
//     //   if (conSet.has(k + arr[num])) {
//     //     counter++;
//     //   }
//     // }
//     // // return counter;
//     // console.log(counter);
//     console.log(conSet);
//   }

//   convert([1,4,5,6,5,2,3]);
