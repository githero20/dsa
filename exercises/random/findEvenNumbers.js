var digitCount = function(num) {
    let str = num.toString()
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count ++
    }
    // console.log(count);
    return(count);
}
// digitCount(2456);


var findNumbers = function(nums) {
    let add = 0;
    let totalSum = 0;
    for (let num of nums) {
        add = digitCount(num);
        if (add % 2 === 0) {
            totalSum++
        }
    }
    // console.log(totalSum);
    return(totalSum);
};
findNumbers([12,345,2,6,7896]);
findNumbers([555,901,482,1771]);
