const run = () => {
    console.log(intersect([1, 2,  1], [2, 2]));

};


const intersect = (nums1, nums2) => {

    let al = nums1.length;
    let bl = nums2.length;

    if (!nums1 || !nums2 || al < 1 || bl < 1) {
        return [];
    }

    let map1 = {};
    let map2 = {};

    for (let i = 0; i < al; i++) {
        map1[nums1[i]] = nums1[i] in map1 ? map1[nums1[i]] + 1 : 1;
    }
    for (let j = 0; j < bl; j++) {
        map2[nums2[j]] = nums2[j] in map2 ? map2[nums2[j]] + 1 : 1;
    }

    let rel = [];
    console.log(map1);
    console.log(map2);

    Object.keys(map1).forEach((key) => {
        if (key in map2) {
            let count = Math.min(map2[key] , map1[key]);
            for(let i = 0 ; i< count; i++){
                rel.push(parseInt(key));
            }
        }
    });
    return rel;

};
module.exports.run = run;