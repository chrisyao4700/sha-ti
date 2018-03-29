const convert = (s, numRows)  => {
    let y = 0;
    let sl = s.split('');
    let i = 0;
    let matrix = [];
    let direction = true;
    let rel = [];
    if (numRows < 2) {
        return s;
    }
    while (i < sl.length) {
        if (i <= numRows) {
            matrix.push([]);
        }
        // console.log('=======');
        // console.log(y);
        // console.log(sl[i]);
        // console.log(matrix);
        matrix[y].push(sl[i]);
        if (y === numRows - 1) {
            direction = false;
        }
        if (y === 0) {
            direction = true;
        }
        if (direction === true) {
            //to bottom
            y++;
        } else {
            //to right up
            y--;
        }
        i++;
    }
    //console.log(matrix);

    matrix.forEach((list) => {
        list.forEach((element) => {
            rel.push(element);
        });
    });
    //console.log(rel);
    return rel.join('');

};




module.exports.convert = convert;