function angryProf(k, a) {
  let cutoff = 0;
  for (let num of a) {
    num <= 0 ? cutoff++ : (cutoff += 0);
  }
  return cutoff >= k ? "NO" : "YES";
  //   cutoff >= k ? console.log("NO") : console.log("YES");
}

angryProf(3, [-1, -3, 4, 2]);
angryProf(2, [0, -1, 2, 1]);
