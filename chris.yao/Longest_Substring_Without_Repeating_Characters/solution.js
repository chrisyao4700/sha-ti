const run = () => {
    console.log(lengthOfLongestSubstring("au"));
};


const lengthOfLongestSubstring = (s) => {
    if (!s) return 0;
    let len = s.length;
    if (len < 1) return 0;
    if (len === 1) return 1;

    let slow = 0;
    let fast = 0;

    let max = 0;
    let map = {};
    while (fast <= len) {
        console.log('=========');
        console.log(fast);
        console.log(slow);
        console.log(map);
        console.log(max);
        console.log('---------');
        if (fast === len) {
            max = Math.max(max, s[fast] in map ? fast - slow - 1 : fast - slow);
        }

        if (s[fast] in map) {
            //map[s[fast]] = fast;
            console.log(s[fast] + ' ' + fast);
            console.log(s);
            max = Math.max((fast - slow), max);
            console.log(max);
            while (slow <= map[s[fast]]) {
                delete map[s[slow]];
                slow++;
            }
            map[s[fast]] = fast
        } else {
            map[s[fast]] = fast;
        }
        fast++;
    }
    console.log('rel ' + max);
    return max;
};

module.exports.run = run;