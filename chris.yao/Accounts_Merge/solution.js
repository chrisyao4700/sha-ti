// Given a list accounts, each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name,
//     and the rest of the elements are emails representing emails of the account.
//
//     Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some email
// that is common to both accounts. Note that even if two accounts have the same name, they may belong to different people
// as people could have the same name. A person can have any number of accounts initially, but all of their accounts
// definitely have the same name.
//
//     After merging the accounts, return the accounts in the following format: the first element of each account is the name,
//     and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.
//
//     Example 1:
// Input:
//     accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"],
//         ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
// Output: [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
//     ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]
// Explanation:
//     The first and third John's are the same person as they have the common email "johnsmith@mail.com".
// The second John and Mary are different people as none of their email addresses are used by other accounts.
//     We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'],
//     ['John', 'johnnybravo@mail.com'],
//     ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
//     Note:
//
// The length of accounts will be in the range [1, 1000].
//     The length of accounts[i] will be in the range [1, 10].
//     The length of accounts[i][j] will be in the range [1, 30].

const run = () => {

    console.log(accountsMerge([["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]));


};

const accountsMerge = (accounts) => {
    let rel = [];
    accounts.sort((a,b) =>{
        return a[0].localeCompare(b[0]);
    });
    //console.log(accounts);
    for (let i = 0; i < accounts.length; i++) {

        let account = accounts[i];
        // console.log('===PRINTING ACCOUNT ===');
        // console.log(account);
        let flag = false;
        for (let j = 0; j < rel.length; j++) {
            let sa = rel[j];

            // console.log('===PRINTING SA ===');
            // console.log(sa);
            // console.log(sa[0]);
            // console.log(account[0]);
            if (sa[0] === account[0]) {
                let emails = sa.slice(1, sa.length);
                let e_emails = account.slice(1, account.length);
                // console.log(emails);
                // console.log(e_emails);
                let compared = checkTwoEmailList(e_emails, emails);
                // console.log('====COMPARED====');
                // console.log(compared);
                // console.log('====COMPARED====END');
                if (compared) {
                    flag = true;
                    rel.splice(j, 1, [sa[0]].concat(compared));
                    // console.log('===PRINTING REL ===');
                    // console.log(rel);
                    // console.log('===PRINTING REL === END');
                }
            }
        }
        if (flag === false){
            rel.push(account);
        }

        // console.log('===PRINTING REL ===');
        // console.log(rel);
        // console.log('===PRINTING REL === END');
    }
    return rel;

};

const checkTwoEmailList = (list1, list2) => {

    let flag = false;
    let map = {};
    for (let j = 0; j < list1.length; j++) {
        map[list1[j]] = 0;

    }
    for (let h = 0; h < list2.length; h++) {
        // console.log(list2[h]);
        if (list2[h] in map){
            flag = true;
        }else {
            map[list2[h]] = 0;
        }
    }
    // console.log(map);
    if (flag === true) {
        //console.log('I AM HERE');
        //console.log(rel);
        // rel  = Object.keys(map);

        // console.log('===========INPUT======');
        // console.log('======1=========');
        // console.log(list1);
        // console.log('======2=========');
        // console.log(list2);
        // console.log('=======REL=====');
        // console.log(rel);
        // console.log('=======END=======');

        // console.log(rel);
        return Object.keys(map).sort();
    } else {
        return null;
    }
};


module.exports.run = run;