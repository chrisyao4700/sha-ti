var fs = require('fs');
var path = require('path');
var root = require.resolve("./build.js").replace('\\build\\build.js','');
var allFiles = [];
allFiles = allFiles.concat(fromDir(root + '\\src\\controls','.tsx'));
allFiles = allFiles.concat(fromDir(root + '\\src\\controls','.ts'));
allFiles = allFiles.concat(fromDir(root + '\\src\\pages','.tsx'));
allFiles = allFiles.concat(fromDir(root + '\\src\\pages','.ts'));
allFiles = allFiles.concat(fromDir(root + '\\src\\shared','.tsx'));
allFiles = allFiles.concat(fromDir(root + '\\src\\shared','.ts'));
var kv = {};
var arr = [];
console.log(allFiles);
for (var i = 0, len = allFiles.length; i < len; i++) {
    var data = fs.readFileSync(`${allFiles[i]}`,'utf8');
    var locales = data.match(/csod.locales.get\(.*?\)/g);
    for (var i = 0, len = locales.length; i < len; i++) {
        var locale = locales[i].replace(/csod.locales.get\((.*?)\)/,'$1');
        var parts = locale.split(',');
        if (parts.length > 2) {
        } else {
            var key = parts[0].trim().replace(/"(.*?)"/,'$1').replace(/'(.*?)'/,'$1');
            var value = (parts[1] || parts[0]).trim().replace(/"(.*?)"/,'$1').replace(/'(.*?)'/,'$1');
            kv[key] = value;
        }
    }
}
for (var ky in kv) {
    arr.push({
        key: ky,
        value: kv[ky],
        statusId: "Translated",
        culture: "en-US"})
}
function fromDir(startPath,filter){
    var allFiles = [];
//console.log('Starting from dir '+startPath+'/');
    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }
    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            allFiles = allFiles.concat(fromDir(filename,filter)); //recurse
        }
        else if (filename.indexOf(filter)>=0) {
            allFiles.push(filename);
        }
    }
    return allFiles;
};