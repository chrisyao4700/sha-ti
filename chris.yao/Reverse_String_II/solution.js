const run = () => {

    console.log(reverseStr('abcdefg', 2));
};

var reverseStr = function(s, k) {
    let sw = true;
    let rel = '';
    let po = 0;
    while (po < s.length){
        console.log(po);
        if (sw === true){
            rel += reverse(s.slice(po, k));

            sw = false;
        }else{
            rel += s.slice(po,k);
            sw = true;
        }
        //console.log(rel);
        po+=k;
    }

    return rel;

};

const reverse = (s)=>{
    let str = '';
    for(let i = s.length - 1 ; i>= 0; i++){
        str += s[i];
    }
    return str;
};

module.exports.run = run;