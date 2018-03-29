const run = () => {

    console.log(maxArea())
};

const maxArea = (height) => {

    let max = 0;
    let hl = height.length;

    let left = 0;
    let right = hl - 1;
    while (left < right) {
        let area = Math.min(height[left].height[right]) * (right - left);
        max = Math.max(area, max);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;

};


module.exports.run = run;