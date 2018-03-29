const run = () => {

    console.log(isPalindrome(' '));
};


const isPalindrome = (s) => {

    let str = s.replace(/[^A-Za-z0-9]/g, '');
    str.replace(' ','');
    str.toUpperCase();
    //console.log(str);

    if (str.length <= 1) {
        return true;
    }
    if (str.length === 2) {
        // console.log(s[0]);
        // console.log(s[1]);
        // console.log(s[0] === s[1]);
        return s[0] === s[1];
    }
    if (str.length === 3) {
        return s[0] === s[2];
    }

    let left = 0;
    let right = s.length - 1;

    while (str.length % 2 === 0 ? left - right !== 1 : left - right !== 2) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;

};

module.exports.run = run;