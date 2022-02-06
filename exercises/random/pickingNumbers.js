// https://dev.to/ryhenness/lets-solve-code-challenge---picking-numbers-a32

function main() {
  // Read input
  var n = parseInt(readLine());
  a = readLine().split(" ");
  a = a.map(Number);

  // Construct our map
  var map = new Array(100);
  map.fill(0);

  // Populate map
  for (var i = 0; i < arr.length; i++) {
    map[a[i]]++;
  }

  // Find the max sum of two values with keys within one of each other
  var max = 0;
  for (var i = 1; i < map.length; i++) {
    if (map[i] + map[i - 1] > max) {
      max = map[i] + map[i - 1];
    }
  }
  console.log(max);
}
