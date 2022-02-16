// Convert a non-negative integer num to its English words representation.
// Input: num = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

// we'll break it down into threes
// we'll break each group of three down into hundreds, tens, tens < 20 i.e. -teens and units
// works from down up, lmao.

var unit = function (num) {
  // we use this to rename every unit value to english
  //   using switch, i.e. if (num === 1) return "One"
  switch (num) {
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "";
  }
  //   return "";
};

var tensLessThan20 = function (num) {
  // if the num is less than 20 but greater than 9
  switch (num) {
    case 10:
      return "Ten";
    case 11:
      return "Eleven";
    case 12:
      return "Twelve";
    case 13:
      return "Thirteen";
    case 14:
      return "Fourteen";
    case 15:
      return "Fifteen";
    case 16:
      return "Sixteen";
    case 17:
      return "Seventeen";
    case 18:
      return "Eighteen";
    case 19:
      return "Nineteen";
    default:
      return "";
  }
  //   return "";
};

var tens = function (num) {
  switch (num) {
    case 2:
      return "Twenty";
    case 3:
      return "Thirty";
    case 4:
      return "Forty";
    case 5:
      return "Fifty";
    case 6:
      return "Sixty";
    case 7:
      return "Seventy";
    case 8:
      return "Eighty";
    case 9:
      return "Ninety";
    default:
      return "";
  }
  //   return "";
};

// now we're building up to the full number, starting with Two digits
var twoSF = function (num) {
  if (num === 0) {
    return "";
  } else if (num < 10) {
    return unit(num);
  } else if (num < 20) {
    return tensLessThan20(num);
  } else {
    let tenner = num / 10;
    let rem = num - tenner * 10;
    if (rem != 0) {
      return tens(tenner) + " " + unit(rem);
    }
  }
};

// now three digits
var threeSF = function (num) {
  let hundred = num / 100;
  let rem = num - hundred * 100;
  let res = "";
  if (hundred * rem != 0) {
    res = unit(hundred) + " Hundred " + twoSF(rem);
  } else if (hundred === 0 && rem != 0) {
    res = twoSF(rem);
  } else if (hundred != 0 && rem === 0) {
    res = unit(hundred) + " Hundred";
  }
  return res;
};

// Now the actual number
var numberToWords = function (num) {
  if (num === 0) return "Zero";

  //   now we need to differentiate the numbers into thousands, millions, billions
  let billion = num / 1000000000;
  let million = (num - billion * 1000000000) / 1000000;
  let thousand = (num - billion * 1000000000 - million * 1000000) / 1000;
  let remainder =
    num - billion * 1000000000 - million * 1000000 - thousand * 1000;

  let result = "";
  if (billion != 0) {
    result = threeSF(billion) + " Billion";
  }
  if (million != 0) {
    if (result.length !== 0) {
      result += " ";
      // this adds a separator
    }
    result += threeSF(million) + " Million";
  }
  if (thousand != 0) {
    if (result.length !== 0) {
      result += " ";
      // this adds a separator
    }
    result += threeSF(thousand) + " Thousand";
  }
  if (remainder != 0) {
    if (result.length !== 0) {
      result += " ";
      // this adds a separator
    }
    result += threeSF(remainder);
  }
  return result;
};

// // JAVA solution
// class Solution {
//     public String one(int num) {
//       switch(num) {
//         case 1: return "One";
//         case 2: return "Two";
//         case 3: return "Three";
//         case 4: return "Four";
//         case 5: return "Five";
//         case 6: return "Six";
//         case 7: return "Seven";
//         case 8: return "Eight";
//         case 9: return "Nine";
//       }
//       return "";
//     }

//     public String twoLessThan20(int num) {
//       switch(num) {
//         case 10: return "Ten";
//         case 11: return "Eleven";
//         case 12: return "Twelve";
//         case 13: return "Thirteen";
//         case 14: return "Fourteen";
//         case 15: return "Fifteen";
//         case 16: return "Sixteen";
//         case 17: return "Seventeen";
//         case 18: return "Eighteen";
//         case 19: return "Nineteen";
//       }
//       return "";
//     }

//     public String ten(int num) {
//       switch(num) {
//         case 2: return "Twenty";
//         case 3: return "Thirty";
//         case 4: return "Forty";
//         case 5: return "Fifty";
//         case 6: return "Sixty";
//         case 7: return "Seventy";
//         case 8: return "Eighty";
//         case 9: return "Ninety";
//       }
//       return "";
//     }

//     public String two(int num) {
//       if (num == 0)
//         return "";
//       else if (num < 10)
//         return one(num);
//       else if (num < 20)
//         return twoLessThan20(num);
//       else {
//         int tenner = num / 10;
//         int rest = num - tenner * 10;
//         if (rest != 0)
//           return ten(tenner) + " " + one(rest);
//         else
//           return ten(tenner);
//       }
//     }

//     public String three(int num) {
//       int hundred = num / 100;
//       int rest = num - hundred * 100;
//       String res = "";
//       if (hundred*rest != 0)
//         res = one(hundred) + " Hundred " + two(rest);
//       else if ((hundred == 0) && (rest != 0))
//         res = two(rest);
//       else if ((hundred != 0) && (rest == 0))
//         res = one(hundred) + " Hundred";
//       return res;
//     }

//     public String numberToWords(int num) {
//       if (num == 0)
//         return "Zero";

//       int billion = num / 1000000000;
//       int million = (num - billion * 1000000000) / 1000000;
//       int thousand = (num - billion * 1000000000 - million * 1000000) / 1000;
//       int rest = num - billion * 1000000000 - million * 1000000 - thousand * 1000;

//       String result = "";
//       if (billion != 0)
//         result = three(billion) + " Billion";
//       if (million != 0) {
//         if (! result.isEmpty())
//           result += " ";
//         result += three(million) + " Million";
//       }
//       if (thousand != 0) {
//         if (! result.isEmpty())
//           result += " ";
//         result += three(thousand) + " Thousand";
//       }
//       if (rest != 0) {
//         if (! result.isEmpty())
//           result += " ";
//         result += three(rest);
//       }
//       return result;
//     }
//   }
