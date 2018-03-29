// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
//     Note: The solution set must not contain duplicate triplets.
//
//     For example, given array S = [-1, 0, 1, 2, -1, -4],
//
//     A solution set is:
//     [
//         [-1, 0, 1],
//         [-1, -1, 2]
//     ]

const run = () => {

    //console.log(threeSum());
    //let i = 7;
    //console.log(i.toString(2));
    // [6, -5, -6, -1, -2, 8, -1, 4, -10, -8, -10, -2, -4, -1, -8, -2, 8, 9, -5, -2, -8, -9, -3, -5]
    // console.log(thirdTry([-1, 0, 1, 2, -1, -4]));
    console.log(forthThreeSum([-1, 0, 1, 2, -1, -4]));

};

const threeSum = (nums) => {
    if (nums.length < 3) return [];
    let map = {};
    nums.sort((a, b) => a - b);
    for (let i = 7; i < Math.pow(2, nums.length); i++) {
        let binary = i.toString(2);
        let count = 0;
        let tmp = [];
        let flag = true;
        for (let j = binary.length - 1; j >= 0; j--) {
            if (binary[binary.length - 1 - j] === '1') {
                if (count === 3) {
                    flag = false;
                    break;
                }
                count++;
                tmp.push(nums[j]);
            }
        }
        if (flag === true) {
            if (tmp.length === 3 && tmp.reduce((a, b) => a + b, 0) === 0) {
                let key = tmp[0] + '-' + tmp[1] + '-' + tmp[2];
                map[key] = tmp;
            }
        }
    }
    return Object.values(map);
};

const betterThreeSum = (nums) => {
    if (nums.length < 3) return [];

    let rel = [];
    // nums.sort((a, b) => a - b);
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let copy = nums.slice(0);
        let selected = copy.splice(i, 1);
        let tr = twoSum(copy, 0 - selected);
        if (tr.length > 0) {
            tr.forEach((ele) => {
                let key = selected[0] + '-' + ele[0] + '-' + ele[1];
                //console.log(key);
                ele.push(selected[0]);
                map[key] = ele;
                //rel.push(ele);
            });
        }
    }
    return Object.values(map);
    //return rel;
};
const twoSum = (nums, tar) => {
    let left = 0;
    let right = 1;

    let rel = [];

    while (left !== right) {
        if (nums[left] + nums[right] === tar) {
            rel.push([nums[left], nums[right]]);
        }
        if (right === nums.length - 1) {
            left++;
        } else {
            right++;
        }
    }
    return rel;

};
const thirdTry = (nums) => {
    let ary = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        if (!(i > 0 && (nums[i] === nums[i - 1]))) {
            while (left < right) {
                let b = nums[left];
                let c = nums[right];
                let sum = a + b + c;
                if (sum === 0) {
                    let subAry = [a, b, c];
                    subAry.sort((a, b) => a - b);
                    ary.splice(ary.length, 0, subAry); // inseting
                    while ((nums[left] === nums[left + 1])) {
                        left++;
                    }
                    left++;
                } else if (sum > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }
    return ary;
};


const betterTwoSum = (nums, tar) => {
    //nums.sort((a, b) => a - b);
    //console.log(nums);
    //console.log(tar * -1);
    let len = nums.length - 1;
    let left = 0;
    let right = len;
    let rel = [];
    while (left < right) {
        let ln = nums[left];
        let rn = nums[right];
        let sum = ln + rn;
        if (sum === tar) {
            rel.push([ln, rn]);
            while (ln === nums[left + 1]) {
                left++;
            }
            left++;
        } else if (sum < tar) {
            left++;
        } else {
            right--;
        }
    }
    return rel;
};

const forthThreeSum = (nums) => {
    nums.sort((a, b) => a - b);
    console.log(nums);
    let rel = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        } else {
            let tmp = betterTwoSum(nums.slice(i + 1, nums.length), 0 - nums[i]);
            if (tmp.length > 0) {
                for (let j = 0; j < tmp.length; j++) {
                    let ele = tmp[j];
                    ele.push(nums[i]);
                    rel.push(ele);
                }
            }
        }
    }
    return rel;
};
module.exports.run = run;