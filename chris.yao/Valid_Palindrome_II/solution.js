const run = () => {
    console.log('RUNNING...');
    console.log(validPalindrome('abca'));

};

const validPalindrome = (s) => {
    // if (checkPossibleDo(s) === true){
    //     while
    // }
    let sl = s.length;
    if (sl < 3) {
        return true;
    }

    let left = 0;
    let right = sl - 1;
    let triedRight = false;
    let triedLeft = false;
    while (right >= left) {
        console.log('right - ' + right + '  left - ' +left);
        if (s[left] !== s[right]) {
            if (triedLeft === false && triedRight === false) {
                left++;
                triedLeft = true;
                continue
            } else if (triedLeft === true && triedRight === false) {
                left--;
                right--;
                triedRight = true;
                continue;
            }else {
                return false
            }
        }
        left++;
        right--;
    }
    return true;
};

const checkPossibleDo = (s) => {
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        //hash[s[i]] = s[i] in hash? hash[s[i]] !== true : false;
        if (s[i] in hash) {
            delete hash[s[i]];
        } else {
            hash[s[i]] = 0;
        }
    }
    //console.log(hash.length);
    return Object.keys(hash).length <= (s.length % 2 + 1);
}

module.exports.run = run;