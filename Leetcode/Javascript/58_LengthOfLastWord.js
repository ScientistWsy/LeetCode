/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    let sTrim = s.trim();
    for (i = sTrim.length - 1; i >= 0; i--) {
        if(sTrim[i] == ' ') return count;
        count++;
    }
    return count;
};