// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  const diff1 = Math.abs(z - x);
  const diff2 = MAth.abs(z - y);
  return diff1 < diff2
    ? "Cat A"
    : diff2 < diff1
    ? "Cat B"
    : diff1 === diff2
    ? "Mouse C"
    : "error";
}
