function bonAppetit(bill, k, b) {
  // Write your code here
  let sum = 0;

  for (let i = 0; i < bill.length; i++) {
    sum += bill[i];
  }
  const result = (sum - bill[k]) / 2;

  return result === b ? "Bon Apetit" : Math.abs(b - result);
  //   if (result === b) {
  //     return "Bon Apetit";
  //   } else {
  //     return Math.abs(b - result);
  //   }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));
// console.log(bonAppetit([3, 10, 2, 9], 1, 7));

// C++
// void bonAppetit(vector<int> bill, int k, int b) {
//     int total = 0;
//     for(int i = 0; i < bill.size(); i++){
//         total += bill[i];
//     }
//     total = (total - bill[k])/2;
//     if(total == b){
//         cout << "Bon Appetit" << endl;
//     }else{
//         cout << b - total << endl;
//     }

// }

// Python
// n, k = map(int, input().strip().split(' '))
// c = [int(x) for x in input().strip().split(' ')]
// b = int(input().strip())

// print('Bon Appetit' if (sum(c) - c[k]) // 2 == b else c[k] // 2)
