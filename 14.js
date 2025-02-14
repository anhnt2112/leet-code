/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return strs.reduce((acc, ele, ind) => {
        const arr = ele.split("");
        if (ind == 0) return arr;
        const newAcc = [];
        for (let i = 0;i < acc.length;i++) {
            if (acc[i] === arr[i]) newAcc.push(acc[i]);
            else break;
        }
        return newAcc;
    }, []).join("");
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
