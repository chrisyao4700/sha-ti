const run = () => {
    console.log(isValid("([)]"));

};


const isValid = function (s) {

    let map = {
        b: 0,
        m: 0,
        s: 0
    };
    for (let i = s.length - 1; i >= 0; i--) {

        if (s[i] === ')') {
            map.s++;
        }
        if (s[i] === '(') {
            map.s--;
        }
        if (s[i] === ']') {
            if (map.s < 1) {
                map.m++;
            } else {
                return false;
            }
        }
        if (s[i] === '[') {
            if (map.s < 1) {
                map.m--;
            } else {
                return false;
            }

        }

        if (s[i] === '}') {
            if (map.s < 1 && map.m < 1) {
                map.b++;
            } else {
                return false;
            }
        }

        if (s[i] === '{') {
            if (map.s < 1 && map.m < 1) {
                map.b--;
            } else {
                return false;
            }
        }

    }


    if (map.b !== 0 || map.m !== 0 || map.s !== 0) {
        return false;
    }
    return true;


};


const map = {
    "(": ")",
    "[": "]",
    "{": "}"
}

const betterValid = function(s) {
    var stack = [];

    for (var i = 0; i < s.length; i++) {
        var el = s[i];

        if (map[el]) {
            stack.push(map[el]);
        } else {
            if (el !== stack.pop()) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

module.exports.run = run;