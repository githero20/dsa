function EquivalentKeypresses(strArr) {
  // Didn't work for these testcases

  //   1. For input ["q,w,e,r,t,y", "-B,-B,q,w,w,-B,e,r,t,y"] the output was incorrect. The correct output is true

  // 2. For input ["p,o,i,n,-B,t", "-B,p,o,i,t"] the output was incorrect. The correct output is true

  // 3. For input ["u,m,b,r,r,-B,e,l,l,a", "u,m,b,b,-B,r,e,l,l,a"] the output was incorrect. The correct output is true

  // 4. For input ["c,o,o,-B,o,l", "c,o,o,k,-B,l"] the output was incorrect. The correct output is true

  // 5. For input ["", "-B,-B,-B"] the output was incorrect. The correct output is true

  // 6. For input ["s,t,r,e,e,t", "-B,s,s,-B,t,r,e,e,t"] the output was incorrect. The correct output is true

  let str1 = strArr[0];
  let str2 = strArr[1];

  let checkStr = [];

  let res = "";

  // code goes here
  // for (let char of strArr[1]) {
  //   // if (char === "-B") {
  //    console.log(char)
  //   // }
  // }
  for (let i = 0; i < str2.length; i++) {
    if (str2[i - 1] + str2[i] == "-B") {
      checkStr.splice(i - 4, 4);
      // checkStr.pop()
    } else {
      checkStr.push(str2[i]);
    }
  }

  // checkStr.join("");
  for (let char of checkStr) {
    res += char;
  }

  return str1 === res;
}

// keep this function call here
console.log(EquivalentKeypresses(readline()));
