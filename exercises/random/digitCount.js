function digitCount(num) {
  let arr = [];
  let counter = 0;
  let memberLength = 0;
  let memberLengthChanges = []; //this keeps track of where the changes happen

  //   this converts all numbers to strings
  for (let i = 0; i < num; i++) {
    arr.push((i + 1).toString());
  }
  console.log(arr);

  //   we use this to track the length of members
  //   we can just track where the member length changes 
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i].length > memberLength) {
      memberLengthChanges.push(i);
      memberLength = arr[i].length;
    } 
  }
}

digitCount(6);
