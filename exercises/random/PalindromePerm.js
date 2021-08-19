// function replaceAll(s) {
//     // let re = '';
//     let re = s.trim().replaceAll(' ','%20')
//     console.log(re);
// }

// replaceAll("Mr John Smith   ");

function palindromePermutation(pal1, pal2) {
  // to check if pal2 is a permutation of the palindrome pal1
  //use a set
  //add all the current values into the set
  //compare if the current values match the ones in the set
  // if any of them don't, then you're wrong

  let result = "";
  // let palSet = new Set();
  // let arr = [];
  // arr.push(pal1.split(''));
  // // have to convert it to an array first before mapping it to a set
  // arr.map((item) => palSet.add(item));
  // console.log(palSet);

  for (let i = 0; i < pal2.length; i++) {
    console.log(pal2[i]);
    // if (palSet.has(pal2[i])) {
    // if (arr.includes(pal2[i])) {
    // apparently, you cannot compare arrays with strings only arrays and strings with strings.
    if (pal1.includes(pal2[i])) {
      result = true;
    } else {
      result = false;
    }
  }
  console.log(result);
}

palindromePermutation("aab", "aba");
