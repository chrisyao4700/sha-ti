// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
//
//     Given two integers x and y, calculate the Hamming distance.
//
//     Note:
// 0 ≤ x, y < 231.
//
// Example:
//
//     Input: x = 1, y = 4
//
// Output: 2
//
// Explanation:
//     1   (0 0 0 1)
// 4   (0 1 0 0)
// ↑   ↑
//
// The above arrows point to positions where the corresponding bits are different.


const run = () => {

    console.log(hammingDistance(1, 4));
};

const hammingDistance = (x, y) => {
    let bx = x.toString(2);
    let by = y.toString(2);
    let count = 0;

    // console.log(bx);
    // console.log(by);
    while (bx || by) {
        let vx = '0';
        let vy = '0';
        let xl = bx.length;
        let yl = by.length;
        if (xl > 0) {
            vx = bx[xl - 1];
            bx = bx.slice(0, bx.length - 1);

        }
        if (yl > 0) {
            vy = by[yl - 1];
            by = by.slice(0, by.length - 1);
        }
        //console.log('vx - ' + vx + ' vy - ' + vy);

        if (vx !== vy) {
            count++;
        }
    }

    return count;

};

module.exports.run = run;