/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(i = digits.length - 1; i >= 0; i--) {
        const sum = digits[i] + 1;

        if (sum > 9) {
            digits[i] = 0;
            if (i == 0) {
                digits.splice(0, 0, 1);
                return digits;
            } 
            continue;
        } 

        digits[i] = sum;
        return digits;
    }
};