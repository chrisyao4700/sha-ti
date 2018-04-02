const run = () => {

    console.log(palindromePairs(["a",""]));
};

const palindromePairs = (words) => {
    let rel = [];
    for (let i = 0; i < words.length; i++) {
        let left = words[i];
        for (let j = 0; j < words.length; j++) {
            if (words[i] === words[j]) {
                continue;
            }

            let right = words[j];
            console.log(left + ' - ' + right);
            if (checkPalindrome(left + right) === true) {
                rel.push([i, j]);
            }
        }
    }
    return rel;
};
const checkPalindrome = (str) => {

    //console.log(str);
    //console.log(str.length);
    if (str.length < 2) {
        return true;
    }
    if (str.length === 3) {
        return str[0] === str[2];
    }

    let right = str.length - 1;
    let left = 0;
    //console.log('right - ' + right);
    //console.log('left - ' + left);
    //console.log(str.length % 2);
    //console.log(str.length % 2 === 0 ? right - left !== 1 : right !== left);

    while (str.length % 2 === 0 ? left - right !== 1 : left - right !== 2) {
        //console.log('BEFORE right - ' + right);
        //console.log('BEFORE left - ' + left);
        if (str[right] !== str[left]) {
            return false;
        }
        left++;
        right--;
        //console.log('AFTER right - ' + right);
        //console.log('AFTER left - ' + left);

    }
    return true;
};
module.exports.run = run;