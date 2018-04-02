// Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it.
// Find and return the shortest palindrome you can find by performing this transformation.
//
//     For example:
//
//     Given "aacecaaa", return "aaacecaaa".
//
//     Given "abcd", return "dcbabcd".
//
//     Credits:
// Special thanks to @ifanchu for adding this problem and creating all test cases. Thanks to @Freezen for additional test cases.

const run = () => {
    // console.log(thirdTry("aba"));
    // console.log(forthTry("aba"));

};


const shortestPalindrome = (s) => {
    if (!s) return '';
    let len = s.length;
    if (len === 1) return s;
    if (len === 2) {
        return s[0] === s[1] ? s : s[1] + s;
    }
    let pointer = 1;

    let slow = 0;
    let fast = 2;

    while (pointer <= Math.ceil(len / 2)) {
        slow = pointer - 1;
        fast = pointer + 1;
        while (slow >= 0) {
            if (s[slow] === s[fast]) {
            }
        }
    }
};

const betterTry = (s) => {
    let chars = s.split('');
    let reversed = chars.slice().reverse();
    if (checkPalindrome(s)) return s;
    for (let i = 0, n = chars.length - 1; i < n; i++) {
        let joined = reversed.slice(0, i + 1).concat(chars).join('');
        if (checkPalindrome(joined)) {
            return joined;
        }
    }
};

const checkPalindrome = (str) => {

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

const thirdTry = (s) => {
    let prefix = "";
    let pos, head, tail;


    for (pos = head = tail = Math.floor(s.length / 2); pos > 0; head = tail = --pos) {
        console.log('head : ' + head + ' tail: ' + tail + ' pos: ' + pos);
        while (head !== 0 && s[head - 1] === s[head]) {
            head--;
            pos--;
        }
        while (tail !== s.length - 1 && s[tail + 1] === s[tail]) {
            tail++;
        }
        let isSame = true;
        while (head >= 0) {
            if (s[head] !== s[tail]) {
                isSame = false;
                break;
            }
            head--;
            tail++;
        }
        if (isSame) {
            break;
        }

    }
    console.log('pos - ' + pos);
    console.log('tail - ' + tail);

    for (let k = s.length - 1; k >= tail && k !== 0; k--) {
        prefix += s[k];
    }
    return prefix + s;
};

const forthTry = (s) => {
    if (!s) return '';
    let len = s.length;
    if (len === 1) return s;
    if (len === 2) {
        return s[0] === s[1] ? s : s[1] + s;
    }
    let prefix = "";
    let pos;
    let left = Math.ceil(s.length / 2);
    let right = Math.ceil(s.length / 2);


    let save;

    for (pos = Math.ceil(s.length / 2); pos > 0; pos--) {
        console.log('left : ' + left + ' right: ' + right + ' pos: ' + pos);
        while (left !== 0 && s[left - 1] === s[left]) {
            left--;
            pos--;
        }
        while (right !== s.length - 1 && s[right + 1] === s[right]) {
            right++;
            save = right;
        }
        let isSame = true;
        while (left >= 0) {
            if (s[left] !== s[right]) {
                isSame = false;
                break;
            }
            left--;
            right++;
            save = right;
        }
        if (isSame) {
            break;
        }
        left = pos;
        right = pos;
        save = pos;

    }

    console.log('pos - ' + pos);
    console.log('save - ' + save);


    for (let k = s.length - 1; k >= save && k !== 0; k--) {
        prefix += s[k];
    }
    return prefix + s;
};

const fifthTry = (s) => {
    let end = s.length - 1;
    for (let i = s.length - 1; i >= 0; i++) {
        let left = 0;
        let right = end;
        let flag = true;
        while (left < right) {
            if (s[left] !== s[right]) {
                end--;
                flag = false;
                break;
            } else {
                left++;
                right--;
            }
        }
        if (flag === true) {
            break;
        }
    }

    let tmp = s.slice(end, s.length - 1);
    //tmp.split('');
    let sl = tmp.reverse();
    return sl.join('') + s;
};


module.exports.run = run;