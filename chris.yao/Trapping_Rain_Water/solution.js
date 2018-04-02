const run = () => {

    console.log(trap([4, 9, 4, 5, 3, 2]));
    console.log('rrrrrrrrr');
    console.log(drawPic([4, 9, 4, 5, 3, 2]));
};

const trap = (height) => {
    if (!height) return 0;
    let len = height.length;
    if (len < 3) return 0;
    let slow = 0;
    let fast = 1;
    let rel = 0;
    let ms = {
        height: 0
    };

    while (fast < len) {
        //console.log('fast - ' + fast + ' slow - ' + slow);
        if (fast === len - 1 && height[fast] < height[slow]) {
            console.log('=====');
            console.log(slow + ' - ' + height[slow]);
            console.log(fast + ' - ' + height[fast]);
            console.log(ms);
            console.log('-----');
            if (height[fast] < ms.height) {
                //console.log('I AM HERE');
                let wh = Math.min(ms.height, height[slow]);
                while (ms.index - slow > 1) {
                    slow++;
                    console.log('collecting: ' + wh - height[slow] > 0 ? wh - height[slow] : 0 + ' - slow: ' + slow + ' - ' + height[slow] + ' -- fast: ' + fast + ' - ' + height[fast]);
                    rel += wh - height[slow] > 0 ? wh - height[slow] : 0;

                }

                slow++;
                fast = slow + 1;
                ms = {
                    height: 0
                };

            } else {
                // slow++;
                // fast = slow + 1;
                console.log('===1==');
                console.log(fast);
                console.log(slow);
                console.log('---1--');
                let wh = Math.min(height[slow], height[fast]);
                while (fast - slow > 1) {
                    slow++;
                    console.log('collecting: ' + wh - height[slow] > 0 ? wh - height[slow] : 0 + ' - slow: ' + slow + ' - ' + height[slow] + ' -- fast: ' + fast + ' - ' + height[fast]);
                    rel += wh - height[slow] > 0 ? wh - height[slow] : 0;
                }
            }
        }
        if (height[fast] >= height[slow]) {
            //console.log('slow: ' + slow + ' - ' + height[slow] + ' -- fast: '+ fast + ' - ' + height[fast]);
            let wh = Math.min(height[fast], height[slow]);

            while (fast - slow > 1) {
                slow++;
                console.log('collecting: ' + wh - height[slow] > 0 ? wh - height[slow] : 0 + ' - slow: ' + slow + ' - ' + height[slow] + ' -- fast: ' + fast + ' - ' + height[fast]);
                rel += wh - height[slow] > 0 ? wh - height[slow] : 0;
            }
            slow++;
            fast++;
            ms = {
                height: 0
            };
        } else {
            //console.log('I am here?');
            //console.log(height[fast]);
            //console.log(ms);
            if (height[fast] > ms.height) {
                ms = {
                    index: fast,
                    height: height[fast]
                };
                //console.log('I am here?');
            }
            fast++;
        }
    }
    return rel;

};

const drawPic = (height) => {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[i] > max) {
            max = height[i];
        }
    }

    for (let j = 0; j < max; j++) {
        let str = '';
        for (let l = 0; l < height.length; l++) {
            if (height[l] < (max - j)) {
                str += '-';
            } else {
                str += '0';
            }
        }
        console.log(str);
    }
    let fuck = '';
    for (let h = 0; h < height.length; h++) {
        fuck += '' + h;
    }
    console.log(fuck);
};
module.exports.run = run;