const run = () => {
    // let url = 'http://google.com';
    // console.log(url === decode(encode(url)) ? 'SUCCESS' : 'WRONG');

    let rel = twoSum([3,2,4], 6);

    console.log(rel);

};
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//     Example:
// Given nums = [2, 7, 11, 15], target = 9,
//
//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


const twoSum = (nums, target) => {
    let fast = 1;
    let slow = 0;


    while (slow < nums.length) {
        // console.log('===FAST===');
        // console.log(fast);
        // console.log('===SLOW===');
        // console.log(slow);

        if (slow === fast) {
            fast++;
        } else {
            if (nums[slow] + nums[fast] === target) {
                return [slow, fast];
            }
        }

        if (fast === nums.length - 1) {
            fast = 0;
            slow++;
        }else{
            fast++;
        }
    }
    return null;
};


module.exports.run = run;