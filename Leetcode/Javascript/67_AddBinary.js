/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length -1;
    let j = b.length -1;
    let carry = 0;
    let result = [];

    while (i >= 0 || j >= 0) {
        const digA = i >= 0 ? Number(a[i]) : 0;
        const digB = j >= 0 ? Number(b[j]) : 0;
        const sum = digA + digB + carry;

        i--;
        j--;

        if (sum < 2) {
            result.splice(0, 0, sum)
            carry = 0;
        } else if (sum == 3) {
            result.splice(0, 0, 1)
            carry = 1;
        } else {
            result.splice(0, 0, 0)
            carry = 1;
        }
    }

    if (carry == 1) result.splice(0, 0, 1);

    return result.join("");
};