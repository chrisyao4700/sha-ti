const run = () => {
    //console.log(canPermutePalindrome("aabbhijkkjih"));
    //console.log(checkPalindrome('abca'));


    //HARD WAY
    // for (let word of permuteString(s)) {
    //     if (checkPalindrome(word) === true) {
    //         console.log(word);
    //         return true;
    //     }
    //
    // }
    // return false;


    //console.log(canPermutePalindrome("aab"));
    console.log(mapBetterSolution("sdasdasdasd"));

};


const canPermutePalindrome = (s) => {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        let j = arr.indexOf(s[i]);
        if( j> -1){
            arr.splice(j,1);
        }else {
            arr.push(s[i]);
        }
    }
   return arr.length <= s.length % 2;
};

const mapSolution = (s)=>{
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = s[i] in hash? hash[s[i]] !== true : false;
    }
    let count = 0;
    Object.keys(hash).forEach((k)=>{
        if(hash[k] === false)count++;
    });
    return count <= s.length % 2;
};

const mapBetterSolution = (s)=>{
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        //hash[s[i]] = s[i] in hash? hash[s[i]] !== true : false;
        if (s[i] in hash){
            delete hash[s[i]];
        }else {
            hash[s[i]] = 0;
        }
    }
    console.log(hash.length);
    return Object.keys(hash).length <= s.length % 2;
};

const permuteString = (s) => {
    if (s.length < 2) {
        return [s];
    }
    let rel = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (s.indexOf(char) !== i)
            continue;
        let rs = s.slice(0, i) + s.slice(i + 1, s.length);
        for (let sub of permuteString(rs))
            rel.push(char + sub);
    }
    return rel;

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
module.exports.run = run;