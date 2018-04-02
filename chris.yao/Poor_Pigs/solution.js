const run = () => {

    //console.log(poorPigs(1000, 15, 60))
    var x = 1;
    for (var i = 0; i < 3; i++) {
        x += 5 * i;
    }
    console.log(x);


};


const poorPigs = (buckets, minutesToDie, minutesToTest) => {
    let timesToDrink = Math.floor(minutesToTest / minutesToDie);

    let pigs = getBaseLog(timesToDrink + 1, buckets);
    return Math.ceil(pigs);
    //console.log(timesToDrink);

};

const getBaseLog = (x, y) => {
    return Math.log(y) / Math.log(x);
};


module.exports.run = run;