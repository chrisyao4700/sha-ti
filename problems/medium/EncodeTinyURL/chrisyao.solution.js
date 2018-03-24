const run = () => {
    let url = 'http://google.com';
    console.log(url === decode(encode(url)) ? 'SUCCESS' : 'WRONG');
};

let urls = {};
const tiny = 'http://tinyurl.com/';

const saveUrl = (index, url) => {
    urls.index = url;
};
const loadUrl = (index) => {
    return urls.index;
};

const encode = function (longUrl) {
    let index = urls.length + '';
    saveUrl(index, longUrl);

    return tiny+index;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function (shortUrl) {
    let eles = shortUrl.split('/');
    return loadUrl(eles[eles.length-1]);
};


module.exports.run = run;