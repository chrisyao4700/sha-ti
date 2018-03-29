const run = () => {
    // // console.log(isValidSudoku([['.', '8', '7', '6', '5', '4', '3', '2', '1'],
    // //     ['2', '.', '.', '.', '.', '.', '.', '.', '.'],
    // //     ['3', '.', '.', '.', '.', '.', '.', '.', '.'],
    // //     ['4', '.', '.', '.', '.', '.', '.', '.', '.'],
    // //     ['5', '.', '.', '.', '.', '.', '.', '.', '.'],
    // //     ['6', '.', '.', '.', '.', '.', '.', '.', '.'],
    // //     ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
    // //     ['8', '.', '.', '.', '.', '.', '.', '.', '.'],
    // //     ['9', '.', '.', '.', '.', '.', '.', '.', '.']]));
    //
    // let cb = {
    //     '0-2': '4',
    //     '0-6': '6',
    //     '0-7': '3',
    //     '2-0': '5',
    //     '2-7': '9',
    //     '3-3': '5',
    //     '3-4': '6',
    //     '4-0': '4',
    //     '4-2': '3',
    //     '4-8': '1',
    //     '5-3': '7',
    //     '6-3': '5'
    // };
    Object.keys(cb).forEach(key => {
        if (verifyEle(key, cb) === false) {
            //return false;
            console.log('FALSE RETURNED');
        }
    });


};

const isValidSudoku = function (board) {
    //console.log(board)
    const cb = configBoard(board);
    console.log(cb);
    Object.keys(cb).forEach((key) => {
        if (verifyEle(key, cb) === false) {
            return false;
        }
    });
    return true;
};

const configBoard = (board) => {
    let rel = {};
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let ele = board[i][j];
            if (ele !== '.') {
                rel[i + '-' + j] = ele;
            }
        }
    }
    return rel;
};

const verifyEle = (input, board) => {
    let il = input.split('-');

    let x = il[0];
    let y = il[1];

    let keys = Object.keys(board);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let kl = key.split('-');
        let kx = kl[0];
        let ky = kl[1];
        if (key === input) {
            continue;
        }
        if (ky === y || kx === x || (Math.floor(kx / 3) === Math.floor(x / 3) && Math.floor(ky / 3) === Math.floor(y / 3))) {
            //console.log('kx - ' + kx + '\nky - ' + ky + '\nx - ' + x + '\ny - ' + y + '\nkv - ' + board[key] + '\niv - ' + board[input]);
            //console.log('===========');
            if (board[key] === board[input]) {
                console.log('I AM HERE');
                return false;
            }
        }
    }

    return true;

};


module.exports.run = run;