function timeConversion(s) {
  let t = s.split(":");

  // FOUR TEST CASES
  // 1. hours less than 12 and ends in PM
  // 2. hours equal to 12 and ends in PM
  // 3. hours less than 12 and ends in AM
  // 4. hours equal to 12 and ends in AM
  // no need to check greater 12PM because all PM will be less than/equal to 12
  // no need to check greater 12AM because all AM will be less than/equal to 12

  if (t[0] < 12 && t[t.length - 1].endsWith("PM")) {
    t[0] = (parseInt(t[0]) + 12).toString();
    t[t.length - 1] = t[t.length - 1].replace("PM", "");
    // this checks to see if the first number is less than 12 and if the last ends with PM
    // if both are true, it adds 12 and converts it back to a string
    // then it removes the PM
  } else if (t[0] == 12 && t[t.length - 1].endsWith("PM")) {
    t[t.length - 1] = t[t.length - 1].replace("PM", "");
    // this checks to see if the first number is equal to 12 and if the last ends with PM
    // if both are true, then it only removes the PM
  } else if (t[0] == 12 && t[t.length - 1].endsWith("AM")) {
    t[0] = (parseInt(t[0]) - 12).toString().padStart(2, "0");
    // this way if the length of the string is ever below 2, 0 will be added to it.
    t[t.length - 1] = t[t.length - 1].replace("AM", "");
    // this checks to see if the first number is less than 12 and if the last ends with AM
    // if both are true, it subtracts 12 and converts it back to a string
    // then it removes the AM

    // I have a problem with this test case, it returns 12 - 12 = 0, instead of 00
    // so I'll padStart 0 to the beginning of the number
  } else if (t[t.length - 1].endsWith("AM")) {
    // I'll also padstart the first value in this array, but because it will always be less than 12 no need to create a new condition
    t[0] = t[0].padStart(2, "0");
    // this way if the length of the string is ever below 2, 0 will be added to it.
    t[t.length - 1] = t[t.length - 1].replace("AM", "");
    // this checks to see if the last ends with AM
    // if true, then it only removes the AM
  }

  t = t.join(":");
  // this joins the separate array items together with a : in between

  // console.log(t);
  return t;
}

timeConverter("07:54:59PM");
timeConverter("12:54:59PM");
timeConverter("07:54:59AM");
timeConverter("12:54:59AM");

let s = "0";
console.log(s.padStart(2, "0"));

// t[t.length - 1].slice()

// while (t[-1] != 'PM')

// for (let i = 0; i < t.length; i++) {
//   parseFloat(t[i]);
// }
// console.log(t);

// s = '12:00:00PM'
// console.log(parseInt(s));

// s = '07:54:08PM'
// console.log(parseInt(s));

// let s = '07:54:59PM'
// console.log(s.split(':'));

// let s = '07:54:59PM';
// let t = s.split(':');
// if (t[t.length - 1].includes('PM')) {
//   console.log('true');
// } else (console.log('false'));

// let s = '07.89'
// console.log(parseFloat(s));
