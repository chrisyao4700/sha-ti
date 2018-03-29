//
// A self-dividing number is a number that is divisible by every digit it contains.
//
//     For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
//
// Also, a self-dividing number is not allowed to contain the digit zero.
//
//     Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
//
//     Example 1:
// Input:
//     left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
// Note:
//
//     The boundaries of each input argument are 1 <= left <= right <= 10000.

// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 21, 22 ]


const run = () => {
    console.log(selfDividingNumbers(1, 22));

    // checkNum(21);


};


const selfDividingNumbers = (left, right) => {

    let rel = [];
    for (let i = left; i <= right; i++) {
        if (i < 10) {
            rel.push(i);
            continue;
        }
        if (checkNum(i) === true) {
            rel.push(i);
        }
    }
    return rel;

};

const checkNum = (num) => {
    let org = num;
    while (num !== 0) {
        let dig = num % 10;
        // console.log(dig);
        if (dig === 0) {
            return false;
        }
        if (org % dig !== 0) {
            return false;
        }
        num = Math.floor(num / 10);
        // console.log(num);
    }
    return true;
};

module.exports.run = run;