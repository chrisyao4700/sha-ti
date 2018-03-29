// Design a data structure that supports the following two operations:
//
//     void addWord(word)
// bool search(word)
// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.
//
//     For example:
//
//     addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
// Note:
//     You may assume that all words are consist of lowercase letters a-z.

const run = () => {
    let word = 'bad';
    let obj = Object.create(WordDictionary).createNew();
    obj.addWord(word);
    let param_2 = obj.search(word);
    console.log('Word:' + word + '/nRel:' + param_2);
};

//
// const WordDictionary = () => {
//
// };
//
// /**
//  * Adds a word into the data structure.
//  * @param {string} word
//  * @return {void}
//  */
// WordDictionary.prototype.addWord = (word) => {
//
// };
//
// /**
//  * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
//  * @param {string} word
//  * @return {boolean}
//  */
// WordDictionary.prototype.search = (word) => {
//     return true;
//
// };

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

module.exports.run = run;