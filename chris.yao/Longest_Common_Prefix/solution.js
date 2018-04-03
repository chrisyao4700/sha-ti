const run = () => {

    console.log(longestCommonPrefix(["","c"]));

};

const longestCommonPrefix = (strs) => {

    if (!strs) return '';
    if (strs.length < 1) return '';
    if (strs.length < 2) return strs[0];
    strs.sort((a, b) => {
        return b.length - a.length;
    });
     // console.log(strs);

    let ruler = strs[0];
    let right = ruler.length;
    //console.log(strs);
    // console.log(ruler);
    // console.log(right);
    for (let i = 1; i < strs.length; i++) {
        let str = strs[i];
        // console.log('===');
        // console.log(str);
        let left = 0;
        if (!str) right = 0;
        while (left < right) {
            //console.log('left - ls:' + left + ' - ' + str[left] + ' right - rs:' + right + ' - ' + ruler[right]);
            if (str[left] === ruler[left]) {
                left++;
            } else {
                //console.log('I am here');
                right = left;
                break;
            }

        }
        if (right < 1) {
            break;
        }
    }
     console.log(right);
    return ruler.slice(0, right);

};

module.exports.run = run;