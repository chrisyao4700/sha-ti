const run = () => {

    //console.log(findMedianSortedArrays([1, 3], [2]));
    console.log(betterBinarySearchSol([1, 3], [2]));
};


const findMedianSortedArrays = (nums1, nums2) => {

    let left = 0;
    let ll = nums1.length;
    let rl = nums2.length;
    let right = 0;
    let arr = [];
    while (left < ll || right < rl) {
        if (left === ll) {
            arr.push(nums2[right]);
            right++;
            continue;
        }
        if (right === rl) {
            arr.push(nums1[left]);
            left++;
            continue;
        }
        if (nums1[left] === nums2[right]) {
            arr.push(nums1[left]);
            arr.push(nums2[right]);
            right++;
            left++;
        } else if (nums1[left] > nums2[right]) {
            arr.push(nums2[right]);
            right++;
        } else {
            arr.push(nums1[left]);
            left++;
        }
    }
    console.log(arr);
    let al = arr.length;
    return al % 2 === 0 ? (arr[al / 2] + arr[al / 2 - 1]) / 2 : arr[Math.floor(al / 2)];
};


const betterBinarySearchSol = (nums1, nums2) => {
    let m = nums1.length, n = nums2.length;
    if (m < n) {
        return findMedianSortedArrays(nums2, nums1);
    }
    let c = (m + n) >> 1;
    let low = 0, high = n;
    while (low < high) {
        let mid = (low + high) >> 1;
        if (mid < n && nums1[c - mid - 1] > nums2[mid]) {
            low = mid + 1;
        } else if (mid - 1 >= 0 && nums1[c - mid] < nums2[mid - 1]) {
            high = mid - 1;
        } else {
            high = low = mid;
        }
    }
    let a = Math.min(low >= n ? Number.MAX_VALUE : nums2[low], c - low >= m ? Number.MAX_VALUE : nums1[c - low]);
    if ((m + n) % 2 === 1) {
        return a;
    }
    let b = Math.max(low - 1 < 0 ? Number.MIN_VALUE : nums2[low - 1], c - low - 1 < 0 ? Number.MIN_VALUE : nums1[c - low - 1]);
    return (a + b) / 2;
};

module.exports.run = run;