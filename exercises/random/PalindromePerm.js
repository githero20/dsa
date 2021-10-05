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

function oneAway(s1, s2) {
  // here, I'll again compare s1 and s2
  // since s1 is the original, and can be changed, s2 will be the benchmark
  // cases: s1 === s2; edits = 0 (true)
  // s1 !== s2; edits 1 (true)
  // s1 !== s2; edits 2 (false)
  let result = "";
  let counter = 0;

  if (s1 === s2) {
    counter;
  }
  for (char of s1) {
    if (!s2.includes(char)) {
      counter++;
    }
  }
  console.log(counter);
  if (counter <= 1) {
    result = true;
  } else {
    result = false;
  }
  console.log(result);
}
oneAway("bale", "bale");
oneAway("bake", "bale");
oneAway("bales", "bale");
oneAway("bake", "pale");

function palindromeIndex(s) {
  // Write your code here
  // first reverse and check if it still works, then return (-1)

  const checkPal = (string) =>
    string.slice(0, Math.floor(string.length / 2)) ===
    string
      .slice(Math.ceil(string.length / 2))
      .split("")
      .reverse()
      .join("");

  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      // const stringA = s.slice(i, s.length - 1 - i);
      // const stringB = s.slice(i + 1, s.length - i);
      const stringA = s.slice(0, i).concat(s.slice(i + 1));
      const stringB = s
        .slice(0, s.length - 1 - i)
        .concat(s.slice(s.length - i));
      if (checkPal(stringA)) return i;
      if (checkPal(stringB)) return s.length - 1 - i;
      return -1;
    }
  }

  return -1;
}

palindromeIndex("asab");
