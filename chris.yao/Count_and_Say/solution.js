// The count-and-say sequence is the sequence of integers with the first five terms as following:
//
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth term of the count-and-say sequence.
//
//     Note: Each term of the sequence of integers will be represented as a string.
//
//     Example 1:
//
// Input: 1
// Output: "1"
// Example 2:
//
// Input: 4
// Output: "1211"

const run = () => {
   console.log( countAndSay(5));

};

const countAndSay = (n) => {
    if (n === 1) return '1';
    let word = countAndSay(n - 1);

    let slow = 0;
    let fast = 1;
    let rel = '';

    while (fast <= word.length) {
        console.log(word[fast]);
        if (word[slow] === word[fast] && fast!== word.length) {
            fast++;
        } else {
            rel+= (fast - slow) + '' + word[slow];
            slow = fast;
            fast++;
        }
    }
    return rel;

};

module.exports.run = run;