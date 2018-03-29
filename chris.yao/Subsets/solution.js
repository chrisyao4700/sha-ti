const run = () => {

    let rel = subsetsDfs([1, 2, 3]);
    console.log(rel);
};


//
// Given a set of distinct integers, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
//     For example,
//     If nums = [1,2,3], a solution is:
//
//     [
//         [3],
//         [1],
//         [2],
//         [1,2,3],
//         [1,3],
//         [2,3],
//         [1,2],
//         []
//     ]

const subsets = (nums) => {

    let rel = [];
    for (let i = 0; i < Math.pow(2, nums.length); i++) {
        let binary = i.toString(2);
        let fill = nums.length - binary.length;

        let temp = [];

        for (let j = 0; j < fill; j++) {
            binary = '0' + binary;
        }

        for (let l = 0; l < nums.length; l++) {
            if (binary[l] === '1') {
                temp.push(nums[l]);
            }
        }
        rel.push(temp);
    }
    return rel;
    //console.log(rel);
};


const subsetsBinaryBetter = (nums) => {

    let rel = [];
    for (let i = 0; i < Math.pow(2, nums.length); i++) {
        let binary = i.toString(2);
        let temp = [];
        for (let l = nums.length - 1; l >= 0; l--) {
            //console.log(binary +' - ' + l + ' - ' + nums[l]);
            if (binary[binary.length - 1 - l] === '1') {
                temp.push(nums[l]);
            }
        }
        rel.push(temp);
    }
    return rel;
    //console.log(rel);
};

const subsetsDfs = (nums) => {
    let arr = [];
    let rel = [];
    const dfs = (index, vec) => {
        let temp = vec.slice(0);
        rel.push(temp);
        for (let i = index; i < nums.length; i++) {
            vec.push(nums[i]);
            dfs(i + 1, vec);
            vec.splice(-1);

        }
    };
    dfs(0, arr);
    return rel;
};


module.exports.run = run;