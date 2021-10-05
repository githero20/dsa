function countingValleys(steps, path) {
    // Write your code here
    let init = 0;
    let val = 0;
    for (let i of path) {
        if (i == 'U') {
            init++;
        } else if(i == 'D') {
            init--;
        }
        if (init == 0 && i == 'U') {
            val ++;
        }
    }
    return val;

}