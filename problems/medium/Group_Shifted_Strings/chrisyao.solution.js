// Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:
//
//     "abc" -> "bcd" -> ... -> "xyz"
// Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.
//
//     For example, given: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
//     A solution is:
//
//     [
//         ["abc","bcd","xyz"],
//         ["az","ba"],
//         ["acef"],
//         ["a","z"]
//     ]

const run = () => {


    // var charCode = "a".charCodeAt(0);
    // console.log(charCode);

    //console.log(groupStrings(["abc","bcd","acef","xyz","az","ba","a","z"]));

};

const groupStrings = (strings) => {

    let rel = {};
    for (let i = 0; i< strings.length; i++) {
        let s = strings[i];
        let key = '';
        //console.log(s);
        for (let j = 1; j < s.length; j++) {
            key += ((s[j].charCodeAt(0) - s[0].charCodeAt(0) + 26) % 26) +'-';
            //console.log(key);

        }
        if (key in rel) {
            rel[key].push(s);
        } else {
            rel[key] = [s];

        }
    }

    console.log(rel);

    return Object.values(rel);

};

module.exports.run = run;